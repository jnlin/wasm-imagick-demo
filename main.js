
var wasmMagick = require("@imagemagick/magick-wasm");
var fs = require("fs")

wasmMagick.initializeImageMagick().then(async () => {
    var buf = fs.readFileSync("/Users/jnlin/git/wasm-imagick-demo/test.jpg");
    var view = new Uint8Array(buf);

    wasmMagick.ImageMagick.read(view, (image) => {
        console.log(image.width);
    });

    /*
    wasmMagick.ImageMagick.readFromCanvas(canvasElmt, (image) => {

    });
    */
});

