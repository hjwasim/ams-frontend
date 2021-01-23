import React from 'react'
import {useForm} from 'react-hook-form'

const Modals = function () {

    const { handleSubmit, register } = useForm()

     function onSubmit(value) {
        console.log(value)
     }
     
    this.employee = function () { 
        return (
            <div className="add-modal">
            <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
              <input ref={register} className="form-control" placeholder="Employee Name" />
              <input ref={register} className="form-control" placeholder="Department Name" />
              <div className="form-group">
                <label>Date of Employement</label>
                <input ref={register} className="form-control" type="datetime-local" value="2019-08-19"
                ></input>
              </div>
              <input ref={register} className="form-control" placeholder="Salary" type="number"
              />
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
                <input ref={register} className="form-control" type="datetime-local" value="2019-08-19" />
              </div>

              <ul>
                <label>Payment</label>
                <li>
                  <input ref={register} className="input-radio" required type="radio" name="status" value="Cash" />
                  <label class="custom-control-label">Cash</label>
                </li>
                <li>
                  <input ref={register} className="input-radio" type="radio" name="status" value="Offline" />
                  <label class="custom-control-label">Offline</label>
                </li>
              </ul>
              <button class="btn btn-primary">Add</button>
            </form>
          </div>
        )
    }
}
const FormModal = new Modals()
export { FormModal }