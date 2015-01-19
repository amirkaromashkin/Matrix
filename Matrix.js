function Column(speed) {
    var speed = speed;

    this.values = new Array();
    var leadIndex = -1;

    Column.prototype.subscribe = function () {
        window.setInterval(function () {
            leadIndex++;
            this.values[leadIndex] = getRandomChar();
        }, speed);
    }
}

function Matrix(ctx) {
    var size = 30;
    var canvas = ctx.canvas;
    this.columns = new Array();

    Matrix.prototype.start = function() {
        for (var i = 0; i < ctx.canvas.width / size; i += 1) {
            var c = new Column(Math.random() * 300);
            c.subscribe();
            this.columns[0] = c;
        }
    }
}