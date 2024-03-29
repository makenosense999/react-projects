import './App.css'
import PetInfo from './components/Petinfo'

function App() {
  return (
    <div className="App">
      <PetInfo animal="dog" age={4} hasPet />
      <PetInfo animal="cat" age={3} hasPet={false} />
    </div>
  )
}

export default App
