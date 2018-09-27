import React, {} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { ModalLabel, ButtonContainer, ModalInput, ModalForm, ModalButton, ModalSelect, ModalOption, modalStyles } from './styles';

const ModifySystemModal = ({ modalIsOpen, closeModal, handleSubmit, editActiveSystem, activeSystem }) => (
  <Modal
    ariaHideApp={false}
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    contentLabel="System Information"
    style={modalStyles}
  >
    <ModalForm className="modalForm" onSubmit={(event) => handleSubmit(event)}>
      <ModalLabel>System Name: </ModalLabel>
      <ModalInput
        required
        type="text"
        name="system_name"
        onChange={(event) => editActiveSystem('system_name', event.target.value)}
        value={activeSystem.system_name}
      />
      <ModalLabel>System Type: </ModalLabel>
      <ModalSelect value={activeSystem.type} onChange={(event) => editActiveSystem('type', event.target.value)}>
        <ModalOption value="MAC">Mac</ModalOption>
        <ModalOption value="WINDOWS_WORKSTATION">Windows Workstation</ModalOption>
        <ModalOption value="WINDOWS_SERVER">Windows Server</ModalOption>
      </ModalSelect>
      <ModalLabel>HDD Capacity (GB): </ModalLabel>
      <ModalInput
        required
        type="number"
        name="hdd_capacity"
        onChange={(event) => editActiveSystem('hdd_capacity', event.target.value)}
        value={activeSystem.hdd_capacity}
      />
      <ButtonContainer>
        <ModalButton type="submit">Save</ModalButton>
        <ModalButton onClick={closeModal}>Close</ModalButton>
      </ButtonContainer>
    </ModalForm>
  </Modal>
);

ModifySystemModal.propTypes = {
  modalIsOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  handleSubmit: PropTypes.func,
  editActiveSystem: PropTypes.func,
  activeSystem: PropTypes.object,
};

export default ModifySystemModal;
