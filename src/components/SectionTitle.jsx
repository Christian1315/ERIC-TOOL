import style from "../assets/sectionTitle.module.css";

const SectionTitle = ({ title }) => {
    return (
        <>
            <h4 className={style.title}> {title} </h4>
            <img src="images/ligne.png" className="img-fluid" alt="" srcSet="" />
            <br /><br />
        </>
    )
}

export default SectionTitle