import './App.css';

const app = {
  title: "Indecision app",
  subtitle:"Put your life in the hands of a computer",
  options:['one','two']
}


// eslint-disable-next-line 
function App() {
  
  return (
    <div className="App alert alert-success">
      <h1>{app.title}</h1>
      { (app.subtitle) && <p>{app.subtitle}</p>}
      <p>{ (app.options.length>0) ? "Here are your options" : "No options avilables"}</p>
      <ol>
      {app.options.map(itm => <li>{itm}</li>)}
      </ol>
      
      
    </div>
  );
}

const user = {
   username : "hariprasad",
   userAge : 26,
   userLocation : "chennai"
}


function getLocation(location){
  if(location) return <p>{location}</p>
  return "Unknown"
}

//Undefined null and boolean are ignored by jsx
// eslint-disable-next-line 
function App1() {
  return(
    <div>
      <h1>{user.username ? user.username : "Anonymous"}</h1>
      {(user.age && user.age>=18) && <p>Age:{user.userAge}</p>}
      {getLocation(user.userLocation)}
    </div>
    
  )
}

export default App;

