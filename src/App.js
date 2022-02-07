import React, {useState} from 'react';
import './App.css';
import NavBar from "./Compoents/NavBar";
import TextForm from "./Compoents/TextForm";


function App() {
    const [Mode, setMode] = useState('light'); // state variable enable or not
    const toggleMode = () => {
        if (Mode === 'dark') {
            setMode('Light');
            document.body.style.backgroundColor='white';
        }
        else {
            setMode('dark');
            document.body.style.backgroundColor='black';
        }
    }
    return (

        <>
            {/*NavBar*/}
            <NavBar title="Text-Utilities" aboutText="About Us" mode={Mode} toggleMode={toggleMode}/>
            <div className="container my-3">
                {/*<About/>*/}
                <TextForm heading={"Enter The Text To analyze"} mode={Mode}/>
            </div>
        </>
    );
}

export default App;
