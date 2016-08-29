import React from 'react';

class Modal extends React.Component{
	constructor(){
		super();
		this.state = {
			isOpen: false
		}
	}
	componentWillReceiveProps(nextProps){
		console.log("receiving props!", nextProps.isOpen)
		this.setState({isOpen: nextProps.isOpen})
		console.log("updated state", this.state)
	}
	modalClass(){
		var name = "ticketModal"
		if (!this.state.isOpen){
			name += " hiddenModal";
		}
		
		return name;
	}
	closeModal(){
		console.log("close modal");
		this.setState({isOpen: false});
	}
	dontClose(event){
		event.stopPropagation();
	}
	render(){
		var educator_name = this.props.data.educator_name ? this.props.data.educator_name : "UNASSIGNED";
		var time_spent = this.props.data.status == "CLOSED" ? this.props.data.timeSpent/60000 + "min" : "N/A";
		var openedAt = new Date(parseInt(this.props.data.openedAt));
		var startedAt = new Date(parseInt(this.props.data.startedAt));
		var closedAt = new Date(parseInt(this.props.data.closedAt));
		console.log(this.props.data.openedAt);
		return (
			<div className={this.modalClass()} onClick={() => this.closeModal()}>
				<div className="modalContent" onClick={(event) => this.dontClose(event)}>
					<h2>Ticket ID: {this.props.data.id} <i className="fa fa-close pull-right" onClick={() => this.closeModal()}></i></h2>
					<table>
						<tbody>
							<tr>
								<td>Student</td>
								<td>{this.props.data.student_name}</td>
							</tr>
							<tr>
								<td>Educator</td>
								<td>{educator_name}</td>
							</tr>
							<tr>
								<td>Status</td>
								<td>{this.props.data.status}</td>
							</tr>
							<tr>
								<td>Question</td>
								<td>{this.props.data.question}</td>
							</tr>
							<tr>
								<td>URL</td>
								<td>{this.props.data.url}</td>
							</tr>
							<tr>
								<td>Comment</td>
								<td>{this.props.data.comment}</td>
							</tr>
							<tr>
								<td>Time Spent</td>
								<td>{time_spent}</td>
							</tr>
							<tr>
								<td>Opened</td>
								<td>{openedAt.toDateString()}</td>
							</tr>
							<tr>
								<td>Started</td>
								<td>{startedAt.toDateString()}</td>
							</tr>
							<tr>
								<td>Closed</td>
								<td>{closedAt.toDateString()}</td>
							</tr>
							<tr>
								<td>Updated</td>
								<td>{this.props.data.updatedAt}</td>
							</tr>
						</tbody>

					</table>
				</div>
			</div>
		)
	}
}

export default Modal;