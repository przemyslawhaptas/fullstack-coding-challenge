import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { Maybe } from 'monet';

import { IContract } from './definitions';
import useShowContract from './hooks/useShowContract';
import ApplyDiscount from './ApplyDiscount';

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface ContractModalProps {
  contracts: IContract[],
};

const ContractModal = ({ contracts }: ContractModalProps) => {
  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const [maybeContractId, unselect] = useShowContract(state => [state.contractId, state.unselect]);
  const maybeContract = maybeContractId.bind(id =>
    Maybe.fromUndefined(contracts.find(c => c.id === id))
  );
  if (maybeContract.isNone()) return null;

  const contract = maybeContract.just();

  return (
    <Modal
      isOpen
      onRequestClose={unselect}
      shouldFocusAfterRender
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      shouldReturnFocusAfterClose
      style={modalStyle}
    >
      <h2 style={{ textAlign: 'center' }}>{contract.name}</h2>

      <table style={{ textAlign: 'left'}}>
        <tbody>
          <tr>
            <th style={{ paddingRight: '24px'}}>Renewal Date:</th>
            <td>{contract.renewalDate}</td>
          </tr>
          <tr>
            <th style={{ paddingRight: '24px'}}>Value:</th>
            <td>{contract.value}</td>
          </tr>
        </tbody>
      </table>

      <ApplyDiscount contract={contract} />
    </Modal>
  );
};

export default ContractModal;
