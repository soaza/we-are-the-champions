export interface ITeam {
  team_name: string;
  registration_date: Date;
  goals_scored: number;
  match_points: number;
  alternate_match_points: number;
  group_number: 1 | 2;
}
