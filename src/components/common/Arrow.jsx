import React from 'react';

const Arrow = () => {
    return (
        <svg width="150" height="50">
            <defs>
                <marker id="arrow" markerWidth="13" markerHeight="10" refx="2" refy="2">
                    <path d="M2,1 L2,10 L10,6 L2,2" style={{ fill: 'black' }} />
                </marker>
            </defs>
            <path d="M10,30 L100,30" className='arrow-tail' />
        </svg>
    )
}

export default Arrow;