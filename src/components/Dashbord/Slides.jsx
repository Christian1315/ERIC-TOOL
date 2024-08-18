import style from "../../assets/dashbord.module.css"

import { useGlobalContext } from "../../Context";

const Slides = () => {
    const { navLinks, ClickSwitchNav } = useGlobalContext()

    return <>
        <div className="" id={style.slides}>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h4 className={style.slides_title}>Annual Subscription Flash Sales Ends in 12h 45 min 21 sec</h4>
                        <p className="">Save 10% over monthly billing by choosing one of our annual payment plans. <strong className={style.textOrange} >See offers </strong> </p>
                    </div>
                    <div className="carousel-item">
                        <h4 className={style.slides_title}>Annual Subscription Flash Sales Ends in 12h 45 min 21 sec</h4>
                        <p className="">Save 10% over monthly billing by choosing one of our annual payment plans. <strong className={style.textOrange} >See offers </strong> </p>
                    </div>
                    <div className="carousel-item">
                        <h4 className={style.slides_title}>Annual Subscription Flash Sales Ends in 12h 45 min 21 sec</h4>
                        <p className="">Save 10% over monthly billing by choosing one of our annual payment plans. <strong className={style.textOrange} >See offers </strong> </p>
                    </div>
                </div>
                <br /><br />
                <div className="carousel-indicators" id={style.carouselIndicators}>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className={"active " +style.active} aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
            </div>
        </div>
    </>
}

export default Slides