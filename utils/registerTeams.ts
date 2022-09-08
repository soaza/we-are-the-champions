import { ITeam } from "../common/interfaces";

type TTeamField = Pick<
  ITeam,
  "team_name" | "registration_date" | "group_number"
>;

export const parseRegisterTeamsInput: (input: string) => TTeamField[] = (
  input: string
) => {
  const teams = input.split("\n");

  const teamsArr = teams.flatMap((team) => {
    const fields = team.split(" ");
    const [team_name, registration_date, group_number] = fields;

    if (fields.every((field) => !field)) {
      return [];
    }

    const registrationDateParts = registration_date.split("/");
    const dateObj = new Date(
      `${registrationDateParts[1]}-${registrationDateParts[0]}`
    );

    const teamObject = {
      team_name,
      registration_date: dateObj,
      group_number,
    };

    return teamObject;
  });

  return teamsArr;
};
