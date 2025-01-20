import { useQuery } from "@tanstack/react-query";
import {Card } from "../types/Activity";
import { api } from "../api";

const getActivityData = async (): Promise<Card[]> => {
  const response = await api.get("/social_activity/");
  return response.data;
};

export const useActivity = () => {
  return useQuery<Card[]>({
    queryKey: ["socialactivity"],
    queryFn: getActivityData,
  });
};
