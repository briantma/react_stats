import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import MainContainer from './MainContainer';

class App extends React.Component {
	constructor(){
		super();
		this.componentWillMount = this.componentWillMount.bind(this);
		this.showAll = this.showAll.bind(this);
		this.showStudents = this.showStudents.bind(this);
		this.state = {
			tickets: [],
			view: "All"
		}
	}
	componentWillMount(){
		$.ajax({
			url: "http://localhost:3000/api/tickets/all",
			dataType: 'jsonp',
			type: 'GET',
			success: function(data){
				console.log("data", data);
				this.setState({tickets: data});
				console.log("state", this.state.tickets)
			}.bind(this),
			error: function(xhr, status, err){
				console.log("err", err);
			}	
		})
	}
	showAll(){
		this.setState({view: "All"});
		// $.ajax({
		// 	url: "http://localhost:3000/api/tickets/all",
		// 	dataType: 'jsonp',
		// 	type: 'GET',
		// 	success: function(data){
		// 		console.log("data", data);
		// 		this.setState({tickets: data});
		// 		console.log("state", this.state.tickets)
		// 	}.bind(this),
		// 	error: function(xhr, status, err){
		// 		console.log("err", err);
		// 	}	
		// })
	}
	showStudents(){
		this.setState({view:"Students"});
	}
    render() {

      return (
      	<div>
      		<NavBar/>
		    <div className="container">     
		        <div className="row">
		        	<SideBar
			         	showAll = {() => this.showAll()}
			         	showStudents = {() => this.showStudents()}
			        />
			        <MainContainer
			        	tickets = {this.state.tickets}
			        	view = {this.state.view}
			        />
		        </div>
	        </div> 
	    </div>
      );
    }
}

export default App;