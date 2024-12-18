
import Cards from "./Cards";

function Tours({tours, removeTour, favTour}){
    return(
        <div className="container">
            <div>
                <h2 className="title">Trip With Abhay</h2>
            </div>

            <div className="cards">
                {
                    tours.map( (tour)  => {           
                        return <Cards key={tour.id} {...tour} removeTour={removeTour} favTour={favTour}></Cards>
                        
                    })
                }
            </div>

        </div>
    )
}
export default Tours;