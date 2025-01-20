import { DiscountCard } from './../types/Discount';
import { useQuery } from "@tanstack/react-query";
import { api } from "../api";



const getDiscountData=async (): Promise<DiscountCard[]> => {
    const response = await api.get<DiscountCard[]>("/discount_item/");
    return response.data;
  }
export const useDiscount = ()=>{
   return  useQuery<DiscountCard[]>({
        queryKey: ["discount"],
        queryFn: getDiscountData,
      });
} 