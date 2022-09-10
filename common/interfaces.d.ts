export interface ITeam {
  team_name: string;
  registration_date: string | Date;
  goals_scored: number;
  match_points: number;
  alternate_match_points: number;
  group_number: string;
}

export type TTeamField = Pick<
  ITeam,
  "team_name" | "registration_date" | "group_number"
>;
