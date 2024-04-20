import React, { createContext, useState } from 'react';
import ParentComp from './componets/ParentComponent';

export const GlobalContext = createContext();

function App() {
  const [globalState, setGlobalState] = useState({
    count: 0,
    increment: () => setGlobalState(prevState => ({ ...prevState, count: prevState.count + 1 })),
    decrement: () => setGlobalState(prevState => ({ ...prevState, count: prevState.count - 1 }))
  });

  return (
    <div className="App">
      <GlobalContext.Provider value={globalState}>
        <ParentComp />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;


// Advantages of using Context API for managing global state in a React application:

// Avoids Prop Drilling: Context API helps to avoid prop drilling by providing a way to pass data down the component tree without having to pass props manually at every level.
// Global State Management: Context API allows you to manage global state across your application. You can store state data at the top level of your component tree and access it from any component in the tree without the need to pass props down manually.
// Simplifies State Management: Context API simplifies state management by providing a centralized place to store and update state data. You can create a single context for your application and use it to manage all your state data.
// Improves Code Organization: Context API helps to improve code organization by providing a clear separation between your state management logic and your component rendering logic. You can define your state logic in one place and use it throughout your application.
