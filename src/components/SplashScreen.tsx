import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SplashScreen = () => {
    const [show, setShow] = React.useState(true);

    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Welcome</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>This application is provided as-is without warranty of any kind.</p>
                <p>Please review the disclaimer carefully before using the service.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Agree
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SplashScreen;
