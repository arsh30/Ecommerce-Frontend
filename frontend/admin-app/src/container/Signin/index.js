import PropTypes from "prop-types";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/input";

const index = (props) => {
  return (
    <Layout>
      <Container>
        <Row style= {{marginTop:'50px'}}>
          <Col md={{ span: 6, offset: 3 }}>
            {/* md is medium column apply some space on both sides ie 3 nad span is generally of 6 size */}
            <Form>
                                     <Input
                                            label="Email"
                                            placeholder="Email"
                                            value=""
                                            type="Email"
                                            onChange= {() => {}}
                                        />

                                        <Input
                                            label="Pasword"
                                            placeholder="Pasword"
                                            value=""
                                            type="Pasword"
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
  );
};

export default index;
