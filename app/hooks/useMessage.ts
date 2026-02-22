import { useMutation } from "@tanstack/react-query";
import { api } from "../api/api";
import { CreateMessageDTO } from "../types";



export const useCreateMessage = () => {
  return useMutation({
    mutationFn: async (data: CreateMessageDTO) => {
      const res = await api.post("/api/messages", data);
      return res.data;
    },
  });
};
