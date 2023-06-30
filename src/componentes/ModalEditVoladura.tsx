import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { GeneralData } from '../interfaces.tsx/interfaces';
import { FormularioVoladura } from './FormularioVoladura';

type ModalProps = {
  show:boolean;
  data: GeneralData;
  handleClose:()=>void; 

}
export const ModalEdicionGeneral =({handleClose,data,show}:ModalProps) => {
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
            <FormularioVoladura nrovoladura={data.nrovoladura} fecha={data.fecha} fase={data.fase} 
            nivel={data.nivel} malla={data.malla} vid={data.vid} />
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

