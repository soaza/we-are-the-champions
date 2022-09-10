import { ITeam } from "../common/interfaces";

/**
 Highest total match points. A win is worth 3 points, a draw is worth 1 point, and a loss is worth 0 points.
If teams are tied, highest total goals scored.
If teams are still tied, highest alternate total match points. A win is worth 5 points, a draw is worth 3 points, and a loss is worth 1 point.
If teams are still tied, earliest registration date.

 */

export const sortTeams = (teams: ITeam[]) => {
  return teams
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
};
