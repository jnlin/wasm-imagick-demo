
var wasmMagick = require("@imagemagick/magick-wasm");
const { MagickFormat } = require("@imagemagick/magick-wasm/magick-format");
var fs = require("fs")

wasmMagick.initializeImageMagick().then(async () => {
    var buf = fs.readFileSync("/Users/jnlin/git/wasm-imagick-demo/test.jpg");
    var view = new Uint8Array(buf);

    wasmMagick.ImageMagick.read(view, (image) => {
        console.log(image.width);
        image.resize(image.width / 2, image.height / 2);
        image.write((buf) => {
            fs.writeFileSync("/Users/jnlin/git/wasm-imagick-demo/test.png", buf)
        }, MagickFormat.Png)
    });

    /*
    wasmMagick.ImageMagick.readFromCanvas(canvasElmt, (image) => {

    });
    */
});

