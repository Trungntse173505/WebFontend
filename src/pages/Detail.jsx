import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getstaffbyid } from "../api/staff-api";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Detail = () => {
    const { id } = useParams();

    const [staff, setstaff] = useState({});

    useEffect(() => {
        getstaffbyid(id)
            .then(data => {
                if (data) {
                    setstaff(data);
                }
            })
    }, [id]);

    return (
      <div className="detail">
      <h1>Detail ID: {id}</h1>
    <Card sx={{ maxWidth: 500}}>
      <CardMedia
        sx={{ height: 400 }}
        image={staff?.avatar}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: {staff.name}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          Age: {staff.age}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          Address: {staff.address}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          CreatedAt: {staff.createdAt}
        </Typography>
      </CardContent>
    </Card>
    </div>
    )
}
export default Detail;