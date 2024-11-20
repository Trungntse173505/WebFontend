import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { deletestaff, getAllstaff } from '../api/staff-api';
import { Alert, Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [staff, setstaff] = useState([])
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const navigate  = useNavigate();
  const getAPI = () => {
    getAllstaff()
      .then(data => {
        if (data) {
          data.sort((a, b) => {
            // sort by
            if (a.age < b.age) return -1;
            if (a.age > b.age) return 1;
            return 0;
          })
          setstaff(data)
        }
      }
      )
  }
  useEffect(() => { getAPI(); }, [])

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setOpenDialog(true);
  };

  const handleConfirmDelete = () => {
    deletestaff(selectedId).then(() => {
      setOpenDialog(false);
      setOpenAlert(true);
      getAPI(); // Reload the staff list
    });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedId(null);
  };
  return (
    <TableContainer sx={{ marginTop: 10 }} component={Paper}>
      <h1>DashBoard</h1>
      <Button variant="contained" onClick={() => navigate("/dashboard/create")}>ADD</Button>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Image</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Age</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">CreatedAt</TableCell>
            <TableCell align="left">Update</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staff.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell align="left" ><Avatar src={row?.avatar} /></TableCell>
              <TableCell align="left">{row?.name}</TableCell>
              <TableCell align="left">{row?.age}</TableCell>
              <TableCell align="left">{row?.address}</TableCell>
              <TableCell align="left">{row?.createdAt}</TableCell>
              <TableCell align="left">
                <Button sx={{ marginLeft: -1 }} size="small" variant="outlined" onClick={() => navigate("update/"+row?.id)}>Edit</Button>
              </TableCell>
              <TableCell align="left">
                <Button sx={{ marginLeft: -1 }} size="small" variant="outlined" onClick={() => handleDeleteClick(row.id)}>Remove</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Alert */}
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={() => setOpenAlert(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setOpenAlert(false)}>
          Staff member deleted successfully!
        </Alert>
      </Snackbar>
    </TableContainer>
  );
}
export default Dashboard;