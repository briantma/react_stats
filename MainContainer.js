import React from 'react';
import TicketList from './TicketList';
import StudentList from './StudentList';
import WeeklyList from './WeeklyList';
import EducatorList	from './EducatorList';
import { VictoryBar, VictoryChart } from 'victory';
const WEEK_LENGTH = 604800000;
//These will have to come from courses somehow
var start_date = new Date() - (3 * WEEK_LENGTH);
var end_date = start_date + (10*WEEK_LENGTH);

class MainContainer extends React.Component {
	
	render(){
		var tickets = this.props.tickets;
		
		//var tickets = this.props.tickets.concat([tickets]); 
		//console.log("tickets main container", tickets);
		var studentArr = [];
		tickets.map(function(item, index){
			var time_spent = item.status == "CLOSED" ? item.timeSpent/60000 : 0;
			if (index == 0){
				studentArr[0] = {student: item.student_name, time: time_spent};
			} else {
				for (var i = 0; i < studentArr.length; i ++){
					if (studentArr[i].student == item.student_name){
						console.log("adding time", studentArr)
						studentArr[i].time += time_spent;
						return ;
					}
					// } else if (i == studentArr.length - 1){
					// 	console.log("hit the end", studentArr)
					// 	studentArr.push({student:item.student_name, time: time_spent})
					// }
				}
				studentArr.push({student:item.student_name, time: time_spent})
			}
		});
		// console.log("studentArr", studentArr);
		var weekArr = [];
		for(var i = 0; i < 10;i++){
			weekArr.push({time:0,tickets:[]})
		}
		tickets.map((ticket, index) => {
			let week = Math.floor((ticket.openedAt - start_date) / WEEK_LENGTH);
			let time_spent = ticket.status == "CLOSED" ? parseInt(ticket.timeSpent) : 0;
			console.log(week)
			weekArr[week].tickets.push(ticket);
			weekArr[week].time += parseInt(time_spent);
		})

		var educatorArr = [];
		tickets.map((ticket,index) => {
			let search = educatorArr.filter((educator) => {
				return educator.name == ticket.educator_name;
			})
			let time_spent = ticket.status == "CLOSED" ? ticket.timeSpent : 0;
			let found = false;
			for (var i = 0;i < educatorArr.length;i++){
				if(educatorArr[i].name === ticket.educator_name){
					found = true;
					educatorArr[i].time_spent += parseInt(time_spent);
					educatorArr[i].tickets.push(ticket)
				} 
			}
			if(!found){
				educatorArr.push({
					name:ticket.educator_name,
					time_spent:time_spent,
					tickets:[]
				})
				educatorArr[educatorArr.length - 1].tickets.push(ticket)
			}
		})
		console.log('edu',educatorArr)

		let list;
		if (this.props.view == "All"){
			list = <TicketList tickets={tickets}/>
		} else if (this.props.view == "Students"){
			list = <StudentList data={studentArr}/>
		} else if (this.props.view == "Weekly"){
			list = <WeeklyList data={weekArr} />
		} else if (this.props.view == "Educators"){
			list = <EducatorList data={educatorArr} />
		}
		return (
			<div className="mainContainer">
				{list}
			</div>
		);
	}
}

export default MainContainer;

				// <VictoryChart>
				// 	 <VictoryBar horizontal
				// 		data = {dataArr}

						
				// 	/>
					
				// </VictoryChart>