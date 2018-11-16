import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// variable containing jsx for the individual golfer rows
const row = (golfer, index, header) => (
  <TableRow key={`tr-${index}`}>
    {/* Loop through the headers to populate table columns */}
    {header.map((golferInstance, k) => {
      return (
        <TableCell key={`tc-${k}`}>{golfer[golferInstance.prop]}</TableCell>
      );
    })}
    <TableCell>
      <i className="far fa-trash-alt" /> | <i className="fas fa-edit" />
    </TableCell>
  </TableRow>
);

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
          {/* Create the Header Row based off prop header */}
          {props.header.map((heading, headingIndex) => (
            <TableCell key={headingIndex}>{heading.name}</TableCell>
          ))}
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* Create the Golfer Row based off the sorted Data pulled from props */}
        {sortedData.map((golfer, index) => row(golfer, index, props.header))}
      </TableBody>
    </Table>
  );
};

export default LeaderboardTable;
