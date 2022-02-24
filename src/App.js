import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { darkModeState, myStringState } from './shared/globalState';

export default function App() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useRecoilState(darkModeState);
  const [myString, setMyString] = useRecoilState(myStringState);
  const clearMyString = useResetRecoilState(myStringState);

  return (
    <div 
      className={`${isDarkModeEnabled ? 'dark bg-slate-700 text-white' : 'bg-white text-slate-700'} flex flex-col justify-center items-center gap-5 min-h-screen relative overflow-x-hidden`}
    >
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-center mb-5">React Recoil Demo</h1>
        <p>Open inspect element to see the states save in your local storage.</p>
        <small>right click ➡ inspect ➡ application ➡ storage ➡ local storage ➡ your-website-url</small>
      </div>
      <div>
        <Button
          label="Toggle theme"
          onClick={e => setIsDarkModeEnabled(!isDarkModeEnabled)}
        />
      </div>
      <div>
        <Input 
          label="My String"
          value={myString}
          onChange={e => setMyString(e)}
        />
        <Button
          label="Clear string"
          onClick={clearMyString}
        />
      </div>
    </div>
  );
}

const Button = (props) => {
  return(
    <button 
      className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 text-white py-2 px-5 rounded-full text-sm font-semibold"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
}

const Input = (props) => {
  return(
    <label className="block mb-2">
      <span 
        className="block text-sm font-medium"
      >
        {props.label}
      </span>
      <input 
        type="text" 
        name="text" 
        className="mt-1 px-3 py-2 bg-slate-100 dark:bg-slate-800 border shadow-sm border-slate-300 dark:border-slate-600 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 " 
        placeholder="Enter a string" 
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
      />
    </label>
  )
}