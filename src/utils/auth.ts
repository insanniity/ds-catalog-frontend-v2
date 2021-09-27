import {getAuthData} from "utils/storage";
import jwtDecode from "jwt-decode";

export type TokenData = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

export type Role = 'ROLE_OPERATOR' | 'ROLE_ADMIN';

export const getTokenData = (): TokenData | undefined => {
    const { access_token } = getAuthData();
    try{
        return jwtDecode(access_token) as TokenData;
    }catch (error){
        return undefined;
    }
}

export const isAuthenticated = ():boolean =>{
    const tokenDataDecoded = getTokenData();
    return !!(tokenDataDecoded && tokenDataDecoded.exp * 1000 > Date.now());
}


export const hasAnyRoles = (roles:Role[]):boolean => {
    const tokenData = getTokenData();
    if(roles.length === 0 ) return true;
    if(tokenData !== undefined){
        return roles.some(role => tokenData.authorities.includes(role));
    }
    return false;
}