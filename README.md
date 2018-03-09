    1.npm init -y  //创建package.json
	2.npm install webpack webpack-dev-server --save-dev
	//js的loader加载器还有es6转es5，如果react开发需要下载 babel-preset-react
	3.npm install babel-core babel-loader babel-preset-env babel-preset-react --save-dev
	//babel相关插件配置
	4.
	//配置图片和字体图标
	4.npm install --save-dev url-loader 
	//css的loader转换器和style的loader转换器
	5.npm install --save-dev css-loader style-loader
	////因为sass-loader依赖于node-sass，所以还要安装node-sass
	6.npm install –save-dev sass-loader node-sasspostcss-loader autoprefixer

	
   

## package.json ##
	npm start	

    color：使用颜色，有利于找出关键信息，只能在控制台中使用
	hot：启用热替换属性
	info：在控制台输出信息，默认输出
	open：运行命令之后自动打开浏览器
	progress：将运行进度输出到控制台，只可以使用控制台