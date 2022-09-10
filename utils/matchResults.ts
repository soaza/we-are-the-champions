export const parseMatchResultsInput = (input: string) => {
  const results = input.split("\n");
  const teamMap = new Map();

  results.forEach((result) => {
    const fields = result.split(" ");
    const [firstTeam, secondTeam, firstTeamScore, secondTeamScore] = fields;
    teamMap.set(
      firstTeam,
      teamMap.get(firstTeam) || {
        goals_scored: 0,
        match_points: 0,
        alternate_match_points: 0,
      }
    );
    teamMap.set(
      secondTeam,
      teamMap.get(secondTeam) || {
        goals_scored: 0,
        match_points: 0,
        alternate_match_points: 0,
      }
    );

    if (fields.every((field) => !field)) {
      return;
    }

    const increments = {
      WIN: 3,
      DRAW: 1,
      LOSS: 0,
    };

    const alternativeIncrements = {
      WIN: 5,
      DRAW: 3,
      LOSS: 1,
    };

    const firstTeamOutcome =
      firstTeamScore > secondTeamScore
        ? "WIN"
        : firstTeamScore == secondTeamScore
        ? "DRAW"
        : "LOSS";

    const secondTeamOutcome =
      firstTeamScore > secondTeamScore
        ? "WIN"
        : firstTeamScore == secondTeamScore
        ? "DRAW"
        : "LOSS";

    teamMap.set(firstTeam, {
      ...teamMap.get(firstTeam),
      goals_scored:
        teamMap.get(firstTeam)["goals_scored"] + Number(firstTeamScore) ||
        Number(firstTeamScore),
      match_points:
        teamMap.get(firstTeam)["match_points"] + increments[firstTeamOutcome] ||
        increments[firstTeamOutcome],
      alternate_match_points:
        teamMap.get(firstTeam)["alternate_match_points"] +
          alternativeIncrements[firstTeamOutcome] ||
        alternativeIncrements[firstTeamOutcome],
    });

    teamMap.set(secondTeam, {
      ...teamMap.get(secondTeam),
      goals_scored:
        teamMap.get(secondTeam)["goals_scored"] + Number(secondTeamScore) ||
        Number(secondTeamScore),
      match_points:
        teamMap.get(secondTeam)["match_points"] +
          increments[secondTeamOutcome] || increments[secondTeamOutcome],
      alternate_match_points:
        teamMap.get(secondTeam)["alternate_match_points"] +
          alternativeIncrements[secondTeamOutcome] ||
        alternativeIncrements[secondTeamOutcome],
    });
  });

  return teamMap;
};
