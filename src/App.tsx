import { useEffect, useState } from 'react'
import './App.css'

import Markdown from 'markdown-to-jsx'

function App() {

  const fileName = "test"
  const [post, setPost ] = useState<string>('')


  useEffect(() => {
    import(`./markdowns/${fileName}.md`)
    .then(res => {
      fetch(res.default)
      .then(response => response.text())
      .then(text => setPost(text))
  })
  }, []);
  
  return (
    <Markdown >{post}</Markdown>
  )
}

export default App
