import React from 'react';

function CoinFlipStart2() {
    return ( 
        <div className="startCard_area">
            <div className="select_range_area">
                <div className="play_amount">
                    <h3>Balance</h3>
                    <div className="theAmount"><input type="number" placeholder='10.12345678' />DIME</div>
                </div>
            </div>
            <div className="higherLower_box">
                <div className="higherLower">
                    <p>Head</p>
                    <span className='color-orange'>2X</span>
                </div>
                <div className="higherLower">
                    <p>Tail</p>
                    <span className='color-orange'>2X</span>
                </div>
            </div>
            <a href="/bankroll" className='BlueBtn'>Cashout</a>
        </div>
     );
}

export default CoinFlipStart2;