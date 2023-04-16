import React from 'react';
import BaccaratMultiHeader from '../headerfooter/BaccaratMultiHeader';
import DipositePopup from '../pages/bigsmallComponents/DipositePopup';
import WithdrawPopup from '../pages/bigsmallComponents/WithdrawPopup';
import UserBettingList from './bigsmallComponents/UserBettingList';
import BaccaratGame from './BaccaratComponents/BaccaratGame';
import BaccaratGameStart from './BaccaratComponents/BaccaratGameStart';

function BaccaratMulti() {
    return ( 
        <div className='BaccaratMultiPage PageWraper  bigSmallWrap gameCardWraper'>
            <BaccaratMultiHeader/>
            <section className="baccarat_area affilate_area">
                <div className="bigSmallGame_container">
                    <div className="bismlDipoWith MobileDipoWith">
                        <DipositePopup/>   
                        <WithdrawPopup/>   
                    </div>
                    <div className="bigSmallGameRow row">
                        <div className="col-xl-8">
                            <div className="BaccaratGame_area">
                                <BaccaratGame/>
                                <BaccaratGameStart/>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <UserBettingList/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default BaccaratMulti;