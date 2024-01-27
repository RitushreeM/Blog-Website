import React from "react";
import { Col,Row, Container, Form, FormGroup, Card,Input,Button, CardHeader, CardBody, Label } from "reactstrap";
import './Login.css';

const Login = () => {
    return(

        <Container className="main_container">
            <Row>
                <Col sm={{size:6,offset:3}}>
                <Card color="primary" inverse>

                <CardHeader className="heading">

                    <h3>Login Here!</h3>
                </CardHeader>
                <CardBody>

                <Form className="form">
                    <FormGroup className="form_item">
                        <Label for="email">Email ID: </Label>
                            <Input className="text_box" 
                              type="email"
                              placeholder="Enter your email"
                              
                              id="email"
                        />
                    </FormGroup>
                    <FormGroup className="form_item">
                        <Label for="password">Password: </Label>
                            <Input className="text_box"
                              type="password"
                              placeholder="Enter your password"
                              id="password"
                        />
                    </FormGroup>
                    <Container className="buttons">
                          
                          <Button className="btn" outline color="light">Login</Button>
                          <Button color="secondary" type="reset" className= "btn">Back</Button>

                        </Container>
                </Form>

                </CardBody>

                </Card>
                

                </Col>
            </Row>
        </Container>
        
    );
};
export default Login;