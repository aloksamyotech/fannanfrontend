import React from "react";
import BackgroundBanner from './assests/images/bg/top-banner.png';
import Searchbr from "./Searchbar";
import Data from "./records.json"
// const Bannner = (props) => {
//     return (
//         <>
//         </>
//     )
// }
class App extends React.Component {
    render() {
        return (
            <>
                <main className="site-main overflow business-main">
                    <div className="site-banner" style={{ background: `url(${BackgroundBanner})`, }}>
                        <div className="container">
                            <div class="site-banner__content">
                                <h1 class="site-banner__title">
                                    What kind of worker are you looking for?
                                </h1>
                               <Searchbr placeholder="Enter a Worker" data={Data}/>
                                <p class="site-banner__meta">
                                    <span>Popular:</span>
                                    <a title="London" href="">Musician</a>
                                    <a title="Paris" href="">Dancer</a>
                                    <a title="Chicago" href="">DJ</a>
                                </p>
                                {/* <!-- .site-banner__meta --> */}
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}
export default App;