import api from "../lib/axios.ts";
import {isAxiosError} from "axios";
import type {
    ConfirmToken,
    RequestNewToken,
    UserRegisterForm,
    UserLoginForm,
    RequestNewTokenForgetPassword, NewPasswordResetForm
} from "../types/Auth.ts";

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

export async function requestNewCode(formData: RequestNewToken){
    try{
        const url = '/auth/request-token'
        const {data} = await api.post<string>(url, formData)
        return data
    }catch(error){
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error);
        }
    }
}

export async function loginAccount(formData: UserLoginForm){
    try{
        const url = '/auth/login'
        const {data} = await api.post<string>(url, formData)
        localStorage.setItem('DevFlowAuthToken', data)
    }catch(error){
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error);
        }
    }
}

export async function forgetPassword(formData: RequestNewTokenForgetPassword){
    try{
        const url = '/auth/forget-password'
        const {data} = await api.post<string>(url, formData)
        return data
    }catch(error){
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error);
        }
    }
}

export async function validateToken(formData: ConfirmToken){
    try {
        const url = '/auth/validate-token'
        const {data} = await api.post<string>(url, formData)
        return data
    }catch(error){
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error);
        }
    }
}

export async function updatePasswordWithToken({formData, token}:{formData: NewPasswordResetForm, token: ConfirmToken['token']}){
    try{
        const url = `/auth/update-password/${token}`
        const {data} = await api.post<string>(url, formData)
        return data
    }catch(error){
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error);
        }
    }
}