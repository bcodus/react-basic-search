import './card.css'

const Card = (props) => {
    return ( 
        <div className='card-container'>
            <img src={`https://robohash.org/${props.monster.id}`} alt="monster" />
            <h1>{props.monster.name}</h1>
        </div>
     );
}
 
export default Card;

