module.exports = {  // pm2 start process.config.js
    apps : [
    {
        name: 'gateway',
        script: './server/gateway.js',
        watch: true,
    },
    {
        name: 'messanger',
        script:'./server/messanger.js'
    }
],
};
