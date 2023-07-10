//swr - инструмент по типу react query, который помогает нам использовать fetching data без редакса

import useSWR from 'swr'

import fetcher from '../lib/fetcher'

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher)
    

    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default useCurrentUser
