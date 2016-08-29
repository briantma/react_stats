import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import MainContainer from './MainContainer';

class App extends React.Component {
	constructor(){
		super();
		this.componentWillMount = this.componentWillMount.bind(this);
		this.showAll = this.showAll.bind(this);
		this.state = {
			tickets: []
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
		// console.log(this);
		// this.setState({test: "test"});
		// console.log("state",this.state.test);
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
    render() {

      return (
      	<div>
      		<NavBar/>
		    <div className="container">     
		        <div className="row">
		        	<SideBar
			         	
			        />
			        <MainContainer
			        	tickets = {this.state.tickets}
			        />
		        </div>
	        </div> 
	    </div>
      );
    }
}

export default App;