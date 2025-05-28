import {useState} from "react";
import type {ConfirmToken} from "../../types/Auth.ts";
import NewPasswordForm from "../../components/auth/NewPasswordForm.tsx";
import NewPasswordToken from "../../components/auth/NewPasswordToken.tsx";

export default function NewPasswordView() {
    const [token, setToken] = useState<ConfirmToken['token']>('')
    const [isValidToken, setIsValidToken] = useState<boolean>(false)

    return (
        <>
            {!isValidToken? <NewPasswordToken token={token} setToken={setToken} setIsValidToken={setIsValidToken}/> :
                <NewPasswordForm token={token} />}
        </>

    );
}
