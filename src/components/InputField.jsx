import React from 'react'
import './InputField.css';
const InputField = ({initialInvestment,annualInvestment,expectedReturn,duration,handleOnChange,setCalculateToTrue}) => {


    const handleOnClick = () =>{
        if(initialInvestment>0 && annualInvestment >0 && expectedReturn >0 && duration>0){
            setCalculateToTrue();
        }
    }
    

   
  
  return (
    <div className='container'>
        <div className="input--container">

        <div className="input--field">
            <h3>Initial Investment</h3>
            <input value={initialInvestment} onChange={(e)=>handleOnChange('initialInvestment',e.target.value)} type="number" />
        </div>


        <div className="input--field">
            <h3>Annual Investment</h3>
            <input value={annualInvestment} onChange={(e)=>handleOnChange('annualInvestment',e.target.value)} type="number" />
        </div>


        <div className="input--field">
            <h3>Expected Return</h3><span>(in %)</span>
            <input value={expectedReturn} onChange={(e)=>handleOnChange('expectedReturn',e.target.value)} type="number" />
        </div>


        <div className="input--field">
            <h3>Duration</h3><span>(in yrs)</span>
            <input value={duration} onChange={(e)=>handleOnChange('duration',e.target.value)} type="number" />
        </div>

        </div>

        <div className="input--btn">

        <button onClick={handleOnClick} >Calculate</button>

        </div>

        

        


       

    </div>
  )
}

export default InputField