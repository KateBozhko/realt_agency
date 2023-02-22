import { useState } from "react";
import Pictures from "./Pictures";
function Houses({houses}) {
const [showMore, setShowmore] = useState('false');
const showinfo = () => {
setShowmore(!showMore);
}
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
         <p>Description: {showMore ? description.substring(0, 170) + "...." : description}
            <button className="see" onClick={showinfo}>{showMore ? "See more" : "See less"}</button>
         </p>
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