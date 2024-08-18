import style from "../../assets/dashbord.module.css"

import { useGlobalContext } from "../../Context";

const NavSwitch = () => {
    const {navLinks,ClickSwitchNav} = useGlobalContext()

    return <>
        <div id={style.nav_swith}>
            {
                navLinks.map((item)=>(
                    <a key={item.id} onClick={()=>ClickSwitchNav(item.id)} className={item.active?style.active:""} href="#">{item.label}</a>
                ))
            }
        </div>
    </>
}

export default NavSwitch