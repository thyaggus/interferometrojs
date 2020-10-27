function interference() {

    const red = "#FF0000";
    const green = "#00FF00";
    const blue = "#0000FF";

    function buildImage() {
        let count = 0;
        let canvas = document.getElementById("myCanvas");
        let imagePiece = createImagePieces();
        setInterval(() => {
            imagePiece[count](canvas);
            count = count === imagePiece.length ? 0 : ++count;
        }, 1);
    }

    function drawSquare(color, canvas) {
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(20, 20, 150, 100);
        return ctx;
    }

    function drawSquareRed(canvas) {
        drawSquare(red, canvas)
    }

    function drawSquareGreen(canvas) {
        drawSquare(green, canvas)
    }

    function drawSquareBlue(canvas) {
        drawSquare(blue, canvas);
    }

    function createImagePieces() {
        let imageArray = [];
        imageArray.push(drawSquareRed);
        imageArray.push(drawSquareGreen);
        imageArray.push(drawSquareBlue);
        return imageArray;
    }

    return {
        buildImage: buildImage
    };
}