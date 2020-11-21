const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/ArugaZ

Instagram: https://instagram.com/mhyw_617

Best regards, mhyw.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
HAI, ${pushname}! 👋️ 

 💈SEBELUM MENGGUNAKAN BOT INI SILAHKAN BACA RULES DIBAWAH YA!!
    RULES mhywBOT :
    • Dilarang spam command/fitur yang ada
    • Dilarang telpon/vc(video call)
   
 
 💈INILAH FITUR BOT YANG BISA DIGUNAKAN PADA BOT INI:

 Bot masuk group? Silahkan chat owner bot ( Wa.me/6282338122626 )
 💈 Instagram Owner : https://instagram.com/mhyw_617


  🤖 Create Menu:
➤ *${prefix}sticker*
➤ *${prefix}stickergif*
➤ *${prefix}stickergiphy*
➤ *${prefix}meme*
➤ *${prefix}quotemaker*
➤ *${prefix}nulis*

  🤖 Islam: 
➤ *${prefix}infosurah*
➤ *${prefix}surah*
➤ *${prefix}tafsir*
➤ *${prefix}ALaudio*
➤ *${prefix}jsolat*

  🤖 Nekopoi (18+)
➤ *${prefix}nekopoi*

FUN MENU 2 (Group Only):
➤ *${prefix}simisimi*
➤ *${prefix}katakasar*
		┷➤ *${prefix}klasmen*

  🤖 DOWNLOADER: 
➤ *${prefix}instagram*
➤ *${prefix}ytmp3*
➤ *${prefix}ytmp4*

  🤖 PRIMBON:
➤ *${prefix}artinama*
➤ *${prefix}cekjodoh*

  🤖PENCARIAN
➤ *${prefix}images*
➤ *${prefix}sreddit*
➤ *${prefix}resep*
➤ *${prefix}stalkig*
➤ *${prefix}wiki*
➤ *${prefix}cuaca*
➤ *${prefix}chord*
➤ *${prefix}lirik*
➤ *${prefix}ss*
➤ *${prefix}play*
➤ *${prefix}whatanime*

  🤖RANDOM TEKS :
➤ *${prefix}fakta*
➤ *${prefix}pantun*
➤ *${prefix}katabijak*
➤ *${prefix}quote*

  🤖RANDOM GAMBAR:
➤ *${prefix}anime*
➤ *${prefix}kpop*
➤ *${prefix}memes*

  🤖Lain-lain:
➤ *${prefix}tts*
➤ *${prefix}translate*
➤ *${prefix}resi*
➤ *${prefix}covidindo*
➤ *${prefix}ceklokasi*
➤ *${prefix}shortlink*
➤ *${prefix}bapakfont*

  🤖Tentang Bot:
➤ *${prefix}tnc*
➤ *${prefix}botstat*
➤ *${prefix}ownerbot*
➤ *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

  💈Owner Bot Only:
-❥ *${prefix}ban* - banned (banned user)
-❥ *${prefix}bc* - promosi (broadcast/pengumuman)
-❥ *${prefix}leaveall* - (keluar dari semua grup yang ada)
-❥ *${prefix}clearall* - (menghapus semua chat yang ada)

Hope you have a great day!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
🔰 [ *Admin Group Only* ] 🔰 
Berikut adalah fitur admin grup yang ada pada bot ini!

-❥ *${prefix}add* 628xxxx
-❥ *${prefix}kick* @tag user
-❥ *${prefix}promote* @tag user
-❥ *${prefix}demote* @tag user
-❥ *${prefix}tagall* (Tag semua member di grup)
-❥ *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

🔰 [ *Owner Group Only* ] 🔰
Berikut adalah fitur owner grup yang ada pada bot ini!
-❥ *${prefix}kickall* (kick semua member yang ada di grup)
*Owner Group adalah pembuat grup.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi ke nomer owner bot yang tertera dibawah
🔰 DANA  : 0823-3812-2626
🔰 GOPAY : 0823-3812-2626
🔰 PULSA : 0823-3812-2626

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. -mhyw`
}
