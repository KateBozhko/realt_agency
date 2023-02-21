import Intro from "./Intro";
import Buttons from "./Buttons";
import Houses from "./Houses";
import { data } from "./data";
import { useState } from "react"
import Footer from "./Footer";

function Shop() {
    const [houses, setHouses] = useState(data);

const newHouses = (searchTerm) => {
    const newHome = data.filter(element => element.searchTerm === searchTerm);
    setHouses(newHome);
}
return(
        <div>
            <Intro/>
            <Buttons newHouses={newHouses}/>
            <Houses houses={houses}/>
            <Footer/>
        </div>
)
}
export default Shop;