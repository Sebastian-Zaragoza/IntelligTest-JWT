import api from "../lib/axios.ts";
import {isAxiosError} from "axios";
import type {UserRegisterForm} from "../types/Auth.ts";

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