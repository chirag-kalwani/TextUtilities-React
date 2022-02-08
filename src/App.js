import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import NavBar from "./Compoents/NavBar";
import TextForm from "./Compoents/TextForm";
import Alert from "./Compoents/Alert";
import About from "./Compoents/About";

function App() {
    const [Mode, setMode] = useState('dark'); // state variable enable or not
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }

    const toggleMode = () => {
        if (Mode === 'dark') {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert('ChangedTheme to Light', 'success');
            document.title = 'TextUtils - Light';
        } else {
            setMode('dark');
            document.body.style.backgroundColor = 'black';
            showAlert('ChangedTheme to Dark', 'success');
            document.title = 'TextUtils - Dark';
        }
    }
    return (
        <>
            <Router>
                <NavBar title="Text-Utilities" aboutText="About Us" mode={Mode} toggleMode={toggleMode}/>
                <Alert alert={alert}/>
                <div className="container my-3">
                    <Switch>
                        <Route exact path="/about">
                            <About mode={Mode}/>
                        </Route>
                        <Route exact path="/">
                            <TextForm heading={"Enter The Text To analyze"} showAlert={showAlert} mode={Mode}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default App;
