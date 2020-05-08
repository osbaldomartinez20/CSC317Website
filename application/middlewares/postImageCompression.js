//The code found in this file helps with the compression of the images found in
//path ../public/images/uploads/
//Code from https://www.npmjs.com/package/compress-images
//Modification to code by: @Osbaldo Martinez
var compress_images = require('compress-images'); 
var INPUT_path, OUTPUT_path;

const imageCompression = (req, res, next) => {
    INPUT_path = './public/images/uploads/**/*.{jpg,JPG,jpeg,JPEG,png,svg}';
    OUTPUT_path = './public/images/uploads_compressed/';

    compress_images(INPUT_path, OUTPUT_path, { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } },
        { png: { engine: 'pngquant', command: ['--quality=20-50'] } },
        { svg: { engine: 'svgo', command: '--multipass' } }, function (error, completed, statistic) {
            console.log('-------------');
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log('-------------');
        });
    
        next();
}

module.exports = imageCompression;