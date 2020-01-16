(function() {
	var _width = $('body').width() / 100;
	var num=0;
	var cxs = new Image();
	cxs.src = "img/1.png";

	var dhj = new Image();
	dhj.src = "img/2.png";

	var jb = new Image();
	jb.src = "img/3.png";

	var msb = new Image();
	msb.src = "img/4.png";

	var ryb = new Image();
	ryb.src = "img/6.png";

	var zad = new Image();
	zad.src = "img/5.png";

	var moneyEnum = {
		cxs: {
			image: cxs,
			speed: speed,
			value: 10,
			width: _width * 10.8,
			height: _width * 9.6,

		},
		dhj: {
			image: dhj,
			speed: speed,
			value: 0,
			width: _width * 12.4,
			height: _width * 12.4,
		},
		jb: {
			image: jb,
			speed: speed,
			value: 10,
			width: _width * 13.4666,
			height: _width * 14.6666,
		},
		msb: {
			image: msb,
			speed: speed,
			value: 20,
			width: _width * 12.2666,
			height: _width * 9.4666,
		},
		ryb: {
			image: ryb,
			speed: speed,
			value: 10,
			width: _width * 12.9333,
			height: _width * 9.0666,
		},
		zad: {
			image: zad,
			speed: speed,
			value: -10,
			width: _width * 5.333,
			height: _width * 14.9333,
		}
	};
	var money = function(type) {
		this.x = Math.random() * ($('body').width() - moneyEnum[type].width - 50) + 50;
		this.y = 0;
		this.type = type;
		this.status = 0; //0正在掉落，1落进盆，2没接住    
	}

	money.prototype.draw = function() {
		if(this.status == 0) {
			context.drawImage(moneyEnum[this.type].image, this.x, this.y, moneyEnum[this.type].width, moneyEnum[this.type].height);
		}
	}

	money.prototype.drop = function() {		
		if(isEnd) {
			return false;
		};  
		this.y += moneyEnum[this.type].speed;
		if(this.status == 0 && this.y + moneyEnum[this.type].height >= $('body').height() - wanHeight && this.y + moneyEnum[this.type].height <= $('body').height() && this.x + moneyEnum[this.type].width >= body.mainwan.x && this.x <= body.mainwan.x + wanWidth) { //判断是否调入盆中
			this.status = 1;
			if(moneyEnum[this.type].value !== 0) {
				num++;		
				var _left=this.x;
				if(moneyEnum[this.type].value > 0) {
					$('.jia').append('<span class="shu'+num+'" style="left:'+_left+'px;top:'+(wanY - 50)+'px;">+'+moneyEnum[this.type].value+'</span>');
				} else {
					$('.jia').append('<span class="shu'+num+'" style="left:'+_left+'px;top:'+(wanY - 50)+'px;">'+moneyEnum[this.type].value+'</span>');
				};
				$('.shu'+num).animate({
					'top':(wanY - 100)
				},1000,function(){
					$(this).remove();
				});
				score += moneyEnum[this.type].value; //记录总分数
				$('.score').attr('score',score).text(score + '分');
			};
		} else if(this.y >= $('body').height()) {
			this.status = 2;
		};
		this.draw();
	}

	window.money = money;
})();