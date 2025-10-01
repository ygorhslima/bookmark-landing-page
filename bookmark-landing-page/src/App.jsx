import Header from "./components/Header"
import Features from "./components/SectionFeatures"
import Presentation from "./components/SectionPresentation"
import Extensions from "./components/SectionExtensions"
import Questions from "./components/AsideQuestions"
import Footer from "./components/Footer"
function App() {
  return (
    <div>
      <Header/>
      <main>
        <Presentation/>
        <Features/>
        <Extensions/>
        <Questions/>
        <Footer/>
      </main>
    </div>
  )
}

export default App
