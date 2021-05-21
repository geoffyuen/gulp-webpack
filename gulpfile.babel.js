import { src, dest, watch, series, parallel } from 'gulp';
import yargs from 'yargs';
import webpack from 'webpack-stream';
import named from 'vinyl-named';

const PRODUCTION = yargs.argv.prod;

export const scripts = () => {
	// return src(['src/js/bundle.js', 'src/js/admin.js'])
	return src(['src/js/*.js'])
		.pipe(named())
		.pipe(webpack({
			module: {
				rules: [
					{
						test: /\.js$/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: []
							}
						}
					}
				]
			},
			mode: PRODUCTION ? 'production' : 'development',
			// devtool: !PRODUCTION ? 'inline-source-map' : false,
			devtool: 'source-map',
			output: {
				filename: '[name].js'
			},
			externals: {
				jquery: 'jQuery'
			},
		}))
		.pipe(dest('dist/js'));
}

export const watchForChanges = () => {
	watch('src/js/**/*.js', series(scripts));
}
export const dev = series(parallel(scripts), watchForChanges);
export const build = series(parallel(scripts));
export default dev;