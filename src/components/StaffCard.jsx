import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

const StaffCard = (props) =>{
    const {staff} = props;

    const navigate  = useNavigate();

  return (
    <Card sx={{ maxWidth: 1500 , marginTop: 10, margin: 1 }} >
      <CardMedia
        sx={{ height: 300, margin: 5}}
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
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate("detail/"+ staff?.id)}>Detail</Button>
      </CardActions>
    </Card>
  );
}
export default StaffCard;