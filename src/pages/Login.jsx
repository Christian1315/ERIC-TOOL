import style from "../assets/login.module.css"
import Footer from "../components/Footer"

const Login = () => {
    return <>
        <div className="container-fluid" id={style.login}>
            <div className="row">
                <div className="col-md-5 col-sm-12" id={style.col1}>
                    <img src="images/login_secure.png" className="img-fluid" alt="" srcset="" />
                </div>
                <div className="col-md-7 col-sm-12" id={style.col2}>
                    <h3 className={style.title}>Sign in</h3>
                    <p className={style.description}>Log in to your account to borrow and rent all your favourite items and also take advantage of exclusive shopping offers on your account.</p>

                    <form action="" method="get">
                        <div className={style.block1}>
                            <div className="form-group mb-3">
                                <input type="email" placeholder="Enter your email" className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <input type="password" placeholder="Enter your password" className="form-control" />
                            </div>
                            <br />
                            <div className={"d-flex " + style.formSwitch} >
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                    <label className="form-check-label" for="flexSwitchCheckChecked">Stay signed in</label>
                                </div>

                                <button type="submit" className="btn btn-sm">Sign in</button>
                            </div>
                        </div>

                        <div className={style.block2}>
                            <h3 className="">Can't login to your ToolManager account?</h3>
                            <a href="#" className={style.reset}>Reset your password</a>
                        </div>

                        <span className="text-center text-white d-block">Or</span>

                        <button className={"btn btn-sm " + style.signInWithUsername}>Sign in with your username instead</button>
                        <p className={"text-white "+ style.register}> New visitor? <a href="#" className={style.start}>Start here</a> </p>
                    </form>
                </div>
            </div>
        </div>

        {/* FOOTER */}
        <Footer fixed={true} />
    </>
}

export default Login