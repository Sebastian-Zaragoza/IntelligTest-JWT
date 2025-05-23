import type {ReactNode} from "react"

export default function ErrorMessage({children}:{children: ReactNode}){
    return(
        <div className="text-center my-4 bg-gray-300 text-blue-600 font-semibold text-md">{children}</div>
    )
}