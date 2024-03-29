import './App.css'
import PetInfo from './components/Petinfo'

function App() {
  return (
    <div className="App">
      <PetInfo animal="dog" age={4} />
      <PetInfo animal="cat" age={3} />
    </div>
  )
}

export default App
