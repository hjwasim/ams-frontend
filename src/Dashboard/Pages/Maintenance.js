import React, { useState } from 'react'
import Table from '../Components/Table'
import '../../Styles/styles.css'
import {maintenanceData} from '../data'
import {Modal} from './Modal'

export default function Maintenance() {
    const maintenanceTableHead = ['Block No',
    'Flat No',
    'Sq. Ft.',
    'Amount',
    'Status',
    'Payment Date',
    'Payment Mode',
    'Bank Details']

    const data = function() {

        this.data = maintenanceData
         this.view = function () {
            const dataRes = maintenanceData.map((item, index) => <> <tr key={index}>
            <td>{item.block}</td>
            <td>{item.flat}</td>
            <td>{item.sqft}</td>
            <td>{item.amount}</td>
            <td>{item.status}</td>
            <td>{item.paymentDate}</td>
            <td>{item.paymentMode}</td>
            <td>{item.bankDetails}</td>

        </tr>
    
            </>)
            return dataRes
            }       
        }
    
        const Data = new data()

   
   
    const [isAdd, SetisAdd] = useState(false)
    return (
        <>
                   {isAdd && Modal.maintenance() }
            <div className="heading-model">
                <h5 className="heading">Maintenance</h5>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <button className="filter-button">Filter</button>
                <button className="add-button" onClick={e => {
                        e.preventDefault()
                        SetisAdd(!isAdd)
                    }}>Add</button>
                </div>
            </div>
            <Table thead={maintenanceTableHead} data={Data} />
        </>
    )
}
