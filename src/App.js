import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Footer from './components/footer';
import C1 from './components/body/conditions/c1';
import Condition from './components/body/conditions/condition';
import { useState } from 'react';

function App() {
let value='test';
const [parentCount, setParentCount] = useState(10)
  return (
    <div className="App">
      <Header/>
      <h1>appCount{parentCount}</h1>
      <Condition countValue={parentCount} setParentCount={setParentCount} shouldShowC1={value}/>
      <Condition countValue={parentCount} children={value} setParentCount={setParentCount} >
        this is inside condition 
      </Condition>
      <Footer/>
    </div>
  );
}

export default App;
