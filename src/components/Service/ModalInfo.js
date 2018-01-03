import React from "react";
import { Modal, Button } from "react-bootstrap";
//import { close, open } from "../../actions/actions";

const ExtraInfo = ({ showModal, open, close, title, info, successCase }) => {
    return(
        <div className='bubble--container' >
            <Button onClick={open} className='bubble--image'> Ver más </Button>

            <Modal show={showModal} onHide={close}>
                <Modal.Header closeButton>
                <Modal.Title><h3><strong> {title} </strong></h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {info}
                    <hr/>
                    <h4><strong> Casos de éxito </strong></h4>
                    <div> {successCase} </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={close}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ExtraInfo;