import React from 'react'
import ReactDom from 'react-dom'
import "./css/common.scss"
import "./css/font.css"
export default class Root extends React.Component{
	render(){
		return (
			<div className="box">
				<span className="icon-search"></span>
				<h1>手把手教你用webpack3搭建自己的react项目</h1>
				<img src={require("./img/kebi.jpg")} /> 
			</div>
		)
	}
}

ReactDom.render(
	<Root />,
	document.getElementById("app")
)

