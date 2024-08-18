import React, { useContext, useState, useEffect } from "react";
import style from "./assets/header.module.css";
import { Navigate } from "react-router-dom";

// ################################################################################
// ################################################################################

const AppContext = React.createContext()

// CUSTOM HOOKS
const useGlobalContext = () => {
    return useContext(AppContext)
}

const AppProvider = ({ children }) => {
    // ======== COMMON DATAS ======//
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
        },
        {
            "id": 5,
            "imgUrl": "images/item3.png",
            "title": "Drill Bits",
            "description": "Select this option to borrow any items from ...",
            "btnExist": true,
            "btnText": "Select",
            "btnUrl": "#",
        },
        {
            "id": 6,
            "imgUrl": "images/item2.png",
            "title": "Impact hex Bits",
            "description": "Select this option to borrow any items from ...",
            "btnExist": true,
            "btnText": "Select",
            "btnUrl": "#",
        },
        {
            "id": 7,
            "imgUrl": "images/item1.png",
            "title": "Impact hex Bits",
            "description": "Select this option to borrow any items from ...",
            "btnExist": true,
            "btnText": "Select",
            "btnUrl": "#",
        },
        {
            "id": 8,
            "imgUrl": "images/item3.png",
            "title": "Impact hex Bits",
            "description": "Select this option to borrow any items from ...",
            "btnExist": true,
            "btnText": "Select",
            "btnUrl": "#",
        }
    ])

    //======== HEADER DATA =========//
    const [searchClass, setSearchClass] = useState(style.search)
    const [searchResult, setSearchResult] = useState(false)
    const [login, setLogin] = useState(false)
    const [profil, setProfil] = useState(false)

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


    //======== LOGIN PAGE DATA =========//
    const SubmitLogin = (e) => {
        e.preventDefault();
        setLogin(true);
        setProfil(true)
    }

    const LogOut = (e) => {
        e.preventDefault();
        setLogin(false);
        setProfil(false);

        <Navigate to="/" />
        // return <Redirect to="/"/>
    }

    //=========== INDEX PAGE ==========//
    const [itemsCard, setItemCard] = useState([
        {
            "id": 1,
            "active": true,
            "title": "BORROW AN ITEM",
            "description": "Select this option to borrow any items from the listing categories below. Then return it within the selected time frame",
        },
        {
            "id": 2,
            "active": false,
            "title": "RENT AN ITEM",
            "description": "Select this option to rent any items from the listing categories below. Then return it within the selected time frame",
        },
        {
            "id": 3,
            "active": false,
            "title": "SHOP",
            "description": "Select this option to buy any items from the listing categories below. Plus enjoy the in-account exclusive deals",
        },
        {
            "id": 4,
            "active": false,
            "title": "RETURN AN ITEM",
            "description": "Select this option to return any item on your borrowings and rentals list within the selected period of time.",
        }
    ])

    const HandleCardClick = (id) => {
        const itemTransformeds = itemsCard.map((item) => (
            item.id == id ? { ...item, 'active': true } : { ...item, 'active': false }
        ))

        setItemCard(itemTransformeds)
    }

    const [generaleCategories, setGeneraleCategories] = useState([
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
        },
        {
            "id": 5,
            "imgUrl": "images/item3.png",
            "title": "Drill Bits",
            "description": "Select this option to borrow any items from ...",
            "btnExist": true,
            "btnText": "Select",
            "btnUrl": "#",
        },
        {
            "id": 6,
            "imgUrl": "images/item2.png",
            "title": "Impact hex Bits",
            "description": "Select this option to borrow any items from ...",
            "btnExist": true,
            "btnText": "Select",
            "btnUrl": "#",
        },
        {
            "id": 7,
            "imgUrl": "images/item1.png",
            "title": "Impact hex Bits",
            "description": "Select this option to borrow any items from ...",
            "btnExist": true,
            "btnText": "Select",
            "btnUrl": "#",
        },
        ,
        {
            "id": 8,
            "imgUrl": "images/item3.png",
            "title": "Impact hex Bits",
            "description": "Select this option to borrow any items from ...",
            "btnExist": true,
            "btnText": "Select",
            "btnUrl": "#",
        }
        ,
        {
            "id": 9,
            "imgUrl": "images/item2.png",
            "title": "Impact hex Bits",
            "description": "Select this option to borrow any items from ...",
            "btnExist": true,
            "btnText": "Select",
            "btnUrl": "#",
        }
        ,
        {
            "id": 10,
            "imgUrl": "images/item1.png",
            "title": "Impact hex Bits",
            "description": "Select this option to borrow any items from ...",
            "btnExist": true,
            "btnText": "Select",
            "btnUrl": "#",
        },
        ,
        {
            "id": 11,
            "imgUrl": "images/item3.png",
            "title": "Impact hex Bits",
            "description": "Select this option to borrow any items from ...",
            "btnExist": true,
            "btnText": "Select",
            "btnUrl": "#",
        },
        {
            "id": 12,
            "imgUrl": "images/item3.png",
            "title": "Impact hex Bits",
            "description": "Select this option to borrow any items from ...",
            "btnExist": true,
            "btnText": "Select",
            "btnUrl": "#",
        }
    ])

    // GESTION DES SLIDES
    const [firstSlide, setFirstSlide] = useState(true)
    const [secondSlide, setSecondSlide] = useState(false)
    const [thirdSlide, setThirdSlide] = useState(false)


    //=========== DASHBORD PAGE ==========//
    const [navLinks, setNavLinks] = useState([
        {
            "id": 1,
            "label": "Account Home Links",
            "active": true
        },
        {
            "id": 2,
            "label": "Account Settings",
            "active": false
        }
    ])

    const ClickSwitchNav = (id) => {
        var new_links = navLinks.map((item) => (
            item.id == id ?
                { ...item, active: true } :
                { ...item, active: false }
        ))
        setNavLinks(new_links)
    }

    // RENDERING
    return (
        <AppContext.Provider value={{ navLinks, setNavLinks, ClickSwitchNav, itemsCard, setItemCard, setThirdSlide, thirdSlide, secondSlide, setSecondSlide, firstSlide, setFirstSlide, generaleCategories, setGeneraleCategories, HandleCardClick, LogOut, profil, setProfil, SubmitLogin, categories, setCategories, searchClass, setSearchClass, searchResult, setSearchResult, login, setLogin, HandleOnclick, HandleOnblur, LoginHandle }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider, useGlobalContext }