let fs = require('fs')

let handler = async (m, { conn, text, isROwner, isOwner }) => {
    if (fs.existsSync('media/menu/welcome.jpg')) {
        let imageBuffer = fs.readFileSync('media/menu/welcome.jpg')
        conn.sendMessage(m.chat, imageBuffer, 'imageMessage', { quoted: m, caption: lenguajeGB.smsSetW() })
    } else {
        throw `${lenguajeGB['smsSetW2']()}`
    }
}
handler.command = ['setwelcome', 'bienvenida'] 
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler
