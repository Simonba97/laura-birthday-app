import CountdownTimer from "./CountdownTimer"
import LluviaEmojies from "./LluviaEmojies"

/* import React, { useState, useRef } from "react";
 */
const PreBirthday = () => {

    /* const [text, setText] = useState("");
    const textRef = useRef<string>("");

    const typeString = () => {
        for (let i = 0; i < textRef.current.length; i++) {
            setTimeout(() => {
                setText(textRef.current.substring(0, i + 1));
            }, i * 100);
        }
    }; */
    return (

        <section className="w-full h-screen flex items-center justify-center bg-gradient-to-tr from-emerald-200 via-sky-200 to-pink-200">
            <div className="w-[90%] flex-row text-center font-Oswald">
                <div className="text-4xl font-medium tracking-tighter ">

                    <div className="">
                        <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-fuchsia-500 to-cyan-500 relative inline-block">
                            <span className="relative text-white">{"LAURA'S BIRTHDAY"}</span>
                        </div>
                        <LluviaEmojies emojis={['🥳']} />
                        <LluviaEmojies emojis={['🥳']} />
                        <LluviaEmojies emojis={['🥳']} />
                        <LluviaEmojies emojis={['🥳']} />
                        <LluviaEmojies emojis={['🥳']} />
                        <LluviaEmojies emojis={['🥳']} />
                        <LluviaEmojies emojis={['🥳']} />
                        <LluviaEmojies emojis={['🥳']} />
                        <LluviaEmojies emojis={['🥳']} />
                    </div>
                    <div className="">
                        <span>{'ESTÁ POR COMENZAR'}</span>
                    </div>
                </div>
                <div className="text-5xl font-semibold m-auto bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                    <CountdownTimer targetDate="2024-01-13T00:01:00" />
                </div>
            </div>
        </section>

    )
}

export default PreBirthday