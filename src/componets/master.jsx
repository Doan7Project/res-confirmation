import React, { Component } from 'react';
import Part_1 from './part';
import Part_2 from './part_2';
import Part_3 from './part_3';
function Masterpages() {


    return (
        <React.Fragment>
            <div className='page container'>
                <Part_1></Part_1>
                <div className='dropdown-divider'></div>
                <Part_2></Part_2>
                <div className='dropdown-divider'></div>
                <Part_3></Part_3>
            </div>

        </React.Fragment>

    );
}

export default Masterpages;