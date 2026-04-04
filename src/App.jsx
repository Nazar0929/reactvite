import {Title} from"./components/Title"
import './App.css'
import { Section } from "./components/Section"


const text = "Hello world"


function App() {

  return (
  <Section>
    <Title desk={text}/>
</Section>
  )
}

export default App
