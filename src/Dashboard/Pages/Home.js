import React from 'react'

function Home({user}) {
    const {info} = user
    return (
        <>
            <div className="top-greet">
                <h2>{info.apartmentName}</h2>
            </div>
            <div className="main-greet">
                <span>Hello, {info.fullName}! </span>
                <div className="reports">
                    <span>GENERATED REPORTS</span>
                </div>
            </div>
        </>
    )
}

export default Home
