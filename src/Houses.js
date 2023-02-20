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
    </div>
<div>
   
    <Pictures picturesProp={image}/>
   
</div>
<div>
<p>Description: {description.substring(0, 40)}</p>
</div>
<p>Adress: {adress}</p>
<p>Price: $ {price}</p>
    </div>
)
            }))}
        </div>
    )
}
export default Houses;