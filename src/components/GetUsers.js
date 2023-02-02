import React ,{useState,useEffect} from "react";
import Button from '@material-ui/core/Button';
import WmUser from './WmUser';

const GetUsers =()=>{
    const [users, setUsers] = useState([]);
    const [getuid,setuid] = useState("");
    const [showUsers,setShowUsers] = useState(true);
    const [showSingleUser,setshowSingleUser] = useState(false);
///
    const fetchProfiles =()=>{
        fetch('http://localhost:4477/user/get_all', {
            method: 'GET',
        }).then(response => response.json()).then(data => {
            setUsers(data.msg);
        })
    }
    useEffect(() => {
        fetchProfiles();
    }, []);
    const EditUser = (uid)=>{
        setuid(uid);
        setShowUsers(false);
        setshowSingleUser(true);

    }
    return (<div>
    {showUsers===true ? 
        <table >
            <thead>
                <tr>
                    <th scope="col">Row</th>
                    <th scope="col">User ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">B-Date</th>
                    <th scope="col">Phone</th>
                    <th scope="col">City</th>
                    <th scope="col">Address</th>
                    <th scope="col">Confirm</th>
                    <th scope="col">Enabled</th>
                    <th scope="col">Created_At</th>
                    <th scope="col">Validation Code</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            {users.map((user, index) => (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{user.userid}</td>
                <td>{user.name} {user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.d_of_birth}</td>
                <td>{user.phone}</td>
                <td>{user.city}</td>
                <td>{user.address}</td>
                <td>{user.confirm}</td>
                <td>{user.enable}</td>
                <td><p>{ user.created_at.substring(0, (user.created_at.length/2)-1) }</p></td>
                <td>{user.validationcode}</td>
                <td >
                    <Button onClick={() => EditUser(user.userid)}  className="btn btn-danger btn-xs" aria-hidden="true"> Edit</Button> 
                </td>
            </tr>
            ))}
        </table> :null}
        { showSingleUser ===true ?  <WmUser id={getuid} />:null} 
    </div>);

}
export default GetUsers;