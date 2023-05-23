import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './Donarlist.css';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(Name, Blood, Email, Mobile) {
    return { Name, Blood, Email , Mobile };
  }
  
  const rows = [
    createData('Abc', 'A+',	'abc@gmail.com', '8473932003'),
    createData('Abc', 'A+',	'abc@gmail.com', '8473932003'),
    createData('Abc', 'A+',	'abc@gmail.com', '8473932003'),
    createData('Abc', 'A+',	'abc@gmail.com', '8473932003'),
    createData('Abc', 'A+',	'abc@gmail.com', '8473932003'),
    createData('Abc', 'A+',	'abc@gmail.com', '8473932003'),
    createData('Abc', 'A+',	'abc@gmail.com', '8473932003'),
    createData('Abc', 'A+',	'abc@gmail.com', '8473932003'),
  ];
  

const Requests = () => {
  return (
    <div className='Donation'>
        <TableContainer style={{margin: "15px", borderRadius: "10px" }} component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">NAME</StyledTableCell>
                <StyledTableCell align="center">BLOOD GROUP</StyledTableCell>
                <StyledTableCell align="center">EMAIL</StyledTableCell>
                <StyledTableCell align="center">MOBILE NUMBER</StyledTableCell>
                <StyledTableCell align="center">ACCEPT</StyledTableCell>
                <StyledTableCell align="center">DECLINE</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.Name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.Blood}</StyledTableCell>
                  <StyledTableCell align="center">{row.Email}</StyledTableCell>
                  <StyledTableCell align="center">{row.Mobile}</StyledTableCell>
                  <StyledTableCell align="center"><Button variant="outlined" color="error">Accept</Button></StyledTableCell>
                  <StyledTableCell align="center"><Button variant="contained" color="error">Decline</Button></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
    </div>
  )
}

export default Requests