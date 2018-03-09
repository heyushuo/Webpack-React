var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'app/index.jsx'),
    output: {
        filename: "bundle.js"
    },
    resolve:{
        extensions:['', '.js','.jsx']
    },

    module: {
        loaders: [
        	 //3 编译es6和编译jsx和js
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
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
						limit: 8192  //限制大小10k
					}
				}
			},
			//配置css
			{
		        test: /\.css$/,
		        use: [ 'style-loader', 'css-loader','postcss']
	      	}
			//配置scss  执行顺序是从右往走的这个顺序是不能改变的
			{
		       test: /\.scss$/,
		       use: [ 'style-loader', 'css-loader','postcss','sass-loader' ]
		    }
            /*{ test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.less$/, exclude: /node_modules/, loader: 'style!css!postcss!less' },
            { test: /\.css$/, exclude: /node_modules/, loader: 'style!css!postcss' },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k*/
           
			
        ]
    },
    //添加css3兼容后缀
 	postcss: [
	    require('autoprefixer')
  	]

}
