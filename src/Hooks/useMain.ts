import { MainType } from './../types/Main';
import { useQuery } from "@tanstack/react-query";
import { api } from "../api";



const getMainData=async (): Promise<MainType[]> => {
    const response = await api.get<MainType[]>("/main/");
    return response.data;
  }
export const useMain = ()=>{
   return  useQuery<MainType[]>({
        queryKey: ["main"],
        queryFn: getMainData,
      });
} 