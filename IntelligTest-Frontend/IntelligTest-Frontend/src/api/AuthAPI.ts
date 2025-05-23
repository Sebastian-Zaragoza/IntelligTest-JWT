import api from "../lib/axios.ts";
import {isAxiosError} from "axios";
import type {ConfirmToken, UserRegisterForm} from "../types/Auth.ts";

export async function createAccount(formData: UserRegisterForm){
    try {
        const url = '/auth/create-account'
        const {data} = await api.post<string>(url, formData)
        return data
    }catch(error){
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error);
        }
    }
}

export async function confirmAccount(formData: ConfirmToken){
    try{
        const url = '/auth/confirm-account'
        const {data} = await api.post<string>(url, formData)
        return data
    }catch(error){
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error);
        }
    }
}