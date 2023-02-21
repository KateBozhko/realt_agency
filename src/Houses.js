import Pictures from "./Pictures";
function Houses({houses}) {
    return(
        <div>
            {houses.map((house => {
const {id, searchTerm, name, adress, price, description, image} = house;
return(
    <div className="houses-wrapper" key={id}>
            <div className="order">
        <h1>{id} - {name}</h1>
  
    <Pictures picturesProp={image}/>

</div>
<div className="description">
<p>Description: {description.substring(0, 40)}
<button>See more</button></p>

<p>Adress: {adress}</p>
<p>Price: $ {price}</p>
    </div>
    </div>
)
            }))}
        </div>
    )
}
export default Houses;