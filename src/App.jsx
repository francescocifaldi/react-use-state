import { useState } from "react"
import Button from "./components/Button"
import Content from "./components/Content"
import languages from "./languages"

function App() {
  const [selected, setSelected] = useState(0)

  return (
    <>
      <main>
        <div>
          <h1>Learn Web Dev</h1>
        </div>
        <div className="container">
          <div className="myList">
            {languages.map((language) => (
              <Button key={language.id} item={language} />
            ))}
          </div>
          <div>
            <Content item={languages[0]} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
