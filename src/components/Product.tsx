import { Link } from "react-router-dom";

// Een enkel product binnen de producten.
const Product = ({product}) => {
    return(
        <div className="col-sm-4">
            <div className="card" key={product.ID} style={{width: "100%", height: "100%"}}>
                <img className="card-img-top" src={product.Fotos[0].UrlThumb600} alt="Card image cap"/>
                    <div className="card-body" >
                    <h5 className="card-title">{product.Naam}</h5>
                    <p className="card-text">Potmaat: {product.Potmaat}</p>
                    <p className="card-text">Hoogte: {product.Hoogte}</p>
                    <Link key={product.id} to={{ pathname: `/products/${product.ID}`,
                                                state: product}} className="btn btn-primary">Bekijk info</Link>
                    </div>
                </div>
        </div>
    );
}

export default Product