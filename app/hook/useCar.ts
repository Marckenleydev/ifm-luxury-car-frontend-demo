"use client";

import { useQuery } from "@tanstack/react-query";

import { api } from "../api/api";
import { Car } from "../types";

export const useCars = () => {
  return useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const res = await api.get("/api/cars");

      if (!res.data.success) {
        throw new Error(res.data.message || "Failed to fetch cars");
      }

      return res.data.data as Car[];
    },
    staleTime: 1000 * 60 * 5,
  });
};


export const useCar = (id: string) => {
  return useQuery({
    queryKey: ["car", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await api.get(`/api/cars/${id}`);

      if (!res.data.success) {
        throw new Error(res.data.message || "Failed to fetch car");
      }

      return res.data.data as Car;
    },
  });
};
