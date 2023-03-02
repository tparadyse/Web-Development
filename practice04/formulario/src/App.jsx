import Header from "./components/Header"
import Form from "./components/Form"
import List from "./components/List"

function App() {

  return (
    <div className='container p-[20px]'>
      <Header/>
      <div className='mt-12 md:flex gap-10'>
        <Form/>
        <List/>
      </div>
    </div>
  )
}

export default App
