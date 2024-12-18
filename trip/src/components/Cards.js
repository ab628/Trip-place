
import React ,{ useState } from "react";

function Cards({id,name,info,image,price ,removeTour, favTour}){

    const[readmore , setReadMore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....`


    function chandeHandler(){
        setReadMore(!readmore);
    }

    // function removeHandler(){
    //     removeTour(id);
    // }
    return(

        <div className="card">
            
            <div className="img">

                <img src={image} alt="" className="image"></img>

            </div>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price"> ₹ {price}</h4>
                    <h4 className="tour-city">{name}</h4>
                </div>

                <div className="description">
                    {description} 
                     <span className="read-more" onClick = {chandeHandler} >
                        {readmore ? ` Show Less`: ` Read More`}
                     </span>
                </div>
            </div>

            <div className="btn">

            <button className="btn2" onClick = {() => favTour(id)} > 
              Intrested
            </button>
            <button className="btn1" onClick = {() => removeTour(id)} > 
             Not Intrested
            </button>

            </div>

        </div>
    )
}
export default Cards;

