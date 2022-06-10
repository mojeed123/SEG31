import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Form,Button, Dropdown} from 'react-bootstrap';

import './App.css'
import Navbar from './Navi'
import { Link } from 'react-router-dom';


function Appointment() { 
  let [name, setName] = useState("")
    let [email, setEmail] = useState("")

  
 
  return (
    <div>
      
      <Navbar></Navbar>
        <div className="appoint">
          <h1 className='header1'>APPOINTMENTS</h1>
        <Container >
            <h1>SERVICES</h1>
            <Container>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Cuts
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">BUZZ CUT</Dropdown.Item>
              <Dropdown.Item href="#/action-2">CLEAN CUT</Dropdown.Item>
              <Dropdown.Item href="#/action-3">CLASSIC SHAVE/ BEARD TRIM</Dropdown.Item>
            </Dropdown.Menu>
            
          </Dropdown>
            </Container>
            <Container>
              <h1>EXTRAS</h1>
              <Container>
              <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              OTHERS
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">SHAMPOO</Dropdown.Item>
              <Dropdown.Item href="#/action-2">SCALP TREATMENT</Dropdown.Item>
              
            </Dropdown.Menu>
            
          </Dropdown>

              </Container>
            </Container>
            <Container>
              <h1>TEAM</h1>
              <Container>
              <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              TEAM
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">John</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Jackson</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Ronaldo</Dropdown.Item>
            </Dropdown.Menu>
            
          </Dropdown>


              </Container>
            </Container>
            
            

          
            

            
                

            
              
              

                
              
              
              
              
              <Container>
              <h3>Date and Time</h3>
                <Container>
                <div className='innertext'>
                <div>
                  <h1 className='divs'>Sunday -2pm</h1>
                  <button>Select</button>
                </div>
                <div>
                <h1 className='divs'>Monday -6pm</h1>
                <button>Select</button>
                </div>
                <div> 
                  <h1 className='divs'>Tuesday - 5pm</h1>
                  <button>Select</button>
                </div>
                <div> 
                  <h1 className='divs'>Tuesday - 11am</h1>
                  <button>Select</button>
                </div>
                <div> 
                  <h1 className='divs'>Wednesday - Walk- in</h1>
                  <button>Select</button>
                </div>
                <div> 
                  <h1 className='divs'>Thursday - 4pm</h1>
                  <button>Select</button>
                </div>
                </div>

               
              </Container>
              </Container>
            <div>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="Name" placeholder="Enter Name" value= {name}  onChange={(e)=> setName(e.target.value)}/>
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" value= {email}  onChange={(e)=> setEmail(e.target.value)}/>
            </Form.Group>
            
            
            <Link to="/confirmation" > <Button variant="primary" type="submit"  >Submit</Button></Link>
            
              
           
          </Form>
            </div>
        </Container>
        </div>
    </div>
  )
  
}
export const name = "";
export default Appointment