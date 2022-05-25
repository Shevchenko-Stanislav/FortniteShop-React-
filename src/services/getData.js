const API_KEY = "a57423a3-5a512cf4-3a95b386-585078fc";
const API_URL = "https://fortniteapi.io/v2/shop?lang=ru";

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