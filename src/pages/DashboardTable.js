import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Col, Row, Form, Button } from 'react-bootstrap';

//import Components
import { TopNavbar } from '../component/Navbar';
import { Tables } from '../component/Table';

//import Action Redux
import { getEvent } from '../redux/actions/events';

class Dashboard extends Component {
	constructor(props) {
        super(props);
         this.state = {
            search: '',
            page: 1,
            isFrist: true,
            isLast: false,
         };
   }

   getEvents = param => {

      const url = `?limit=6&${param}`;

      this.props.getEvent({url});

      const { pageInfo } = this.props.events.data

      if (pageInfo.page <= 1) {
         this.setState({ isFrist : true})
      } else {
         this.setState({ isFrist : false})
      }
      if (pageInfo.page >= pageInfo.totalPage){
         this.setState({ isLast : true})
      } else {
         this.setState({ isLast : false})
      }
   }

   onSearch = e => {
      e.preventDefault();

      const { search, page } = this.state
      const param = `page=${page}&search=${search}`

      this.getEvents(param)
   }

   getNext = () => {

      const { search, page } = this.state
      const param = `page=${page+1}&search=${search}`

      this.getEvents(param)
   }

   getPrev = () => {

      const { search, page } = this.state
      const param = `page=${page-1}&search=${search}`

      this.getEvents(param)
   }

   componentDidMount() {
      this.getEvents()
   }

	render() {
      const { data } = this.props.events.data
		const { isFrist, isLast } = this.state

      const lists = data ? data : []

		return(
			<>
				<TopNavbar/>
				<div className="p-3 mt-5">
               <Row>
                  <Col xs={12} lg={6}>
                     <Form className="mt-2 mb-2 w-100 d-flex flex-row" onSubmit={this.onSearch}>
                        <Form.Control
                           type="text"
                           placeholder="Search"
                           className="mr-sm-2"
                           onChange={ e => this.setState({search: e.target.value, page: 1}) }/>
                        <Button variant="primary" type="submit">Search</Button>
                     </Form>
                  </Col>
               </Row>

               <Tables data={lists}/>

               <div className='d-flex flex-row justify-cotent-between mt-5 mb-4'>
                  <Button
                     variant="primary"
                     disabled={isFrist}
                     onClick={ this.getPrev }
                     >
                     Seblumnya
                  </Button>
                  <Button
                     variant="primary"
                     disabled={isLast}
                     onClick={ this.getNext }
                     >
                     Selanjutnya
                  </Button>
               </div>
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