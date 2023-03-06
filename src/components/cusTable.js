import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { cusIcon, customerIcon, profilePic } from "../img/monitoringImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1F1E25",
    color: "white",
    fontFamily: "Montserrat",
    border: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "white",
    border: 0,
    fontFamily: "Montserrat",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#232228",
    color: "white",
    border: 0,
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#1F1E25",
    color: "white",
    border: 0,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 5, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 4, 9.0, 37, 4.3),
  createData("Eclair", 3, 16.0, 24, 6.0),
  createData("Cupcake", 5, 3.7, 67, 4.3),
  createData("Gingerbread", 6, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  const trash = <FontAwesomeIcon icon={faTrash} />;
  const edit = <FontAwesomeIcon icon={faEdit} style={{ color: "#16151A" }} />;
  return (
    <Table sx={{ minWidth: 700, border: 0 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell align="center">Vehicles</StyledTableCell>
          <StyledTableCell align="center">Fleets</StyledTableCell>
          <StyledTableCell align="center">Deployment Areas</StyledTableCell>
          <StyledTableCell align="center"></StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              <div className="name-cell">
                <span>
                  {" "}
                  <img src={cusIcon} width={50} height={50} />
                </span>
                <span>
                  <h3>ABC</h3>
                  <h4>www.ABC.com</h4>
                </span>
              </div>
            </StyledTableCell>
            <StyledTableCell align="center">{row.calories}</StyledTableCell>
            <StyledTableCell align="center">{row.fat}</StyledTableCell>
            <StyledTableCell align="center">{row.carbs}</StyledTableCell>
            <StyledTableCell align="center">
              <button className="delete-button submit">{edit} Modify</button>
              <button className="upload-button cancel">{trash} Delete</button>
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  );
}
