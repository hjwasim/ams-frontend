import React, { useState } from "react";
import Table from "../Components/Table";
import { Modal } from "react-responsive-modal";
import { useForm } from 'react-hook-form'
import {instance} from '../../config.axios'
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

  
  const { handleSubmit, register } = useForm()
  
  const user = localStorage.getItem('name')

  function Submit(value) {
    instance.post('/maintenance',{...value,user:user})
     .then(res => console.log(res))
  }
  

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
          <Filterbutton className="filter-button">Filter</Filterbutton>
          <Addbutton className="add-button" onClick={onOpenModal}>
            Add
          </Addbutton>
          <Modal open={isModalOpen.open} onClose={onCloseModal}>
            <div className="add-modal">
              <form className="add-form" onSubmit={handleSubmit(Submit)}>
                <input ref={register} name="block" className="form-control" placeholder="Block No" />

                <input ref={register} name="flat" className="form-control" placeholder="Flat" />

                <input ref={register} name="sqft" className="form-control" placeholder="Sq. Ft." type="number"/>

                <input ref={register} name="amount" className="form-control" placeholder="Amount" type="number"/>

                <ul>
                  <label>Status</label>
                  <li>
                    <input ref={register} className="input-radio" required type="radio" name="status" value="Paid"/>
                    <label>Paid</label>
                  </li>
                  <li>
                    <input ref={register} className="input-radio" type="radio" name="status" value="Unpaid"/>
                    <label>Unpaid</label>
                  </li>
                </ul>

                <div className="form-group">
                  <label>Date of Payment</label>
                  <input ref={register} name="paymentDate" className="form-control" type="date" value="2019-08-19" />
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
