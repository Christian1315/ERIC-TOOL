import style from "../assets/login.module.css"
import Footer from "../components/Footer"

const Register = () => {
    return <>
        <div className="container-fluid" id={style.login}>
            <div className="row">
                <div className="col-md-5 col-sm-12" id={style.col1}>
                    <img src="images/login_secure.png" className="img-fluid" alt="" srcset="" />
                </div>
                <div className="col-md-7 col-sm-12" id={style.col2}>
                    <h3 className={style.title}>Create your account securely</h3>
                    <p className={style.description}>Create your account to borrow and rent all your favourite items and also take advantage of exclusive shopping offers on your account.</p>

                    <form action="" method="get">
                        <div className={style.block1}>
                            <div className="form-group mb-3">
                                <input type="email" placeholder="Enter your email" className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <input type="password" placeholder="Create your password" className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <input type="password" placeholder="Confirm your password" className="form-control" />
                            </div>
                            <br />
                            <div className={"d-flex " + style.formSwitch} >
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                    <label className="form-check-label" for="flexSwitchCheckChecked">Stay signed in</label>
                                </div>

                                <span>
                                    <button type="submit" className="btn btn-sm">Create</button>
                                </span>
                            </div>
                        </div>


                        <div className={style.block2_register}>
                            <span className="text-center text-white d-block">Or</span>
                            <br />
                            <h3 className="">Would you like to log into your account with a username instead?</h3>
                        </div>


                        <button className={"btn btn-sm " + style.signInWithUsername}>Yes please</button>
                    </form>
                </div>
            </div>
        </div>

        {/* FOOTER */}
        <Footer fixed={true} />
    </>
}

export default Register