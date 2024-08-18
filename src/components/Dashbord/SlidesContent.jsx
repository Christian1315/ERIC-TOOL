import style from "../../assets/dashbord.module.css"

import { useGlobalContext } from "../../Context";

const SlidesContent = () => {
    const { navLinks, ClickSwitchNav } = useGlobalContext()
    return <>
        <div className="">
            <div className="row">
                <div className="col-md-6">
                    <div className="card w-100 mb-2 py-3 px-3 shadow" id={style.slides_card}>
                        <div className={"d-flex " + style.block}>
                            <i class="bi bi-gear-wide-connected"></i>
                            <div className="">
                                <strong className={style.title}>Your Borrowings</strong>
                                <p className={style.description}>View all your current active borrowed items and return them on time. </p>
                            </div>
                        </div>
                    </div>

                    <div className="card w-100 mb-2 py-3 px-3 shadow" id={style.slides_card}>
                        <div className={"d-flex " + style.block}>
                            <i class="bi bi-heart"></i>
                            <div className="">
                                <strong className={style.title}>Your Wish Lists</strong>
                                <p className={style.description}>View all your current list, modify it if need be, share it with your friends as needed.  </p>
                            </div>
                        </div>
                    </div>

                    <div className="card w-100 mb-2 py-3 px-3 shadow" id={style.slides_card}>
                        <div className={"d-flex " + style.block}>
                            <i class="bi bi-geo-alt-fill"></i>
                            <div className="">
                                <strong className={style.title}>Your Addresses</strong>
                                <p className={style.description}>Add new addresses, edit the old ones or delete them. </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="card w-100 mb-2 py-3 px-3 shadow" id={style.slides_card}>
                        <div className={"d-flex " + style.block}>
                            <i class="bi bi-gear-wide-connected"></i>
                            <div className="">
                                <strong className={style.title}>Your Orders</strong>
                                <p className={style.description}>Track your current orders, return and shop again </p>
                            </div>
                        </div>
                    </div>

                    <div className="card w-100 mb-2 py-3 px-3 shadow" id={style.slides_card}>
                        <div className={"d-flex " + style.block}>
                            <i class="bi bi-heart"></i>
                            <div className="">
                                <strong className={style.title}>Your Rentals</strong>
                                <p className={style.description}>Rent all your favorite products and return them on time to avoid late return fees. </p>
                            </div>
                        </div>
                    </div>

                    <div className="card w-100 mb-2 py-3 px-3 shadow" id={style.slides_card}>
                        <div className={"d-flex " + style.block}>
                            <i class="bi bi-gear-wide-connected"></i>
                            <div className="">
                                <strong className={style.title}>Your Account Settings</strong>
                                <p className={style.description}>Edit login preferences, change or modify name and pay bills. </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default SlidesContent