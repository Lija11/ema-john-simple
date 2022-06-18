import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [language, setUser]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  }, []);

  // const language =[{name:'Javascript', framework:'PHP'},
  // {name:'Python', framework:'CSS'}, 
  // {name:'C++', framework:'SASS'},
  // {name:'Java', framework:'HTML'}];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          language.map(lng=> <Data lang={lng.name} key={lng.id} frame={lng.framework}></Data>)
        }
        <Count></Count>
      </header>
    </div>
  );
}

function Data(props){
  const design={
    border:'2px solid white',
    color:'green',
    padding:'5px',
    marginBottom:'10px'
  }
  return (
    <div style={design}>
      <h3>{props.lang} is the language .</h3>
      <h5>framework is {props.frame}</h5>
    </div>
  )
}


function Count(){
  const [count, setCount]= useState(0);
  
  const counthandler = () => setCount(count+1);
  const countDecrease = () => setCount(count-1);
  return (
    <div>
      <button onClick={counthandler}>Increase</button>
      <button onClick={countDecrease}>Decrease</button>
      <h3 > It is increase counter : {count}</h3>
      <Secondcount second={count+11}></Secondcount>
      <Secondcount second={count+13}></Secondcount>
      <Secondcount second={count+12}></Secondcount>
    </div>

  )
}

function Secondcount(props){
  return <h3>It is second count : {props.second}</h3>
}



export default App;
