import React, {useState} from 'react'

export default function TextForm(props) {

    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const reset = () => {
        setText(''); 
        props.showAlert("Text has been cleared","success");
    }

    const reverseWord = () => {
        function reverseString(str) {
            return str.split("").reverse().join("");
        }
        let newText = reverseString(text);
        setText(newText);
        props.showAlert("word has been reversed","success");
    }

    const handleOutChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div>
                <div className="mb-3">
                    <h1>{props.title}</h1>
                    <textarea className="form-control" value={text} onChange={handleOutChange} id="exampleFormControlTextarea1" rows="6"
                    placeholder='Enter Text Here'></textarea>
                </div>
                    <button className="btn btn-primary" onClick={upperCase}>Convert to UpperCase</button>
                    <button className="btn btn-primary" onClick={lowerCase}>Convert to LowerCase</button>
                    <button className="btn btn-primary" onClick={reset}>Reset the Texts</button>
                    <button className="btn btn-primary" onClick={reverseWord}>Reverse word</button>
            </div>
            <div className="container">
                <h1>Your text Summary</h1>
                <p>{text.split(' ').length} words and {text.length} character</p>
                <p>{0.008*text.split(' ').length} time to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter tet to preview"}</p>
            </div>
        </>
    )
}
