import React from 'react'
// import { maintenanceData, inventoryData, employeeData, materialsData } from '../data'
import "./table.css"

function Table({ add ,thead,data}) {


    function isAdd(item) {
        let array = []
        for (const key in item) {
            array.push(key)
        }


        return array

    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>

            <table className="table">
                <thead>
                    <tr>
                        {
                            thead.map(item => <th scope="col">{item}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.view()
                    }
                    <tr>
                        {
                            add && isAdd(data.data[0]).map(item => <td>                                
                             <input className="input-table"/>
                        </td>)
                        }
                    </tr>

                </tbody>
            </table>

        </div>
    )
}

export default Table

