// export const getToken = () => {
//     const userDataString = localStorage.getItem('userData');
//     let userData = JSON.parse(userDataString);
//     return userData?.token
// }

export const getToken = () => {
    const userDataString = localStorage.getItem('token');
    return userDataString
}