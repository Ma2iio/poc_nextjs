const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    webpack: (config, { dev }) => {
        if (dev) {
            config.module.rules.push({
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    // eslint options (if necessary)
                },
            })
        }
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|json|xml|ico)$/,
            loader: 'file-loader',
        })
        return config
    },
})
