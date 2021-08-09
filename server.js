const {
    Nuxt,
    Builder
} = require('nuxt')
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const config = require("./nuxt.config.js") // NUXT CONFIG FILE
const port = process.env.PORT || 3000 //PORT
const host = "bot.ctk.repl.co" //HOST
// We instantiate Nuxt.js with the options
const nuxt = new Nuxt(config)
app.use(nuxt.render)
// Build only in dev mode
if (config.dev) {
    new Builder(nuxt).build()
}
server.listen(port, () => {
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    })
})

require("./bot/index")(io)