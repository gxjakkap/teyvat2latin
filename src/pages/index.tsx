import { createElement, useState } from "react"
import Page from "../components/page"

import { QWERTY, ALPHABET } from "../lib/keyboard"
import useWindowDimensions from "../hooks/dim"

export default function IndexPage () {
    const [text, setText] = useState("")

    const { width } = useWindowDimensions()

    const keyboardComm = (command: string) => {
        if (command === "del"){
            setText(text.slice(0, -1))
            return
        }

        if (command === "space"){
            setText(text + " ")
            return
        }

        if (command === "copy"){
            navigator.clipboard.writeText(text).then(() => alert("Copied result to clipboard!"))
            return
        }

        if (command === "clear"){
            setText("")
            return
        }
        
        if (!ALPHABET.includes(command)) return

        setText(text + command)
    }

    const generateTeyvatKeyboard = () => {
        const keyboardRows = QWERTY.map((row) => {
            const keys = row.map((letter) => {
                return createElement("button", 
                    { 
                        className: "flex flex-grow h-12 border-solid border-2 justify-center items-center rounded-md text-slate-50 text-2xl px-2 teyvat-font",
                        onClick: (() => keyboardComm((letter === "⬅") ? "del" : letter))
                    }, 
                    letter
                )
            })
            return createElement("div", { className: "flex flex-grow relative" }, keys)
        })
        return createElement("div", { className: "w-full flex flex-col justify-center mt-5" }, keyboardRows)
    }

    if (width < 612){
        return (
            <div className="w-full">
                    <div className={`flex flex-col gap-y-2 min-h-screen bg-[#2d325a] justify-center items-center`}>
                        <p className="text-center text-4xl text-slate-50 inter-font">Mobile support is coming soon!</p>
                        <p className="text-center text-xl text-slate-50 inter-font">(try rotating your device...)</p>
                    </div>
            </div>
        )
    }
    else {
        return (
            <Page color={"bg-[#2d325a]"}>
                <div className="flex flex-col pt-5 px-14 gap-y-2">
                    <p className="text-lg text-slate-50">Teyvat</p>
                    <textarea className="text-3xl text-slate-50 teyvat-font bg-[#404780] rounded-xl" value={text}></textarea>
    
                    <p className="text-lg text-slate-50">Latin</p>
                    <textarea className="text-3xl text-slate-50 inter-font bg-[#404780] rounded-xl" value={text} onChange={(e) => {setText(e.target.value)}}></textarea>
    
                    {generateTeyvatKeyboard()}
    
                    <div className="flex w-full flex-col justify-center gap-y-4">
                        <button className="flex flex-grow h-12 border-solid border-2 justify-center items-center rounded-md text-slate-50 text-xl inter-font px-2" onClick={() => keyboardComm("space")}>Space</button>
                        <div className="flex mx-auto gap-x-3">
                            <button className="flex h-12 border-solid border-2 justify-center items-center rounded-md text-slate-50 text-xl inter-font px-2" onClick={() => keyboardComm("copy")}>Copy Result</button>
                            <button className="flex h-12 border-solid border-2 justify-center items-center rounded-md text-slate-50 text-xl inter-font px-2" onClick={() => keyboardComm("clear")}>Clear Text</button>
                        </div>
                    </div>
                </div>
            </Page>
        )
    }
}