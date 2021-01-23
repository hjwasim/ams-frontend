import React, { useState } from "react";
import Table from "../Components/Table";
import { Modal } from "react-responsive-modal";
import { Addbutton, Filterbutton } from "../../Styles/index"
import { useForm } from 'react-hook-form'
import {instance} from '../../config.axios'
import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json());

export default function Employee() {
  
  const { data } = useSWR(
    "http://localhost:5000/employee",
    fetcher
  );
  
  console.log(data)

  const [isModalOpen, setModalOpen] = useState({
    open: false,
  });

  const { handleSubmit, register } = useForm()
  
  function Submit(value) {
    
     instance.post('/employee',value)
     .then(res => console.log(res))
  }
  
  const onOpenModal = () => {
    setModalOpen({ open: true });
  };

  const onCloseModal = () => {
    setModalOpen({ open: false });
  };

  const employeeTableHead = [
    "Employee Name",
    "Department",
    "D.O.J",
    "Salary",
    "Status",
    "Payment Date",
    "Payment Mode",
  ];
  return (
    <>
      <div className="heading-model">
        <h5 className="heading">Employee</h5>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Filterbutton className="filter-button">Filter</Filterbutton>
          <Addbutton className="add-button" onClick={onOpenModal}>
            Add
          </Addbutton>
        </div>
        <Modal open={isModalOpen.open} onClose={onCloseModal}>
          <div className="add-modal">
            <form className="add-form" onSubmit={handleSubmit(Submit)}>
              <input ref={register} className="form-control" name="employeeName" placeholder="Employee Name" />
              <input ref={register} className="form-control" name="department" placeholder="Department Name" />
              <div className="form-group">
                <label>Date of Employement</label>
                <input className="form-control" type="date" ref={register} name="doj" value="2019-08-19"/>
              </div>
              <input ref={register} className="form-control" name="salary" placeholder="Salary" type="number" />
              <ul>
                <label>Status</label>
                <li>
                  <input ref={register} className="input-radio" required type="radio" name="status" value="Paid" />
                  <label>Paid</label>
                </li>
                <li>
                  <input ref={register} className="input-radio" type="radio" name="status" value="Unpaid" />
                  <label>Unpaid</label>
                </li>
              </ul>
              <div className="form-group">
                <label>Payment Date</label>
                <input ref={register} name="paymentDate" className="form-control" type="datetime" value="2019-08-19" />
              </div>

              <ul>
                <label>Payment</label>
                <li>
                  <input ref={register} className="input-radio" required type="radio" name="paymentMode" value="Cash" />
                  <label class="custom-control-label">Cash</label>
                </li>
                <li>
                  <input ref={register} className="input-radio" type="radio" name="paymentMode" value="Offline" />
                  <label class="custom-control-label">Offline</label>
                </li>
              </ul>
              <button class="btn btn-primary">Add</button>
            </form>
          </div>
        </Modal>
      </div>
      <Table thead={employeeTableHead} />
    </>
  );
}
