import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE-COLOR':
      return { state, bgColor: action.payload };
    default:
      return state;
  }
};

const initialState = {
  bgColor: 'bg-white' 
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeColor = (color) => {
    dispatch({ type: 'CHANGE-COLOR', payload: color });
  };

  return (
    <div className={`min-h-screen ${state.bgColor} transition-colors duration-500`}>
      <h1 className="text-4xl text-center font-bold mb-4">Colors Background</h1>
      <div className="space-x-4 flex justify-center items-center mt-[200px]">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300" onClick={() => changeColor('bg-blue-800')} >
          Blue
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300" onClick={() => changeColor('bg-green-800')}>
          Green   
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300" onClick={() => changeColor('bg-red-800')}>
          Red
        </button>
      </div>
      <div className="space-x-4 flex gap-8 justify-center items-center mt-[20px]">
        <button className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300" onClick={() => changeColor('bg-white')} >
          -
        </button>
        <button className="bg-green-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full transition duration-300" onClick={() => changeColor('bg-gwhite')}>
          -  
        </button>
        <button className="bg-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full transition duration-300" onClick={() => changeColor('bg-white')}>
         -
        </button>
      </div>
    </div>
  );
};

export default App;
