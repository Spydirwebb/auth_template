export const generateToken = (n) => {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var token = '';
    for(var i = 0; i < n.length; i++) {
        token += chars[Math.floor(Math.random() * chars.length)];
    }
    //console.log(token)
    return token;
}