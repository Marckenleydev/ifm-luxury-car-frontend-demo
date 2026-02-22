"use client";

import { useQuery} from "@tanstack/react-query";
import { api } from "../api/api";
import { UserProfile } from "../types";



export const useUser = () => {
 

  // Get current user
  const { data: user, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await api.get("/api/users/profile");

      if (!res.data.success) {
        return null;
      }

      return res.data.data as UserProfile;
    },
    staleTime: 1000 * 60 * 5,
  });

  

  

  

  return {
    user,
    loading: isLoading,
   
  };
};
