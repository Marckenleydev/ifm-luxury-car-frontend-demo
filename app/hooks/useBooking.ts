"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/api";
import { Booking } from "../types";

type CreateBookingInput = {
  carId: string;
  startDate: string;
  endDate: string;
};



export const useCreateBooking = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: CreateBookingInput) => {
      try {
        const res = await api.post("/api/bookings", data);

        if (!res.data.success) {
          throw new Error(res.data.message || "Failed to create booking");
        }

        return res.data.data as Booking;
      } catch (error: any) {
        // 🔥 Extract real backend message
        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Failed to create booking";

        throw new Error(message);
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });

  return {
    createBooking: mutation.mutate,
    createBookingAsync: mutation.mutateAsync,
    loading: mutation.isPending,
    error: mutation.isError
      ? (mutation.error as Error)?.message
      : null,
    success: mutation.isSuccess,
  };
};
