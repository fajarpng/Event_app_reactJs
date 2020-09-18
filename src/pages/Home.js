import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';

import { Form, Button, Col, Row, Image } from 'react-bootstrap';

//import Components
import { TopNavbar } from '../component/Navbar';

//import Action Redux
import { addEvent, clear } from '../redux/actions/events';

import schadule from '../assets/image/scd.jpg';

class Home extends Component {
	constructor(props) {
        super(props);
         this.state = {
         	title: '',
         	location: '',
         	note: '',
         	participants: '',
         	date: ''
         };
    }

    isValid = e => {
    	e.preventDefault();

    	const { title, location, note, participants, date } = this.state

    	if (title !== '' && location !== '' && note !== '' && participants !== ''&& date !== '') {
    		if (note.length > 50) {
    			this.onSubmit()
    		} else {
	    		Swal.fire({
	                icon: 'error',
	                title: 'Oops...',
	                text: 'Note harus lebih dari 50 karakter',
	                })
	    	}
    	} else {
    		Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Pastikan semua form terisi',
                })
    	}
    }

    onSubmit = () => {
    	const body = this.state
    	const url = ''

    	this.props.addEvent({url, body})
    }

    componentDidUpdate() {
		const {msg, isError} = this.props.events

		if(msg !== null){
            if(isError){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: msg,
                  })
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: msg,
                })
            }
        this.props.clear()
        }
    	//this.isValid();
    }

	render() {
		// const { isFilled } = this.state
		const isFilled = false
		return(
			<>
				<TopNavbar/>
				<div className="p-5 mt-5">
					<Form className="w-100 h-100  d-flex justify-content-center"  onSubmit={this.isValid}>
						<Row>
							<Col className="d-flex align-items-center">
								<Image src={schadule} fluid />
							</Col>
							<Col xs={12} lg={6} className='d-flex flex-column justify-content-between bg-light p-3'>
								<h3>Add Event</h3>
								<Row className="mt-2">
									<Col xs={12} lg={6} className="mb-3">
										<Form.Label>Title</Form.Label>
								    	<Form.Control
								    		type="text"
								    		onChange={(e) => this.setState({ title: e.target.value })}
								    		/>
									</Col>
									<Col xs={12} lg={6} className="mb-3">
										<Form.Label>Location</Form.Label>
								    	<Form.Control
								    		type="text"
								    		onChange={(e) => this.setState({ location: e.target.value })}
								    		/>
									</Col>
								</Row>
								<Row>
									<Col xs={12} lg={6} className="mb-3">
										<Form.Label>Date</Form.Label>
								    	<Form.Control
								    		type="date"
								    		onChange={(e) => this.setState({ date: e.target.value })}
								    		/>
									</Col>
									<Col xs={12} lg={6} className="mb-3">
										<Form.Label>Participants</Form.Label>
								    	<Form.Control
								    		type="text"
								    		onChange={(e) => this.setState({ participants: e.target.value })}
								    		/>
								    	<Form.Text className="text-muted">
								      		Gunakan tanda koma "," jika participant lebih dari satu.
								    	</Form.Text>
									</Col>
								</Row>

								<Form.Group className="mb-2">
									<Form.Label>Note</Form.Label>
								    <Form.Control
								    	as="textarea"
								    	rows={3}
								    	onChange={(e) => this.setState({ note: e.target.value })}
								    	/>
								    <Form.Text className="text-muted">
								      	Note harus lebih dari 50 karakter.
								    </Form.Text>
								</Form.Group>

								<Form.File label="Image" className="mb-3"/>

							  	<Button
							  		variant="primary"
							  		type="submit"
							  		disabled={isFilled}>
							    	Submit
							  	</Button>
							</Col>
						</Row>
					</Form>
				</div>
			</>
			)
	}
}

const mapStateToProps = state => ({
    events: state.data
})

const mapDispatchToProps = { addEvent, clear }
export default connect(mapStateToProps, mapDispatchToProps)(Home)