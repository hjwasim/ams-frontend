import React, { useState } from 'react'
import Table from '../Components/Table'
import { employeeData } from '../data'
import {Modal} from './Modal'

export default function Employee() {

    const employeeTableHead = [
        'Employee Name',
        'Department',
        'D.O.J',
        'Salary',
        'Status',
        'Payment Date',
        'Payment Mode',

    ]
    const data = function () {
        this.data = employeeData
        this.view = function () {
            const dataRes = employeeData.map((item, index) => <> <tr key={index}>
                <td>{item.employeeName}</td>
                <td>{item.department}</td>
                <td>{item.doj}</td>
                <td>{item.salary}</td>
                <td>{item.status}</td>
                <td>{item.paymentDate}</td>
                <td>{item.paymentMode}</td>
            </tr>
            </>)
            return dataRes
        }
    }

    const Data = new data()

    const [isAdd, SetisAdd] = useState(false)
    return (
        <>
           {isAdd && Modal.employee() }
            <div className="heading-model">
                <h5 className="heading">Employee</h5>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button className="filter-button">Filter</button>
                    
                    <button className="add-button" onClick={e => {
                        e.preventDefault()
                        SetisAdd(!isAdd)
                    }}>Add</button>
                </div>
            </div>
            <Table thead={employeeTableHead} data={Data} />
        </>
    )
}