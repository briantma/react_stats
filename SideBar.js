import React from 'react';

class SideBar extends React.Component{
	render(){
		return (
				<div className="sideBar col-md-2">
					<ul className="sideBar__list">
						<li onClick={this.props.showAll}>All</li>
						<li>Other</li>
						<li>Other</li>
						<li>Other</li>
					</ul>
				</div>
		)
	}
}

export default SideBar;