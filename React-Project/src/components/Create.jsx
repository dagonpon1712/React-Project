import{ useState } from 'react';
import './Create.css';


const AddMemberForm = ({ onAddMember }) => {
  const [member, setMember] = useState({
    name: '',
    age: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any validation if needed

    // Pass the member data to the parent component
    onAddMember(member);

    // Clear the form fields
    setMember({
      name: '',
      age: '',
      email: '',
    });
  };

  return (
    <form className="add-member-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={member.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" value={member.age} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={member.email} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default AddMemberForm;
