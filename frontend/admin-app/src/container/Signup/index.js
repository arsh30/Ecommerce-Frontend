import React from 'react'
// import PropTypes from 'prop-types'
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import  Input  from "../../components/UI/input";
// import {Input} from "../../components/UI/input/index"

const Signup = props => {
    return (
        <div>
           
           <Layout>
      <Container>
        <Row style= {{marginTop:'50px'}}>
          <Col md={{ span: 6, offset: 3 }}>
            {/* md is medium column apply some space on both sides ie 3 nad span is generally of 6 size */}
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Input
                                            label="First Name"
                                            placeholder="First Name"
                                            value=""
                                            type="text"
                                            onChange= {() => {}}
                                        />

                                        
                                    </Col>

                                    <Col md={6}>
                                        <Input
                                            label="Last Name"
                                            placeholder="Last Name"
                                            value=""
                                            type="text"
                                            onChange= {() => {}}
                                        />
                                    
                                        
                                    </Col>
                                    </Row>

                                        <Input
                                            label="Email"
                                            placeholder="Email"
                                            value=""
                                            type="email"
                                            onChange= {() => {}}
                                        />
                                        
                                        <Input
                                            label="Password"
                                            placeholder="Password"
                                            value=""
                                            type="Password"
                                            onChange= {() => {}}
                                        />
                                    
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
            
        </div>
    )
}

export default Signup
