import { useEffect } from "react"


export default function Display({theme,currDisplay,prevDisplay,warningDisplay}){
    const style={
        1:{
            screen:'bg-theme1-background-screen',
            text:'text-theme1-text-white'
        },
        2:{
            screen:'bg-theme2-background-screen',
            text:'text-theme2-text-dark_grayish_yellow'
        },
        3:{
            screen:'bg-theme3-background-screen',
            text:'text-theme3-text-light_yellow'
        },
    }


    return (
        <div className={`w-full h-20 p-2 text-right ${style[theme].text} ${style[theme].screen} rounded-md
        flex gap-2 flex-col`}>
            <p className="text-xs h-[25%] mb-1">
                {prevDisplay}
            </p>

            <p className="text-3xl h-[75%]">
                {currDisplay}
            </p>
            
        </div>
    )
}