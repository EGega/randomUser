 import React from 'react'
 import ButtonStyle from './Button.module.css'

 
 const Button = ({submit}) => {
   return (
     <button onClick={submit} className={ButtonStyle.btn}>Get a User</button>
   )
 }
 
 export default Button