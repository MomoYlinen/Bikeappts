import React from 'react'
import NavBar from '../components/NavBar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Axios from 'axios'
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TablePagination from '@mui/material/TablePagination';
import { useTheme } from '@mui/material/styles';
import TableFooter from '@mui/material/TableFooter';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}







const Home = ({getTrips}) => {
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - getTrips.data.lenght) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
 


  return (
    <>
    <NavBar/>
    <Container sx={{mt:5}} >
      <Grid container spacing={1} sx={{display:'flex', justifyContent:'center'}}>
        <Grid item xs={20} sx={{justifyItems:'center'}}>
          <Box>
             Bike App
          </Box>
          <Box>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableRow sx={{border:2}} >
            <TableCell align='center' sx={{              
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'primary',
              textDecoration: 'none'}} >Departure Station</TableCell>
            <TableCell align="center" sx={{              
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'primary',
              textDecoration: 'none'}}>Return Station</TableCell>
            <TableCell align="center" sx={{              
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'primary',
              textDecoration: 'none'}}>Distance (min)</TableCell>
            <TableCell align="center" sx={{              
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'primary',
              textDecoration: 'none'}}>Duration (m)</TableCell>
          </TableRow>
        <TableBody>
          {(rowsPerPage > 0
            ? getTrips.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : getTrips.data
          ).map((trip:any) => (
            <TableRow key={trip.returnstationID}>
              <TableCell style={{ width: 100 }} component="th" scope="row" align='center'>
                {trip.departurestation}
              </TableCell>
              <TableCell style={{ width: 100 }} align="center">
                {trip.returnstation}
              </TableCell>
              <TableCell style={{ width: 100 }} align="center">
                {parseInt(trip.duration/60)} min
              </TableCell>
              <TableCell style={{ width: 100 }} align="center">
                {trip.distance} m
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[20, 50, 100, { label: 'All', value: -1 }]}
              colSpan={3}
              count={getTrips.data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
          </Box>
        </Grid>
        </Grid>
    </Container>
    </>
  )
}

export async function getStaticProps() {

  const data = await Axios.get("http://localhost:8080/trips")
  return {
    props: {
      getTrips: data.data
    },
  }
}

export default Home