import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import {  createstaff } from "../api/staff-api";

const Create = () => {
    const [staff, setstaff] = useState({
        name: "",
        age: 0,
        address: "",
        createdAt: new Date(),
        avatar: "",
    })

    const validate = () => {
        let tempError = {};
        if(staff.name === ""){
          tempError.name = "Name is required"
        }else if(staff.name.length < 2){
          tempError.name = "Name must be at least 2 characters"
        }
    
        if(staff.createdAt === ""){
          tempError.createdAt = "createdAt is required"
        }  
        if(staff.image === ""){
          tempError.image = "image is required"
        } else {
          if(isValidUrl(student.image) == false){
            tempError.image = "url should be valid"
          }
        }
    
        setErrors(tempError)
    
        return Object.values(tempError).every(x => x == "")
      }

    const handleSubmit = (e) => {
        e.prevenDefault();
        console.log(staff);

        createstaff(id, staff).then(() =>{
            alert("Create staff success");
            navigate("/dashboard");
        })
    }

    return (
        <Box className="detail">
            <h1>Create Staff</h1>
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
                        value={staff.createdAt}
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
                <Button type="submit" variant="contained" sx={{ marginLeft: 5 }}>Create</Button>
            </form>
        </Box>
    )
}
export default Create;