import React from "react";
import { Modal, Button } from "react-bootstrap";
//import { close, open } from "../../actions/actions";

const ExtraInfo = ({ showModal, open, close, backgroundColor ,title, info, successCase, button, color }) => {
    return(
        <div>
            <Button onClick={open} bsStyle={'white--BG'} className={color} > Ver más </Button>

            <Modal show={showModal} onHide={close}>
                <Modal.Header closeButton className={backgroundColor} >
                    <Modal.Title><strong className='upperCase white-text bold'> {title} </strong></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {info}
                    <hr/>
                    <h4><strong> Casos de éxito </strong></h4>
                    <div> {successCase} </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={close} bsStyle={button} className='white-text bold' >Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ExtraInfo;