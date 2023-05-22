import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormularioVoladura } from './FormularioVoladura';
import { TableData } from './TablaVoladura';

type ModalProps = {
  show:boolean;
  data: TableData;
  handleClose:()=>void; 
}

export const ModalEdicion =({handleClose,data,show}:ModalProps) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className='bg-dark'> 
          <Modal.Title >Editar datos</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
            <FormularioVoladura/>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" >Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

