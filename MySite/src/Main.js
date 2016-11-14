import React,{Component} from 'react';
import Icons from './Icons.js';
import App from './App.js';

const icons=[
	{"src":"http://assets.gold.xitu.io/images/app/icons/atom.svg"},
	{"src":"http://assets.gold.xitu.io/images/app/icons/android.svg"},
	{"src":"http://assets.gold.xitu.io/images/app/icons/angularjs.svg"},
	{"src":"http://assets.gold.xitu.io/images/app/icons/discover.svg"},
	{"src":"http://assets.gold.xitu.io/images/app/icons/github.svg"},
	{"src":"http://assets.gold.xitu.io/images/app/icons/ios.svg"},
	{"src":"http://assets.gold.xitu.io/images/app/icons/sketch.svg"}
]

class Main extends Component{
	render() {
		return (
			<div className="container">
				<Icons icons={icons}/>
				<App/>
			</div>
		);
	}
}

export default Main;