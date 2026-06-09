
//const CardProduct  = (props) =>{  method 1
//const CardProduct  = ({nom, description, prix}) =>{ method 2
const CardProduct  = ({produit, onAjouter, onSupprimer, compteur}) =>{   {/*method 3*/}
    compteur++;
    return (
        <div key={produit.id}>
             <h2>{produit.nom}</h2>
            <p>{produit.description}</p>
            <span>{produit.prix}</span>
            <p>{compteur}</p>
            <button onClick={ ()=>onAjouter(produit)  }  >Ajout</button>
            <button onClick={()=> onSupprimer(produit.id)} >Supprimer</button>
        </div>
    )
}

export default CardProduct;

