const UserDisplay = ({addedUser, setAddedUser}) => {
      
  return (
    <div>
      {addedUser?.map((user) => {
        console.log(user);
      return  <div>
        <h2>{user.gender}</h2>
        <h2>{user.email}</h2>
        </div>
      })}
    
    </div>
  )
}

export default UserDisplay