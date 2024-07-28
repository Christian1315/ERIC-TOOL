import style from "../assets/header.module.css";
import { FaBeer } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import ItemCard from "./ItemCard";

import { Outlet, Link } from "react-router-dom";

const Header = () => {
    const [searchClass, setSearchClass] = useState(style.search)
    const [searchResult, setSearchResult] = useState(false)

    // CATEGORY SECTION DATA
    const [categories, setCategories] = useState([
        {
            "id": 1,
            "imgUrl": "images/item1.png",
            "title": "Sockets",
            "description": "Select this option to borrow any items from ...",
            "btnExist": true,
            "btnText": "Select",
            "btnUrl": "#",
        },
        {
            "id": 2,
            "imgUrl": "images/item2.png",
            "title": "Pliers",
            "description": "Select this option to borrow any items from ...",
            "btnExist": true,
            "btnText": "Select",
            "btnUrl": "#",
        },
        {
            "id": 3,
            "imgUrl": "images/item3.png",
            "title": "Power Tools",
            "description": "Select this option to borrow any items from ...",
            "btnExist": true,
            "btnText": "Select",
            "btnUrl": "#",
        },
        {
            "id": 4,
            "imgUrl": "images/item1.png",
            "title": "Screwdrivers",
            "description": "Select this option to borrow any items from ...",
            "btnExist": true,
            "btnText": "Select",
            "btnUrl": "#",
        }
    ])
    const HandleOnclick = (e) => {
        setSearchClass(style.searchLarge);
        e.currentTarget.placeholder = "Enter your key and find ...."
        setSearchResult(true)
    }

    const HandleOnblur = (e) => {
        setSearchClass(style.search);
        e.currentTarget.placeholder = "Search ..."
        setSearchResult(false)
    }

    //###
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow" id={style.NAV}>
                <div className="container-fluid">
                    <button className="btn" type="button" style={{ border: "solid 1px var(--bs-navbar-toggler-border-color)" }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>

                        <form className="d-flex" role="search">
                            <div className="input-group">
                                <span className="input-group-text bg-white" id={style.add}><i className="bi bi-search"></i></span>
                                <input className={"form-control me-2 " + searchClass} onClick={(e) => HandleOnclick(e)} onBlur={(e) => HandleOnblur(e)} type="search" placeholder="Search ..." aria-label="Search" />
                            </div>

                            <div className="d-flex justify-align-items"  style={{justifyItems:'center'}}>
                                <span className={`dropdown dropstart ` +style.lang}>
                                    <span className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-hand-index-thumb"></i>
                                    </span>
                                    <ul className="dropdown-menu p-1">
                                        <li><Link to="/login" className="dropdown-item text-center" href="#">French</Link></li>
                                        <li><Link to="/login" className="dropdown-item  my-2 text-center" href="#">English</Link></li>
                                        <li><Link to="/login" className="dropdown-item text-center" href="#">Profile</Link></li>
                                    </ul>
                                </span>
                                {/* </span> */}
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

            {/* SEARCH RESULTS */}
            {searchResult &&
                <div className="row" style={{ position: 'absolute', right: '0' }}>
                    <div className="col-12">
                        <div className="align-items-center pt-2">
                            <div className="row text-center">
                                <div className="card p-0" style={{ width: "20rem", marginRight: "9rem", height: "10px!important" }}>
                                    <div className="card-header">
                                        <h4> <em> Search results ... </em> </h4>
                                    </div>
                                    <ul className="list-group list-group-flush p-0">
                                        {
                                            categories.map((item) => (
                                                <li key={item.id} className="list-group-item"><a href="#" className="btn bg-light text-dark" target="_blank" rel="noopener noreferrer">{item.title}</a> </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            }
        </>
    )
}

export default Header