import React from "react";
import classes from "./EventModal.module.css";
const EventModal = () => {
  return (
      <div className={classes.modal}>
          <div className={classes.modalContent}>
              <div className={classes.modalHeader}>
                  <h4 className={classes.modalTitle}>Create Event</h4>
              </div>
              <div className={classes.modalBody}>
                  This is Modal Content
              </div>
              <div className={classes.modalFooter}>
                  <button type="submit">Save</button>
                  <button type="cancel">Cancel</button>
              </div>
          </div>
      </div>
  )
}

export default EventModal;
