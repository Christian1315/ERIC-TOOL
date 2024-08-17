import style from "../assets/header.module.css";
import { FaBeer } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import ItemCard from "./ItemCard";

import { Outlet, Link } from "react-router-dom";
import CanvasOffset from "./CanvasOffset";

const Header = () => {
    const [searchClass, setSearchClass] = useState(style.search)
    const [searchResult, setSearchResult] = useState(false)
    const [login, setLogin] = useState(false)

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

    const LoginHandle = (e) => {
        setLogin(true)
    }

    //###
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow" id={style.NAV} >
                <div className="container-fluid">
                    <button className="btn" type="button" style={{ border: "solid 1px var(--bs-navbar-toggler-border-color)" }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
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
                                <input className={"form-control me-2 " + searchClass} onClick={(e) => HandleOnclick(e)} type="search" placeholder="Search ..." aria-label="Search" />
                            </div>

                            <div className="d-flex justify-align-items" style={{ justifyItems: 'center' }}>
                                <strong className="px-2" style={{ color: "#2A7FB8B2" }}> | </strong>

                                <span className={`dropdown dropstart ` + style.lang}>
                                    <span className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-person-circle"></i>
                                    </span>
                                    <ul className="dropdown-menu p-2 mx-3 mt-5">
                                        <li><Link to="login" className="btn btn-sm btn bg_blue_btn dropdown-item text-center roundered" href="#">Sign in</Link></li>
                                        <li className="drop">New visitor? <Link to="register" className="text-center text-blue" href="#" style={{textDecoration:"none"}}>Start here</Link></li>
                                        {/* <li>
                                            {login ?
                                                <button className="dropdown-item text-center bg-light text-primary">Profil</button> :
                                                <Link to="/login" className="dropdown-item text-center bg-light text-primary" onClick={() => setLogin(true)}>Login</Link>
                                            }
                                        </li> */}
                                    </ul>
                                </span>
                                <strong className="px-2" style={{ color: "#2A7FB8B2" }}> | </strong>
                                <span className={`dropdown dropstart ` + style.lang}>
                                    <span className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-globe-americas"></i>
                                    </span>
                                    <ul className="dropdown-menu p-1">
                                        <li><Link to="/login" className="dropdown-item text-center bg-light text-primary" href="#">French</Link></li>
                                        <li><Link to="/login" className="dropdown-item  my-2 text-center bg-light text-primary" href="#">English</Link></li>
                                        <li>
                                            {login ?
                                                <button className="dropdown-item text-center bg-light text-primary">Profil</button> :
                                                <Link to="/login" className="dropdown-item text-center bg-light text-primary" onClick={() => setLogin(true)}>Login</Link>
                                            }
                                        </li>
                                    </ul>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

            {/* SEARCH RESULTS */}
            {searchResult &&
                <div className="row" id={style.searchResult} style={{ position: 'absolute', right: '0' }}>
                    <div className="col-12">
                        <div className="align-items-center p-5">
                            <div className="row">
                                <div className="card bg-light px-2" style={{ width: "45rem", marginRight: "0rem", height: "10px!important" }}>
                                    <div className="card-header float-right">
                                        <span type="button" onClick={() => setSearchResult(false)} className="btn-close text-white"></span>
                                    </div>
                                    <ul className="list-group list-group-flush p-0">
                                        {
                                            categories.map((item) => (
                                                <li key={item.id} className="list-group-item text-left"><a href="#" className="text-dark" target="_blank" rel="noopener noreferrer">{item.title}</a> </li>
                                            ))
                                        }
                                    </ul>

                                    {/* <p className="">Quiks links</p> */}
                                    <div id="carouselExample" className="carousel slide mt-3">
                                        <div className="carousel-inner" id={style.carouselInner}>
                                            <div className="carousel-item active">
                                                <div className="row">
                                                    {
                                                        categories.map((item) => (
                                                            <div className="col-md-3">
                                                                <ItemCard key={item.id}
                                                                    title={'Sockets'}
                                                                    btnText={item.btnText}
                                                                    btnUrl={item.btnUrl}
                                                                    imgUrl={item.imgUrl}
                                                                />
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="row">
                                                    {
                                                        categories.map((item) => (
                                                            <div className="col-md-3">
                                                                <ItemCard key={item.id}
                                                                    title={'Sockets'}
                                                                    btnText={item.btnText}
                                                                    btnUrl={item.btnUrl}
                                                                    imgUrl={item.imgUrl}
                                                                />
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <div className="row">
                                                    {
                                                        categories.map((item) => (
                                                            <div className="col-md-3">
                                                                <ItemCard key={item.id}
                                                                    title={'Sockets'}
                                                                    btnText={item.btnText}
                                                                    btnUrl={item.btnUrl}
                                                                    imgUrl={item.imgUrl}
                                                                />
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                            <i class="bi bi-arrow-left-circle-fill" id={style.CarouselAction}></i>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                            <i class="bi bi-arrow-right-circle-fill" id={style.CarouselAction}></i>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            }

            {/*OFFSET CANVAS  */}
            <CanvasOffset />
        </>
    )
}

export default Header