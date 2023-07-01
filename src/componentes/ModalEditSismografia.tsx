import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormularioSismografia } from './FormularioSismografia';
import { Sismografia } from '../interfaces.tsx/interfaces';
import { da } from 'date-fns/locale';

type ModalProps = {
  show:boolean;
  data: Sismografia;
  handleClose:()=>void; 
}

export const ModalEditSismografia =({handleClose,data,show}:ModalProps) => {
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
            <FormularioSismografia nrovoladura={data.nrovoladura} ptomoni={data.ptomoni}
             distancia={data.distancia} cargaoperante={data.cargaoperante}
              vppdiseno={data.vppdiseno} vppreal={data.vppreal} k={data.k} alpha={data.alpha} vid={data.vid}/>
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

