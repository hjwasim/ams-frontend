import React, { useState } from 'react'
import Table from '../Components/Table'
import { employeeData } from '../data'
import { Modal } from "react-responsive-modal";

export default function Employee() {
        
  const [isModalOpen, setModalOpen] = useState({
    open: false,
  });

  const onOpenModal = () => {
    setModalOpen({ open: true });
  };

  const onCloseModal = () => {
    setModalOpen({ open: false });
  };

    const employeeTableHead = [
        'Employee Name',
        'Department',
        'D.O.J',
        'Salary',
        'Status',
        'Payment Date',
        'Payment Mode',

    ]
    return (
        <>
            <div className="heading-model">
                <h5 className="heading">Employee</h5>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button className="filter-button">Filter</button>
                    
                    <button className="add-button" onClick={onOpenModal}>
            Add
          </button>
        </div>
        <Modal open={isModalOpen.open} onClose={onCloseModal}>

        <div className="add-modal">
                <form className="add-form">
                    <input className="form-control" placeholder="Employee Name" />
                    <input className="form-control" placeholder="Department Name" />
                    <div className="form-group">
                        <label>Date of Employement</label>
                        <input className="form-control" type="datetime-local" value="2019-08-19"></input>
                    </div>
                    <input className="form-control" placeholder="Salary" type="number" />
                    <ul>
                        <label>Status</label>
                        <li>
                            <input className="input-radio" required type="radio" name="status" value="Paid" />
                            <label>Paid</label>
                        </li>
                        <li>
                            <input className="input-radio" type="radio" name="status" value="Unpaid" />
                            <label>Unpaid</label>
                        </li>
                    </ul>
                    <div className="form-group">
                        <label>Payment Date</label>
                        <input className="form-control" type="datetime-local" value="2019-08-19"></input>
                    </div>

                    <ul>
                        <label>Payment</label>
                        <li>
                            <input className="input-radio" required type="radio" name="status" value="Cash" />
                            <label class="custom-control-label">Cash</label>
                        </li>
                        <li>
                            <input className="input-radio" type="radio" name="status" value="Offline" />
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
    )
}