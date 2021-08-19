import React, { useEffect } from "react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Info van een enkel product
const ProductInfo = ({ match }) => {
    // Zorgen dat de data gefetched wordt
    useEffect( () => {
        fetchData()
    },[]);
    
    // Haal het ID uit de Parameters
    let id = match.params.id

    // Vastleggen van een enkel product
    const [product, setProduct]: any= useState();

    // Functie voor het fetchen van een enkel product
    const fetchData = async () => {
        return await fetch(`https://api.floraxchange.nl/artikel?ID=${id}`)
          .then(response => response.json())
          .then(data => {
            setProduct(data) 
        });}
    
    // Als het product nog niet gehaald is uit de database, laat een spinner zien zodat de gebruiker weet dat het systeem bezig is met het ophalen van de informatie
    if (product == undefined){
        return (<div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>);
    }
    // Is het product wel gevonden, laat dan de data zien van een enkel product
    else{
        return (
        <div className="container">
        <div className="row">
            
            <div className="col-8">
                <h1 className="h-50">{product.Naam}</h1>
                <h3>Stuks beschikbaar: {product.AanbodRegels[0].AantalStuks}</h3>
                <h3>Prijs vanaf: €{product.AanbodRegels[0].VanafPrijs}</h3>
                <h3 className="h-100">Periode beschikbaar: {product.AanbodRegels[0].PeriodeOmschrijving}</h3>
            </div>
            <div className="col-6 col-md-4">
            <Carousel infiniteLoop autoPlay showArrows> 
                {product.Fotos.map(photo => (
                    <img key={photo.ID} src={photo.UrlThumb600} />
                ))} 
            </Carousel>
            </div>  
            
            <h5>Eigenschappen:</h5>
                {product.Eigenschappen.map(eigenschap => (
                    <ul key={eigenschap.ID} className="list-group">
                        <li className="list-group-item">   
                            <h6> {eigenschap.EigenschapNaam}: </h6>
                            <p> {eigenschap.Waarde}</p>
                        </li>
                    </ul>
                ))} 
        </div>
      </div>
                       
        );
    }
   
}

export default ProductInfo 

