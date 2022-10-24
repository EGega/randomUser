import axios, { Axios } from "axios"
import Button from "../Button/Button"
import { useEffect, useState } from "react"
import userStyle from './User.module.css'


import femaleUser from '../../assets/woman.svg'
import maleUser from '../../assets/man.svg'
import userMail from '../../assets/mail.svg'
import manAge from '../../assets/growing-up-man.svg'
import womanAge from '../../assets/growing-up-woman.svg'
import userLocation from '../../assets/map.svg'
import userPhone from '../../assets/phone.svg'
import userPassword from '../../assets/padlock.svg'
import UserDisplay from "../UserDisplay/UserDisplay"


const User = () => {
  const [user, setUser] = useState("")
  const [addedUser, setAddedUser] = useState([])
  
  const submit = () => {
    axios.get('https://randomuser.me/api').then((res) => {
      setUser(res.data.results);
      console.log(user);
    })
  }

const displayHandler = () => {
  const newUser = [...user, ...addedUser ]
setAddedUser(newUser)

console.log(addedUser);
  }

useEffect(() => {
  displayHandler()
}, [])

useEffect(() => {
    submit()
    return () => {
      console.log(user);
    }
  }, [])
  

 const {gender, email} = user
return (
!user ? <div className="wrapper">
  <Button submit={submit} /> 
</div> : ( 
<div className={userStyle.wrapper}>
     <img src={user[0].picture.large} alt="" />
       <div>
          <h3 className={userStyle.gender} >{user[0].gender}</h3> 
          <h3 className={userStyle.email} >{user[0].email}</h3> 
          <h3 className={userStyle.age} >{user[0].dob.age}</h3>   
       </div>
       <div className={userStyle.icons}>
        {gender === "female" ? <img className={userStyle.avatar} src={femaleUser} alt="" /> : <img className={userStyle.avatar} src={maleUser} alt="" />} 
        <img src={userMail} alt="" />
        {gender === "female" ? <img src={womanAge} alt="" /> : <img src={manAge} alt="" />}
        <img src={userLocation} alt="" />
        <img src={userPhone} alt="" />
        <img src={userPassword} alt="" />
       </div>
       <Button submit={submit} /> 
       <button onClick={displayHandler} className={userStyle.btn}>Add User</button>
       <UserDisplay displayHandler={displayHandler} addedUser={addedUser} setAddedUser={setAddedUser}/>

    </div> 
    
  ) )
}

export default User