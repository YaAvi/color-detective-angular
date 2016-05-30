module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/www/js/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {test: /www.*\.js$/, loaders: ['ng-annotate?single_quotes=true']}
        ]
    },
    plugins: []
};