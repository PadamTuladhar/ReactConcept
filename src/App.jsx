import { useState } from 'react'
import './App.css'
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import ProductList from './components/ProductList'
import ButtonCompoent from './components/ButtonComponent'
import Users from './users/index'
import "./components/style.css"
import ContextTextComponent from './context-concept/textComponent'
import ContextButtonComponent from './context-concept/button'
import ReducerConcept from './reducer/reducer-concept'
import FormComponent from './forms'
import LoginComponent from './Login/LoginIndex'
import RegisterComponent from './register/RegisterIndex'

function App() {
  const [count, setCount] = useState(0);
  const dummyProducts = ["Product1", "Product2", "Product3"];


  return (
    <>
      <div>
        <h1 className='header'>React tutorial</h1>
        {/* <ClassComponent /> */}
        {/* <FunctionalComponent /> */}
        {/* <ProductList product={dummyProducts} /> */}
        {/* <ButtonCompoent /> */}
        {/* <Users /> */}
        {/* <ContextTextComponent /> */}
        {/* <ContextButtonComponent /> */}
        {/* <ReducerConcept /> */}
        {/* <FormComponent /> */}
        <div >
          <LoginComponent />
          <RegisterComponent />
        </div>
      </div>
    </>
  )
}

export default App
