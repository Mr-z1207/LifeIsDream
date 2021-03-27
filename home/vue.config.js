// 配置别名使用node里面的path模块
const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
	// 选项...

	// webpack 配置进行更细粒度的修改
	chainWebpack: (config)=>{
		//修改文件引入自定义路径（配置别名）
		config.resolve.alias
			.set('@', resolve('src'))
			.set('style', resolve('src/assets/style'))
			.set('components', resolve('src/components'))
			.set('views', resolve('src/views'))
    },

	// css: {
	// 	loaderOptions: {
	// 		less: {
	// 			// 这里的选项会传递给 css-loader
	// 		}
	// 	}
	// },

	pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                //全局引入的less文件（不能使用别名路径）
                path.resolve('./src/assets/style/common.less'),
            ]
        }
    }
}