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

    if(accessToken){
     localStorage.setItem("accessToken", accessToken);
    }
      
    

    return accessToken;
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["user"] });
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


  const useRequestPasswordResetMutation = () => {
  return useMutation({
    mutationFn: async (email: string) => {
      const res = await api.post(
        `/api/auth/request-password-reset`,
        { email }
       
      );
      return res.data; 
    },
    onSuccess: () => {
          

      toast.success("Reset link sent!");
     
    },
    onError: (err: any) => {
      console.error(err);
      toast.error("Failed to request reset:", err.response?.data?.message || err.message);
    },
  });
};


const useResetPasswordMutation = () => {
  return useMutation({
    mutationFn: async ({  newPassword, token }: {  newPassword: string; token: string }) => {
      const res = await api.post(
        `/api/auth/reset-password`,
        { newPassword, token }
       
      );
      return res.data; // return data so you can use it in onSuccess or components
    },
    onSuccess: () => {
        
      toast.success("Password reset successful!");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      router.push("/auth");
    },
    onError: (err: any) => {
      console.error(err);
      toast.error("Failed to reset your password:", err.response?.data?.message || err.message);
    },
  });
};

  return {
   
    login: login.mutateAsync,
    register: register.mutateAsync,
    logout: logout.mutateAsync,
    loginLoading: login.isPending,
    registerLoading: register.isPending,
    logoutLoading: logout.isPending,
    useRequestPasswordResetMutation: useRequestPasswordResetMutation,
    useResetPasswordMutation: useResetPasswordMutation,
   
  };
};
