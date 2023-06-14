import React from 'react';
import CmnBanner from '../core-component/cmnBanner';
import Header from '../Header/header';
import partner1 from '././../../../assests/images/porduct.png';
import partner2 from './../../../assests/images/product2.png';
import partner3 from './../../../assests/images/product3.png';
import partner4 from './../../../assests/images/product4.png';
function App(){
return(
    <>
    <Header/>
    <CmnBanner
    mainhead = "Partners"
    />
    <div className='partner-wrp bg-white'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 text-right'>
                    <h2>We Work With the Best Partners</h2>
                    <p>While we are at the forefront of and specialize in design-build, we are very familiar with a number of delivery methods and are confident we can find the process that will best help you meet your goals.</p>
                    <button className=' read-btn right-header__button btn'>READ MORE</button>
                </div>
                <div className='col-md-6'>
                    <div className='img-partner'>
                        <img src={partner1} alt="partner"></img>
                    </div>
                    <div className='img-partner'>
                        <img src={partner2} alt="partner"></img>
                    </div>
                    <div className='img-partner'>
                        <img src={partner3} alt="partner"></img>
                    </div>
                    <div className='img-partner'>
                        <img src={partner4} alt="partner"></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}
export default App;