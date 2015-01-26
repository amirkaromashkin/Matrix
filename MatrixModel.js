function Column(rowCount) {

    var rowCount = rowCount;
    var values = new Array();
    var leadIndex = -1;
    var symbolsCount = -1;

    this.subscribe = function (speed) {
        symbolsCount = Math.floor(Math.random() * MaxSymbolsInColumn / 2 + MaxSymbolsInColumn / 2);
        setInterval(function () {
            leadIndex = (leadIndex + 1) % rowCount;

            // new char in column
            values[leadIndex] = String.fromCharCode(0x30A0 + Math.random() * (0x30FF - 0x30A0 + 1));

            // let's clear the tail
            var newNullIndex = ((rowCount + (leadIndex - symbolsCount)) % rowCount);
            values[newNullIndex] = null;

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
            var speed = Math.floor(Math.random() * 4 * MaxNewSymbolDela / 5 + MaxNewSymbolDela / 5);
            c.subscribe(speed);
            columns.push(c);
        }
    }

    this.getColumns = function () {
        return columns;
    }
}