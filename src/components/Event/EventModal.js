import { useContext } from 'react';
import { Context } from '../../store/Context';
import CreateEventForm from './CreateEventForm';
import classes from './EventModal.module.css';
const EventModal = (props) => {
  const { modal } = useContext(Context);
  const [showCreateModal, setShowCreateModal] = modal;
  const saveEventHandler = () => {
    console.log('save button pressed');
    return setShowCreateModal(!showCreateModal);
  };

  const cancelEventHandler = () => {
    console.log('cancel button key pressed');
    return setShowCreateModal(false);
  };
  return (
    <div className={classes.modal} onClick={props.onClick}>
      <div className={classes.modalContent}>
        <div className={classes.modalHeader}>
          <h4 className={classes.modalTitle}>Create Event</h4>
        </div>
        <div className={classes.modalBody}>
          <CreateEventForm></CreateEventForm>
        </div>
        <div className={classes.modalFooter}>
          <button
            type='submit'
            className={classes.saveButton}
            onClick={saveEventHandler}
          >
            Save
          </button>
          <button
            type='cancel'
            className={classes.cancelButton}
            onClick={cancelEventHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
