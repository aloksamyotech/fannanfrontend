import React from 'react';
import CmnBanner from '../core-component/cmnBanner';
import Header from '../Header/header';
function App(){
return(
    <>
    <Header/>
    <CmnBanner
     mainhead = "How it works"
    />
    <div className='hwworks-wrp bg-white'>
     <div className='container workheading'>
        <div className='row'>
            <div className='col-md-12 col-sm-12'>
                <h2 className='comn-head white'>How it works</h2>
                <p>We help you to find carpenters,electrician,corporator,etc. at your door step in over 150+ countries</p>
            </div>
        </div>
            <div className='hwitworkblock row'>
                <div className='blocks col-md-4'>
                    <div className='blck-img'>
                    <a href="#"><i className="fa-solid fa-user"></i></a>
                    </div>
                    <div className='blck-head'>
                        <h3 className='white'>Create an account</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className='blocks col-md-4'>
                    <div className='blck-img'>
                       <a href="#"><i className="fas fa-hand-point-right"></i></a>
                    </div>
                    <div className='blck-head'>
                        <h3 className='white'>Choose a plan</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className='blocks col-md-4'>
                    <div className='blck-img'>
                       <a href="#"><i className="fa-solid fa-download"></i></a>
                    </div>
                    <div className='blck-head'>
                        <h3 className='white'>Download App</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className='btn-read'>
                    <button className='right-header__button btn'>Read More</button>
                </div>
            </div>
        <div className='row'>

        </div>
     </div>
    </div>
    </>
)
}
export default App;