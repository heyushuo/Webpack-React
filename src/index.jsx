import React from 'react'
import ReactDom from 'react-dom'
import "./css/common.css"
export default class Root extends React.Component{
	render(){
		return (
			<div>
				<h1>欢迎来到我配置的webpack-react</h1>
			</div>
		)
	}
}

ReactDom.render(
	<Root />,
	document.getElementById("app")
)