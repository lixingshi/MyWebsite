import React, {Component} from 'react';
import './App.css';

function AppHead(props){

	return (
		<article >
		<a href="http://gold.xitu.io">
		<img src="http://assets.gold.xitu.io/images/app/logo.png" className="logo"/>
		</a>
		<div className="title">
			<a href="http://gold.xitu.io" className="text-blue">蓝翔
			</a>
		</div>
		<div className="description">学挖掘机技术找蓝翔</div>		
		</article>
	);
}

function Download(props){
	return (
		<div className="download">
		<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.daimajia.gold">
			<button className="hero-button">下载<strong>v3.7.5</strong></button>
		</a>
		<div className="qr-wrapper hide-when-small">
		<img src="http://assets.gold.xitu.io/images/app/qr.svg" className="qr-active"/>
		<img src="http://assets.gold.xitu.io/images/android/yingyongbao-80.png" 
			style={{top: "-35px",left: "40px"}} className="qr"/>
		</div>
		</div>
	);
}

function Footer(props){
	return (
		<article className="text-bug">
			<div className="text-muted"><small>1、修复 Android 7.0相关的Bug，优化性能 2、修复文章详情页模糊的Bug  
			</small>
			</div>
			<div className="text-muted"><small>3、修复挖掘机潜水功能，</small></div>
		
		<div className="screenshot" >
			<img src="http://assets.gold.xitu.io/images/app/android.png"/>
		</div>
		</article>
	);
}

class App extends Component{
	render() {
		return (
			<div className="AppName">
			<AppHead/>
			<Download/>	
			<Footer/>
			</div>
		);
	}
}

export default App;



