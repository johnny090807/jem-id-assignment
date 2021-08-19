import Product from './Product';

// Alle producten 
const Products = ({products}) => {
    // Als er nog geen producten gevonden zijn, laat een spinner zien zodat de gebruiker weet dat het systeem bezig is met het ophalen van de informatie
    if (products == undefined){
        return (<div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>);
    }
    // Zijn de producten gevonden uit de database laat hem dan zien 
    else{
        return (
            <div className="row m-3">
                {products.map((product) => (
                    <Product key={product.ID} product={product} />
                ))}
            </div>
        );
    }
  
}

export default Products 