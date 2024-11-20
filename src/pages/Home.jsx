import React, { useEffect, useState } from "react";
import { getAllstaff } from "../api/staff-api"; // lưu ý đường dẫn api
import StaffCard from "../components/StaffCard";
import { Grid } from "@mui/material";


const Home  = () => {
    const [staff, setstaff] = useState([])

    useEffect(() => {
        getAllstaff()
        .then(
            data => {
                if(data){
                    data.sort((a,b) => {
                        // sort by
                        if(a.age < b.age) return -1;
                        if(a.age > b.age) return 1;
                        return 0;
                    })
                    setstaff(data)
                }
            }
        )
    },[])
    return (
        <div className="Home">
        <Grid container spacing={{ xs: 2, md: 3 }}>
            {
                staff.map(staff => (
                    <Grid item xs={2} sm={4} md={4} key={staff.id}>
                        <StaffCard staff={staff}/>
                    </Grid>
                ))
            }
        </Grid>
        </div>
    )
}
export default Home;