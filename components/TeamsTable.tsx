import { Table } from "@mantine/core";
import { group } from "console";
import { useEffect, useState } from "react";
import { ITeam } from "../common/interfaces";
import { getTeams } from "../pages/api/supabase.api";

const teams: ITeam[] = [
  {
    team_name: "firstTeam",
    registration_date: new Date(),
    group_number: "1",
    goals_scored: 10,
    match_points: 30,
    alternate_match_points: 50,
  },
  {
    team_name: "secondTeam",
    registration_date: new Date(),
    group_number: "1",
    goals_scored: 10,
    match_points: 30,
    alternate_match_points: 5,
  },
  {
    team_name: "thirdTeam",
    registration_date: new Date(),
    group_number: "1",
    goals_scored: 10,
    match_points: 30,
    alternate_match_points: 5,
  },
  {
    team_name: "fourthTeam",
    registration_date: new Date(),
    group_number: "1",
    goals_scored: 10,
    match_points: 30,
    alternate_match_points: 5,
  },
  {
    team_name: "fifthTeam",
    registration_date: new Date(),
    group_number: "1",
    goals_scored: 10,
    match_points: 30,
    alternate_match_points: 5,
  },
];

export const TeamsTable = (props: { groupNumber: 1 | 2 }) => {
  const { groupNumber } = props;

  const [displayedTeams, setDisplayedTeams] = useState<ITeam[]>([]);

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

    fetchTeams();
  }, []);

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
