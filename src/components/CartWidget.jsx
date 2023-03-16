import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import carrito from "./images/cart-dash.svg"


const CarWidget= () =>{
    const {cartTotal} = useContext(CartContext);

    return (cartTotal() > 0) ?
                <Link to={"/cart"} type="button" className="btn btn-secondary position-relative">
        <img src={carrito} alt={"carrito"}  width={24}/>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartTotal()}</span>
        </Link> : "";
}

export default CarWidget;