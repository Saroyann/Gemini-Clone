import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function() {
setResultData(prev=>prev+nextWord);
        }, 75*index)
    };

    const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response3;
    if(prompt !== undefined) {
        response3 = await run(prompt);
        setRecentPrompt(prompt);
    }
    else {
        setPrevPrompts(prev=>[...prev, input]);
    }
    setRecentPrompt(input);
    setPrevPrompts(prev=>[...prev, input]);

    const responseFunction = await run(input);

    if (typeof responseFunction !== "function") {
        console.error("Invalid response:", responseFunction);
        setLoading(false);
        setInput("");
        return;
    }

    const response = responseFunction(); // Execute the returned function

    if (typeof response !== "string") {
        console.error("Invalid response:", response);
        setLoading(false);
        setInput("");
        return;
    }

    let responseArray = response.split("**");
    let newResponse = "";

    for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
            newResponse += responseArray[i];
        } else {
            newResponse += `<b>${responseArray[i]}</b>`;
        }
    }

    let newResponse2 = newResponse.split("*").join("</br>");

    let newResponseArray = newResponse2.split(" ");

    for(let i = 0 ; i < newResponseArray.length ; i++) {
        const nextWord = newResponseArray[i];
        delayPara(i, nextWord + " ");
    }
    setLoading(false);
    setInput("");
};


    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
