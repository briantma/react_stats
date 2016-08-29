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
		this.showWeekly = this.showWeekly.bind(this);
		this.showEducators = this.showEducators.bind(this);
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
	showWeekly(){
		this.setState({view:"Weekly"});
	}
	showEducators(){
		this.setState({view:"Educators"})
	}
    render() {

      return (
      	<div className="dashboard">
  			<SideBar
	         	showAll = {() => this.showAll()}
	         	showStudents = {() => this.showStudents()}
	         	showWeekly = {() => this.showWeekly()}
	         	showEducators = {() => this.showEducators()}
	        />
	        <MainContainer
	        	tickets = {this.state.tickets}
	        	view = {this.state.view}
	        />
	    </div>
      );
    }
}

export default App;