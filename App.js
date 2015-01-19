/**
 * Created by Amirka on 1/8/2015.
 */

var matrix = null;
var cellSize = 30;
const canvasSelector = "#canvas";

var PIXEL_RATIO = (function () {
    var ctx = document.createElement("canvas").getContext("2d"),
        dpr = window.devicePixelRatio || 1,
        bsr = ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio || 1;

    return dpr / bsr;
})();

// runMatrix();

$(window).load(function () {
    initPage();
});

$(window).resize(function () {
    initPage();
});

window.setInterval(function () {
    const canvas = $(canvasSelector)[0];
    var ctx = getHDPIContext(canvas);
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    matrix = create2DArray(canvas.width / cellSize, canvas.height / cellSize);

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            matrix[i][j] = getRandomChar();
        }
    }

    ctx.fillStyle = "green"
    ctx.font = "20px Times New Roman"
    var matrixAr = matrix;//.columns;

    /*for (var i = 0; i < matrixAr.length; i += 1) {
        for (var j = 0; j < matrixAr[0].values.length; j += 1) {
            var text = matrix[i].values[j];
            ctx.fillText(text, cellSize * i, cellSize * j);
        }
    }*/
    for (var i = 0; i < matrixAr.length; i += 1) {
        for (var j = 0; j < matrixAr[0].length; j += 1) {
            var text = matrix[i][j];
            ctx.fillText(text, cellSize * i, cellSize * j);
        }
    }
}, 100);

function runMatrix() {
    const canvas = $(canvasSelector)[0];

    var ctx = getHDPIContext(canvas);
    matrix = new Matrix(ctx);

    matrix.start();
}

function initCanvasSize() {
    var canvas = $(canvasSelector)[0];
    var divQuery = $("#mainDiv");

    canvas.width = divQuery.width() - 10;
    canvas.height = divQuery.height() - 10;
    return canvas;
}

function create2DArray(w, h) {
    var iMax = w;
    var jMax = h;
    var f = new Array();

    for (var i = 0; i < iMax; i++) {
        f[i] = new Array();
        for (var j = 0; j < jMax; j++) {
            f[i][j] = 0;
        }
    }

    return f;
}

function createArray(size) {
    var f = new Array();

    for (var i = 0; i < size; i++) {
        f[i] = 0;
    }

    return f;
}

function getHDPIContext(can, ratio) {
    if (!ratio) {
        ratio = PIXEL_RATIO;
    }

    var context = can.getContext("2d");

    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    return context;
}

function initPage() {
    initCanvasSize();
    matrix = create2DArray(
        $(canvasSelector).width() / cellSize,
        $(canvasSelector).height() / cellSize);
}
