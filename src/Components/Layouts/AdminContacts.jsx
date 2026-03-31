import { useEffect } from "react";
import { useAuth } from "../../LocalStorage/auth";
import { useState } from "react";
import { toast } from "react-toastify";
const AdminContacts = () => {
    const { authorizationToken } = useAuth();
    const[contacts,setContacts] = useState([]);
    // Function to fetch all contacts
const getContacts = async() => {
    try{
        const response = await fetch(`http://localhost:5001/api/admin/contacts`,{
            method: "GET",
            headers:{
                Authorization : authorizationToken,
            }
        });
        const data = await response.json();
        console.log(data);
        if(response.ok){
            setContacts(data);
        }
    }catch(error){
        console.error("Error fetching contacts:", error);
    }
}

//delete a contact by id
const deleteContactById = async(id) => {
    try{
        const response = await fetch(`http://localhost:5001/api/admin/contacts/delete/${id}`, { 
            method: "DELETE",
            headers:{
                Authorization: authorizationToken,
            }
        });
        if(response.ok){
            getContacts(); // Refresh the contact list after deletion
        toast.success("Contact deleted successfully!");
        }else{
          toast.error("Failed to delete contact.");
        }
    }catch(error){
        console.error("Error deleting contact:", error);
    }
};

useEffect(() => {
    getContacts();
}, []);

return (
    <>
    <secction className="admin-contacts-section">
        <h1>Admin Contact Data</h1>
    <div className="container  admin-users">
        {contacts.map((curContact,index) => {
            return(
                <div key = {index}> 
                    <p>{curContact.username}</p>
                    <p>{curContact.email}</p>
                    <p>{curContact.message}</p>
                    <button className="btn" onClick={() => deleteContactById(curContact._id)}>Delete</button>
                </div>
            )
        })}

    </div>
    </secction>
    </>
)
};

export default AdminContacts;