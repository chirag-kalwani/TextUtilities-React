import React, {useState} from 'react';

function TextForm(props) {
    const handleUpclick = () => {
        if (text.length <= 0) {
            props.showAlert('Enter the Text to Convert UpperCase!', 'warning');
            return;
        }
        props.showAlert('Converted to UpperCase!', 'success');
        setText(text.toUpperCase());
    }
    const handlelowerClick = () => {
        if (text.length <= 0) {
            props.showAlert('Enter the Text to Convert LowerCase!', 'warning');
            return;
        }
        props.showAlert('Converted to LowerCase!', 'success');
        setText(text.toLowerCase());
    }
    const handleClearClick = () => {
        props.showAlert('Clear Text', 'success');
        setText('');
    }
    const handleOnchange = (event) => {
        setText(event.target.value);
    }
    let countWord = () => {
        if (text.length <= 0)
            return 0;
        return text.endsWith(" ") === true ? text.split(/\s+/g).length - 1 : text.split(/\s+/g).length
    };
    const handleCopyText = () => {
        if (text.length <= 0) {
            props.showAlert('Enter Text to copy', 'warning');
            return;
        }
        props.showAlert('Text has been Copied', 'success');
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
                <p className={`text-${changeTextColor()}`}>{countWord()} words. {text.length > 0 ? text.match(/\w/g).length : 0} characters</p>
                <p className={`text-${changeTextColor()}`}>Average time required to
                    read: {Math.round((text.length > 0 ? text.match(/\w/g).length * 0.008 : 0) * 100) / 100} minutes</p>
                <h2 className={`text-${changeTextColor()}`}>Preview: </h2>
                <p className={`text-${changeTextColor()}`}>{text.length > 0 ? text : 'Enter the text to preview.'}</p>
            </div>
        </>
    );
}

export default TextForm;