import carrito from "./images/cart-dash.svg"

const CarWidget= () =>{
    return(
                <button type="button" className="btn btn-secondary position-relative">
        <img src={carrito} alt={"carrito"}  width={24}/>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            1
            <span className="visually-hidden">unread messages</span>
        </span>
        </button>
    )
}

export default CarWidget;