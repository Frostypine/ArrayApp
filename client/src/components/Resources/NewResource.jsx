import React, { useState } from "react";

import { Container, Modal,Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
//import {useSelector} from 'react-redux'
//import { selectResources } from "../../state/resourceSlice";
import { postResource } from "../../actions/resourceActions";

//import './Resource.css'
import '../Components.css'




function NewResource() {

    const [show, setShow] = useState(false);
    const handleShow = () => {
      setShow(true); 
    }
    const handleClose = () => setShow(false);

  const dispatch = useDispatch();
  //const resources = useSelector(selectResources);
  const [name, setName] = useState("");
  const [whatfor, setFor] = useState("");
  const [url, setURL] = useState("");
  const [id, setID] = useState("");

  const submitResource= (e) => {
    e.preventDefault();
    if (name === "") return alert("name cannot be empty");
    if (whatfor === "") return alert("for cannot be empty");
    if (url === "") return alert("url cannot be empty");
    //if (id !anumber) return alert("id has to be a number"); 
    //let resource = resources.find((e) => e.name === name);
    //if (resource) return alert("name already exists");
    dispatch(
      postResource({
        name: name,
        whatfor: whatfor,
        url: url,
        id: id,
      })
    );
  handleClose(); 
};

  return (
    <Container className="resource-sign-up">
      <Modal show={show} onHide={handleClose}width="100rem">

      <Form
        onSubmit={(e) => {
          submitResource(e);
        }}
      >   <br/>  <br/>
  &nbsp; New Resource 
        <Form.Group className="mb-3" >
          <InputGroup>
            <FormControl
              className="name-input"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
                  <FormControl
              className="id-input"
             // id="inlineFormInputGroupUsername"
              placeholder="id"
              value={id}
              onChange={(e) => {
                setID(e.target.value);
              }}
            />
          </InputGroup>
        </Form.Group>
        {/* <br /> */}
        <Form.Group className="mb-3" >
          <Form.Control
            className="for-input"
            placeholder="for"
            value={whatfor}
            onChange={(e) => {
              setFor(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Control as="textarea"
            className="url-input"
            placeholder="url"
            value={url}
            onChange={(e) => {
              setURL(e.target.value);
            }}
          />
        </Form.Group>
   
        <Button variant="green" type="submit"
       style={{height:'3rem', background: '',borderRadius:'15%', border: `3px solid white`,
        }}
        >
          submit
        </Button>
      </Form>
   </Modal>
   <br/><br/>
   <Button onClick={handleShow}>New Resource</Button>
      
    </Container>
  );
}

export default NewResource;
