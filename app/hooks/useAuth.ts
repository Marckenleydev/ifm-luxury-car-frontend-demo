"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/api";
import { LoginData, RegisterData,  } from "../types";
import {  toast } from 'sonner';
import { useRouter } from "next/navigation";



export const useAuth = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  

  // Login
  const login = useMutation({
  mutationFn: async ({ email, password, rememberMe }: LoginData) => {
    const res = await api.post("/api/auth/login", {
      email,
      password,
      rememberMe,
    });

    const { accessToken } = res.data; // ✅ FIX HERE

    if (rememberMe) {
      localStorage.setItem("accessToken", accessToken);
    } else {
      sessionStorage.setItem("accessToken", accessToken);
    }

    return accessToken;
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["users"] });
    router.push("/");
    toast.success("Login successful!");
  },
  onError: (error: any) => {
    toast.error(error?.response?.data?.message || "Login failed");
  },
});


  // Register
  const register = useMutation({
    mutationFn: async (data: RegisterData) => {
      const res = await api.post("/api/auth/register", data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Registration successful!");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Registration failed");
    },
  });

  // Logout
  const logout = useMutation({
    mutationFn: async () => {
      await api.post("/api/auth/logout");
      localStorage.removeItem("accessToken");
      sessionStorage.removeItem("accessToken");
    },
    onSuccess: () => {
      queryClient.setQueryData(["users"], null);
    },
  });

  return {
   
    login: login.mutateAsync,
    register: register.mutateAsync,
    logout: logout.mutateAsync,
    loginLoading: login.isPending,
    registerLoading: register.isPending,
    logoutLoading: logout.isPending,
  };
};
