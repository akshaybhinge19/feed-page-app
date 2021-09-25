import './App.css';
import {React,useState} from 'react';
import Firstpage from './components/Firstpage';
import Secondpage from './components/Secondpage';
import Thirdpage from './components/Thirdpage';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
// import { Route, Switch} from 'react-router-dom';
function App() {
  const [page, setPage] = useState(1);
  function handleChange(event,value){
      setPage(value);
  }
  const renderComponent=()=>{
    if(page===1){
      return <Firstpage/>
    }
    else if(page===2){
      return <Secondpage/>
    }
    else {
      return <Thirdpage/>
    }
  }
  return (
    <div className="page-main">
      <Typography align="left" variant='h3' component="div" color="neutral" sx={{fontFamily:'Raleway'}}>
        Feed Flash
      </Typography>
      {renderComponent()}      
      <Pagination count={3} align="center" color="secondary" size="large" page={page} onChange={handleChange}/>
    </div>
  );
}

export default App;
