const path = require('path');

module.exports = {
    mode: "development",
    entry: "./index",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        
    },
    resolve:{
        extensions: ['.js']
    }
}