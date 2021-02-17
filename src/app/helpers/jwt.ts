import decode from 'jwt-decode';

export function getAuthToken(){
    const token = (localStorage.getItem('spen-tkn')) ? localStorage.getItem('spen-tkn') : null;
    return token;
}

export function getTokenExpirationDate(): any {
    const token:any = getAuthToken();
    if (!token) {
        return null;
    }
    let date = new Date(0);
    date.setUTCSeconds(token.exp);
    return date;
}

export function isTokenExpired() {
    let expDate = getTokenExpirationDate();
    return expDate < new Date();
}

export function isLoggedIn(): boolean {
    const token:any = getAuthToken();
    return !!token && !isTokenExpired();
}

export function getUserInfo():any{
    if (isLoggedIn()) {
        const token:any = getAuthToken();
        return decode(token);
    }
}
