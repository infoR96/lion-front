import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DisenoPer } from '../interfaces.tsx/interfaces';
import { FormularioDisenoPer } from './FormularioDisenoPer';

type ModalProps = {
  show:boolean;
  data: DisenoPer;
  handleClose:()=>void; 
}

export const ModalEdicionDisenoPer =({handleClose,data,show}:ModalProps) => {
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
           <FormularioDisenoPer nrovoladura={data.nrovoladura} burden={data.burden} 
           espaciamiento={data.espaciamiento} dureza={data.dureza} vid={data.vid}   />
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

