function Column(rowCount) {

    var rowCount = rowCount;
    var values = new Array();
    var leadIndex = -1;

    this.subscribe = function (speed) {
        setInterval(function () {
            leadIndex = (leadIndex + 1) % rowCount;
            values[leadIndex] = String.fromCharCode(0x30A0 + Math.random() * (0x30FF - 0x30A0 + 1));
        }, speed);
    }

    this.getValues = function () {
        return values;
    }
}

function MatrixModel(columnsCount, rowCount) {
    var columns = new Array();

    this.start = function () {
        for (var i = 0; i < columnsCount; i += 1) {
            var c = new Column(rowCount);
            c.subscribe(Math.random() * 100);
            columns.push(c);
        }
    }

    this.getColumns = function () {
        return columns;
    }
}