import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@mui/material';

const DonorList2 = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    try {
      const response = await axios.get('http://localhost:15000/acc/donors'); // Make API request to fetch donors
      setDonors(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.post('http://localhost:15000/acc/delete', { _id: id });
      fetchDonors();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
          <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Blood Group</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Update</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {donors.map((donor,index) => (
            <TableRow key={index}>
              <TableCell>{donor._id}</TableCell>
              <TableCell>{donor.name}</TableCell>
              <TableCell>{donor.age}</TableCell>
              <TableCell>{donor.email}</TableCell>
              <TableCell>{donor.bloodGroup}</TableCell>
              <TableCell>{donor.phone}</TableCell>
              <TableCell align="center"><Button  variant="outlined" color="error">Update</Button></TableCell>
              <TableCell align="center"><Button onClick={() => handleDelete(donor._id)} variant="contained" color="error">Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DonorList2;
// import React, { useEffect, useState } from 'react'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
// import './Donarlist.css';
// import { Button } from '@mui/material';
// import axios from 'axios';


//   const Donarlist2 = () => {
//     const [donors, setDonors] = useState([]);
//     useEffect(()=>{
//       const response = axios.get('http://localhost:15000/acc/donors').then((response)=>{
//         console.log("response");
//       setDonors(response.data);
//     })
//     },[]);
  
//   return (
    
    
//     <div className='Donation'>
//       <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell align="right">Email</TableCell>
//             <TableCell align="right">Age</TableCell>
//             <TableCell align="right">Blood Group</TableCell>
//             <TableCell align="right">Phone</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {donors.map((value,index) => (
//             <TableRow
//               key={index}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {value.name}
//               </TableCell>
//               <TableCell align="right">{value.email}</TableCell>
//               <TableCell align="right">{value.age}</TableCell>
//               <TableCell align="right">{value.bloodGroup}</TableCell>
//               <TableCell align="right">{value.phone}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
// </div>
// )}

// export default Donarlist2
