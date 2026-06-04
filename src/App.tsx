import { useState } from 'react'

import './App.css'
import CardProduct from "./components/CardProduct.tsx";

function App() {
  const [count, setCount] = useState(0)
  const nom = "Alice";
  const valide = true ;

  const styles = {
    backgroundColor : 'green',
    fontSize : '100px',
  };

  const produits = [
    {id:1, nom:'laptop', description:'machine puissant', prix: 1000},
    {id:2, nom:'Asus', description:'machine leger', prix: 2000},
    {id:3, nom:'HP', description:'machine rapide', prix: 3000}
  ]
  ///JSX

  const ajoutPanier = (produit) =>{
    alert("Ajout au panier: "+produit.nom);
  }

  const supprimerPanier = (id) =>{
    alert("Supprimer au panier: " +id);
  }

  return (
  <> {/*Fragment*/ }

    {/* <CardProduct
          nom = "Laptop"
          description = "ordianteur puissant "
          prix ={999}
      />

      <CardProduct
          nom = "Laptop Rouge"
          description = "ordianteur dangereux "
          prix ={20000}
      />*/}

    {
      produits.map( (produit) => (
          <CardProduct
              produit={produit}
              onAjouter={ajoutPanier}
              onSupprimer={supprimerPanier}
          />
      ))
    }


      <section id="center">
        <h1 className="card">Bonjour {nom}</h1>
        <br/>
        <input/>
        <h1 style={styles}>{ valide ? "Yes" : "NO"}</h1>
        <h1 style={{ color: 'blue' }}>{ nom }</h1>

        {/*Ici on doit impl*/}

      </section>
  </>
  )
}

export default App
