const KEY_TOKEN = 'authData';


type LoginResponse = {
    access_token: string,
    token_type: string,
    expires_in: number,
    scope: string,
    userName: string,
    userId: number
}

export const saveAuthData = (obj:LoginResponse) => {
    localStorage.setItem(KEY_TOKEN, JSON.stringify(obj));
}

export const getAuthData = () => {
    const str = localStorage.getItem(KEY_TOKEN) ?? "{}";
    return JSON.parse(str) as LoginResponse;
}

export const removeAuthData = () => {
    localStorage.removeItem(KEY_TOKEN);
}