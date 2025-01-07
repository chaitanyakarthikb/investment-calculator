
import './App.css';
import InputField from './components/InputField'
import InterestTable from './components/InterestTable';
import { useState } from 'react';
function App() {
    const [initialInvestment,setInitialInvestment] = useState(0);
    const [annualInvestment,setAnnualInvestment] = useState(0);
    const [expectedReturn,setExpectedReturn] = useState(0);
    const [duration,setDuration] = useState(0);
    const [calculate,setCalculate] = useState(false);

    const handleOnChange = (name,value) => {

      if(name === "initialInvestment") setInitialInvestment(value)
      if(name === "annualInvestment") setAnnualInvestment(value)
      if(name === "expectedReturn") setExpectedReturn(value)
      if(name === "duration") setDuration(value)

    }

    const setCalculateToTrue = () =>{
      setCalculate(true)
      console.log(calculate)
    }
  return (
    <div>
    <InputField initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration} handleOnChange={handleOnChange} setCalculateToTrue={setCalculateToTrue}/>

    <InterestTable initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration} calculate={calculate} /> 
    
    </div>

  );
}

export default App;
