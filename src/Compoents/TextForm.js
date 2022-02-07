import React, {useState} from 'react';
import PropTypes from 'prop-types';


TextForm.propTypes = {
    heading: PropTypes.string
};

function TextForm(props) {
    const handleUpclick = () => {
        setText(text.toUpperCase());
    }
    const handlelowerClick = () => {
        setText(text.toLowerCase());
    }
    const handleClearClick = () => {
        var s = '';
        setText(s);
    }
    const handleOnchange = (event) => {

        setText(event.target.value);
    }
    let countWord = () => {
        return text.endsWith(" ") === true ? text.split(" ").length - 1 : text.split(" ").length
    };
    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" value={text} placeholder={'Enter Text Here'}
                              onChange={handleOnchange} id="myBox" rows="8"/></div>
                <button type="button" className="btn btn-success my-3 mx-1" onClick={handleUpclick}>Convert to
                    UpperCase
                </button>
                <button type="button" className="btn btn-success my-3 mx-1" onClick={handlelowerClick}>Convert to
                    LowerCase
                </button>
                <button type="button" className="btn btn-danger my-3 mx-1" onClick={handleClearClick}>Clear Text
                </button>
            </div>
            <div className="container my-2">
                <h2> Your Text summary:</h2>
                <p>{countWord()} words. {text.length} characters</p>
                <p>Average time required to read: {Math.round((text.split(" ").length * 0.008) * 100) / 100} minutes</p>
                <h2>Preview: </h2>
                <p>{text}</p>
            </div>
        </>
    );
}

export default TextForm;