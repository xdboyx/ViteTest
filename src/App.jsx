import { useEffect, useState } from 'react'
// @ts-ignore
import reactLogo from './assets/react.svg'
import './App.css'
import { GetJWT } from './api/user'

function App() {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   GetJWT()
  // }, [])

  const clickHandler = () => {
    GetJWT()

  }

  const darkModeHandler = () => {
    document.documentElement.classList.add("dark");
  }

  const offDarkModeHandler = () => {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <button
        id="light"
        className="px-4 py-2 rounded-full bg-white border-gray-400 border-2"
        onClick={offDarkModeHandler}
      >
        日間模式 <i className="fas fa-sun text-yellow-500"></i>
      </button>
      <button
        id="dark"
        className="px-4 py-2 rounded-full bg-gray-700 border-gray-700 border-2 text-white"
        onClick={darkModeHandler}
      >
        Dark mode<i className="fas fa-moon text-yellow-500"></i>
      </button>


      <button className="bg-sky-500 hover:bg-sky-700 ...">
        Save changes
      </button>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accomodation for your team</a>
            <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
          </div>
        </div>
      </div>


      <button onClick={clickHandler}> Click</button>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
