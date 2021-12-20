
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from './services/axios'
import { setUpdatedBars, setUpdatedPies } from './store/reducers/appReducer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SelectChart from './screens/SelectChart';
import Bar from './screens/Bar';
import Pie from './screens/Pie';

function App() {

  const dispatch = useDispatch();
  

  useEffect(()=>{
    let storeObject = {bar:[],pie:[]}
    debugger
    async function fectchData(){
      const req = await axios.get();
      return req
    }

    fectchData().then(res=>{
      res.data.forEach(element => {
        if(element.type === 'Bar')
          storeObject.bar.push(element.elements)
        else
          storeObject.pie.push(element.elements)
      });
      dispatch(setUpdatedBars(storeObject.bar))
      dispatch(setUpdatedPies(storeObject.pie))
    })
  },[dispatch])


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/bar" element={<Bar/>}></Route>
          <Route path="/pie" element={<Pie/>}></Route>
          <Route path="/" element={<SelectChart/>}></Route>
          <Route path="*" component={<SelectChart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
