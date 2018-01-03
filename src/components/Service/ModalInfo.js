import React from "react";
import { Modal, Button } from "react-bootstrap";
import { close, open } from "../../actions/actions";

const ExtraInfo = ({ showModal }) => {
    return(
        <div className='bubble--container' >
            <Button onClick={() => open()} className='bubble--image' />

            <Modal show={showModal} onHide={() => close()}>
                <Modal.Header closeButton>
                <Modal.Title>Aqui titulooooo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> Aqui infooooooo </p>
                    <p>Praesent commodo cursus magna, oreet rutrum faucibus dolor auctor.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => close()}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ExtraInfo;