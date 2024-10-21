import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Form from './components/Form.jsx'

function App() {

  const [sectionID, setSectionID] = useState(0);
  const handleActiveBtn = (id) => {
    setSectionID(id);
  }

  return (
    <div className="grid grid-cols-[1fr_2fr_4fr] gap-3 h-screen">
      <Nav activeSection={sectionID} onBtnClick={handleActiveBtn}/>
      <Form sectionID={sectionID}/>
      <div>a</div>
      {/* <Display /> */}
    </div>
  )
}

export default App
