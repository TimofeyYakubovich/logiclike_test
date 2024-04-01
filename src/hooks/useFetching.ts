import { useState } from "react"

export const useFetching = (collback: (...args: any[]) => Promise<void>) => {
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState('');

const fetching = async (...args: any[]) => {
    try {
        setIsLoading(true);
        await collback(...args);
    } catch (e: any) {
        setError(e.message)
    } finally {
        setIsLoading(false);
    }
}

return [fetching, isLoading, error] as const;

}