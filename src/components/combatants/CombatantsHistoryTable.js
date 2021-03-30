import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  win: {
    backgroundColor: "#ABF5D177"
  },
  semiWin: {
    backgroundColor: "#ABF5D133"
  },
  draw: {
    backgroundColor: "#c5d2ea77"
  },
  semiLoss: {
    backgroundColor: "#FFBDAD33"
  },
  loss: {
    backgroundColor: "#FFBDAD77"
  }
}));




const CombatantsHistoryTable = (props) => {
  const { combatantId } = props;
  const [combatantsHistory, setCombatantsHistory] = useState([]);

  const win = useStyles().win;
  const loss = useStyles().loss;
  const semiWin = useStyles().semiWin;
  const semiLoss = useStyles().semiLoss;
  const draw = useStyles().draw;


  useEffect(function getCombatants() {
    fetch('/api/fights?combatantId=' + combatantId).then(res => res.json()).then(setCombatantsHistory);
  },[]);

  return (
    <Table size="small" aria-label="purchases">
      <TableHead>
        <TableRow>
          <TableCell>Result</TableCell>
          <TableCell>Opponent</TableCell>
          <TableCell align="right">Source</TableCell>
          <TableCell align="right">Rating</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {combatantsHistory.map(( listValue, index ) => {
          if (listValue.result == "W")
            return (
              <TableRow key={index} className={(listValue.winner == combatantId) ? win: loss}>
                <TableCell component="th" scope="row">{(listValue.winner == combatantId) ? "W": "L"}</TableCell>
                <TableCell>{(listValue.winner == combatantId) ? listValue.loser: listValue.winner}</TableCell>
                <TableCell align="right">{listValue.source}</TableCell>
                <TableCell align="right">{(listValue.winner == combatantId) ? listValue.rating: "--"}</TableCell>
              </TableRow>
            );
          else if (listValue.result == "sW") {
            return (
              <TableRow key={index} className={(listValue.winner == combatantId) ? semiWin: semiLoss}>
                <TableCell component="th" scope="row">{(listValue.winner == combatantId) ? "sW": "sL"}</TableCell>
                <TableCell>{(listValue.winner == combatantId) ? listValue.loser: listValue.winner}</TableCell>
                <TableCell align="right">{listValue.source}</TableCell>
                <TableCell align="right">{(listValue.winner == combatantId) ? listValue.rating: "--"}</TableCell>
              </TableRow>
            );
          }
          else {
            return (
              <TableRow key={index} className={draw}>
                <TableCell component="th" scope="row">D</TableCell>
                <TableCell>{(listValue.winner == combatantId) ? listValue.loser: listValue.winner}</TableCell>
                <TableCell align="right">{listValue.source}</TableCell>
                <TableCell align="right">--</TableCell>
              </TableRow>
            );
          }
        })}
      </TableBody>
    </Table>
  );
}

export default CombatantsHistoryTable;
