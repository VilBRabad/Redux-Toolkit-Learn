import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div className="min-h-[100vh] w-[100vw] bg-slate-950 text-white">
      <div className="p-4">
        <h2 className="font-bold text-xl text-purple-400">my@TOTO</h2>
      </div>
      <div className="h-[90%] w-full mt-8 flex flex-col items-center justify-center">
          <div className="w-[30rem] h-[5rem] flex items-center justify-center bg-indigo-300/50 rounded-md">
              <AddTodo/>
          </div>
          <div className="w-[30rem] mt-2 p-6 flex items-center justify-center bg-indigo-300/50 rounded-md">
              <Todos/>
          </div>
      </div>
    </div>
  )
}

export default App
