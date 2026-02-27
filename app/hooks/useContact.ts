import {  useQuery, } from "@tanstack/react-query";
import { api } from "../api/api";
import { OfficeContact } from "../types/index";


export const useOfficeContact = () => {
  
  // 🔹 GET ALL
  const useGetOfficeContacts = () =>
    useQuery({
      queryKey: ["officeContacts"],
      queryFn: async () => {
        const { data } = await api.get("/api/officeContacts");
        return data.data as OfficeContact[];
      },
    });

  

 

  return {
    useGetOfficeContacts,
  };
};
