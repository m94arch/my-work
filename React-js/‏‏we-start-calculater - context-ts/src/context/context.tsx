import { createContext, useState } from "react";
import Mark from "../models/Mark";

let AppContext = createContext<{
  marks: Mark[];
  setMarks: (mark: Mark) => void;
  deleteMark: (id: Number) => void;
}>({
  marks: [],
  setMarks: () => {},
  deleteMark: () => {},
});

export const AppContextProvider = (props:{children:React.ReactNode}) => {
  let [marks, setMarks] = useState<Mark[]>([]);
  let setNewMarks = (mark: Mark) => {
    setMarks((prevState: Mark[]) => {
      return [mark, ...prevState];
    });
  };
  let deleteMark = (id:Number)=>{
    let filteredMarks = marks.filter((element)=>element.id !=id);
    setMarks(filteredMarks);
   }
  return (
    <AppContext.Provider value={{ marks: marks, setMarks: setNewMarks,deleteMark:deleteMark }}>
      {props.children}
    </AppContext.Provider>
  );
};
