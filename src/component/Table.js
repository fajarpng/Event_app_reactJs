import React from 'react';
import { Table, Row, Col } from 'react-bootstrap';

export const Tables = props => {

	const { data } = props;

	// const _date = date.slice(0,10)

	return(
		<Table bordered hover responsive="sm" className="mt-3">
		  	<thead>
			    <tr className="bg-primary text-white text-center">
				    <th style={{width : '18rem'}}>Title</th>
				    <th style={{width : '18rem'}}>Location</th>
				    <th style={{width : '10rem'}}>Date</th>
				    <th style={{width : '18rem'}}>Participants</th>
				    <th style={{width : '20rem'}}>Note</th>
			    </tr>
		  	</thead>
		  	<tbody>
		  	{data.map((val) => (
		  		<tr>
				    <td>{val.title}</td>
				    <td>{val.location}</td>
				    <td>
				    	<Date data={val.date}/>
				    </td>
				    <td>
				    	<Participant data={val.participants}/>
				    </td>
				    <td>{val.note}</td>
			    </tr>
                ))}
			    
		  	</tbody>
		</Table>
		)
}

const Date = props => {

	const { data } = props;
	const date = data ? data.slice(0,10) : "-";

	return (
		<p>{date}</p>
		)
}

const Participant = props => {

	const { data } = props;
	const participant = data ? data.split(",") : [];

	return (
		<Row>
			{participant.map((val) => ( 
				<Col xs={12}>
				 	<p>{val}</p>
				</Col>
				))}
		</Row>
		)
}