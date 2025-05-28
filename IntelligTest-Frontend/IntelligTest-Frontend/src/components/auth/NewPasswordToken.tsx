import {Link} from "react-router";
import {PinInput, PinInputField} from "@chakra-ui/pin-input";
import type {ConfirmToken} from "../../types/Auth.ts";
import {useMutation} from "@tanstack/react-query";
import {validateToken} from "../../api/AuthAPI.ts";
import {toast} from "sonner";
import * as React from "react";

type NewPasswordTokenProps = {
    token: ConfirmToken['token']
    setToken: React.Dispatch<React.SetStateAction<string>>
    setIsValidToken: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NewPasswordToken({token, setToken, setIsValidToken}: NewPasswordTokenProps) {
    const {mutate} = useMutation({
        mutationFn: validateToken,
        onError: (error) => {
            toast.error(error.message.toString(),{
                duration: 7000
            });
        },
        onSuccess: (data) => {
            toast.success(data, {
                duration: 7000
            })
        }
    })

    const handleChange = (token: ConfirmToken['token']) => {
        setToken(token)
    }

    const handleComplete = (token: ConfirmToken['token']) => {
        mutate({token})
        setIsValidToken(true)
    }

    return (
        <div className="flex flex-1 flex-col justify-center items-center p-8">
            <div className="w-full max-w-md space-y-6">
                <h3 className="text-3xl font-bold text-center">Reset your password</h3>
                <p className="text-lg text-center">
                    Enter the code here received {' '}
                    <span className="font-bold">via email</span>
                </p>
                <form className="space-y-8 pt-10 bg-white mt-10" noValidate>
                    <div className="flex justify-between gap-3">
                        <PinInput value={token} onChange={handleChange} onComplete={handleComplete}>
                            <PinInputField className="w-16 h-20 p-3 rounded-lg border-gray-300 border placeholder-white text-center"></PinInputField>
                            <PinInputField className="w-16 h-20 p-3 rounded-lg border-gray-300 border placeholder-white text-center"></PinInputField>
                            <PinInputField className="w-16 h-20 p-3 rounded-lg border-gray-300 border placeholder-white text-center"></PinInputField>
                            <PinInputField className="w-16 h-20 p-3 rounded-lg border-gray-300 border placeholder-white text-center"></PinInputField>
                            <PinInputField className="w-16 h-20 p-3 rounded-lg border-gray-300 border placeholder-white text-center"></PinInputField>
                            <PinInputField className="w-16 h-20 p-3 rounded-lg border-gray-300 border placeholder-white text-center"></PinInputField>
                        </PinInput>
                    </div>
                </form>
                <p className="text-center text-lg">
                    Request a{' '}
                    <Link to={'/auth/request-token'} className="text-blue-700 hover:underline">
                        new code
                    </Link>
                </p>
            </div>
        </div>
    );
}