import React, { useState, useEffect, useReducer } from "react";
import { Button, Stack, Container, Row, Col, Card, Form, Alert } from 'react-bootstrap';

import './assets/sass/App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { TwitterPicker } from 'react-color';
import axios from 'axios'
import Swal from 'sweetalert2'
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})
const swalError = Swal.mixin({
  text: '5.x.x Server Error',
  icon: 'error',
  toast: true,
  timerProgressBar:true,
  timer:3000,
  position: 'top-end',
  showConfirmButton: false
})

const swalOk = Swal.mixin({
  icon: 'success',
  toast: true,
  timerProgressBar:true,
  timer:5000,
  position: 'top-end',
  showConfirmButton: false
})

const swalCreating = Swal.mixin({
  title: 'Creating...',
  icon: 'info',
  toast: true,
  timerProgressBar:true,
  position: 'top-end',
  showConfirmButton: false
})

import Header from './components/Header';
import Footer from './components/Footer';




// const [todos, setTodos] = useState([]);
function reducer(todos, action) {
  const payload = action.payload;
  switch (action.type) {
    case 'CREATE_TODO':
      return { payload: [...todos.payload, payload] }
    case 'DELETE_TODO':
      return { payload: todos.payload.filter(t => t._id !== payload) }
    case 'PIN_TODO':
      return {
        payload: todos.payload.map(todo => {
          if (todo._id === payload._id) {
            todo.isBookmark = payload.isBookmark;
          }
          return todo;
        })
      }
    case 'DO_TODO':
      return {
        payload: todos.payload.map(todo => {
          if (todo._id === payload._id) {
            todo.isDone = payload.isDone;
          }
          return todo;
        })
      }
    case 'FETCH_TODOS':
      return { payload }
    default:
      throw Error('Unknown action.');
      break;
  }
}

function App() {
  const [todos, todosDispatch] = useReducer(reducer, {});


  useEffect(() => {
    axios.get('http://127.0.0.1:5000/todo/').then(({ data }) => {
      todosDispatch({ type: 'FETCH_TODOS', payload: data });
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoData({ ...todoData, body: '' })
    setTodoData({ ...todoData, title: '' })
    setTodoData({ ...todoData, color: '#E6E6E6' })
    swalCreating.fire()
    axios.post('http://localhost:5000/todo', todoData)
    .then(({ data }) => {
      todosDispatch({ type: 'CREATE_TODO', payload: data })
      swalOk.fire({
        title: 'Todo Add Successful!',

      })
      
    })
    .catch( (error)=>{
      swalError.fire({
        title: 'Todo Cannot Create. '
      })
    })
  };

  const handleStarTodo = (id, isStar) => {
    axios.patch(`http://localhost:5000/todo/${id}`, {
      isBookmark: !isStar
    }).then(({ data }) => {
      todosDispatch({ type: 'PIN_TODO', payload: data })
    }).catch( (error)=>{
      swalError.fire({
        title: 'Todo Cannot Pinned.'
      })
    })
  }
  const handleDoTodo = (id, isDo) => {
    axios.patch(`http://localhost:5000/todo/${id}`, {
      isDone: !isDo
    }).then(({ data }) => {
      todosDispatch({ type: 'DO_TODO', payload: data })
    }).catch( (error)=>{
      swalError.fire({
        title: 'Todo Cannot Do That. '
      })
    })
  }
  const handleDeleteTodo = (id) => {
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        axios.delete(`http://localhost:5000/todo/${id}`).then(() => {
          todosDispatch({ type: 'DELETE_TODO', payload: id })
        })
      }
    })
    
  };

  const [todoData, setTodoData] = useState({
    title: "",
    body: "",
    color: "#E6E6E6",
    isBookmark: false,
    isHidden: false,
  });

  const handleChangeComplete = (color, event) => {
    setTodoData({ ...todoData, color: color.hex });
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col sm={12} md={3}>
            <Card body style={{ backgroundColor: todoData.color }}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Title">
                  <Form.Label> <i className='bi bi-sticky'></i> Title</Form.Label>
                  <Form.Control type="text" placeholder="My Todooo title..." onChange={(e) => setTodoData({ ...todoData, title: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Task">
                  <Form.Label><i className='bi bi-body-text'></i> Task</Form.Label>
                  <Form.Control as="textarea" rows={3} onChange={(e) => setTodoData({ ...todoData, body: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Color">
                  <Form.Label> <i className="bi bi-palette"></i> Todo Color</Form.Label>
                  <TwitterPicker colors={['#AFBCCF', '#FFAFA3', '#80CAFF', '#FFC470', '#FFADE7', '#E6E6E6', '#75D7F0', '#FFD966', '#D9B8FF', '#85E0A3']} className='w-100' onChangeComplete={handleChangeComplete} color={todoData.color} />
                </Form.Group>

                <Button variant="primary" type="submit">
                  <i className="bi bi-bookmark-plus-fill"></i> Add Todo
                </Button>
              </Form>

            </Card>
          </Col>
          <Col sm={12} md={9}>
            <Card body>
              <Row>

                {/* if(todos.payload !== {}){
        <Alert variant='info'>
          Your Todo List Is Clean!
        </Alert>
      } */}


                {todos.payload &&
                  todos.payload.map((todo, index) => {
                    return (
                      <Col xs={{ order: todo.isBookmark ? 1 : 2 }} sm={12} md={6} key={index}>
                        <Card className={todo.isBookmark ? 'mb-3 shadow-sm' : 'mb-3'} style={{ backgroundColor: todo.color }}>
                          <Card.Body>
                            <Card.Title className={todo.isDone ? 'text-decoration-line-through fw-bold' : 'fw-bold'}>{todo.title}</Card.Title>
                            <Card.Text className={todo.isDone ? 'text-decoration-line-through text-break' : 'text-break'}>{todo.body}</Card.Text>
                          </Card.Body>
                          <Card.Body>
                            <Button className="me-2" onClick={() => handleDoTodo(todo._id, todo.isDone)} variant={todo.isDone ? 'danger' : 'success'} size="sm"> <i className={todo.isDone ? 'bi bi-x-circle-fill' : 'bi bi-check-circle-fill'}></i> {todo.isDone ? 'Un Do' : 'Done'}</Button>
                            <Button className="me-2" onClick={() => handleStarTodo(todo._id, todo.isBookmark)} variant={todo.isBookmark ? 'light' : 'dark'} size="sm"> <i className="bi bi-star-fill"></i> {todo.isBookmark ? 'Pinned' : 'Pin'}</Button>
                            <Button className="me-2" onClick={() => handleDeleteTodo(todo._id)} variant="danger" size="sm"> <i className="bi bi-trash3"></i> </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}

              </Row>


            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />

    </>
  )
}

export default App
