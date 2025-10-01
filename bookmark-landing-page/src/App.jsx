
import Header from "./components/Header"
import Main from "./components/Main"
import Features from "./components/SectionFeatures"
import Presentation from "./components/SectionPresentation"
import Extensions from "./components/SectionExtensions"
import Questions from "./components/AsideQuestions"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header/>
      <Main>
        <Presentation/>
        <Features/>
        <Extensions/>
        <Questions/>
      </Main>
      <Footer/>
    </div>
  )
}

export default App
