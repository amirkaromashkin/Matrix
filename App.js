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

    ctx.fillStyle = "green"
    ctx.font = "20px Times New Roman"
    var matrixColumns = matrix.getColumns();

    for (var i = 0; i < matrixColumns.length; i += 1) {
        for (var j = 0; j < matrixColumns[i].getValues().length; j += 1) {
            var text = matrixColumns[i].getValues()[j];
            if (text != null) {
                ctx.fillText(text, cellSize * i, cellSize * j);
            }
        }
    }
}, 100);

function runMatrix() {
    var $canvas = $(canvasSelector);

    matrix = new MatrixModel(
        Math.floor($canvas.width() / cellSize),
        Math.floor($canvas.height() / cellSize));

    matrix.start();
}

function initCanvasSize() {
    var canvas = $(canvasSelector)[0];
    var divQuery = $("#mainDiv");

    canvas.width = divQuery.width() - 10;
    canvas.height = divQuery.height() - 10;
    return canvas;
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
    runMatrix();
}
