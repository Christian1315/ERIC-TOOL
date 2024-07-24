import { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";

import style from "../assets/indexPage.module.css"
import SectionTitle from "../components/SectionTitle";
import ItemCard from "../components/ItemCard";
// import style from "../assets/banner.module.css";

const IndexPage = () => {

    // AFTER BANNER DATA
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
    // END AFTER BANNER DATA

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

    // CATEGORY SECTION DATA
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

    return (
        <>
            {/* BANNIERE */}
            <Banner />

            {/* AFTER BANNER */}
            <div className="px-5">
                <div className="container-fluid" id={style.afterBanner}>
                    <div className="row">
                        {
                            itemsCard.map((item) => (
                                <div className="col-md-3 col-sm-6" key={item.id}>
                                    <div
                                        className={item.active ? style.itemCard + " " + style.activeCard : style.itemCard}
                                        id={item.id}
                                        onClick={() => HandleCardClick(item.id)}
                                    >
                                        <button className="btn">{item.title}</button>

                                        <p className="">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* CATEGORIES BANNER */}
            <div className="px-5">
                <div className="container-fluid" id={style.categories}>
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Trending categories" />
                        </div>
                    </div>

                    <div id="carouselExample" className="carousel slide px-0">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    {
                                        categories.map((item, index) => (
                                            <div className="col-2" key={item.id}>
                                                {
                                                    ((index + 1) <= 6)
                                                    &&
                                                    (
                                                        <ItemCard
                                                            title={item.title}
                                                            description={item.description}
                                                            btnText={item.btnText}
                                                            btnUrl={item.btnUrl}
                                                            imgUrl={item.imgUrl}
                                                        />
                                                    )
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="row">
                                {
                                        secondSlide && categories.map((item, index) => (
                                        <div className="col-2" key={item.id}>
                                            {
                                                <div className="carousel-item">
                                                    {
                                                        ((index + 1) <= 12)
                                                        &&
                                                        (
                                                            <ItemCard
                                                                title={item.title}
                                                                description={item.description}
                                                                btnText={item.btnText}
                                                                btnUrl={item.btnUrl}
                                                                imgUrl={item.imgUrl}
                                                            />
                                                        )
                                                        // &&
                                                        // setThirdSlide(true)
                                                    }

                                                    {
                                                        setThirdSlide(true)
                                                    }
                                                </div>
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="row">
                                {
                                    thirdSlide && categories.map((item, index) => (
                                        <div className="col-2" key={item.id}>
                                            {
                                                <div className="carousel-item">
                                                    {
                                                        ((index + 1) <= 18)
                                                        &&
                                                        (
                                                            <ItemCard
                                                                title={item.title}
                                                                description={item.description}
                                                                btnText={item.btnText}
                                                                btnUrl={item.btnUrl}
                                                                imgUrl={item.imgUrl}
                                                            />
                                                        )
                                                    }
                                                </div>
                                            }
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                        <button className="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span style={{ backgroundColor: "#000!impportant" }} className="carousel-control-prev-icon bg_blue" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next text-dark" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span style={{ backgroundColor: "#000!impportant" }} className="carousel-control-next-icon bg_blue" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* GENERAL CATEGORIES BANNER */}
            <div className="px-5">
                <div className="container-fluid" id={style.categories}>
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="General categories" />
                        </div>
                    </div>
                    <div className="row">
                        {
                            generaleCategories.map((item) => (
                                <div className="col-2" key={item.id}>
                                    <ItemCard
                                        title={item.title}
                                        description={item.description}
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
        </>
    )
}

export default IndexPage