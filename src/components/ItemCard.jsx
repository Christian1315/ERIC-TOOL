import style from "../assets/itemCard.module.css";

const ItemCard = ({ title, description, btnExist = true, btnText, btnUrl, imgUrl, vertical = false }) => {
    return (
        <>
            {
                <div className="card text-center shadow mb-5">
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className={style.title}>{title}</h5>
                        {/* <p className={style.description}> {description} </p> */}

                        {btnExist && <a href={btnUrl} className="btn btn-sm">{btnText}</a>}
                    </div>
                </div>
            }
        </>
    )
}

export default ItemCard