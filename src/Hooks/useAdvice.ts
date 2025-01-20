import { AdviceType } from './../types/Advice';
import {useQuery} from "@tanstack/react-query"
import {api} from "../api"

const getAdviceData=async (): Promise<AdviceType[]> => {
    const response = await api.get("/advise/"); // Backend'e istek gönderiliyor
    return response.data;
  }

export const useAdvice = ()=> { 
    return useQuery<AdviceType[]>({
    queryKey: ["advice"],
    queryFn: getAdviceData,
  })
}