import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";

// variable containing jsx for the individual golfer rows
const row = (golfer, index, header, handleRemove, startEditing, editIdx, handleChange, stopEditing) => {
  const currentlyEditing = editIdx === index;    
  return (
    <TableRow key={`tr-${index}`}>
      <TableCell>{index + 1}</TableCell>
      {/* Loop through the headers to populate table columns */}
      {header.map((golferInstance, k) => {
        
        return (
          <TableCell key={`tc-${k}`}>{currentlyEditing ? <TextField name={golferInstance.prop} onChange={e => handleChange(e, golferInstance.prop, index)} value={golfer[golferInstance.prop]} /> : golfer[golferInstance.prop]}</TableCell>
        );
      })}
      <TableCell>{currentlyEditing ? <i className="fas fa-check" onClick={() => stopEditing()}></i> : <i className="fas fa-edit" onClick={() => startEditing(index)} />}</TableCell>
      <TableCell><i className="far fa-trash-alt" onClick={() => handleRemove(index)} /></TableCell>
    </TableRow>
  )

} 

const LeaderboardTable = props => {
  // sort the prop data
  // sorts the score first, if the score is equal defaults to the last name compare;
  const data = props.data;
  const sortedData = data.sort(
    (a, b) =>
      Number(a.score) - Number(b.score) || a.lastName.localeCompare(b.lastName)
  );

  return (
    <Table className="leaderboardTable">
      <TableHead>
        <TableRow>
          <TableCell>Position</TableCell>
          {/* Create the Header Row based off prop header */}
          {props.header.map((heading, headingIndex) => (
            <TableCell key={headingIndex}>{heading.name}</TableCell>
          ))}
          <TableCell>Edit</TableCell>
          <TableCell>Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* Create the Golfer Row based off the sorted Data pulled from props */}
        {sortedData.map((golfer, index) => row(golfer, index, props.header, props.handleRemove, props.startEditing, props.editIdx, props.handleChange,props.stopEditing))}
      </TableBody>
    </Table>
  );
};

export default LeaderboardTable;
