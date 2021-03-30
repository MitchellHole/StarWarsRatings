import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Box,
  Container,
  TextField,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Typography,
  IconButton,
  Collapse
} from '@material-ui/core';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import CombatantsHistoryTable from './CombatantsHistoryTable'

function Row(props) {
  const [open, setOpen] = useState(false);
  const { listValue } = props;

  return (
    <React.Fragment>
      <TableRow hover>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{listValue.name}</TableCell>
        <TableCell align="right">{listValue.alliance}</TableCell>
        <TableCell align="right">{listValue.wins}</TableCell>
        <TableCell align="right">{listValue.semi_wins}</TableCell>
        <TableCell align="right">{listValue.losses}</TableCell>
        <TableCell align="right">{listValue.semi_losses}</TableCell>
        <TableCell align="right">{listValue.draws}</TableCell>
        <TableCell align="right"><b>0</b></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <CombatantsHistoryTable combatantId={listValue.id}/>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '20em',
    height: '4em',

  },
  tableRow: {
    backgroundColor: '#d4d1d0'
  }
}));

const CombatantsTable = (props) => {
  const [combatants, setCombatants] = useState([]);
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  var filteredCombatants = combatants;

  if (search) {
    filteredCombatants = combatants.filter(function (str) { return str.name.toLowerCase().indexOf(search.toLowerCase()) != -1; });
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, filteredCombatants.length - page * rowsPerPage);

  const handleSearchChange = (event, input) => {
    setSearch(event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(function getCombatants() {
    fetch('/api/combatants').then(res => res.json()).then(setCombatants);
  },[]);

  const textField = useStyles().textField;
  const tableRow = useStyles().tableRow;


  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
              <TextField
                className={textField}
                id="outlined-basic"
                label="Search by Name"
                variant="outlined"
                onChange={handleSearchChange}
              />
            </TableCell>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              count={filteredCombatants.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableRow>
          <TableRow className={tableRow}>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Alliance</TableCell>
            <TableCell align="right">Wins</TableCell>
            <TableCell align="right">Semi-Wins</TableCell>
            <TableCell align="right">Losses</TableCell>
            <TableCell align="right">Semi-Losses</TableCell>
            <TableCell align="right">Draws</TableCell>
            <TableCell align="right"><b>Score</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          (rowsPerPage > 0
            ? filteredCombatants.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : filteredCombatants
          ).map(( listValue, index ) => {
          return (
            <Row key={listValue.id} listValue={listValue} />
          );
        })}
        </TableBody>
      </Table>
    </Container>
  )
};

export default CombatantsTable;
