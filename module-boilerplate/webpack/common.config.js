/**
 * Common shared Webpack configuration for both
 * "development" and "production" execution.
 */
const path = require('path');
const sourceDirectory = 'src';

module.exports = {
    module: {
        rules: [{
                test: /\.(js|jsx|ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|ico|eot|ttf|otf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
        alias: {
            '@assets': path.join(process.cwd(), sourceDirectory, 'assets/'),
            '@components': path.join(process.cwd(), sourceDirectory, 'components/'),
            '@contexts': path.join(process.cwd(), sourceDirectory, 'contexts/'),
            '@exceptions': path.join(process.cwd(), sourceDirectory, 'exceptions/'),
            '@services': path.join(process.cwd(), sourceDirectory, 'services/'),
            '@typings': path.join(process.cwd(), sourceDirectory, 'typings/'),
            '@utils': path.join(process.cwd(), sourceDirectory, 'utils/'),
            '@config$': path.join(process.cwd(), sourceDirectory, 'config.ts'),
            '@constants$': path.join(process.cwd(), sourceDirectory, 'constants.ts'),
            '@routes$': path.join(process.cwd(), sourceDirectory, 'routes.ts'),
            '@router$': path.join(process.cwd(), sourceDirectory, 'router.ts')
        }
    },
    plugins: []
};