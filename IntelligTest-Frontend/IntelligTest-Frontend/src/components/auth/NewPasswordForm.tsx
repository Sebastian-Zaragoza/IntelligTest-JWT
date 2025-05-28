import ErrorMessage from "../ErrorMessage.tsx";
import type {ConfirmToken, NewPasswordResetForm} from "../../types/Auth.ts";
import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {updatePasswordWithToken} from "../../api/AuthAPI.ts";
import {toast} from "sonner";

type NewPasswordFormProps = {
    token: ConfirmToken['token']
}

export default function NewPasswordForm({token}: NewPasswordFormProps) {
    const navigate = useNavigate()
    const initialValues: NewPasswordResetForm = {
        password: '',
        confirmPassword: '',
    }

    const {register, handleSubmit, reset, watch, formState:{errors}} = useForm({defaultValues: initialValues})
    const password = watch('password')

    const {mutate} = useMutation({
        mutationFn: updatePasswordWithToken,
        onError: (error) => {
            console.log(error.message)
            toast.error(error.message, {
                duration: 7000,
            })
        },
        onSuccess: () => {
            reset()
            navigate('/auth/login')
        }
    })
    const handleNewPassword = (formData: NewPasswordResetForm) => {
        const data ={
            formData,
            token
        }
        console.log(data)
        mutate(data)
    }

    return (
        <div className="flex flex-1 flex-col justify-center items-center p-8">
            <div className="w-full max-w-md space-y-6">
                <h3 className="text-3xl font-bold text-center">Create a new password</h3>

                <form className="space-y-4" onSubmit={handleSubmit(handleNewPassword)}>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="mt-1 block w-full border-b border-gray-300 focus:border-gray-800 focus:ring-0 px-0 py-2 outline-none"
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />
                        {errors.password && (
                            <ErrorMessage>{errors.password.message}</ErrorMessage>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Confirm password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="mt-1 block w-full border-b border-gray-300 focus:border-gray-800 focus:ring-0 px-0 py-2 outline-none"
                            {...register("confirmPassword", {
                                required: "Password confirmation is required",
                                validate: value =>
                                    value === password || "Passwords do not match",
                            })}
                        />
                        {errors.confirmPassword && (
                            <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-gray-800 text-white rounded-md font-bold hover:opacity-90 transition"
                    >
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
}
