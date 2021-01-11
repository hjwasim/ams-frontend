import React, { useState } from 'react'
import Table from '../Components/Table'
import {materialsData} from '../data'
import { Modal } from './Modal'
export default function Materials() {

    const materialsTableHead = [
        'Materials & Utilities',
        'Monthly Expenses',
        'Annual Expenses',
    ]

    const data = function() {

        this.data = materialsData
         this.view = function () {
            const dataRes = materialsData.map((item, index) => <>
            
            <tr key={index}>
                <td>{item.list}</td>
                <td>{item.monthlyExpenses}</td>
                <td>{item.annualExpenses}</td>
    
    
            </tr>
    
            </>)
            return dataRes
            }       
        }
    
        const Data = new data()
 

    const [isAdd, SetisAdd] = useState(false)
    return (
        <>
       {isAdd && Modal.materials() }
            <div className="heading-model">
                <h5 className="heading">Materials</h5>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <button className="filter-button">Filter</button>
                <button className="add-button" onClick={e => {
                        e.preventDefault()
                        SetisAdd(!isAdd)
                    }}>Add</button>
                </div>
            </div>
            <Table thead={materialsTableHead} data={Data} />
        </>
    )
}