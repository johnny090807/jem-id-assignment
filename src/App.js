import './App.css';
import React, { useState, useEffect } from "react";
import Header from './components/Header.tsx';
import Products from './components/Products.tsx';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductInfo from './components/ProductInfo.tsx';
import Search from './components/Search';
import Home from './components/Home';


function App() {
  // Vastleggen van de default producten en de gezochte producten
  const[productsDefault, setProductsDefault] = useState() 
  const[products, setProducts] = useState() 

  // Fetchen van alle producten
  const fetchData = async () => {
    return await fetch('https://api.floraxchange.nl/artikel?relatieid=215')
      .then(response => response.json())
      .then(data => {
        setProducts(data) 
        setProductsDefault(data)
       });}

  // Het aanroepen van de fetchData
  useEffect( () => {fetchData()},[]);

  // Filteren van de producten op potmaat
  const filterProducts = (e) => {
    // Kijkt of de value die ingevuld is gelijk staat aan een van de producten
    const filtered = productsDefault.filter(product =>{
      return product.PotmaatNumeriek == e.target.value
    })
    
    // Het plaatsen van de gefilterde producten
    setProducts(filtered)
    
    // Mocht het veld leegstaan, laat dan alle producten zien
    if(e.target.value === ""){
      setProducts(productsDefault)
    }
  }

  return (
    // De volledige router
    <Router>
    <div className="App">
      {/* De vaste header */}
      <Header />
      {/* De switcher tussen alle pagina's */}
      <Switch>
        
        {/* Route voor de homepagina */}
        <Route path="/" exact component={Home}/>   
        {/* Route voor alle producten met de Searchbalk erbij */}
        <Route path="/products" exact>   
          <Search filterProducts={filterProducts}/>
          <Products products={products} />
        </Route> 
        {/* Route voor een enkel product */}
        <Route path="/products/:id" component={ProductInfo}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
