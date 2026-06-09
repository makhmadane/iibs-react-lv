import {useEffect, useState} from 'react'

import './App.css'
import CardProduct from "./components/CardProduct.tsx";

function App() {


 /* const produits = [
    {id:1, nom:'laptop', description:'machine puissant', prix: 1000},
    {id:2, nom:'Asus', description:'machine leger', prix: 2000},
    {id:3, nom:'HP', description:'machine rapide', prix: 3000},
    {id:4, nom:'HP', description:'machine rapide', prix: 3000}
  ]*/

  const [produits, setProduits] = useState(
      [
        {id:1, nom:'laptop', description:'machine puissant', prix: 1000},
        {id:2, nom:'Asus', description:'machine leger', prix: 2000},
        {id:3, nom:'HP', description:'machine rapide', prix: 3000},
        {id:4, nom:'HP', description:'machine rapide', prix: 3000}
      ]
  )

  const [posts, setPosts] = useState([]);

  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [prix, setPrix] = useState('');

  useEffect(() => {
    const charger = async () => {

        const reponse = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!reponse.ok) throw new Error('Erreur reseau');

        const data = await reponse.json();

        setPosts(data);

    };

    charger(); // Appel immediat

  },[]);


  ///JSX

  const ajoutPanier = (produit) =>{
    produits.push(produit);
  }

  const supprimerPanier = (id) =>{
     setProduits(produits.filter(produit => produit.id != id));
  }

  const [compteur, setCompteur] = useState(0);  //useState

  //let compteur = 0;
  // compteur++;

  const handleSubmit = (e) => {

    e.preventDefault(); // Empecher le rechargement de la page
    const produit = {id:'', nom: nom, description: description, prix: prix};
    ajoutPanier(produit);

    setNom('');
    setDescription('');
    setPrix('');
  };



    return (
  <>
    <div>
      <p>Compteur : {compteur}</p>
      {/* setCompteur met a jour et force le re-rendu */}
      <button onClick={() => setCompteur(compteur + 1)}>+1</button>
      <button onClick={() => setCompteur(compteur - 1)}>-1</button>
      <button onClick={() => setCompteur(0)}>Reset</button>
    </div>

    {/*Fragment*/ }

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
              compteur = {compteur}
          />
      ))
    }

    {/*
      posts.map((post) =>(
           <li key={post.id}> {post.title}</li>
      ))
    */}


    {/*<section id="center">
        <h1 className="card">Bonjour {nom}</h1>
        <br/>
        <input/>
        <h1 style={styles}>{ valide ? "Yes" : "NO"}</h1>
        <h1 style={{ color: 'blue' }}>{ nom }</h1>

      </section>*/}

    <form onSubmit={handleSubmit} >

      <input
          type="text"
          placeholder="Nom de l'etudiant"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
      />
      <input
          type="number"
          placeholder="Prix"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
      />
      <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>

  </>
  )
}

export default App
