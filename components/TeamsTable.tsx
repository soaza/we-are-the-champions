import { Table } from "@mantine/core";
import { ITeam } from "../common/interfaces";

const teams: ITeam[] = [
  { team_name: "firstTeam", registration_date: new Date(), group_number: 1 },
  { team_name: "secondTeam", registration_date: new Date(), group_number: 1 },
  { team_name: "thirdTeam", registration_date: new Date(), group_number: 1 },
  { team_name: "fourthTeam", registration_date: new Date(), group_number: 1 },
  { team_name: "fifthTeam", registration_date: new Date(), group_number: 1 },
];

export const TeamsTable = () => {
  const rows = teams.map((team, index) => (
    <tr
      style={{ backgroundColor: index + 1 <= 4 ? "#b9fc9a" : "#b0b6bf" }}
      key={team.team_name}
    >
      <td>{index + 1}</td>
      <td>{team.team_name}</td>
      <td>{team.registration_date.toString()}</td>
    </tr>
  ));

  return (
    <Table style={{ backgroundColor: "white", border: "1px solid #ddd" }}>
      <thead>
        <tr>
          <th>Position</th>
          <th>Team Name</th>
          <th>Registration Date</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
