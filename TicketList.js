import React from 'react';
import ReactList from 'react-list'

class TicketList extends React.Component {
	render(){
		console.log("ticketList", this.props.tickets);
		var tableRows;
		if (this.props.tickets.length > 0){
			tableRows = this.props.tickets.map(function(item){
				var educatorName = item.educator_name ? item.educator_name : "UNASSIGNED";
				return (
					<tr>
						<td>{item.id}</td>
						<td>{item.student_name}</td>
						<td>{educatorName}</td>
						<td>{item.status}</td>
					</tr>
				)
			})
		}
		return(
			<table className="table table-striped table-condensed table-hover">
				<tbody>
					<tr>
						<th>ID</th>
						<th>Student</th>
						<th>Educator</th>
						<th>Status</th>
					</tr>
					{tableRows}
				</tbody>
			</table>
		)
	}
}


export default TicketList;