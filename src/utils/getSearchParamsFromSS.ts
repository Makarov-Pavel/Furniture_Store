interface ISearchParamsFromSS {
    page: number,
    sortBy: 'Popular' | 'Low' | 'Hight',
    type: string,
    search: string
}

export const getSearchParamsFromSS = (): ISearchParamsFromSS => {

    const data: ISearchParamsFromSS = JSON.parse(sessionStorage.getItem('searchParams') as string)

    if(data) return {
        page: data.page,
        sortBy: data.sortBy,
        type: data.type,
        search: data.search,
    }  
    return {
        page: 1,
        sortBy: 'Popular',
        type: 'all',
        search: '',
    }
}