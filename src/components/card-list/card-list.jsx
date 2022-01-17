import './card-list.css'
import Card from '../card/card';

const CardList = (props) => {
 
    return ( 
        <div className='card-list'>
      
            { props.monsters.map(monseter => 
                (<Card key={monseter.id} monster={monseter} />)
            
            )}


        </div>

     );
}
 
export default CardList;