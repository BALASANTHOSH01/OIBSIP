import React from "react";
import { useState } from "react";
import './App.css';

function App(){

    const [result, setresult] = useState("");

    const main = (e)=>{
        setresult(result.concat(e.target.name));
    }

    const clear = ()=>{
        setresult("");
    }

    const backspace = ()=>{
        setresult(result.slice(0, -1));
    }

    const calculate = ()=>{

        try{
            setresult(eval(result).toString());
        }catch(err){
            setresult("Error")
        }
    }
    

    return(
        <>
            <div className="container">
                <form>
                    <input type="text" value={result} className="input" />
                </form>

                <div className="btn-container">
                    <button id="clear" className="unique" onClick={clear}>Clear</button>
                    <button id="c" className="unique" onClick={backspace}>C</button>
                    <button name='/' className="unique" onClick={main}>&divide;</button>
                    <button name='7' onClick={main}>7</button>
                    <button name='8' onClick={main}>8</button>
                    <button name='9' onClick={main}>9</button>
                    <button name='*' className="unique" onClick={main}>*</button>
                    <button name='6' onClick={main}>6</button>
                    <button name='5' onClick={main}>5</button>
                    <button name='4' onClick={main}>4</button>
                    <button name='-' className="unique" onClick={main}>-</button>
                    <button name='3' onClick={main}>3</button>
                    <button name='2' onClick={main}>2</button>
                    <button name='1' onClick={main}>1</button>
                    <button name='+' className="unique" onClick={main}>+</button>
                    <button name='0' onClick={main}>0</button>
                    <button name='.' onClick={main}>.</button>
                    <button id="result" className="unique" onClick={calculate}>=</button>
                </div>
            </div>
        </>
    );
}

export default App;