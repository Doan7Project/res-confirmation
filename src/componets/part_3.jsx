import React, { Component } from 'react'
function Part_3() {
    return (

        <div className='p-3 border-bottom'>
            <div className='row '>
                <div className='col-1'>
                    <p className='fw-bolder'>1</p>
                </div>
                <div className='col-5'>
                    <span>Superior Double Pool View</span>
                </div>
                <div className='col-5'>
                    <p>VND <span>1.500.000</span></p>
                </div>
            </div>
            <div className='row'>
                <div className='col-3 txtsize'>
                    <p>Arrival date: <span>06/06/2022</span></p>
                </div>
                <div className='col-9 txtsize'>
                    <p>Departure date: <span>06/06/2022</span></p>
                </div>
            </div>
            {/* <div className='dropdown-divider'></div> */}
            <div className="row border-top py-1">
                <div className='col-3'>
                    <span className='txtsize txtcolor'>Guest Name</span>
                    <p className='txtsize'>Pham Doan Pham</p>
                </div>
                <div className='col-3 text-center'>
                    <span className='txtsize txtcolor'>Booked Occupancy</span>
                    <p className='txtsize'>2</p>
                </div>
                <div className='col text-center'>
                    <span className='txtsize txtcolor'>Nights</span>
                    <p className='txtsize'>2</p>
                </div>
                <div className='col text-center'>
                    <span className='txtsize txtcolor'>Extra Guest</span>
                    <p className='txtsize'>1(120.000)</p>
                </div>
                    <div className='col text-center'>
                    <span className='txtsize txtcolor'>Extra Bed</span>
                    <p className='txtsize'>1(450.000)</p>
                    
                </div>
            </div>
            <div className='row '>
                <div className='col-auto'>
              <span className='fw-bolder text-danger'>Subtotal: VND 2.400.000</span>
              <p className='txtsize'>(Included: 8% VAT & Service charge)</p>
                </div>
         
            </div>
        </div>
    );
}

export default Part_3;