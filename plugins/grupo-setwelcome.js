let fs = require('fs')

let handler = async (m, { conn, text }) => {
    if (text) {
        global.db.data.chats[m.chat].sWelcome = text
        conn.reply(m.chat, '🤩🤩🤩🤩🤩🤩 ¡Entendido! Daré esta bienvenida a todos los nuevos miembros.', null, m)
    } else if (fs.existsSync('media/menu/welcome.jpg')) {
        global.db.data.chats[m.chat].sWelcome = 'media/menu/welcome.jpg'
        conn.reply(m.chat, lenguajeGB.smsSetW(), null, m)
    } else {
        throw `${lenguajeGB['smsSetW2']()}`
    }
}
handler.help = ['setwelcome <texto>']
handler.tags = ['group']
handler.command = ['setwelcome', 'bienvenida'] 
handler.admin = true
export default handler
