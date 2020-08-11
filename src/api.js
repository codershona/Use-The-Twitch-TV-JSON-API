// import React from 'react';
// import App from './App';

// import axios from 'axios';


// let api = axios.create({
// 	headers: {
// 		 "Client-ID": '4mfy053h9jf3zqwy3fh1pi55oadib1'
// 	}

// });

// export default api;



import axios from 'axios';

import { clientId } from './constants';

let api = axios.create({
    headers: {
        'Client-ID': clientId,
        'Authorization': localStorage.getItem('accessToken')
    }
});

export default api;



