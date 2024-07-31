
let URL_EXTENSION;

if (process.env.NODE_ENV === 'production') {

} else {
    URL_EXTENSION = "/";
}

export {
    URL_EXTENSION
};