import { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";

import style from "../assets/indexPage.module.css"
import SectionTitle from "../components/SectionTitle";
import ItemCard from "../components/ItemCard";
import Footer from "../components/Footer";
import { useGlobalContext } from '../Context';

const IndexPage = () => {
    const { categories, itemsCard, setItemCard, HandleCardClick, generaleCategories, setGeneraleCategories, firstSlide, setFirstSlide, secondSlide, setSecondSlide, thirdSlide, setThirdSlide } = useGlobalContext();

    return (
        <>
            {/* BANNIERE */}
            <Banner />

            {/* AFTER BANNER */}
            <div className="px-5">
                <div className="container-fluid" id={style.afterBanner}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className={style._row}>
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
                                                    (index <= 5)
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
                            <div className="carousel-item">
                                <div className="row">
                                    {
                                        categories.map((item, index) => (
                                            <div className="col-2" key={item.id}>
                                                {
                                                    (index <= 5)
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
                            {/* <div className="row">
                                {
                                    secondSlide && categories.map((item, index) => (
                                        <div className="col-2" key={item.id}>
                                            {
                                                <div className="carousel-item">
                                                    {
                                                        (5 < index && index <= 11)
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
                            <div className="row">
                                {
                                    categories.map((item, index) => (
                                        <div className="col-2" key={item.id}>
                                            {
                                                <div className="carousel-item">
                                                    {
                                                        (11 < index && index < 1)
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
                            </div> */}

                        </div>
                        <button className={"carousel-control-prev " + style.slideLeft} type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="shadow-lg" aria-hidden="true"><i className="bi bi-caret-left"></i></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className={"carousel-control-next " + style.slideRight} type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="shadow-lg" aria-hidden="true"><i className="bi bi-caret-right"></i></span>
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

            {/* FOOTER */}
            <div className="px-5">
                <Footer fixed={false} />
            </div>
        </>
    )
}

export default IndexPage