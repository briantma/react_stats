import React from 'react';

class SideBar extends React.Component{
	// getInitialState(){
 //    	return {
 //      		selected:''
 //    	}
 //  	}
  	constructor(){
  		super();
  		this.setActive = this.setActive.bind(this);
  		this.state = {
  			selected: 'All'
  		}
  	}
  	setActive(value){
  		this.setState({selected:value});
  		if (value == "All"){
  			this.props.showAll();
  		} else if (value == "Students"){
        this.props.showStudents();
      } else if (value == "Weekly"){
        this.props.showWeekly();
      } else if (value == "Educators"){
        this.props.showEducators();
      }
  		console.log("selected", this.state.selected)
  	}
  	isActive(value){
    	return 'sideBar__list__item '+ ((value===this.state.selected) ?'sideBar__list__item__active': '');
  	}
	render(){
		return (
				<div className="sideBar">
          <h2>Ticket Stats</h2>
					<ul className="sideBar__list">
						<li className={this.isActive('All')} onClick={() => this.setActive('All')}>All</li>
						<li className={this.isActive('Students')} onClick={() => this.setActive('Students')}>Students</li>
            <li className={this.isActive('Weekly')} onClick={() => this.setActive('Weekly')}>Weekly</li>
            <li className={this.isActive('Educators')} onClick={() => this.setActive('Educators')}>Educators</li>
					</ul>
				</div>
		)
	}
}


export default SideBar;