import { Teacher } from "./../types/Teachers";
import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

const getTeacherData = async (): Promise<Teacher[]> => {
  const response = await api.get<Teacher[]>("/teacher/");
  return response.data;
};
export const useTeacher = () => {
  return useQuery<Teacher[]>({
    queryKey: ["teacher"],
    queryFn: getTeacherData,
  });
};
