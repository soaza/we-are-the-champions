import { Table } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { ITeam } from "../common/interfaces";
import { getTeams } from "../pages/api/supabase.api";
import { UserContext } from "../pages/_app";

export const TeamsTable = (props: { groupNumber: 1 | 2 }) => {
  const { groupNumber } = props;

  const [displayedTeams, setDisplayedTeams] = useState<ITeam[]>([]);

  const { refetchData, setRefetchData } = useContext(UserContext);

  useEffect(() => {
    const fetchTeams = async () => {
      const teams = await getTeams(groupNumber);

      teams
        .sort((teamOne, teamTwo) => {
          var matchPointCompare = teamOne.match_points - teamTwo.match_points;

          if (matchPointCompare !== 0) {
            return matchPointCompare;
          }

          var totalGoalsCompare = teamOne.goals_scored - teamTwo.goals_scored;
          if (totalGoalsCompare !== 0) {
            return totalGoalsCompare;
          }
          var highestAlternateMatchPointsCompare =
            teamOne.alternate_match_points - teamTwo.alternate_match_points;

          if (highestAlternateMatchPointsCompare !== 0) {
            return highestAlternateMatchPointsCompare;
          }

          return new Date(teamOne.registration_date) <
            new Date(teamTwo.registration_date)
            ? 1
            : -1;
        })
        .reverse();

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
      <td>{team.registration_date.toString()}</td>
      <td>{team.goals_scored}</td>
      <td>{team.match_points}</td>
      <td>{team.alternate_match_points}</td>
    </tr>
  ));

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
          <th>Registration Date</th>
          <th>Goals Scored</th>
          <th>Match Points</th>
          <th>Alternate Match Points</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
