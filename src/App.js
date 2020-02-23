import React from 'react';

import './App.css';
import pic from '../src/e59.png'
import pizza from '../src/pizza.png'
import preg from '../src/preg.jpg'
import dad from '../src/dad.png'

function App() {
  return (
    <div style={{display:'flex'}}className="App" >
      <div style={{'color':'yellow','background':'green'}}>
        <center ><h1 style={{fontSize:'32px'}}>
        <img className="" src={dad}   style={{maxWidth:'30%',height:'auto',borderRadius:'80px'}} />
        !jeeeeeefs pizza!
<img className="" src={dad}   style={{maxWidth:'30%',height:'auto',borderRadius:'80px'}} />
        </h1></center>
        
<img className="" src={pic}   style={{maxWidth:'30%',height:'auto',borderRadius:'80px'}} />
<img className="" src={pizza}   style={{maxWidth:'30%',height:'auto'}} />
<img className="" src={preg}   style={{maxWidth:'30%',height:'auto'}} />
<center><h1>We only do pepperoni, cheese is extra</h1></center>
<center><h1>world famlous pitzah! ah ha
</h1></center>
<center><h1>A STUFFED CRUST that WILL MAKE U BUST!</h1></center>
<center><h1 style={{'fontFamily': 'Courier New'}}>FREE PERSONAL PETZAH</h1></center>
  
<center><h1 style={{'fontFamily': 'Courier New'}}>CALL NOW 24/7 FREE DELIVERY </h1></center>
<center><h1 style={{'fontFamily': 'Courier New'}}>first order is FREE!!!!</h1></center>



   </div>
    </div>
  );
}

export default App;
