import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Densidad, Sismografia } from '../interfaces.tsx/interfaces';
import { FormularioDensidad } from './FormularioDensidad';

type ModalProps = {
  show:boolean;
  data: Densidad;
  handleClose:()=>void; 
}

export const ModalEditDensidad =({handleClose,data,show}:ModalProps) => {
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
            <FormularioDensidad nrovoladura={data.nrovoladura} 
            horainicio={data.horainicio} horafin={data.horafin}
             tipomezcla={data.tipomezcla} densidadinicial={data.densidadinicial}
              densidadfinal={data.densidadfinal} camion={data.camion} vid={data.vid} />
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

