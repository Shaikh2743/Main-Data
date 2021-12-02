import React,{useState}  from 'react';
import './App.css';
import Pagination from './Components/Pagination/Pagination';
import Profile from './Components/Profile/Profile';

function App() {
  
  const [state, setstate] = useState(1);
 
  return (
    <div className="mainApp">
      <Profile  state={state}/>
      <Pagination setstate={setstate} state={state}/>
    </div>
  );
}

export default App;
