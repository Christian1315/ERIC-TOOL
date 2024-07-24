import style from "../assets/banner.module.css";

const Banner = () => {
    return (
        <>
            <div className="container-fluid" id={style.banner}>
                <div className="row">
                    <div className={"col-md-7 col-sm-7 " + style.colLeft}>
                        <p className={style.graceCar}>
                            GRACE CAR CARE <br />
                            Services site G.C.Cs
                        </p>
                        <img className={style.banner_man} src="images/banner_man.png" alt="" srcSet="" />
                    </div>
                    <div className={"col-md-5 col-sm-5 " + style.colRight}>
                        <h3 className={style.rightTitle}>DESIGNED AND BUILT TO SERVE AND TO PROTECT YOUR VALUABLES</h3>

                        <p className={style.rightText+' text-white'}>
                            Get your tools from G.C.C services. Our collection is extensive and always top-quality, so you can be sure you're getting the best. Our process is as easy as 1-2-3, and our rental rates won't break the bank. Let's get started on your next project together!
                        </p>

                        <button className={"btn btn-sm " + style.rightBtn}>Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner