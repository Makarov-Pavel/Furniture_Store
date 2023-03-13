export const onClickHeaderLogo = ()=> {
   sessionStorage.setItem(
    "searchParams",
    JSON.stringify({
      page: 1,
      limit: 6,
      sortBy: 'Popular',
      search: '',
      type: 'all',
    })
  ) 
}