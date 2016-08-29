import React from 'react';
import TicketList from './TicketList';
import { VictoryBar, VictoryChart } from 'victory';

class MainContainer extends React.Component {
	
	render(){
		var tickets = this.props.tickets;
		//var tickets = this.props.tickets.concat([tickets]); 
		var dataObj = {};
		//console.log("tickets main container", tickets);
		var dataArr = [{x:1, y: 60, label: "a"},{x:2, y: 20, label: "b"},{x:3, y: 70, label: "c"}];
		// tickets.map(function(item, index){
		// 	var time_spent = item.status == "CLOSED" ? item.timeSpent/60000 : 0;
		// 	if (index == 0){
		// 		dataArr[0] = {student: item.student_name, time: time_spent};
		// 	} else {
		// 		for (var i = 0; i < dataArr.length; i ++){
		// 			if (dataArr[i].student == item.student_name){
		// 				console.log("adding time", dataArr)
		// 				dataArr[i].time += time_spent;
		// 				return ;
		// 			}
		// 			// } else if (i == dataArr.length - 1){
		// 			// 	console.log("hit the end", dataArr)
		// 			// 	dataArr.push({student:item.student_name, time: time_spent})
		// 			// }
		// 		}
		// 		dataArr.push({student:item.student_name, time: time_spent})
		// 	}
		// });
		// console.log("dataArr", dataArr);





		return (
			<div className="mainContainer col-md-10">
				<TicketList tickets={tickets}/>

				<VictoryChart>
					 <VictoryBar horizontal
						data = {dataArr}

						
					/>
					
				</VictoryChart>
			</div>
		);
	}
}

export default MainContainer;