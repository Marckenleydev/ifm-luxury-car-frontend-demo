import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { api } from "../api/api";
import { CreateTestimonialDTO, Review } from "../types";



export const useCreateTestimonial = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateTestimonialDTO) => {
      const res = await api.post("/api/testimonials", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
    },
  });
};

export const useGetTestimonials = () => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await api.get("/api/testimonials");
      return res.data.data as Review[];
    },
  });
};

