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

  const inventoryTableHead = [
    'Asset Name',
    'Asset Location',
    'Inspection Date',
    'Status',
    'Reason for Disposal',
    'Disposal Date',
    'Purchase Date',
    'No. of Assets'

]

  return (
    <>
      <div className="heading-model">
        <h5 className="heading">Inventory</h5>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button className="filter-button">Filter</button>
          <button className="add-button" onClick={onOpenModal}>
            Add
          </button>
          <Modal open={isModalOpen.open} onClose={onCloseModal}>
          <div className="add-modal">
                    <form className="add-form" >
                        <input className="form-control" name="assetName" placeholder="Asset Name" />

                        <input className="form-control" name="assetLocation" placeholder="Asset Location" />

                        <div className="form-group">
                            <label>Date of Inspection</label>
                            <input className="form-control" name="inspectionDate" type="date" value="2019-08-19"></input>
                        </div>

                        <input className="form-control" name="status" placeholder="Status" />


                        <input className="form-control" name="disposalReason" placeholder="Reason for Disposal" />

                        <div className="form-group">
                            <label>Date of Disposal</label>
                            <input className="form-control" name="disposalDate" type="date" value="2019-08-19"></input>
                        </div>

                        <div className="form-group">
                            <label>Date of Purchase</label>
                            <input className="form-control" name="purchaseDate" type="date" value="2019-08-19"></input>
                        </div>


                        <input className="form-control" name="assetNo" placeholder="No. of Assets" type="number" />



                        <button class="btn btn-primary">Add</button>
                    </form>
                </div>
          </Modal>
        </div>
      </div>
      <Table thead={inventoryTableHead} />
    </>
  );
}
