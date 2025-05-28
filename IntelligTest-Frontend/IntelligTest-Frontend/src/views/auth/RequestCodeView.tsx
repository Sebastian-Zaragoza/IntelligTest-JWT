import {Link} from "react-router";
import ErrorMessage from "../../components/ErrorMessage.tsx";
import {useForm} from "react-hook-form";
import type {RequestNewToken} from "../../types/Auth.ts";
import {useMutation} from "@tanstack/react-query";
import {requestNewCode} from "../../api/AuthAPI.ts";
import {toast} from "sonner";

export default function RequestCodeView() {
    const initialValues:RequestNewToken = {
        email: "",
    }

    const {register, handleSubmit, formState:{errors}, reset} = useForm<RequestNewToken>({defaultValues: initialValues})

    const {mutate} = useMutation({
        mutationFn: requestNewCode,
        onError: (error: Error) => {
            toast.error(error.message, {
                duration: 7000,
            })
        },
        onSuccess: (data) =>{
            toast.success(data, {
                duration: 7000,
            })
            reset()
        }
    })

    const handleRequestCode = (formData: RequestNewToken) => {
        mutate(formData)
    }

    return (
        <div className="flex flex-1 flex-col justify-center items-center p-8">
            <div className="w-full max-w-md space-y-6">
                <h3 className="text-3xl font-bold text-center">Request a new code to confirm your account</h3>

                <form className="space-y-4" onSubmit={handleSubmit(handleRequestCode)}>
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
                                    message: "Invalid email"
                                },
                            })}
                        />
                        {errors.email && (
                            <ErrorMessage>{errors.email.message}</ErrorMessage>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-gray-800 text-white rounded-md font-bold hover:opacity-90 transition"
                    >
                        Continue
                    </button>
                </form>

                <p className="text-center text-lg">
                    Already have an account?{' '}
                    <Link to={'/auth/login'} className="text-blue-700 hover:underline">
                        Log in
                    </Link>
                </p>

                <p className="text-lg text-center">
                    Don’t have an account?{' '}
                    <Link to={'/auth/register'} className="text-blue-700 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
