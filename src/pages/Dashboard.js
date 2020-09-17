import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Col, Row, Form, Button } from 'react-bootstrap';

//import Components
import { TopNavbar } from '../component/Navbar';
import { Cards } from '../component/Card';

//import Action Redux
import { getEvent } from '../redux/actions/events';

class Dashboard extends Component {
	constructor(props) {
        super(props);
         this.state = {
         };
   }

   getEvents = () => {
      const url = '?limit=6&page=1';
      this.props.getEvent({url})
   }

   componentDidMount() {
      this.getEvents()
   }

	render() {
		const { data } = this.props.events

      const lists = data ? data : []

		return(
			<>
				<TopNavbar/>
				<div className="p-3 mt-5">
               <Row>
                  <Col xs={12} lg={6}>
                     <Form className="mt-2 mb-2 w-100 d-flex flex-row align-items-center">
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="primary">Search</Button>
                     </Form>
                  </Col>
               </Row>
					<Row>
						{lists.map((val) => ( 
                     <Col xs={12} lg={4}  className="mt-3">
                     	<Cards data={val}/>
                     </Col>
                     ))}
					</Row>
				</div>
			</>
			)
	}
}

const mapStateToProps = state => ({
    events: state.data
})

const mapDispatchToProps = { getEvent }
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)