import React from 'react';

class StudentList extends React.Component {
	constructor(){
		super();

	}

	render(){
		console.log("data", this.props)
		var tableRows = this.props.data.map(function(item, index){
			return (<tr key={index}>
					<td>{item.student}</td>
					<td>{item.time}</td>
			</tr>)
		})

			

		return(
			<div>
				STUDENTLIST
				<table>
					<thead>
						<tr>
							<th>
								Student Name
							</th>
							<th>
								Total Time Spent
							</th>
						</tr>
					</thead>
					<tbody>
						{tableRows}
					</tbody>
				</table>
			</div>
		)
	}
}

export default StudentList;