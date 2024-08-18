import style from "../../assets/dashbord.module.css"

const Header = () => {
    return <>
        {/* <HEADER> */}
        <div className="row">
            <div className="col-md-12">
                <div id={style.dashHeader}>
                    <h3 className={style.dashHeaderTitle}>Manage Your Account</h3>

                    <div className={style.d_flex}>
                        <div className={"dropdown " + style.dropdownBtn} >
                            <button className="btn dropdown-toggle px-2 py-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Account actions
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <button className={"btn btn-sm mx-2 " + style.actionBtn}><i className="bi bi-envelope-check"></i></button>
                        <button className={"btn btn-sm " + style.actionBtn}> <i className="bi bi-cart3"></i> </button>
                    </div>
                </div>
                <p className={style.dashHeaderText}>Manage your account like a pro in just a few clicks. </p>
            </div>
        </div>
    </>
}

export default Header