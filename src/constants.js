import axios from 'axios';

export const clientId = "4mfy053h9jf3zqwy3fh1pi55oadib1";
export const clientSecret = "64sxokqur79eormwhyk9xm4w36jz9b";

export const fetchAccessToken = async () => {
    let api = axios.create();
    const result = await api.post(`https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`);
    console.log(result.data.access_token);
    localStorage.setItem('accessToken', 'Bearer ' + result.data.access_token);
}