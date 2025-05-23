import type {UserRegisterForm} from "../../types/Auth.ts";
import {useForm} from "react-hook-form";
import ErrorMessage from "../../components/ErrorMessage.tsx";
import {Link} from "react-router";
import {createAccount} from "../../api/AuthAPI.ts";
import {useMutation} from "@tanstack/react-query";
import {toast} from "sonner";

function MyIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-gray-800">
            <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
            <path
                fillRule="evenodd"
                d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default function RegisterUI(){
    const initialValues:UserRegisterForm = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const {register, handleSubmit, formState:{errors}, reset, watch} = useForm({defaultValues: initialValues})

    const {mutate} = useMutation({
        mutationFn: createAccount,
        onError: (error) => {
            toast.error(error.message.toString(),{
                duration: 7000
            });
        },
        onSuccess: (data) => {
            toast(data,{
                className: 'font-semibold',
                description: "Confirm your account checking your email",
                duration: 7000,
                icon: <MyIcon/>
            })
            reset()
        }
    })

    const password = watch('password')

    const handleLogin = (formData: UserRegisterForm) => {
        mutate(formData)
    }


    return(
        <div className="flex flex-1 flex-col justify-center items-center p-8">
            <div className="w-full max-w-md space-y-6">
                <h3 className="text-3xl font-bold text-center">Welcome back</h3>
                <p className="text-lg text-center">
                    Do have an account?{' '}
                    <Link to={'/auth/login'} className="text-blue-700 hover:underline">
                        Login
                    </Link>
                </p>

                <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Name</label>
                        <input
                            type="name"
                            placeholder="yourname"
                            className="mt-1 block w-full border-b border-gray-300 focus:border-gray-800 focus:ring-0 px-0 py-2 outline-none"
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />
                        {errors.name && (
                            <ErrorMessage>{errors.name.message}</ErrorMessage>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="mt-1 block w-full border-b border-gray-300 focus:border-gray-800 focus:ring-0 px-0 py-2 outline-none"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <ErrorMessage>{errors.email.message}</ErrorMessage>
                        )}
                    </div>
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
                        <label className="block text-sm font-semibold text-gray-700">Confirm Password</label>
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
    )
}