const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://fortniteapi.io/v2/shop?lang=ru";
debugger
function getData() {
    const result = fetch(API_URL, {
            headers: {
                Authorization: API_KEY
            }
        })
        .then((response) => response.json()).then(data => data.shop);

    return result
}

export {getData}