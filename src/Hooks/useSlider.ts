import { SliderType } from "./../types/Slider";
import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

const getSliderData = async (): Promise<SliderType[]> => {
  const response = await api.get<SliderType[]>("/banner/");
  return response.data;
};
export const useSlider = () => {
  return useQuery<SliderType[]>({
    queryKey: ["slider"],
    queryFn: getSliderData,
  });
};
