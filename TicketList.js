import React from 'react';
import Modal from './Modal';

class TicketList extends React.Component {
	constructor(){
		super();
		this.getTicket = this.getTicket.bind(this);
		this.state = {
			ticket: {},
			open: false
		}
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	getTicket(id){
		$.ajax({
			url: "http://localhost:3000/api/ticket/" + id,
			dataType: 'jsonp',
			type: 'GET',
			success: function(data){
				console.log("data", data);
				this.setState({ticket: data});
				console.log("state", this.state.ticket)
				this.openModal();
			}.bind(this),
			error: function(xhr, status, err){
				console.log("err", err);
			}	
		})

	}
	openModal(){
		this.setState({open:true});
		console.log("open true", this.state)
	}
	closeModal(){
		this.setState({open:false});
	}
	render(){
		console.log("ticketList", this.props.tickets);
		var tableRows;
		if (this.props.tickets.length > 0){
			tableRows = this.props.tickets.map((item) => {
				var educatorName = item.educator_name ? item.educator_name : "UNASSIGNED";
				var time_spent = item.status == "CLOSED" ? item.timeSpent/60000 + "min" : "N/A";
				return (
					<tr key={item.id} onClick={() => this.getTicket(item.id)}>
						<td>{item.id}</td>
						<td>{item.student_name}</td>
						<td>{educatorName}</td>
						<td>{item.status}</td>
						<td>{time_spent}</td>
					</tr>
				)
			})
		}
		return(
			<div>
				<section>
					<div className="tableContainer">
						<table>
							<thead>
								<tr className="header">
									<th>ID<div>ID</div></th>
									<th>Student<div>Student</div></th>
									<th>Educator<div>Educator</div></th>
									<th>Status<div>Status</div></th>
									<th>Time Spent<div>Time Spent</div></th>
								</tr>
							</thead>
							<tbody>
								{tableRows}
							</tbody>
						</table>
					</div>
				</section>
				<Modal 
					isOpen={this.state.open}
					data={this.state.ticket}
				/>
			</div>
		)
	}
}


export default TicketList;