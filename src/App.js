import './App.css';
import { useEffect, useState } from 'react';

function App() {


  const [food, setFood] = useState([])
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
    .then(res => res.json())
    .then(data => setFood(data.meals))
  },[])
  return(
    <>
    {
      console.log(food)
    }
    <div className="container">
      <h2 className="text-center mt-5">Search a meal what do you want</h2>
      <div className="d-flex mt-5 mx-auto px-3" style={{maxWidth:'40rem'}}>
      <input className="form-control" type="text" name="" placeholder="Search by first letter of food"/>
      <button  className="btn btn-primary">Search</button>
      </div>
    </div>
    </>
   
  )
}


export default App
