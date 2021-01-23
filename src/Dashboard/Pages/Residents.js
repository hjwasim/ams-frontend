import React, { useState } from "react";
import Table from "../Components/Table";
import { Modal } from "react-responsive-modal";
import { Addbutton, Filterbutton } from "../../Styles/index";


function Residents() {

    
  const [isModalOpen, setModalOpen] = useState({
    open: false,
  });

  const onOpenModal = () => {
    setModalOpen({ open: true });
  };

  const onCloseModal = () => {
    setModalOpen({ open: false });
  };

  const residentsTableHead = [
    "Block No",
    "Flat No",
    "Owner Name",
    "Owner Email",
    "Owner  Mobile",
    "Status",
    "Tenant Name",
    "Tenant Mobile",
    "Tenant Email",
  ];

  return (
    <>
      <div className="heading-model">
        <h5 className="heading">Residents</h5>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Filterbutton className="filter-button">Filter</Filterbutton>
          <Addbutton className="add-button" onClick={onOpenModal}>
            Add
          </Addbutton>
        </div>
        <Modal open={isModalOpen.open} onClose={onCloseModal}>
          
          <div className="add-modal">
            <form className="add-form">
              <input className="form-control" placeholder="Block No" />

              <input className="form-control" placeholder="Flat" />

              <input className="form-control" placeholder="Owner Name" />

              <input
                className="form-control"
                placeholder="Owner Mobile"
                type="number"
              />

              <input
                className="form-control"
                placeholder="Owner Email"
                type="email"
              />

              <input className="form-control" placeholder="Status" />

              <input className="form-control" placeholder="Tenant Name" />

              <input
                className="form-control"
                placeholder="Tenant Mobile"
                type="number"
              />

              <input
                className="form-control"
                placeholder="Tenant Email"
                type="email"
              />

              <button class="btn btn-primary">Add</button>
            </form>
          </div>
        </Modal>
      </div>
      <Table thead={residentsTableHead} />
    </>
  );
}

export default Residents;
