import React, { Component } from 'react'
import Datajson from '../jsondata/data.json'
function Part_3() {

    return (

        <div className='p-2 border-bottom'>
            {
                Datajson.Confirmation.map((n) => {
                
                    return (
                      
                        n.roomDetail.map(function (u,i) {
                            return (
                                <div key={i}>
                                    <div className='row'>
                                        <div className='col-1'>
                                            <p className='fw-bolder'>{u.roomId}</p>
                                        </div>
                                        <div className='col-5'>
                                            <span>{u.roomType}</span>
                                        </div>
                                        <div className='col-5'>
                                            <p>VND <span>{u.roomRate}</span></p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-3 txtsize'>
                                            <p>Arrival date: <span className='txtcolor'>{u.arrivaRoomlDate}</span></p>
                                        </div>
                                        <div className='col-9 txtsize'>
                                            <p>Departure date: <span className='txtcolor'>{u.departureRoomDate}</span></p>
                                        </div>
                                    </div>

                                    <div className="row border-top py-1">
                                        <div className='col-3'>
                                            <span className='txtsize txtcolor'>Guest Name</span>
                                            <p className='txtsize'>{u.guestName}</p>
                                        </div>
                                        <div className='col text-center'>
                                            <span className='txtsize txtcolor'>Unit</span>
                                            <p className='txtsize'>{u.unit}</p>
                                        </div>
                                        <div className='col text-center'>
                                            <span className='txtsize txtcolor'>Night</span>
                                            <p className='txtsize'>{u.night}</p>
                                        </div>
                                        <div className='col text-center'>
                                            <span className='txtsize txtcolor'>Adults</span>
                                            <p className='txtsize'>{u.adult}</p>
                                        </div>
                                        <div className='col text-center'>
                                            <span className='txtsize txtcolor'>Extra guest</span>
                                            <p className='txtsize'>{u.extraGuest}</p>
                                        </div>
                                        <div className='col text-center'>
                                            <span className='txtsize txtcolor'>Extra Bed</span>
                                            <p className='txtsize'>{u.extraBed}</p>
                                        </div>
                                    </div>

                                    <div className='row'>
                                  
                                                    <div className='col-4'>

                                                    <h6 className='txtsize'>childern under 6: <span className='txtitatic'>{u.childrenUnder}</span></h6>
                                                    <h6 className='txtsize'>childern 6 - 11: <span>{u.childrenFrom}</span></h6>
                                                    <h6 className='txtsize'>childern over 11: <span>{u.childrenOver}</span></h6>
                                                </div>

                                        <div className='col-8 text-center'>
                                            <h6 className='fw-bolder text-danger'>Subtotal: VND <span>{u.subTotal}</span></h6>
                                            <span className='txtsize'>(Included: 8% VAT & Service charge)</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    )
                })
            }

        </div>
    );
}

export default Part_3;