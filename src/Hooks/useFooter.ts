import { footerData } from './../types/Footer';
import { useQuery } from "@tanstack/react-query";

import { api } from "../api";

const getFooterData = async (): Promise<footerData[]> => {
  const response = await api.get("/footerdata/");
  return response.data;
};

export const useFooter = () => {
  return useQuery<footerData[]>({
    queryKey: ["footerData"],
    queryFn: getFooterData,
  });
};
