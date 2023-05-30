import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormularioSismografia } from './FormularioSismografia';
import { Sismografia } from '../interfaces.tsx/interfaces';
import { FormularioVod } from './FormularioVod';

type ModalProps = {
  show:boolean;
  data: Sismografia;
  handleClose:()=>void; 
}

export const ModalEditVod =({handleClose,data,show}:ModalProps) => {
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
            <FormularioVod/>
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

