export const createURL = ({instance, userValue}) => {
    if(!userValue) return "";
    // const _param  = userValue ?  "?" : "&";
    return userValue + "&"+"_session-cookie="+instance; 
}