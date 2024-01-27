import React from "react";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Row,Col, Container, Form, FormGroup, Input, Label } from "reactstrap";
import './SignUp.css';

const SignUp = () => {

        const [data,setData]=useState({
           name:'',
           email:'',
           username:'',
           password:'',
           
        })

        // submitting the form

      const submitForm=(event)=>{
        event.preventDefault()
        console.log(data);
      }

        const [error,setError]=useState({
         errors:{},
         isError:false
        })

        useEffect(() =>{
          console.log(data);
        },[data])
        

        const handleChange=(event,property)=>{
          setData({...data,[property]:event.target.value})
        }


  return(
  <Container className="main_container">
        <Row>
         <Col sm={{size:6, offset:3}}>
         
            <Card color="dark" inverse >
                <CardHeader className="heading">
                    <h3>Sign Up Here</h3>
                </CardHeader>
                <CardBody>
                    <Form className="form" onSubmit={submitForm} >

                      {/* Name field */}

                        <FormGroup className="form_item">
                            <Label for="name">Name</Label>
                            <Input className="text_box"
                              type="text"
                              placeholder="Enter Your Name"
                              id="name"
                               onChange={(e)=>handleChange(e ,'name')}
                               
                            />
                        </FormGroup>
                         
                          {/*email field */}

                        <FormGroup className="form_item">
                            <Label for="email">Email</Label>
                            <Input className="text_box" 
                              type="email"
                              placeholder="Enter Your Email"
                               id="email"
                               onChange={(e)=>handleChange(e ,'email')}
                              
                            />
                            </FormGroup>
                             <FormGroup className="form_item">
                            <Label for="username">Username</Label>
                            <Input className="text_box"
                              type="text"
                              placeholder="Enter Your Username"
                              id="username"
                              onChange={(e)=>handleChange(e ,'username')}
                              
                            />
                        
                         
                        </FormGroup>
                        {/*  password field */}
                        <FormGroup className="form_item">
                            <Label for="password">Password</Label>
                            <Input className="text_box"
                              type="password"
                              placeholder="Enter Your Password"
                               id="password"
                               onChange={(e)=>handleChange(e ,'password')}
                               
                            />
                        </FormGroup>
                        <Container className="buttons">
                          
                          <Button className="btn" outline color="light">Submit</Button>
                          <Button color="secondary" type="reset" className= "btn">Reset</Button>

                        </Container>
                    </Form>
                </CardBody>
            </Card>
        
         </Col>

        </Row>


   </Container>
    );
};
export default SignUp;

<a href='/login' className="btn" id="login_form">Login</a>