const getCookie = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find(c => c.includes(name));
    if (findCookie) {
        'country=US'
        const cookieNameValue = findCookie.split('=');
        return cookieNameValue[1];
    }
}