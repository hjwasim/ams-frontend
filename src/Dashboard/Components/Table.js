import React from 'react'
// import { maintenanceData, inventoryData, employeeData, materialsData } from '../data'
import "./table.css"

function Table({ add ,thead}) {


    // function isAdd(item) {
    //     let array = []
    //     for (const key in item) {
    //         array.push(key)
    //     }
    //     return array

    // }

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
                    
                </tbody>
            </table>

        </div>
    )
}

export default Table

