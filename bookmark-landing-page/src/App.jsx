import Header from "./components/Header"
import Features from "./components/SectionFeatures"
import Presentation from "./components/SectionPresentation"
import Extensions from "./components/SectionExtensions"

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Presentation/>
        <Features/>
        <Extensions/>
      </main>
    </div>
  )
}

export default App
