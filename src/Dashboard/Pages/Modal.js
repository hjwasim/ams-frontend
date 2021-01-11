import React from 'react'


const modal = function () {

    this.materials = function () {
        return (
            <div className="add-modal">
                <form className="add-form">

                    <input className="form-control" placeholder="Materials/Utilities" />

                    <input className="form-control" placeholder="Monthly Expenses" type="number" />

                    <input className="form-control" placeholder="Annual Expenses" type="number" />

                    <button class="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }
    this.maintenance = function () {
        return (
            <div className="add-modal">
                <form className="add-form">
                    <input className="form-control" placeholder="Block No" />

                    <input className="form-control" placeholder="Flat" />

                    <input className="form-control" placeholder="Sq. Ft." type="number" />

                    <input className="form-control" placeholder="Amount" type="number" />

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
                        <label>Date of Payment</label>
                        <input className="form-control" type="datetime-local" value="2019-08-19"></input>
                    </div>


                    <button class="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }
    this.residents = function () {
        return (
            <div className="add-modal">
                <form className="add-form">
                    <input className="form-control" placeholder="Block No" />

                    <input className="form-control" placeholder="Flat" />

                    <input className="form-control" placeholder="Owner Name" />

                    <input className="form-control" placeholder="Owner Mobile" type="number" />

                    <input className="form-control" placeholder="Owner Email" type="email" />

                    <input className="form-control" placeholder="Status" />

                    <input className="form-control" placeholder="Tenant Name" />

                    <input className="form-control" placeholder="Tenant Mobile" type="number" />

                    <input className="form-control" placeholder="Tenant Email" type="email" />


                    <button class="btn btn-primary">Add</button>
                </form>
            </div>
        )
    }

    this.employee = function () {
        return (
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
        )
    }
}

const Modal = new modal()













// <div className="add-modal">
// <form className="add-form">
//     <input className="form-control" placeholder="Asset Name" />

//     <input className="form-control" placeholder="Asset Location" />

//     <div className="form-group">
//         <label>Date of Inspection</label>
//         <input className="form-control" type="datetime-local" value="2019-08-19"></input>
//     </div>

//     <input className="form-control" placeholder="Status" />


//     <input className="form-control" placeholder="Reason for Disposal" />

//     <div className="form-group">
//         <label>Date of Disposal</label>
//         <input className="form-control" type="datetime-local" value="2019-08-19"></input>
//     </div>

//     <div className="form-group">
//         <label>Date of Purchase</label>
//         <input className="form-control" type="datetime-local" value="2019-08-19"></input>
//     </div>


//     <input className="form-control" placeholder="No. of Assets" type="number" />



//     <button class="btn btn-primary">Add</button>
// </form>
// </div>











export { Modal }