import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/theme"
import ThemeBtn from "./components/Themebtn"
import Cards from "./components/Cards"


function App() {
  const[thememode, setThememode] = useState("light")

  const lighttheme =()=>{
    setThememode("light")
  }
  const darktheme =()=>{
    setThememode("dark")
  }

  //actual change in theme
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(thememode)

  },[thememode])
  return (
       <ThemeProvider value={{thememode,lighttheme,darktheme}}>
          <div className="flex flex-wrap min-h-screen items-center">          
           <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                 <ThemeBtn/>
               </div>

               <div className="w-full max-w-sm mx-auto">
                  <Cards/>
              </div>
            </div>
         </div>
       </ThemeProvider>     
  )
}

export default App
