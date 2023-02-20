


function Houses({houses}) {
    return(
        <div>
            {houses.map((house => {
const {id, searchTerm, name, adress, price, description, image} = house;
return(
    <div key={id}>
            <div>
        <h1>{id} - {name}</h1>
    </div>
<div>
    <img src={image}width="400px" alt="home" />
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