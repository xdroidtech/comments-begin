import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css'

//1
// class App extends React.Component {
	// constructor(){
		// super();
		// this.state = {
			// strg: 'state string',
			// num: 5,
			// currentEvent: '---'
		// }
		// this.update = this.update.bind(this)
	// }
	// update(e)
	// {
		// this.setState({currentEvent: e.type})
	// }
	// render(){
		// return (
				// <div>
					// <textarea 
					// onKeyPress={this.update}
					// onCopy={this.update}
					// onCut={this.update}
					// onPaste={this.update}
					// cols="30" rows="10"/>
					// <h1>{this.state.currentEvent}</h1>
				// </div>
	// )
// }
	
// }

//2
// class App extends Component {
	// constructor(){
		// super();
			// this.state = {a: ''}
	// }
	// update(){
		// this.setState({a: ReactDOM.findDOMNode(this.a).value,b: ReactDOM.findDOMNode(this.refs.b).value})
	// }
	// render(){
		// return (
			// <div>
				// <Input ref={component => this.a = component} update={this.update.bind(this)}>
				// </Input>{this.state.a}
				// <hr />
				// <Input ref="b" update={this.update.bind(this)}>
				// </Input>{this.state.b}
				// </div>
		// )
	// }
// }
//2B
// class Input extends React.Component{
	// render(){
		// return <input type="text" onChange={this.props.update} />
	// }
// }

// const Button = (props) => <button>{props.children}</button>
// const Title = (props) => <h1>Titles: {props.text}</h1>

// Title.propTypes = {
	// text(props, propName, component){
		// if(!(propName in props)){
			// return new Error('missing ${propName}')
		// }
		 // if(props[propName].length < 6){
			// return new Error('${propName} is to long')
		 // }
	// }
// }


// class Heart extends React.Component{
	// render(){
		// return <span>I &hearts; </span>
	// }
// }

//3
// class App extends Component {
	// constructor(){
		// super();
		
		// this.state = {
			// val: 0
		// }
		
		// this.update = this.update.bind(this)
	// }
	// update(){
		// this.setState({val: this.state.val + 1})
	// }
	// componentWillMount(){
		// console.log('Will Mount')
		// this.setState({m:5})
	// }
	// render(){
		// console.log('render');
		// return  <button onClick={this.update}>{this.state.val * this.state.m}</button>
	// }
	// componentDidMount(){
		// console.log('Mounted')
		// this.inc = setInterval(this.update, 800)
	// }
	// componentWillUnmount(){
		// console.log('Unmounting')
		// clearInterval(this.inc)
	// }
// }

// class Wrapper extends Component{
	// mount()
	// {
		// ReactDOM.render(<App />, document.getElementById('a'))
	// }
	// unmount(){
		// ReactDOM.unmountComponentAtNode(document.getElementById('a'))
	// }
	// render(){
		// return(
			// <div>
				// <button onClick={this.mount.bind(this)}>Mount</button>
				// <button onClick={this.unmount.bind(this)}>Unmount</button>
				// <div id="a"></div>
			// </div>
		// )
	// }
// }

//4
// class App extends Component{
// 	constructor(){
// 		super();
// 		this.state = {
// 			increasing: false
// 		}
// 	}
// 	componentWillReceiveProps(nextProps){
// 		this.setState({
// 			increasing: nextProps.val > this.props.val
// 		})
// 	}
// 	shouldComponentUpdate(nextProps, nextState){
// 		return nextProps.val % 5 === 0;
// 	}
// 	update(){
// 		ReactDOM.render(<App  val={this.props.val+1}/>, document.getElementById('root'))
// 	}
// 	render(){
// 		console.log(this.state.increasing)
// 		return <button onClick={this.update.bind(this)}>{this.props.val}</button>
// 	}
// 	componentDidUpdate(){
// 		console.log('componentDidUpdate, previous props: ${prevProps.val}')
// 	}
// }
// App.defaultProps = {
// 	val: 5
// }

 // 5
 // Error, cannot '.map' items(unreferenced)
class App extends React.Component{
	constructor(){
		super();
		this.state ={items:[] }
	}
	componentWillMount() 
	{
		fetch( 'http://swapi.co/api/people/?format=json')
		.then( response => response.json())
		.then( ({result: items}) =>  this.setState({items}) )
		.catch((error) => {
        console.error(error+"can't fetch");
      	})
		console.log('mounted')
	}
	render(){
		let items = this.state.items
			return (
			<div>
			{items.map(item => <h4 key={item.name}>{item.name}</h4>)}
			</div>
		)
	}
}



// App.defaultProps = {
// 	items: React.PropTypes.string.isRequired
// }

//6
// const HOC = (InnerComponent) => class extends React.Component
// {
// 	constructor(){
// 		super();
// 		this.state = {count:0}
// 	}
// 	update(){
// 		this.setState({count: this.state.count + 1})
// 	}
// 	componentWillMount(){
// 		console.log('will mount')
// 	}
// 	render(){
// 		return(
// 			<InnerComponent 
// 				{...this.props}
// 				{...this.state}
// 				update = {this.update.bind(this)}
// 			/>
// 		)
// 	}
// }
// class App extends Component{
// 	render(){
// 		return(
// 			<div>
// 				<Button>Button</Button>
// 				<hr/>
// 				<LHOC>Label</LHOC>
// 			</div>
// 		)
// 	}
// }

// const Button = HOC((props) => <button onClick={props.update}>{props.children}- {props.count}</button>)

// class Label extends Component{
// 	componentWillMount(){
// 		console.log('label will mount')
// 	}
// 	render(){
// 		return(
// 			<label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
// 		)
// 	}
// }

// const LHOC = HOC(Label)

// class App extends Component{
// 	constructor(){
// 		super();
// 		this.state = {
// 			input: '/* add your jsx here */',
// 			output: '',
// 			err:''
// 		}
// 	}
// 	update(e){
// 		let code = e.target.value;
// 		try{
// 			this.setState({output: window.Babel.transform(code, {presets: ['es2015', 'react']}).code, err: ''})
// 		}catch(err){
// 			this.setState({err: err.message})
// 		}
// 	}
// 	render(){
// 		return(
// 			<div>
// 				<header>{this.state.err}</header>
// 				<div className="container">
// 					<textarea onChange={this.update.bind(this)}
// 					defaultValue={this.state.input}/>
// 					<pre>
// 						{this.state.output}
// 					</pre>
// 				</div>
// 			</div>
// 		)
// 	}
// }

export default App;

