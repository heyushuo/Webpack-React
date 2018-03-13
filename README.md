> webpack.config.js 为开发环境的配置

----------

> webpack.dev.js   打包时用的配置即为生产环境

	


	npm start  //开启项目
	npm run build //打包项目
	
	
## 具体介绍请看博客： ##
[手把手教你用webpack3搭建react项目(开发环境和生产环境)(一)](http://http://www.cnblogs.com/heyushuo/p/8552983.html)
----------
[手把手教你用webpack3搭建react项目(开发环境和生产环境)(二)](http://www.cnblogs.com/heyushuo/p/8558228.html)
----------


	1.npm init -y  //创建package.json
	//webpack4.0以上需要下载 npm install webpack-cli --save-dev
	2.npm install webpack webpack-dev-server --save-dev
	//js的loader加载器还有es6转es5，如果react开发需要下载 babel-preset-react
	3.npm install babel-core babel-loader babel-preset-env babel-preset-react --save-dev
	//babel相关插件配置
	4.npm install --save-dev babel-plugin-transform-runtime babel-preset-stage-0 
	//配置图片和字体图标
	4.npm install --save-dev url-loader 
	//css的loader转换器和style的loader转换器
	5.npm install --save-dev css-loader style-loader
	////因为sass-loader依赖于node-sass，所以还要安装node-sass
	6.npm install --save-dev sass-loader node-sass postcss-loader autoprefixer postcss
	//模板插件
	8.npm install --save-dev html-webpack-plugin
	//js和css分开打包
	9.npm install --save-dev extract-text-webpack-plugin
	//压缩js需要用到插件
	10.npm install --save-dev uglifyjs-webpack-plugin
	//打包前需要删除文件夹
	11.npm install rimraf --save-dev

	
   

## package.json ##
	npm start	

    color：使用颜色，有利于找出关键信息，只能在控制台中使用
	hot：启用热替换属性
	info：在控制台输出信息，默认输出
	open：运行命令之后自动打开浏览器
	progress：将运行进度输出到控制台，只可以使用控制台