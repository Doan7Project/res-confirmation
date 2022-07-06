import React, { Component } from 'react'
import Datajson from '../jsondata/data.json'
function Part_2() {
    return (

        <div>
            {
                Datajson.Confirmation.map((e, i) => {
                    return (
                        <div key={i}>
                            <div className='row'>
                                <div className='col-4'>
                                    <label className='p-0 m-0'>
                                        <span className='txtsize fw-bolder'>Check-In</span>
                                        <p>{e.arrivalDate}</p>
                                    </label>
                                    <div >
                                        <span className='txtsize fw-bolder'>Check-Out</span>
                                        <p>{e.departureDate}</p>
                                    </div>
                                    <div >
                                        <span className='txtsize fw-bolder'>Length of stay</span>
                                        <p className=' txtsize'>{e.lengthofStay}</p>
                                    </div>
                                
                                    <div>
                                    {
                                        e.totalGuest.map(function(f,i){
                                            return(
                                                <div>
                                                      <span className='txtsize fw-bolder'>Total Guest</span>
                                                <p className='txtsize'>Adults: <span>{f.adult}</span>
                                                    <br />Children under 6: <span>{f.childrenUnder}</span>
                                                    <br />Children 6-11: <span>{f.childrenFrom}</span>
                                                    <br />Children Over 11: <span>{f.childrenOver}</span>
                                                </p>
                                                </div>
                                              
                                            )
                                        })
                                    }
                                   
                                    </div>
                                    <div >
                                        <span className='txtsize fw-bolder'>Total Unit</span>
                                        <p className=' txtsize'>{e.totalUnit}</p>
                                    </div>

                                </div>
                                <div className='col-4'>
                                    <div >
                                        <span className='txtsize fw-bolder'>Booking Number</span>
                                        <p className='fw-bolder'>{e.bookingID}</p>
                                    </div>
                                    <div >
                                        <span className='txtsize fw-bolder'>Guest Name</span>
                                        <p className='fw-bolder'>{e.guestName}</p>
                                    </div>
                                    <div >
                                        <span className='txtsize fw-bolder'>Phone</span>
                                        <p className='txtsize'>{e.phone}</p>
                                    </div>
                                    <div >
                                        <span className='txtsize fw-bolder'>Email</span>
                                        <p className='txtsize'>{e.email}</p>
                                    </div>
                                    <div >
                                        <span className='txtsize fw-bolder'>Adjustment</span>
                                        <p className='txtsize'>{e.adjustment}</p>
                                    </div>
                                    <div >
                                        <span className='txtsize fw-bolder'>Received</span>
                                        <p className='txtsize'>{e.received}</p>
                                    </div>

                                </div>
                                <div className='col-4'>
                                    <div>
                                        <span className='txtsize fw-bolder'>Breakfast</span>
                                        <p className='txtsize'>{e.breakFast}</p>
                                    </div>
                                    <div className='pt-1'>
                                        <span className='txtsize fw-bolder'>Extra Bed</span>
                                        <p className='txtsize'>{e.extraBed}</p>
                                    </div>

                                    <div className=''>
                                        <span className='txtsize fw-bolder'>Sources</span>
                                        <p className='txtsize'>{e.sources}</p>
                                    </div>
                                    <div className=''>
                                        <span className='txtsize fw-bolder'>Company Name</span>
                                        <p className='txtsize'>{e.companyName}</p>
                                    </div>
                                    <div>
                                        <span className='fw-bolder'>Total Amount</span><br />
                                        <span className='text-danger fs-5 fw-bolder'>VND {e.totalAmount}</span>
                                        <p className='txtsize'>(Included: 8% VAT & Service charge)</p>
                                    </div>
                                </div>

                            </div>
                            <div className='border-top py-2'>
                                <span className=' fw-bolder'>Method of payment</span>
                                <p className='txtsize'>{e.methodPay}</p>
                            </div>
                            <div className=''>
                                <span className=' fw-bolder'>Note</span>
                                <p className='txtsize'>{e.notePad}</p>
                            </div>
                        </div>
                    )
                })
            }


        </div>

    );
}

export default Part_2;