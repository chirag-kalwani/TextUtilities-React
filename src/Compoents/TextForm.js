import React, {useState} from 'react';
import PropTypes from 'prop-types';


TextForm.propTypes = {
    heading: PropTypes.string
};

function TextForm(props) {
    const handleUpclick = () => {
        console.log("Uppercase was clicked");
        setText(text.toUpperCase());
    }
    const handleOnchange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"/>
            </div>
            <button type="button" className="btn btn-success my-3" onClick={handleUpclick}>Convert to uppercase</button>
        </div>
    );
}

export default TextForm;