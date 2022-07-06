import React, { Component } from 'react'
function Part_2() {
    return (

        <div>
            <div className='row'>
                <div className='col-4'>
                    <label className='p-0 m-0'>
                        <span className='txtsize fw-bolder'>Check-In</span>
                        <p>06/jul/2022</p>
                    </label>
                    <div >
                        <span className='txtsize fw-bolder'>Check-Out</span>
                        <p>06/jul/2022</p>
                    </div>
                    <div >
                        <span className='txtsize fw-bolder'>Nights</span>
                        <p className='txtsize'>01 Night</p>
                    </div>
                    <div >
                        <span className='txtsize fw-bolder'>Length of stay</span>
                        <p className=' txtsize'>02</p>
                    </div>
                    <div>
                        <span className='txtsize fw-bolder'>Total Guest</span>
                        <p className='txtsize'>Adults: <span>02</span>
                            <br />Children under 6: <span>02</span>
                            <br />Children 6-11: <span>1</span>
                            <br />Children Over 11: <span>1</span>
                        </p>
                    </div>
                    <div >
                        <span className='txtsize fw-bolder'>Total Unit</span>
                        <p className=' txtsize'>02</p>
                    </div>
            
                </div>
                <div className='col-4'>
                    <div >
                        <span className='txtsize fw-bolder'>Booking Number</span>
                        <p className='fw-bolder'>125358</p>
                    </div>
                    <div >
                        <span className='txtsize fw-bolder'>Guest Name</span>
                        <p className='fw-bolder'>Pham Anh Doan</p>
                    </div>
                    <div >
                        <span className='txtsize fw-bolder'>Phone</span>
                        <p className='txtsize'>0981 137 177</p>
                    </div>
                    <div >
                        <span className='txtsize fw-bolder'>Email</span>
                        <p className='txtsize'>doanphamuk@gmail.com</p>
                    </div>
                    <div >
                        <span className='txtsize fw-bolder'>Adjustment</span>
                        <p className='txtsize'>20/7/2022</p>
                    </div>
                    <div >
                        <span className='txtsize fw-bolder'>Received</span>
                        <p className='txtsize'>20/7/2022</p>
                    </div>

                </div>
                <div className='col-4'>
                    <div>
                        <span className='txtsize fw-bolder'>Breakfast</span>
                        <p className='txtsize'>yes/No</p>
                    </div>
                    <div className='pt-1'>
                        <span className='txtsize fw-bolder'>Extra Bed</span>
                        <p className='txtsize'>02</p>
                    </div>
                    <div className=''>
                        <span className='txtsize fw-bolder'>Status</span>
                        <p className='txtsize'>New</p>
                    </div>
                
                    <div>
                        <span className='fw-bolder'>Total Amount</span><br />
                        <span className='text-danger fs-5 fw-bolder'>VND 2.000.000</span>
                        <p className='txtsize'>(Included: 8% VAT & Service charge)</p>
                    </div>
                </div>

            </div>
            <div className=''>
                        <span className=' fw-bolder'>Method of payment</span>
                        <p className='txtsize'>Full pay by guest</p>
                    </div>
            <div className=''>
                <span className=' fw-bolder'>Note</span>
                <p className='txtsize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nostrum? Corporis facere laborum eos cumque libero corrupti repellat, consequatur voluptas a exercitationem fugit, amet necessitatibus quae repudiandae temporibus nihil distinctio!</p>
            </div>

        </div>

    );
}

export default Part_2;