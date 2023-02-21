
import {useState} from "react"
function Pictures({picturesProp}) {

    const [picture, setPicture] = useState(0);
const nextBtn = () => {
setPicture((picture => {
    picture ++;
    if(picture > picturesProp.length - 1) {
        picture = 0
    }
    return picture
    
}))
}
const prevBtn = () => {
setPicture((picture => {
    picture --;
    if(picture < 0) {
    return picturesProp.length -1
    }
    return picture
}))
}

    return(
        <div>
<img src={picturesProp[picture]} width="400px" height="250px" alt="home"/>
<button className="btnPic" onClick={prevBtn}>-</button>
<button className="btnPic" onClick={nextBtn}>+</button>
        </div>
    )
}
export default Pictures;