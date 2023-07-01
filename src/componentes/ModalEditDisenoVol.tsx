import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DisenoPer, DisenoVol } from '../interfaces.tsx/interfaces';
import { FormularioDisenoVol } from './FormularioDisenoVol';

type ModalProps = {
  show:boolean;
  data: DisenoVol;
  handleClose:()=>void; 
}

export const ModalEdicionDisenoVol =({handleClose,data,show}:ModalProps) => {
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
           <FormularioDisenoVol nrovoladura={data.nrovoladura} tipoexplosivo={data.tipoexplosivo}
            kgexplosivo={data.kgexplosivo} vid={data.vid}/>
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

