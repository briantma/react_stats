import React from 'react';

class WeeklyList extends React.Component {
	constructor(){
		super();
	}
	render(){
		console.log("data", this.props.data)
		var tableRows = this.props.data.map((week,index) => {
			let time_spent = Math.round(week.time/60000* 10)/10 + ' mins';
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{time_spent}</td>
					<td>{week.tickets.length}</td>
				</tr>
			)

		})
		return(
			<div>
				<section>
					<div className="tableContainer">
						<table>
							<thead className="header">
								<tr>
									<th>Week #<div>Week #</div></th>
									<th>Total Time Spent<div>Total Time Spent</div></th>
									<th># of Tickets<div># of Tickets</div></th>
								</tr>
							</thead>
							<tbody>
								{tableRows}
							</tbody>
						</table>
					</div>
				</section>
			</div>
		)
	}
}


export	default	WeeklyList;