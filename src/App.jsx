import { useState } from "react"
import Button from "./components/Button"
import Content from "./components/Content"
import languages from "./languages"
import buttonStyle from "./components/Button.module.css"

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
      <main>
        <div>
          <h1>Learn Web Dev</h1>
        </div>
        <div className="container">
          <div className="myList">
            {languages.map((language, i) => (
              <Button key={language.id} item={language} callback={() => setCurrentIndex(i)} className={i === currentIndex ? buttonStyle.selected : ''} />
            ))}
          </div>
          <div>
            <Content item={languages[currentIndex]} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
