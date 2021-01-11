import React, { useState } from 'react'
import Table from '../Components/Table'
import '../../Styles/styles.css'
import { residentsData } from '../data'

import { Modal } from './Modal'
function Residents() {
    const residentsTableHead = ['Block No',
        'Flat No',
        'Owner Name',
        'Owner Email',
        'Owner  Mobile',
        'Status',
        'Tenant Name',
        'Tenant Mobile',
        'Tenant Email']

    const data = function () {

        this.data = residentsData
        this.view = function () {
            const dataRes = residentsData.map((item, index) => <> <tr key={index}>
                <td>{item.block}</td>
                <td>{item.flat}</td>
                <td>{item.ownwerName}</td>
                <td>{item.ownerEmail}</td>
                <td>{item.ownerMobile}</td>
                <td>{item.status}</td>
                <td>{item.tenantName}</td>
                <td>{item.tenantMobile}</td>
                <td>{item.tenantEmail}</td>


            </tr>

            </>)
            return dataRes
        }
    }


    const Data = new data()
      const [isAdd, SetisAdd] = useState(false)
    return (
        <div>
            {isAdd && Modal.residents()}
            <div className="heading-model">
                <h5 className="heading">Residents</h5>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button className="filter-button">Filter</button>
                    <button className="add-button" onClick={e => {
                        e.preventDefault()
                        SetisAdd(!isAdd)
                    }}>Add</button>
                </div>
            </div>
            <Table thead={residentsTableHead} data={Data} />
        </div>
    )
}

export default Residents
