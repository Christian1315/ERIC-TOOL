import Header from "../components/Dashbord/Header"
import NavSwitch from "../components/Dashbord/NavSwitch"
import Slides from "../components/Dashbord/Slides"
import SlidesContent from "../components/Dashbord/SlidesContent"
import Footer from "../components/Footer"

const Dashbord = () => {
    return <>
        <div className="container-fluid p-5">
            {/* HEADER */}
            <Header />

            {/* NAV SWITCH */}
            <NavSwitch />

            {/* SLIDES */}
            <Slides />

            <br />
            {/* SLIDES CONTENT */}
            <SlidesContent />

        </div>
        <Footer />
    </>
}

export default Dashbord