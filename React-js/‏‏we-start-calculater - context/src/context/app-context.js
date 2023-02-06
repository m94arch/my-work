import { createContext, useState } from "react";

export const AppContext = createContext ({
    expenses:[] ,
    setexpenses: (data) =>{},
    
     });
    
     export const AppContextProvider =(props)=>{
       let [expensesArray , setexpensesArray] = useState([])
        return( 
        <AppContext.Provider  value={{ 
            expenses :expensesArray,
            setexpenses:setexpensesArray,
        }}>
            {props.children}
        </AppContext.Provider>
        )
     }
     