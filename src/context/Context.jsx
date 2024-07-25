import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    

    const onSent = async (prompt) => {
        await run(prompt)
    }

    const contextValue = {

    }

    return (
        <contextProvider value={contextValue}>
            {props.children}
        </contextProvider>
    )

}

export default ContextProvider;
