import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getstaffbyid, updatestaff } from "../api/staff-api";
import { useNavigate, useParams } from "react-router-dom";

function formatDate(dateString) {
    const date = new Date(dateString);   
    // Check if the date is valid
    if (isNaN(date)) {
        throw new Error("Invalid date");
    }
    // Extract the year, month, and day
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');

    // Return the formatted date
    return `${year}-${month}-${day}`;
}

const Update = () => {
    const [staff, setstaff] = useState({
        name: "",
        age: 0,
        address: "",
        createdAt: new Date(),
        avatar: "",
    })

    const navigate = useNavigate()
    const {id} = useParams();
    console.log(id);
    useEffect(() => {
        getstaffbyid(id)
            .then(data => {
                if (data) {
                    setstaff(data);
                }
            })
    }, [id]);

    const handleSubmit = (e) => {
        e.prevenDefault();
        console.log(staff);

        updatestaff(id, staff).then(() =>{
            alert("Update staff success");
            navigate("/dashboard");
        })
    }

    return (
        <Box className="detail">
            <h1>Update staff ID: {id}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField className="create"
                        type="text"
                        label="Name"
                        value={staff.name}
                        onChange={
                            (e) => setstaff(
                                {
                                    ...staff,
                                    name: e.target.value
                                }
                            )
                        }
                    />
                    <TextField className="create"
                        type="number"
                        label="Age"
                        value={staff.age}
                        // placeholder="Age" // gợi ý input vô
                        onChange={
                            (e) => setstaff(
                                {
                                    ...staff,
                                    age: e.target.value
                                }
                            )
                        }
                    />
                </div>
                <div>
                    <TextField className="create"
                        type="text"
                        label="Address"
                        value={staff.address}
                        onChange={
                            (e) => setstaff(
                                {
                                    ...staff,
                                    address: e.target.value
                                }
                            )
                        }
                    />
                    <TextField className="create"
                        type="date"
                        value={formatDate(staff.createdAt)}
                        onChange={
                            (e) => setstaff(
                                {
                                    ...staff,
                                    createdAt: e.target.value
                                }
                            )
                        }
                    />
                </div>
                <div>
                    <TextField className="create"
                        type="link"
                        label="Link Image"
                        value={staff.avatar}
                        onChange={
                            (e) => setstaff(
                                {
                                    ...staff,
                                    avatar: e.target.value
                                }
                            )
                        }
                    />
                </div>
                <Button type="submit" variant="contained" sx={{ marginLeft: 5 }}>Update</Button>
            </form>
        </Box>
    )
}
export default Update;