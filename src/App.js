import React from 'react'
import { useContext,createContext } from 'react'

const Context = createContext();

const Child = () => {
  const context = useContext(Context);
  return <div>{context.data}</div>;
};

const App = () => {
  return (
    <Context.Provider value={{ data: "Data from context!" }}>
     <Child />
  </Context.Provider>
  )
}

export default App







// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import home from "./pages/home";
// import about from "./pages/about"
// import Layout from "./layouts/layout";

// const App = ()=>{
//   return (

//     <BrowserRouter>
//       <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route path="/" index element={<h1>start</h1>}/>
//         <Route path="/home" element={<h2>this is home page</h2>}  />
//         <Route path="/about" element={about} />
//       </Route>
//       </Routes>
//     </BrowserRouter>
  
    
//     );
// }
// export default App;
