import TodoItems from "./components/TodoItems"
import { dummyData } from "./data/dummyData"

function App() {

  return (
    <main className="py-10 h-screen">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      {dummyData.map((todo) => (
        <TodoItems todo={todo}/>
      ))}
    </main>
  )
}

export default App
