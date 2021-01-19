import React, { useState } from "react";
import Table from "../Components/Table";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export default function Maintenance() {

  const [isModalOpen, setModalOpen] = useState({
    open: false,
  });

  const onOpenModal = () => {
    setModalOpen({ open: true });
  };

  const onCloseModal = () => {
    setModalOpen({ open: false });
  };

  const maintenanceTableHead = [
    "Block No",
    "Flat No",
    "Sq. Ft.",
    "Amount",
    "Status",
    "Payment Date",
    "Payment Mode",
    "Bank Details",
  ];

  return (
    <>
      <div className="heading-model">
        <h5 className="heading">Maintenance</h5>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button className="filter-button">Filter</button>
          <button className="add-button" onClick={onOpenModal}>
            Add
          </button>
          <Modal open={isModalOpen.open} onClose={onCloseModal}>
            <div className="add-modal">
              <form className="add-form">
                <input className="form-control" placeholder="Block No" />

                <input className="form-control" placeholder="Flat" />

                <input
                  className="form-control"
                  placeholder="Sq. Ft."
                  type="number"
                />

                <input
                  className="form-control"
                  placeholder="Amount"
                  type="number"
                />

                <ul>
                  <label>Status</label>
                  <li>
                    <input
                      className="input-radio"
                      required
                      type="radio"
                      name="status"
                      value="Paid"
                    />
                    <label>Paid</label>
                  </li>
                  <li>
                    <input
                      className="input-radio"
                      type="radio"
                      name="status"
                      value="Unpaid"
                    />
                    <label>Unpaid</label>
                  </li>
                </ul>

                <div className="form-group">
                  <label>Date of Payment</label>
                  <input
                    className="form-control"
                    type="datetime-local"
                    value="2019-08-19"
                  ></input>
                </div>

                <button class="btn btn-primary">Add</button>
              </form>
            </div>
          </Modal>
        </div>
      </div>
      <Table thead={maintenanceTableHead} />
    </>
  );
}
