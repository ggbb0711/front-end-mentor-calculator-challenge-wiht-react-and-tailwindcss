

export default function Heading({theme,changeTheme}){
    const style={
        1:{
            toggle_background:'bg-theme1-background-keypad_toggle_background',
            toggle_ball_background:'bg-theme1-keys-equal_toggle_key_background',
            toggle_animate:'translate-x-0',
            text:'text-theme1-text-white'
        },
        2:{
            toggle_background:'bg-theme2-background-keypad_toggle_background',
            toggle_ball_background:'bg-theme2-keys-equal_toggle_key_background',
            toggle_animate:'translate-x-full',
            text:'text-theme2-text-dark_grayish_yellow'
        },
        3:{
            toggle_background:'bg-theme3-background-keypad_toggle_background',
            toggle_ball_background:'bg-theme3-keys-equal_toggle_key_background',
            toggle_animate:'translate-x-[200%]',
            text:'text-theme3-text-light_yellow'
        },

    }



    return(
        <div className={`w-full ${style[theme].text}
        flex justify-between items-center`}>
            <h1>calc</h1>
            <div className="flex items-center gap-4">
                <h4 className="text-sm">THEME</h4>
                <div className="w-20 flex justify-between flex-col">
                    <div className="w-full flex justify-around">
                        <p className="cursor-pointer" onClick={()=>changeTheme(1)}>1</p>
                        <p className="cursor-pointer" onClick={()=>changeTheme(2)}>2</p>
                        <p className="cursor-pointer" onClick={()=>changeTheme(3)}>3</p>
                    </div>
                    <div className={`w-full h-7 ${style[theme].toggle_background} relative
                    rounded-2xl flex`}>
                        <div className={`w-[33.33%] h-full absolute top-0 left-0 transition-all ${style[theme].toggle_animate}
                        rounded-full ${style[theme].toggle_ball_background}`}></div>
                        <div className="cursor-pointer flex-1" onClick={()=>changeTheme(1)}></div>
                        <div className="cursor-pointer flex-1" onClick={()=>changeTheme(2)}></div>
                        <div className="cursor-pointer flex-1" onClick={()=>changeTheme(3)}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}