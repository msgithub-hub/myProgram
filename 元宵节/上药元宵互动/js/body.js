(function () {
    var Body = function () {
        var that = this;
        this.moneyList = [];
        this.mainwan = new wan();
        var is_zhong=false;
        var canvas = document.getElementById('canvas');
        canvas.addEventListener('touchstart', touch, false);
        canvas.addEventListener('touchmove', touch, false); 
        canvas.addEventListener('touchend', touch, false); 
		var touchx;
        function touch(event) {
            var event = event || window.event;
            switch (event.type) {
                case "touchstart":
                    touchx = event.touches[0].clientX;
                    break;                 
                case "touchend":
                    touchx = event.changedTouches[0].clientX;                
                    if(touchx<=0){
                    	touchx=0;
                    };
                    if(touchx>=canvasWidth - wanWidth){
                    	touchx=canvasWidth - wanWidth;
                    };
                    that.mainwan.x = touchx;
                    break;
                case "touchmove":
                    touchx = event.targetTouches[0].clientX;      
                    if(touchx<=0){
                    	touchx=0;
                    };
                    if(touchx>=canvasWidth - wanWidth){
                    	touchx=canvasWidth - wanWidth;
                    };
                    if(!isEnd) {
					   that.mainwan.x = touchx;
				    };              
                    break;
            }
        }
    }

    Body.prototype.clear = function () {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
    }

    Body.prototype.addMoney = function (x) {
        var random = Math.floor(Math.random() * 6);
        if(isEnd){
        	return false;
        };
        if (random == 0) {
            this.moneyList.push(new money("cxs"));
        } else if (random == 1) {
            this.moneyList.push(new money("dhj"));
        } else if (random == 2) {
            this.moneyList.push(new money("jb"));
        } else if (random == 3) {
            this.moneyList.push(new money("msb"));
        } else if (random == 4) {
            this.moneyList.push(new money("ryb"));
        } else if (random == 5) {
            this.moneyList.push(new money("zad"));
        }
    }

    Body.prototype.draw = function () {
        this.moneyList.forEach(function (item) {
            item.drop();
        });
        this.mainwan.draw();
    }

    window.Body = Body;
})();