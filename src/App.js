import { useState, useEffect } from 'react'
import Contacts from './components/Contacts'
import Form from './components/Form'
import './css/estilos.css';


const URL = "http://www.raydelto.org/agenda.php"

function App() {

  const [postData, setPostData] = useState([])
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
    telefono: ""
  })

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setPostData(data))
  }, [data])

  const { nombre, apellido, telefono } = data

  function handleChange(e) {
    let value = e.target.value
    let name = e.target.name
    setData({
      ...data,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        "nombre": nombre,
        "apellido": apellido,
        "telefono": telefono
      })
    })
    setData({
      nombre: "",
      apellido: "",
      telefono: ""
    })
  }

  return (
    <>
      <div className='main_container'>
        <Form 
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          data={data}
        />
        <Contacts 
          postData={postData}
        />
      </div>
  </>
  )
}

export default App;