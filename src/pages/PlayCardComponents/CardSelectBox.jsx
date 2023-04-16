import React from 'react';

function CardSelectBox() {
    return ( 
        <div className="card_select_area">
            <div className="threeCardBox">
                <div className="row">
                    <div className="col-4">
                        <div className="cardDragBox">
                            <div className="cardDragImg">
                                <div className="cardImgText">
                                    <p>100.565656</p>
                                    <h3>DIMS</h3>
                                </div>
                            </div>
                            <h3>Higher or Same</h3>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="cardDragBox activeCard">
                            <div className="cardDragImg">
                                <div className="cardImgText">
                                    <p>100.565656</p>
                                    <h3>DIMS</h3>
                                </div>
                            </div>
                            <h3>King is Highest <br /> Ace is Lowest</h3>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="cardDragBox">
                            <div className="cardDragImg">
                                <div className="cardImgText">
                                    <p>100.565656</p>
                                    <h3>DIMS</h3>
                                </div>
                            </div>
                            <h3>Higher or Same</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CardSelectBox;