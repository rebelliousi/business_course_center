import { CoursesType } from './../types/Courses';
import {useQuery} from "@tanstack/react-query"
import {api} from "../api"



const getCourseData=async (): Promise<CoursesType[]> => {
    const response = await api.get("/course/"); // Backend'e istek gönderiliyor
    return response.data;
  }

export const useCourse = ()=> { 
    return useQuery<CoursesType[]>({
    queryKey: ["course"],
    queryFn: getCourseData,
  })
}