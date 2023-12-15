// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/Table';
import Navbar from './components/navbar'
// import AddMemberForm from './components/Create'; 

function App(){

  // const [members, setMembers] = useState([]);

  // const handleAddMember = (newMember) => {
  //   setMembers((prevMembers) => [...prevMembers, newMember]);
  // };

  return(
    // <div>
    //   <h1>Member List</h1>
    //   <AddMemberForm onAddMember={handleAddMember} />
    //   {/* Display the member list */}
    //   <ul>
    //     {members.map((member, index) => (
    //       <li key={index}>
    //         {member.name} - {member.age} years old - {member.email}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div>
      <Navbar />
      <Table /> 
    </div>
  );

}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
