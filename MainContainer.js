import React from 'react';
import TicketList from './TicketList';

class MainContainer extends React.Component {

	render(){
		console.log("props",this.props.tickets)
		return (
			<div className="mainContainer col-md-10">
				<TicketList tickets={this.props.tickets}/>
			</div>
		);
	}
}

export default MainContainer;