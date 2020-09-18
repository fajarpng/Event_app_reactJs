import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

import defImg from '../assets/image/scd.jpg';

export const Cards = props => {

	const { note, image, title, date, participants, location } = props.data;

	const img = image ? image : defImg;
	const _date = date.slice(0,10)

	return(
		<Card className="shadow">
			<div className="imageWraper">
		  		<Card.Img src={img} variant="top" className="card-image-top"/>
			</div>
		  	<Card.Body>
		  		<Card.Text className="">{location}</Card.Text>
			    <Card.Title>{title}</Card.Title>
			    <Card.Text className="text-muted">{_date}</Card.Text>
			    <Participant data={participants}/>
		  	</Card.Body>
		  	<Card.Body className="bg-light">
			    <Card.Title>note : </Card.Title>
			    <Card.Text>{note}</Card.Text>
		  	</Card.Body>
		</Card>
		)
}

const Participant = props => {

	const { data } = props;

	const participant = data ? data.split(",") : [];

	return (
		<Row>
			{participant.map((val) => ( 
				<Col xs={12} lg={4}  className="mt-3">
				 	<p>{val}</p>
				</Col>
				))}
		</Row>
		)
}