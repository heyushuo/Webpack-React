var path = require('path');//node提供的一块方法
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.jsx',
    output: {
    	path: path.resolve(__dirname, 'dist'),//打包后文件的输出路径
    	filename: 'bundle.js',//输出文件名字
  	},
  	devtool: 'eval-source-map',//开发环境使用，有利于看自己程序打印具体在那个组件里
  	 devServer:{
//      contentBase:'./dist',  contentBase可以不用指定 因为用了这个HtmlWebpackPlugin插件
        historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，任意的 404 响应都可能需要被替代为 index.html
        inline: true, //实时刷新
        host: "192.168.8.100",
        proxy:{//代理属性
            "/api":{
                target:'http://localhost:9000/',
                pathRewrite: {"^/api":""}
               	/* 因为在 ajax 的 url 中加了前缀 '/api'，而原本的接口是没有这个前缀的
				所以需要通过 pathRewrite 来重写地址，将前缀 '/api' 转为 '/'*/
            }
        }
    },
    module: {
        rules: [
        	 //3 编译es6和编译jsx和js
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            //配置图片
			{
				test:/\.(jpg|png|gif|jpeg|bmp)$/,
				use:{
					loader:'url-loader',
					options: {
						limit: 8192    //限制图片的大小
					}
				}
			},
			//配置字体图标
			{
				test:/\.(png|woff|woff2|svg|ttf|eot)$/,
				use:{
					loader:'url-loader',
					options: {
						limit: 10000,  //限制大小10k
					}
				}
			},
			//配置css
			{
		        test: /\.css$/,
		        use: [ 
		        'style-loader',
		         {loader: 'css-loader',options: {importLoaders: 1}},
		         {loader: 'postcss-loader',options:{ident:"postcss",plugins:[require("autoprefixer")("last 100 versions")]}}
		        ]
	      	},
			//配置scss  执行顺序是从右往走的这个顺序是不能改变的
			{
		       test: /\.scss$/,
		       use: [ 
		       'style-loader',
		         {loader: 'css-loader',options: {importLoaders: 2}},
		         {loader: 'postcss-loader',options:{ident:"postcss",plugins:[require("autoprefixer")("last 100 versions")]}},
		         'sass-loader'
				]
		    }
        ]
    },
    // html 模板插件
    plugins: [
	    // webpack 内置的 banner-plugin
	    new webpack.BannerPlugin("Copyright by https://github.com/heyushuo."),
    	//利用webpack-html-plugin这个插件它可以生成html文件到指定的目录下，这样就可以不用再根目录下建立页面文件了，直接在src下建立模板文件，
    	new HtmlWebpackPlugin({
	        template: __dirname + '/src/index.template.html'  //默认会在dist路径下生成index.html并引用所有的静态资源
	    })
    ]
    

}
