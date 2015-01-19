function Column(rowCount) {

    var rowCount = rowCount;
    var values = new Array();
    var leadIndex = -1;

    this.subscribe = function (speed) {
        setInterval(function () {
            leadIndex = (leadIndex + 1) % rowCount;
            values[leadIndex] = getRandomChar();
        }, speed);
    }

    this.getValues = function () {
        return values;
    }
}

function Matrix(columnsCount, rowCount) {
    var columns = new Array();

    Matrix.prototype.start = function () {
        for (var i = 0; i < columnsCount; i += 1) {
            var c = new Column(rowCount);
            c.subscribe(Math.random() * 100);
            columns.push(c);
        }
    }

    Matrix.prototype.getColumns = function () {
        return columns;
    }
}