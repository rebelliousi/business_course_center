import { VideoData } from './../types/Media';
import { useQuery } from "@tanstack/react-query";
import { api } from "../api";



const getMediaData=async (): Promise<VideoData[]> => {
    const response = await api.get<VideoData[]>("/video/");
    return response.data;
  }
export const useMedia = ()=>{
   return  useQuery<VideoData[]>({
        queryKey: ["media"],
        queryFn: getMediaData,
      });
} 