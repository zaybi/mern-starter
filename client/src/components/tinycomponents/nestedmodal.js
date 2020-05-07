import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const NestedModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Login Please</ModalHeader>
        <ModalBody>

          <form class>
          <div className="form-group">
            <label >Email address:</label>
             <input type="email" className="form-control" placeholder="Enter email" id="email"/>
          </div>
          <div className="form-group">
            <label >Password:</label>
             <input type="email" className="form-control" placeholder="Enter email" id="email"/>
          </div>
            

          </form>




          <br />
          <Button color="success" size="sm" onClick={toggleNested}>Donot Have an account?</Button>
          <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Sign Up for free!!!</ModalHeader>
            <ModalBody>
            <form class>
          <div className="form-group">
            <label >First Name:</label>
             <input type="email" className="form-control" placeholder="Enter email" id="email"/>
          </div>
          <div className="form-group">
            <label >Last Name:</label>
             <input type="email" className="form-control" placeholder="Enter email" id="email"/>
          </div>
          <div className="form-group">
            <label >Email Address:</label>
             <input type="email" className="form-control" placeholder="Enter email" id="email"/>
          </div>
          <div className="form-group">
            <label >Password:</label>
             <input type="email" className="form-control" placeholder="Enter email" id="email"/>
          </div>
          <div className="form-group">
            <label >Confirm Password:</label>
             <input type="email" className="form-control" placeholder="Enter email" id="email"/>
          </div>
            

          </form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>Sign up</Button>{' '}
              <Button color="secondary" onClick={toggleAll}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Login</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default NestedModal;