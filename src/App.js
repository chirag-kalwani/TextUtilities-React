import './App.css';
import NavBar from "./Compoents/NavBar";
import TextForm from "./Compoents/TextForm";
import About from "./Compoents/About";


function App() {
    return (
        <>
            {/*NavBar*/}
            <NavBar title="React App" aboutText="About Us"/>
            <div className="container my-3">
                {/*<About/>*/}
                <TextForm heading={"Enter The Text To analyze"}/>
            </div>
        </>
    );
}

export default App;
