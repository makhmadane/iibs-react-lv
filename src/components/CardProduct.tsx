
//const CardProduct  = (props) =>{  method 1
//const CardProduct  = ({nom, description, prix}) =>{ method 2
const CardProduct  = ({produit, onAjouter, onSupprimer}) =>{   {/*method 3*/}
    return (
        <div>
             <h2>{produit.nom}</h2>
            <p>{produit.description}</p>
            <span>{produit.prix}</span>
            <button onClick={ ()=>onAjouter(produit)  }  >Ajout</button>
            <button onClick={()=> onSupprimer(produit.id)} >Supprimer</button>
        </div>
    )
}

export default CardProduct;

