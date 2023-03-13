export const getNameFromLS = ():string => {
    const name = localStorage.getItem('name') || 'Write a name'
    return name
}