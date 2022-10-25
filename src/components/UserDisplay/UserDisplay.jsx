 
const UserDisplay = ({addedUser}) => { 
  console.log(addedUser);
  if(addedUser.length !== 0) {
    return (
      <div>
        <table className="table mt-5 table-dark">
    <thead>
      <tr>
        <th scope="col">Gender</th>
        <th scope="col">Email</th>
        <th scope="col">Name</th>
      </tr>
    </thead>
    <tbody>
    {addedUser?.map((user) => {
          console.log(user);
         return <tr>
             <td>{user.gender}</td>
            <td>{user.email}</td>
            <td>{user.name.title} {user.name.first} {user.name.last}</td>
          </tr>
        
        })}
        </tbody>
  </table>
        
      
      </div>
    )
  }    
}

export default UserDisplay