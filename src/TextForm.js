import { prettyDOM } from "@testing-library/react";
import React, { useState } from "react";

function TextForm(props) {

    const [inputs, setInputs] = useState({ textarea1: '', textarea2: '' });

    const upperCase = () => {
        setInputs((prevInputs) => ({ ...prevInputs, textarea2: prevInputs.textarea1.toUpperCase() }));
    }

    const lowercase = () => {
        setInputs((prevInputs) => ({ ...prevInputs, textarea2: prevInputs.textarea1.toLowerCase() }));
    }

    const camelCase = () => {
        setInputs((prevInputs) => ({ ...prevInputs, textarea2: convertToCamelCase(prevInputs.textarea1) }));
    }

    const snakeCase = () => {
        setInputs((prevInputs) => ({ ...prevInputs, textarea2: convertToSnakeCase(prevInputs.textarea1) }));
    }

    const clearText = () => {
        setInputs({ textarea1: '', textarea2: '' })
    }

    const handleOnChange = (event) => {
        console.info("Handle on change was invoked")
        setInputs((prevInputs) => ({ ...prevInputs, textarea1: event.target.value }))
    }

    const convertToCamelCase = (text) => {
        const lines = text.split("\n")
        console.log(lines.length)
        const camelCaseText = []

        lines.forEach((line) => {
            console.log("Converting line :::: " + line)
            const lowecaseLine = removeExtraSpaces(line.toLowerCase())
            const splittedLine = lowecaseLine.split(' ')
            const firstWord = splittedLine[0]
            const remainingWords = splittedLine.slice(1, splittedLine.length).map((word) => {
                const firstChar = word[0].toUpperCase();
                const remainingChars = word.slice(1, word.length);
                const convertedword = firstChar + remainingChars.toString();
                console.log("Converted word : " + convertedword);
                return convertedword;
            })

            camelCaseText.push(firstWord + remainingWords.join(''))
        })

        console.log("camel case ::: " + camelCaseText.join("\n"))

        return camelCaseText.join('\n');
    }


    const convertToSnakeCase = (text) => {
        const lines = text.split("\n")
        console.log(lines.length)
        const snakeCaseText = []

        lines.forEach((line) => {
            console.log("Converting line :::: " + line)
            const lowecaseLine = removeExtraSpaces(line.toLowerCase())
            const splittedLine = lowecaseLine.split(' ')
            snakeCaseText.push(splittedLine.join("_"))
        })

        return snakeCaseText.join("\n")
    }

    const getWordCount = (text) => {
        return removeExtraSpaces(text).split(' ').length - 1
    }

    const removeExtraSpaces = (text) => {
        return text.replace(/  +/g, ' ')
    }

    const setTextAreaBgColor = (mode) => mode === 'dark' ? '#6c757d' : "white"

    const setTextColor = (mode) => mode === 'dark' ? 'white' : "black"

    const handleClear = () => {
        setInputs({ textarea1: '', textarea2: '' }); // Clear the form data
    };

    return (
        <>
            <form>
                <div style={{ display: 'flex' }}>
                    <textarea
                        name="textarea1"
                        value={inputs.textarea1}
                        onChange={handleOnChange}
                        placeholder="Enter text here"
                        style={{ flex: 1, margin: '20px', padding: '200px', boxSizing: 'border-box', verticalAlign: 'top', paddingTop: '0px', paddingLeft: '0px', backgroundColor: setTextAreaBgColor(props.mode), color: setTextColor(props.mode) }}
                    ></textarea>
                    <div className="d-grid gap-1">
                        <button className={`btn btn-${props.mode === 'light'? 'primary': 'secondary'} btn-sm`} type="button" onClick={handleClear}>Clear Text</button>
                        <button className={`btn btn-${props.mode === 'light'? 'primary': 'secondary'} btn-sm`} type="button" onClick={upperCase}>Upper Case</button>
                        <button className={`btn btn-${props.mode === 'light'? 'primary': 'secondary'} btn-sm`} type="button" onClick={lowercase}>Lower Case</button>
                        <button className={`btn btn-${props.mode === 'light'? 'primary': 'secondary'} btn-sm`} type="button" onClick={snakeCase}>Snake Case</button>
                        <button className={`btn btn-${props.mode === 'light'? 'primary': 'secondary'} btn-sm`} type="button" onClick={camelCase}>Camel Case</button>
                    </div>
                    <textarea
                        name="textarea2"
                        readOnly
                        value={inputs.textarea2}
                        style={{ flex: 1, margin: '20px', padding: '200px', boxSizing: 'border-box', verticalAlign: 'top', paddingTop: '0px', paddingLeft: '0px', backgroundColor: setTextAreaBgColor(props.mode), color: setTextColor(props.mode) }}
                    ></textarea>
                </div>
                <div style={{ color: setTextColor(props.mode) }}>
                    <h3>Text analysis</h3>
                    <p>Entered text contains {getWordCount(inputs.textarea1)} words and {inputs.textarea1.length} characters</p>
                </div>
            </form>
        </>
    )
}

export default TextForm;