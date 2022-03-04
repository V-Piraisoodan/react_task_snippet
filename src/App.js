import logo from './logo.svg';
import './App.css';

function App() {

return (
<div className="App">
  {/* tittle name */}
  <p className='tittle'>SIMPLE PRICING SNIPPET </p> 
  <div className='container'>  
   
   {/* first table */}
      <div className='child first-child'>
        <div className='heading'>
         <p className='subscription'>FREE</p>
         <p className='price'><span className='heading-rupees'>₹0</span> /month</p>
        </div>
        {/*table contents */}
        <div className='content'>
         <p className='active content-text'>✔  Single User</p>
         <p className='active content-text'>✔  5GB Storage</p>
         <p className='active content-text'>✔  Unlimited Public Projects</p>
         <p className='active content-text'>✔  Community Access</p>
         <p className='hidden content-text'>✖  Unlimited Private Projects</p>
         <p className='hidden content-text'>✖  Dedicated Phone Support</p>
         <p className='hidden content-text'>✖  Free Subdomain</p>
         <p className='hidden content-text'>✖  Monthly Status Reports</p>
         
        </div>
        <button className='button'>BUTTON</button>
      </div>

      {/* second table */}
      <div className='child second-child'>
        <div className='heading'>
         <p className='subscription'>PLUS</p>
         <p className='price'><span className='heading-rupees'>₹700</span> /month</p>
        </div>
        <div className='content'>
         <p className='active content-text'>✔  <b>5 User</b></p>
         <p className='active content-text'>✔  50GB Storage</p>
         <p className='active content-text'>✔  Unlimited Public Projects</p>
         <p className='active content-text'>✔  Community Access</p>
         <p className='active content-text'>✔  Unlimited Private Projects</p>
         <p className='active content-text'>✔  Dedicated Phone Support</p>
         <p className='active content-text'>✔  Free Subdomain</p>
         <p className='hidden content-text'>✖  Monthly Status Reports</p>
         
        </div>
        <button className='button'>BUTTON</button>
      </div>
      
      {/* third table */}
      <div className='child third-child'>
        <div className='heading'>
         <p className='subscription'>PRO</p>
         <p className='price'><span className='heading-rupees'>₹3750</span> /month</p>
        </div>
        <div className='content'>
         <p className='active content-text'>✔  <b>Unlimited User</b></p>
         <p className='active content-text'>✔  150GB Storage</p>
         <p className='active content-text'>✔  Unlimited Public Projects</p>
         <p className='active content-text'>✔  Community Access</p>
         <p className='active content-text'>✔  Unlimited Private Projects</p>
         <p className='active content-text'>✔  Dedicated Phone Support</p>
         <p className='active content-text'>✔  <b>Unlimited</b> Free Subdomain</p>
         <p className='active content-text'>✔  Monthly Status Reports</p>
         
        </div>
        <button className='button'>BUTTON</button>
      </div>
  </div>     

</div>
);
}

export default App;
