import { useRouteError } from "react-router-dom";

const Error = () => {
    const errorDetails = useRouteError()
    console.log(errorDetails)
    return (
        <>
            <div className="font-bold text-4xl">Oops!!</div>
            <div className="text-base">Something went wrong...</div>
            <div className="text-lg font-medium">{errorDetails?.status} - {errorDetails?.statusText}</div>
        </>
    )
} 

export default Error; 