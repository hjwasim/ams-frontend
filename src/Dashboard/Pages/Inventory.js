import React, { useState } from 'react'
import Table from '../Components/Table'
// import { inventoryData } from '../data'
import { useForm } from 'react-hook-form'
import { instance } from '../../config.axios'

export default function Inventory() {

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
    const [sdata, setData] = useState([])
    console.log(sdata)
    const data = function () {
      
        this.data = sdata
        this.view = function () {
            const dataRes = sdata.map((item, index) => <> <tr key={index}>
                <td>{item.assetName}</td>
                <td>{item.assetLocation}</td>
                <td>{item.inspectionDate}</td>
                <td>{item.status}</td>
                <td>{item.disposalReason}</td>
                <td>{item.disposalDate}</td>
                <td>{item.purchaseDate}</td>
                <td>{item.assetNo}</td>
            </tr>
            </>)
            return dataRes
        }
    }

    const Data = new data()
    const { handleSubmit, register } = useForm()
    
    function dataSubmit(data) {
        instance.post('/api/inventory', data)
        instance.get('/api/inventory').then( res => setData(res.data))
    }
  
    const [isAdd, SetisAdd] = useState(false)
    return (
        <>
            {isAdd && (
                <div className="add-modal">
                    <form className="add-form" onSubmit={handleSubmit(dataSubmit)} >
                        <input className="form-control" ref={register} name="assetName" placeholder="Asset Name" />

                        <input className="form-control" ref={register} name="assetLocation" placeholder="Asset Location" />

                        <div className="form-group">
                            <label>Date of Inspection</label>
                            <input className="form-control" ref={register} name="inspectionDate" type="date" value="2019-08-19"></input>
                        </div>

                        <input className="form-control" ref={register} name="status" placeholder="Status" />


                        <input className="form-control" ref={register} name="disposalReason" placeholder="Reason for Disposal" />

                        <div className="form-group">
                            <label>Date of Disposal</label>
                            <input className="form-control" ref={register} name="disposalDate" type="date" value="2019-08-19"></input>
                        </div>

                        <div className="form-group">
                            <label>Date of Purchase</label>
                            <input className="form-control" ref={register} name="purchaseDate" type="date" value="2019-08-19"></input>
                        </div>


                        <input className="form-control" ref={register} name="assetNo" placeholder="No. of Assets" type="number" />



                        <button class="btn btn-primary">Add</button>
                    </form>
                </div>
            )}
            <div className="heading-model">
                <h5 className="heading">Inventory</h5>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button className="filter-button">Filter</button>
                    <button className="add-button" onClick={e => {
                        e.preventDefault()
                        SetisAdd(!isAdd)
                    }}>Add</button>
                </div>
            </div>
            <Table thead={inventoryTableHead} data={Data} />
        </>
    )
}