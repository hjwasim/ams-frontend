import React, { useState } from "react";
import Table from "../Components/Table";
import { Modal } from "react-responsive-modal";
import { Addbutton, Filterbutton } from "../../Styles/index";

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
    const materialsTableHead = [
        'Materials & Utilities',
        'Monthly Expenses',
        'Annual Expenses',
    ]

   return (
        <>
            <div className="heading-model">
                <h5 className="heading">Materials</h5>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <Filterbutton className="filter-button">Filter</Filterbutton>
                <Addbutton className="add-button" onClick={onOpenModal}>
            Add
          </Addbutton>
            </div>
            <Modal open={isModalOpen.open} onClose={onCloseModal}>
            <div className="add-modal">
                <form className="add-form">

                    <input className="form-control" placeholder="Materials/Utilities" />

                    <input className="form-control" placeholder="Monthly Expenses" type="number" />

                    <input className="form-control" placeholder="Annual Expenses" type="number" />

                    <button class="btn btn-primary">Add</button>
                </form>
            </div>
            </Modal>
            </div>
            <Table thead={materialsTableHead} />
        </>
    )
}