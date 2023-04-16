import React from 'react';

function StartCard() {
    return ( 
        <div className="startCard_area">
            <div className="select_range_area">
                <div className="play_amount">
                    <h3>Bet Amount</h3>
                    <div className="theAmount"><input type="number" placeholder='10.12345678' />DIME</div>
                </div>
            </div>
            <div className="higherLower_box">
                <div className="higherLower">
                    <p>Higher</p>
                    <span className='color-orange'>2X</span>
                </div>
                <div className="higherLower">
                    <p>Lower</p>
                    <span className='color-orange'>2X</span>
                </div>
            </div>
            <a href="/play-card-2" className='BlueBtn'>Start Game</a>
        </div>
     );
}

export default StartCard;