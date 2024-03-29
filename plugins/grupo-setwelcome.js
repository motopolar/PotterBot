let fs = require('fs')

let handler = async (m, { conn, text, isROwner, isOwner }) => {
    if (fs.existsSync('media/pictures/welcome.jpg')) {
        global.db.data.chats[m.chat].sWelcome = 'media/pictures/welcome.jpg'
        conn.reply(m.chat, lenguajeGB.smsSetW(), fkontak, m)
    } else {
        throw `${lenguajeGB['smsSetW2']()}`
    }
}
handler.command = ['setwelcome', 'bienvenida'] 
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler
