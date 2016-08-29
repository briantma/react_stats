import React from 'react';

class StudentList extends React.Component {
	constructor(){
		super();

	}

	render(){
		console.log("data", this.props)
		var tableRows = this.props.data.sort((prev,next) => {
			return next.time > prev.time;
		})
		.map(function(item, index){
			let roundTime = Math.round(item.time*10)/10 + ' min';
			return (<tr key={index}>
					<td>{item.student}</td>
					<td>{roundTime}</td>
			</tr>)
		})

			

		return(
			<div>
				<section>
					<div className="tableContainer">
						<table>
							<thead className="header">
								<tr>
									<th>Student Name<div>Student Name</div></th>
									<th>Total Time Spent<div>Total Time Spent</div></th>
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

export default StudentList;