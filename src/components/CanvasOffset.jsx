import { Link } from "react-router-dom";
import style from "../assets/CanvasOffset.module.css"

const CanvasOffset = () => {
    return <>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header px-3" id={style.offcanvasHeader}>
                <h5 className={"offcanvas-title"} id="offcanvasExampleLabel"> <i className="bi bi-person-circle text-white mr-2"></i> <span className={style.HeaderTitle}>Hello, Pascal</span> </h5>
                <button type="button" className="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body px-3">
                <div>
                    Choose an option to continue
                </div>

                <ul className={"list-group " + style.canvasLink}>
                    <li className="list-group-item"><i class="bi bi-house-gear"></i> <Link to={"/"}>Home</Link></li>
                    <li className="list-group-item"><i class="bi bi-info-circle"></i> <a href="">About this site</a></li>
                    <li className="list-group-item"><i class="bi bi-question-circle"> </i><a href="">Contact</a></li>
                    <li className="list-group-item">

                        <div className="dropdown">
                            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                                <i class="bi bi-tools"></i> Item Borrowings
                            </a>
                            <ul className="dropdown-menu w-100">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="dropdown">
                            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                                <i class="bi bi-currency-dollar"></i> Item rental
                            </a>
                            <ul className="dropdown-menu w-100">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="list-group-item"><i className="bi bi-arrow-return-left"></i> <a href="">Items Return</a></li>
                    <li className="list-group-item"><i className="bi bi-search"></i> <a href="">Lost and Found</a></li>
                    <li className="list-group-item"><i className="bi bi-toggle-off"></i> <a href="">Switch sites</a></li>
                    <li className="list-group-item"><i className="bi bi-cart-plus"></i> <a href="">Shop the deals</a></li>
                    <li className="list-group-item"><i className="bi bi-view-list"></i> <a href="">View all products</a></li>
                </ul>

                {/*  */}
                <p className={style.dev}>The Developer’s links</p>
                <br />
                <button className={"btn w-100 " + style.shareBtn}><i className="bi bi-share"></i> <span className="">Share This Web App </span>  </button>
                <button className={"btn w-100 " + style.shareBtn}><i className="bi bi-share"></i> <span className="">Rate This Web App </span>   </button>
                <button className={"btn w-100 " + style.shareBtn}><i className="bi bi-diagram-2"></i> <span className="">alltoolmanager.com </span>  </button>
                <button className={"btn w-100 " + style.shareBtn}><i className="bi bi-cart-plus"></i> <span className="">Products Market place </span>  </button>
            </div>
        </div>
    </>
}

export default CanvasOffset;