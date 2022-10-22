import axios, { Axios } from "axios"
import Button from "../Button/Button"
import { useEffect, useState } from "react"
import userStyle from './User.module.css'


import femaleUser from '../../assets/woman.svg'
import maleUser from '../../assets/man.svg'
import userMail from '../../assets/mail.svg'
import userAge from '../../assets/growing-up-man.svg'
import userLocation from '../../assets/map.svg'
import userPhone from '../../assets/phone.svg'
import userPassword from '../../assets/padlock.svg'


const User = () => {
  const [user, setUser] = useState("")

  const submit = () => {
    axios.get('https://randomuser.me/api').then((res) => {
      setUser(res.data.results[0]);
      
      console.log(user);
    })
  }
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
<div className="wrapper">
     <img src={user.picture.large} alt="" />
       <div>
          <h3>{gender}</h3> 
          <h3>{email}</h3> 
          <h3>{user.dob.age}</h3>   
       </div>
       <div className={userStyle.ismail}>
        Selam Ismail
       </div>
       <div className={userStyle.icons}>
        {gender === "female" ? <img src={femaleUser} alt="" /> : <img src={maleUser} alt="" />} 
        <img src={userMail} alt="" />
        <img src={userAge} alt="" />
        <img src={userLocation} alt="" />
        <img src={userPhone} alt="" />
        <img src={userPassword} alt="" />
       </div>
       <Button submit={submit} /> 
       
    </div> 
    
  ) )
}

export default User