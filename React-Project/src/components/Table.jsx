import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Table.css'; 
import AddMemberForm from './Create';

const Table = () => {
  // Sample data
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', age: 30, email: 'jane@example.com' },
    { id: 3, name: 'Bob Smith', age: 22, email: 'bob@example.com' },
  ]);

  // const handleAdd = (newMember) => {
  //   setData([...data, newMember]);
  // };

  const handleDelete = (id) =>{
    setData(data.filter(member=> member.id !== id));
    console.log(id)
  }

  const handleUpdate =(id, edit) =>{
    setData(data.map(member=>(member.id === id ?edit :member)));
    // console.log(data)
  }

  return (
    <div>
    <button className='btn-add' to="/add" >Add Member</button>
    {/* <button className='btn-add' onClick={() => handleAdd({ id: data.length + 1, name: 'New User', age: 0, email: 'newuser@example.com' })}> 
        Add User
  </button> */}
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        {data.map((member) => (
          <tr key={member.id}>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.age}</td>
            <td>{member.email}</td>
            <td><button  className="btn-edit" onClick={()=>handleUpdate(member.id,{...member, age: member.age+20, name: "editja"})} >Edit</button>  
            <button className="btn-del" onClick={()=>handleDelete(member.id)}>Del </button>
            </td>

          </tr>
        ))}
      </tbody>
    </table>
    
      {/* <Route> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/add" element={<AddMemberForm />} /> */}
      {/* </Route> */}
    </div>
  );
}

export default Table;
