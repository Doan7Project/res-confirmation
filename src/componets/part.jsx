import React, { Component } from 'react';
import Moment from 'react-moment';
import Logo from '../assets/image/logo.png'
import Datajson from '../jsondata/data.json'

function Part_1() {

    const date = new Date()

    return (

        <div >
            {
                Datajson.Confirmation.map((e,i) => {
                    return (
                        <div key={i}>
                            <div className='text-center' >
                                <img src={Logo} alt="Logo" width='80' />
                            </div>
                            <div className='row text-center mt-2'>
                                <span className='text-success'>{e.hotelName}</span>
                            </div>
                            <div className='row text-center mt-3'>
                                <span className='fs-5'>HOTEL CONFIRMATION FORM</span>
                            </div>
                            <div className='row'>
                                <div className='col-12 text-end txtsize px-3'>
                                    <Moment format='DD/MMM/YYYY hh:ss A'>{date}</Moment>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>

    );
}

export default Part_1;