(function () {
    var wanImage = new Image();
    wanImage.src = "img/wan.png";

    var wan = function () {
        this.x = 200;
    }
    wan.prototype.draw = function () {
        context.drawImage(wanImage, this.x, wanY, wanWidth, wanHeight);
    }
    
    window.wan = wan;
})();