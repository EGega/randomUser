 
const UserDisplay = ({addedUser}) => { 
  console.log(addedUser);
  const unique = [...new Set(addedUser)];
  console.log(unique);
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
    {unique?.map((user) => {
          console.log(user.email);
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