// TODO: create a component that displays a single bakery item
export default function BakeryItem({props}){
    return(
        <>
        <h3>{props.name}</h3>
        <h4>{props.price}</h4>
        <p>{props.description}</p>
        <img src={props.image} />
        </>
    )
}