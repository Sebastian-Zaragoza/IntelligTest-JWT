import {Link} from "react-router";
import {PinInput, PinInputField} from "@chakra-ui/pin-input";
import {useState} from "react";
import type {ConfirmToken} from "../../types/Auth.ts";
import {useMutation} from "@tanstack/react-query";
import {confirmAccount} from "../../api/AuthAPI.ts";
import {toast} from "sonner";
import {useNavigate} from "react-router";

export default function ConfirmAccountView() {
    const navigate = useNavigate()
    const [token, setToken] = useState<ConfirmToken['token']>('')
    const handleChange = (token: ConfirmToken['token']) => {
        setToken(token)
    }

    const {mutate} = useMutation({
        mutationFn: confirmAccount,
        onError: (error) => {
            toast.error(error.message.toString(),{
                duration: 7000
            });
        },
        onSuccess: (data) => {
            toast.success(data,{
                duration: 7000
            })
            navigate('/auth/login')
        }
    })

    const handleComplete = (token: ConfirmToken['token']) => {
        console.log({token})
        mutate({token})
    }

    return (
        <div className="flex flex-1 flex-col justify-center items-center p-8">
            <div className="w-full max-w-md space-y-6">
                <h3 className="text-3xl font-bold text-center">Confirm your account</h3>
                <p className="text-lg text-center">
                    Enter the code here {' '}
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
                        New code
                    </Link>
                </p>
            </div>
        </div>
    );
}