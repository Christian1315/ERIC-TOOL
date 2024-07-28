import style from "../assets/footer.module.css";
import { useState } from "react";

const Footer = ({ fixed}) => {
    return (
        <>
            <div className={"container-fluid shadow "} style={{backgroundColor:"#fff"}}>
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-center">©  TOOL MANAGER-2023</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer