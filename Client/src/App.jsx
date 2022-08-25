import { useState, useEffect } from 'react'
import Axios from 'axios'

import './App.css'

import Scale from './assets/Scale'
import Subheader from './assets/Subheader'
import Times from './assets/Times'
import Footer from './assets/Fotter'
import Login from './assets/Login'
import Call from './assets/Call'
import AddTask from './assets/AddTask'
import UserArea from './assets/UserArea'
import RegisterArea from './assets/RegisterArea'
import TaskDetails from './assets/taskDetails'



function App() {

  const [tasksSpecific, setTasksSpecific] = useState()
  const [person, setPerson] = useState ("default")
  const [taskDetails, setTaskDetails] = useState (0)

  const [AddTaskVisibility, setAddTaskVisibility] = useState(false)
  const [UserAreaVisibility, setUserAreaVisibility] = useState(false)
  const [RegisterAreaVisibility, setRegisterAreaVisibility] = useState(false)
  const [addButtonVisibility, setAddButtonVisibility] = useState(false)
  const [detailsVisibility, setDetaisVisibilty] = useState(false)

  const handleAddShow = () => {
    setAddTaskVisibility(true)
  }
  const handleUserShow = () => {
    setUserAreaVisibility(true)
  }
  const handleRegisterShow = () => {
    setRegisterAreaVisibility(true)
  }
  const handleAddExit = () => {
    setAddTaskVisibility(false)
  }

  const handleUserExit = () => {
    setUserAreaVisibility(false)
  }
  const handleRegisterExit = () => {
    setRegisterAreaVisibility(false)
  }


// Create

  const handleTaskAddition = (task) => {
    if (person == "default") {
      alert('Por favor, acesse na sua conta ou registre-se para continuar')
    } else {
      Axios.post('http://localhost:5000/addition', {
        title: task.title,
        description: task.description,
        beginDate: task.beginDate,
        beginHour: task.beginHour,
        endDate: task.endDate,
        endHour: task.endHour,
        status: 'pending',
        user: person
      }).then((response) => {
        console.log(response)
        if (response.data.msg == 'sucess'){
          setAddTaskVisibility(false)
        } 
      })

      
    }   
  }

// Read

  useEffect(() => {
    const getTasks = async () => {
      Axios.get('http://localhost:5000/getTasks').then((response) =>{
        setTasksSpecific(response.data)
      })
    }
    getTasks()
  }
  )

// Update

  const handleEdit = (task) => {
    console.log(task)
    Axios.post('http://localhost:5000/edit', {
        id: task.id,
        description: task.description,
        beginDate: task.beginDate,
        beginHour: task.beginHour,
        endDate: task.endDate,
        endHour: task.endHour,
        status: task.status,
      }).then((response) => {
        console.log(response)
        if (response.data.msg == 'sucess') {
          setDetaisVisibilty(false)
        }
      })

    }

// Delete

const handleDeletion = (id) => {
  Axios.post('http://localhost:5000/deleteTask', {
    id: id
  }).then((response) => {
    console.log(response.data)
  })
}

  const handleOpenEdit = (task)  => {
    setTaskDetails(task)
    setDetaisVisibilty(true)
  }

  const handleRegister = (user) => {
    console.log(user.login)
    Axios.post('http://localhost:5000/register', {
        login: user.loginRegister,
        password: user.passwordRegister,
    }).then((response) => {
        console.log(response.data.msg)
        if (response.data.msg == 'sucess'){
            setPerson(user.loginRegister)
            handleRegisterExit()
            setAddButtonVisibility(true)
        } 
        if (response.data.msg == 'User already registered') {
            alert('Usuário já cadastrado')
        }
})}

  const handleLogin = (user) => {
    Axios.post('http://localhost:5000/login', {
      login: user.loginUser,
      password: user.passwordUser,
    }).then((response) => {
      console.log(response.data.msg)
      if (response.data.msg == 'sucess'){
        setPerson(user.loginUser)
        handleUserExit()
        setAddButtonVisibility(true)
      } else {
        if (response.data.msg == 'wrong password') {
          alert('Senha incorreta')
        } else {
          if (response.data.msg == 'User not found') {
            alert('Usuário não encontrado')
          }
        }
      }

    })}
      
  const handleLogout = () => {
    setPerson('default')
    setAddButtonVisibility(false)
  }

  return (
    <section className="app-all">
      { detailsVisibility ? (
        <TaskDetails setDetaisVisibilty={setDetaisVisibilty} handleEdit={handleEdit} taskDetails={taskDetails}/>
      ): null}
      { AddTaskVisibility ? (
      <AddTask className='AddTask' handleAddExit={handleAddExit} handleTaskAddition={handleTaskAddition}/>  
      ) : null}
      { UserAreaVisibility ? (
      <UserArea handleUserExit={handleUserExit} handleLogin={handleLogin}/>
      ) : null}
      { RegisterAreaVisibility ? (
      <RegisterArea handleRegisterExit={handleRegisterExit} handleRegister={handleRegister}/>
      ) : null}
      <Call handleAddShow={handleAddShow} person={person} addButtonVisibility={addButtonVisibility}/>
      <Login handleLogout={handleLogout} handleUserShow={handleUserShow} handleRegisterShow={handleRegisterShow}/>
      <div className="app-table">
        <Subheader/>
        <div className="app-table-body">
          <Scale/>
          <Times tasksSpecific={tasksSpecific} person={person} handleDeletion={handleDeletion} handleOpenEdit={handleOpenEdit}/>
        </div>
        <Footer/>
        </div>
    </section>

  )
}

export default App
