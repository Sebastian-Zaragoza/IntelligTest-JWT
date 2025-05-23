import type {ReactNode} from "react"
import {InfoCircledIcon} from "@radix-ui/react-icons";

export default function ErrorMessage({children}:{children: ReactNode}){
    return(
        <div
            className="w-full bg-gray-50 border border-gray-200 rounded-b-md p-3 flex items-center space-x-2">
            <InfoCircledIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
            <p className="text-gray-700 text-sm">
                {children}
            </p>
        </div>
    )
}