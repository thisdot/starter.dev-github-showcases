import { Modal } from 'react-native';

const DropdownModal = ({ visible, children }) => {
  return (
    <Modal
      supportedOrientations={['portrait', 'landscape']}
      animationType="none"
      transparent={true}
      visible={visible}>
      {children}
    </Modal>
  );
};

export default DropdownModal;
