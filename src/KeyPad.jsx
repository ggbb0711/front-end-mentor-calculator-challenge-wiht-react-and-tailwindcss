import calculate from "./calculateLogic"


export default function KeyPad({theme,addNewChar, handleCalculate, clear}){
    const style={
        1:{
            keypad_background:'bg-theme1-background-keypad_toggle_background',
            number_background:'bg-theme1-keys-number_key_background',
            number_shadow:'shadow-theme1-keys-number_key_shadow',
            equal_background:'bg-theme1-keys-equal_toggle_key_background',
            equal_shadow:'shadow-theme1-keys-equal_key_shadow',
            del_clear_background:'bg-theme1-keys-del_clear_key_background',
            del_clear_shadow:'shadow-theme1-keys-del_clear_key_shadow',
            key_text:'text-theme1-text-dark_grayish_blue',
            del_clear_text:'text-theme1-text-white',
            equal_text:'text-theme1-text-white'
        },
        2:{
            keypad_background:'bg-theme2-background-keypad_toggle_background',
            number_background:'bg-theme2-keys-number_key_background',
            number_shadow:'shadow-theme2-keys-number_key_shadow',
            equal_background:'bg-theme2-keys-equal_toggle_key_background',
            equal_shadow:'shadow-theme2-keys-equal_key_shadow',
            del_clear_background:'bg-theme2-keys-del_clear_key_background',
            del_clear_shadow:'shadow-theme2-keys-del_clear_key_shadow',
            key_text:'text-theme2-text-dark_grayish_yellow',
            del_clear_text:'text-theme2-text-white',
            equal_text:'text-theme2-text-white'
        },
        3:{
            keypad_background:'bg-theme3-background-keypad_toggle_background',
            number_background:'bg-theme3-keys-number_key_background',
            number_shadow:'shadow-theme3-keys-number_key_shadow',
            equal_background:'bg-theme3-keys-equal_toggle_key_background',
            equal_shadow:'shadow-theme3-keys-equal_key_shadow',
            del_clear_background:'bg-theme3-keys-del_clear_key_background',
            del_clear_shadow:'shadow-theme3-keys-del_clear_key_shadow',
            key_text:'text-theme3-text-light_yellow',
            del_clear_text:'text-theme3-text-white',
            equal_text:'text-theme3-text-dark_blue'
        },
    }
    let keys=['7','8','9','DEL','4','5','6','+','1','2','3','-','.','0','/','X']

    return(
        <div className={`w-full  p-4 ${style[theme].keypad_background} rounded-lg`}>
            <div className="h-52 grid grid-cols-4 gap-2">
                {
                    keys.map((key,i)=>(
                        <button key={i} className={`shadow rounded-lg hover:brightness-125 text-xl
                         ${(key==='DEL'?`${style[theme].del_clear_background} ${style[theme].del_clear_shadow} ${style[theme].del_clear_text}`:
                        `${style[theme].number_background} ${style[theme].number_shadow} ${style[theme].key_text}`)}`}
                        onClick={()=>addNewChar(key)}>
                            {key}
                        </button>
                    ))
                }
            </div>
            <div className="h-10 flex gap-2 my-4">
                <button className={`flex-1 shadow-md rounded-lg hover:brightness-125 text-xl
                 ${style[theme].del_clear_background} ${style[theme].del_clear_shadow} ${style[theme].del_clear_text}`}
                  onClick={clear}>Reset</button>
                 <button className={`flex-1 shadow-md rounded-lg hover:brightness-125 text-lg
                 ${style[theme].equal_background} ${style[theme].equal_shadow} ${style[theme].equal_text}`}
                  onClick={handleCalculate}>=</button>
            </div>
        </div>
    )

}