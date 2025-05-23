import type {UserLoginForm} from "../../types/Auth.ts";
import {useForm} from "react-hook-form";
import ErrorMessage from "../../components/ErrorMessage.tsx";
import {Link} from "react-router";

export default function LoginUI() {
    const initialValues:UserLoginForm = {
        email: '',
        password: '',
    }

    const {register, handleSubmit, formState:{errors}} = useForm({defaultValues: initialValues})
    const handleLogin = (formData: UserLoginForm) => {
        console.log(formData)
    }

    return (
        <div className="flex flex-1 flex-col justify-center items-center p-8">
            <div className="w-full max-w-md space-y-6">
                <h3 className="text-3xl font-bold text-center">Welcome back</h3>
                <p className="text-lg text-center">
                    Don’t have an account?{' '}
                    <Link to={'/auth/create-account'} className="text-blue-700 hover:underline">
                        Click here
                    </Link>
                </p>

                <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
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
                                    value: /\S+@\S+\. \S+/,
                                    message: "Invalid email"
                                },
                            })}
                            {...errors.email && (
                                <ErrorMessage>{errors.email.message}</ErrorMessage>
                            )}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="mt-1 block w-full border-b border-gray-300 focus:border-gray-800 focus:ring-0 px-0 py-2 outline-none"
                            {...register("password", {
                                required: "Password is required",
                            })}
                            {...errors.password && (
                                <ErrorMessage>{errors.password.message}</ErrorMessage>
                            )}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-gray-800 text-white rounded-md font-bold hover:opacity-90 transition"
                    >
                        Continue
                    </button>
                </form>

                <p className="text-center text-lg">
                    Forgot password?{' '}
                    <Link to={'/auth/forget-account'} className="text-blue-700 hover:underline">
                        Click here
                    </Link>
                </p>
            </div>
        </div>
    )
}