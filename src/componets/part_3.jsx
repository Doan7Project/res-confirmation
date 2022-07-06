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
                    <p>Arrival date: <span className='txtcolor'>06/06/2022</span></p>
                </div>
                <div className='col-9 txtsize'>
                    <p>Departure date: <span className='txtcolor'>06/06/2022</span></p>
                </div>
            </div>
            {/* <div className='dropdown-divider'></div> */}
            <div className="row border-top py-1">
                <div className='col-3'>
                    <span className='txtsize txtcolor'>Guest Name</span>
                    <p className='txtsize'>Pham Doan Pham</p>
                </div>
                <div className='col text-center'>
                    <span className='txtsize txtcolor'>Unit</span>
                    <p className='txtsize'>2</p>
                </div>
                <div className='col text-center'>
                    <span className='txtsize txtcolor'>Night</span>
                    <p className='txtsize'>2</p>
                </div>
                <div className='col text-center'>
                    <span className='txtsize txtcolor'>Adults</span>
                    <p className='txtsize'>2</p>
                </div>
                <div className='col text-center'>
                    <span className='txtsize txtcolor'>Extra guest</span>
                    <p className='txtsize'>2</p>
                </div>
                <div className='col text-center'>
                    <span className='txtsize txtcolor'>Extra Bed</span>
                    <p className='txtsize'>2</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <h6 className='txtsize'>childern under 6: <span className='txtitatic'>02</span></h6>
                    <h6 className='txtsize'>childern 6 - 11: <span>02</span></h6>
                    <h6 className='txtsize'>childern over 11: <span>02</span></h6>

                </div>
                <div className='col-8 text-center'>
                    <h6 className='fw-bolder text-danger'>Subtotal: VND 2.400.000</h6>
                    <span className='txtsize'>(Included: 8% VAT & Service charge)</span>

                </div>

            </div>

            <div className='row text-end'>


            </div>
        </div>
    );
}

export default Part_3;