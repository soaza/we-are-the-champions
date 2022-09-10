import { Table } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { ITeam } from "../common/interfaces";
import { getTeams } from "../pages/api/supabase.api";
import { UserContext } from "../pages/_app";
import { sortTeams } from "../utils/teamSorter";

export const TeamsTable = (props: { groupNumber: 1 | 2 }) => {
  const { groupNumber } = props;

  const [displayedTeams, setDisplayedTeams] = useState<ITeam[]>([]);

  const { refetchData, setRefetchData } = useContext(UserContext);

  useEffect(() => {
    const fetchTeams = async () => {
      const teams = await getTeams(groupNumber);

      sortTeams(teams);
      setDisplayedTeams(teams);
    };

    if (refetchData) {
      fetchTeams();
      setRefetchData(false);
    }
  }, [refetchData]);

  const rows = displayedTeams.map((team, index) => (
    <tr
      style={{ backgroundColor: index + 1 <= 4 ? "#b9fc9a" : "" }}
      key={team.team_name}
    >
      <td>{index + 1}</td>
      <td>{team.team_name}</td>
      <td>{team.match_points}</td>
      <td>{team.goals_scored}</td>
      <td>{team.alternate_match_points}</td>
      <td>{team.registration_date.toString()}</td>
    </tr>
  ));

  if (displayedTeams.length === 0) {
    return <div />;
  }

  return (
    <Table
      captionSide="bottom"
      style={{
        backgroundColor: "white",
        border: "1px solid #b0b6bf",
      }}
    >
      <caption>Group {groupNumber}</caption>

      <thead>
        <tr>
          <th>Position</th>
          <th>Team Name</th>
          <th>Match Points</th>
          <th>Goals Scored</th>
          <th>Alternate Match Points</th>
          <th>Registration Date</th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </Table>
  );
};
