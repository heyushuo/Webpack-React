import React from 'react'
import ReactDom from 'react-dom'
import "./css/common.css"
import "./css/common.scss"
import "./css/font.css"
import Haha from './haha.js'
export default class Root extends React.Component{
	render(){
		return (
			<div>
				<Haha></Haha>
				<span className="icon-search" ></span>
				<div className="box">
					<span>何玉1212硕</span>
				</div>
				<h1>迎来到我配置的w11ebpack-react,我的名字是12312</h1>
				
			</div>
		)
	}
}

ReactDom.render(
	<Root />,
	document.getElementById("app")
)

