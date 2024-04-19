import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect( ()=> {
        fetch("http://localhost:4000/users")
        .then(res => res.json())
        .then(data => {
          
            setUsers(data)
        })
    } ,[])

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const Name = form.name.value;
        const Email = form.email.value;
        const user = {Name, Email}
       

        // for POST method 
        fetch("http://localhost:4000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const newUsers = [...users, data];
            setUsers(newUsers);
            form.reset()
        })
    }
    return (
        <div>
            <p>all users: {users.length} </p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" /> 
                <br />
                <input type="email" name="email" />
                <br />
                <input type="submit" value="submit" />
            </form>

            {
                users.map(user => <li> {user.id} : {user.Name} and email: {user.email} </li>)
            }
        </div>
    );
};

export default Users;