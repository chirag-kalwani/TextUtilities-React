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
        setText('');
    }
    const handleOnchange = (event) => {
        setText(event.target.value);
    }
    let countWord = () => {
        return text.endsWith(" ") === true ? text.split(" ").length - 1 : text.split(" ").length
    };
    const handleCopyText = () => {
        let text1 = document.getElementById('myBox');
        text1.select();
        navigator.clipboard.writeText(text1.value).then(r => "");
    }
    const [text, setText] = useState('');
    const changeTextColor = () => {
        if (props.mode === 'dark')
            return 'light'
        return 'dark'
    }
    return (
        <>
            <div className="container">
                <h1 className={`text-${changeTextColor()}`}>{props.heading}</h1>
                <div className="form-group">
                    <textarea className={`form-control bg-${props.mode} text-${changeTextColor()}`} value={text}
                              placeholder={'Enter Text Here'}
                              onChange={handleOnchange} id="myBox" rows="8"/></div>
                <button type="button" className="btn btn-success my-3 mx-1" onClick={handleUpclick}>Convert to
                    UpperCase
                </button>
                <button type="button" className="btn btn-success my-3 mx-1" onClick={handlelowerClick}>Convert to
                    LowerCase
                </button>
                <button type="button" className="btn btn-danger my-3 mx-1" onClick={handleClearClick}>Clear Text
                </button>
                <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleCopyText}>Copy Text
                </button>
            </div>
            <div className="container my-2">
                <h2 className={`text-${changeTextColor()}`}> Your Text summary:</h2>
                <p className={`text-${changeTextColor()}`}>{countWord()} words. {text.length} characters</p>
                <p className={`text-${changeTextColor()}`}>Average time required to
                    read: {Math.round((text.split(" ").length * 0.008) * 100) / 100} minutes</p>
                <h2 className={`text-${changeTextColor()}`}>Preview: </h2>
                <p className={`text-${changeTextColor()}`}>{text.length > 0 ? text : 'Enter the text to preview.'}</p>
            </div>
        </>
    );
}

export default TextForm;