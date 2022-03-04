import logo from './logo.svg';
import './App.css';

function App() {

  const snippet = [{
    head : "FREE",
    cost : "$0",
    service_provided : [
      "✔ Single User",
      "✔  5GB Storage",
      "✔  Unlimited Public Projects",
      "✔  Community Access",
    ],
    service_restricted : [
      "✖  Unlimited Private Projects",
      "✖  Dedicated Phone Support",
      "✖  Free Subdomain",
      "✖  Monthly Status Reports",
    ]

    
  },
  // {
  //   head : "PLUS",
  //   cost : "$9",
  //   one : "✔ 5 Users",
  //   two : "✔  50GB Storage",
  //   three : "✔  Unlimited Public Projects",
  //   four : "✔  Community Access",
  //   five : "✔ Unlimited Private Projects",
  //   six : "✔  Dedicated Phone Support",
  //   seven : "✔  Free Subdomain",
  //   eight : "✖  Monthly Status Reports", 
  // },{
  //   head : "PRO",
  //   cost : "$49",
  //   one : "✔ Unlimited Users",
  //   two : "✔  150GB Storage",
  //   three : "✔  Unlimited Public Projects",
  //   four : "✔  Community Access",
  //   five : "✔  Unlimited Private Projects",
  //   six : "✔  Dedicated Phone Support",
  //   seven : "✔  Unlimited Free Subdomain",
  //   eight : "✔  Monthly Status Reports", 
  // },
]

return (
<div className="App">
  <p className='topic'>SIMPLE PRICING SNIPPET </p> 
  <div className='container'>  
   
      <div className='child first-child'>
        <div className='heading'>
         <p className='subscription'>FREE</p>
         <p className='price'><span className='heading-rupees'>$0</span>/month</p>
        </div>
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

      <div className='child second-child'>
        <div className='heading'>
         <p className='subscription'>PLUS</p>
         <p className='price'><span className='heading-rupees'>$9</span>/month</p>
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

      <div className='child third-child'>
        <div className='heading'>
         <p className='subscription'>PRO</p>
         <p className='price'><span className='heading-rupees'>$49</span>/month</p>
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
 
      {/* <section className='snippets'>
        {snippet.map(({head,cost,one,two,three,four,five,six,seven,eight})=>(
          <Snippets head={head} cost={cost} one={one} two={two} three={three} four={four} five={five} six={six} seven={seven} eight={eight}/>
         ))}
      </section> */}
  </div>     
         
         
          
         
           
          

          
          
        

</div>
);
}

export default App;

function Snippets({head,cost,one,two,three,four,five,six,seven,eight}){
return(
/* <div className='snippet-body'> */
  <div className='snippet-container'>
    <div className='heading'>
      <p className='heading-type'>{head}</p>
      <p className='heading-cost'><span className='heading-rupees'>{cost}</span>/month</p>
    </div>
    <div className='content'>
      
        <p className='active content-text'>{one}</p>
        <p className='active content-text'>{two}</p>
        <p className='active content-text'>{three}</p>
        <p className='active content-text'>{four}</p>
        <p className='hidden content-text'>{five}</p>
        <p className='hidden content-text'>{six}</p>
        <p className='hidden content-text'>{seven}</p>
        <p className='hidden content-text'>{eight}</p>

    </div>
    <button className='button'>BUTTON</button>

  </div>
// </div>  
)
}