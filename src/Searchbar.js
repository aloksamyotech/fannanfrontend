import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "./records.json";
function Searchbr({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [cfilteredData, csetFilteredData] = useState([]);
    const [workEntered, setworkEntered] = useState('');
    const [cworkEntered,csetworkEntered] = useState('');
    const [value, setvalue] = useState('');
    const [cvalue, csetvalue] = useState('');
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setworkEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.category.toLowerCase().includes(searchWord.toLowerCase())
        });
        if (searchWord === "") {
            setFilteredData([]);
        }
        else {
            setFilteredData(newFilter);
        }
    };
    const chandleFilter = (event) => {
        const csearchWord = event.target.value;
        csetworkEntered(csearchWord);
        const cnewFilter = data.filter((value) => {
            return value.city.toLowerCase().includes(csearchWord.toLowerCase());
        });
        if(csearchWord === ""){
            csetFilteredData([]);
        }
        else{
            csetFilteredData(cnewFilter);
        }
    };
    const clearInput = () => {
        setFilteredData([]);
        setworkEntered("");
    };
    const cclearInput = () => {
        csetFilteredData([]);
        csetworkEntered("");
    };
    const handleSubmit = (props) => {
        setworkEntered(props)
        setFilteredData([]);
    }
    const chandleSubmit = (props) => {
        csetworkEntered(props)
        csetFilteredData([]);
    }
    return (
        <>
            <form className="site-banner__search layout-02">
                <div className="field-input">
                    <label>Find</label>
                    <input type="text" placeholder={placeholder} autoComplete="off" className="site-banner__search__input open-suggestion" onChange={handleFilter} value={workEntered}></input>
                    {filteredData.length === 0 ? (
                        ''
                    ) : (
                        <i className="fa fa-times" aria-hidden="true" onClick={cclearInput}></i>
                    )}
                </div>
                {filteredData.length != 0 && (
                    <div className="search-suggestions name-suggestions">
                        <ul>
                            {filteredData.slice(0, 15).map((value, key) => {
                                return (
                                    <li>
                                        <a className="dataitem" target="_blank" onClick={() => handleSubmit(value.category)}>
                                            <p>{value.category}</p>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
                {/* <Submenu/> */}
                <div className="field-input">
                    <label htmlFor="loca">Where</label>
                    <input className="site-banner__search__input open-suggestion" id="loca" type="text" name="where"
                        placeholder="Your city" autoComplete="off" onChange={chandleFilter} value={cworkEntered}/>
                    {cfilteredData.length === 0 ? (
                        ''
                    ) : (
                        <i className="fa fa-times" aria-hidden="true" onClick={cclearInput}></i>
                    )}

                    {cfilteredData.length != 0 && (
                        <div className="search-suggestions name-suggestions">
                            <ul>
                                {cfilteredData.slice(0, 15).map((value, key) => {
                                    return (
                                        <li>
                                            <a className="dataitem" target="_blank" onClick={() => chandleSubmit(value.city)}>
                                                <p>{value.city}</p>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </div>
                {/* <!-- .site-banner__search__input --> */}
                <div className="field-submit">
                    <Link to="/list">
                    <button href=""><i className="las la-search la-24-black"></i></button>
                    </Link>
                </div>
            </form>
        </>
    )
}
export default Searchbr;