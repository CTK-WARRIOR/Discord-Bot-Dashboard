module.exports = {
    dev: process.env.NODE_ENV !== 'production',
    plugins: [ '~/plugins/socket.client.js', '~/plugins/progress.js'],
      head: {
        link: [
            { rel: 'stylesheet', type: 'text/css', href: '/css/nprogress.css' },
            { rel: 'stylesheet', type: 'text/css', href: '/css/loadIndicator.css' }
        ]
    },
    server: {
        host: '0',
        port: 3000
    }
}
