import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MedTaladros } from '../interfaces.tsx/interfaces';
import { FormularioMedTaladros } from './FormularioMedTaladros';

type ModalProps = {
  show:boolean;
  data: MedTaladros;
  handleClose:()=>void; 
}

export const ModalEditMedTaladros =({handleClose,data,show}:ModalProps) => {
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
            <FormularioMedTaladros nrovoladura={data.nrovoladura} perforados={data.perforados}
             tapados={data.tapados} reperforados={data.reperforados} adicional={data.adicional}
              aguamenorauno={data.aguamenorauno} aguamayorauno={data.aguamayorauno}
               metrosperforados={data.metrosperforados} vid={data.vid}/>
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

