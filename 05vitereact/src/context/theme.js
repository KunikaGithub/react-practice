
import {createcontext, usecontext} from "react"

export const ThemeContext = createcontext({
    thememode : "light",
    lighttheme :()=> {},
    draktheme : ()=> {},

})

export const Themeprovider = ThemeContext.provider

export default function useTheme(){
    return usecontext(ThemeContext)
}