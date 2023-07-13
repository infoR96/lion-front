import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Vod } from '../interfaces.tsx/interfaces';
import { FormularioVod } from './FormularioVod';

type ModalProps = {
  show:boolean;
  data: Vod;
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
            <FormularioVod nrovoladura={data.nrovoladura}
             nrotaladros={data.nrotaladros} profundidadtaladro={data.profundidadtaladro}
              densidad={data.densidad} sobreperforacion={data.sobreperforacion} agua={data.agua} 
            taco={data.taco} tipotaco={data.tipotaco} longitudcarga={data.longitudcarga}
             booster={data.booster} tipodetonador={data.tipodetonador} 
             tipoexplosivo={data.tipoexplosivo} vodpromedio={data.vodpromedio} 
             probecable={data.probecable} cablecoaxial={data.cablecoaxial}  vid={data.vid}/>
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

