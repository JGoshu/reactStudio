import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js"


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */



function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [total, setTotal] = useState(0)
  const cartItems = []
  
  // function updateCart(props){
  //   () => setTotal(total + item.price)
  //   cartItems.push(promps.name)
  // }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        // <p>Bakery Item {index}</p>
        <div>
       <BakeryItem props={item}/>  
       <button onClick={() => (setTotal(total + item.price), cartItems.push(item.name))}>Add to Cart</button>
      
       </div>

      ))}

      <div>
        <h2>Cart</h2>
        {cartItems.map((item) => (
          <div>
          <h3>{item}</h3>
          </div>
        ))
        
        
        }
        <h1>${total}</h1>
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
