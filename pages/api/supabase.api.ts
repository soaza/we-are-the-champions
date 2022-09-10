import { ITeam, TTeamField } from "../../common/interfaces";
import { supabase } from "../../common/supabase";

export const insertTeams = async (teams: TTeamField[]) => {
  await supabase.from("teams").insert(teams);
};

export const updateTeam = async (value: any, key: string) => {
  if (!key) {
    return;
  }
  const { data: team } = await supabase
    .from("teams")
    .select()
    .eq("team_name", key)
    .single();

  await supabase
    .from("teams")
    .update({
      goals_scored: team.goals_scored + value.goals_scored,
      match_points: team.match_points + value.match_points,
      alternate_match_points:
        team.alternate_match_points + value.alternate_match_points,
    })
    .match({ team_name: key });
};

export const resetTeams = async () => {
  await supabase.from("teams").delete().neq("id", 0);
};

export const getTeams = async (groupNumber: number): Promise<ITeam[]> => {
  const { data: teams } = await supabase
    .from("teams")
    .select()
    .eq("group_number", groupNumber);

  return teams as ITeam[];
};
