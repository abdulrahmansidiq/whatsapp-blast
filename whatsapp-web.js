// install dulu sebelum menjalankan kode ini
// npm init -y
// npm install whatsapp-web.js qrcode-terminal

const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
    console.log('Client is ready!');

    const nomorList = [
        '6281388761066@c.us',
        '6282399871133@c.us',
        // Tambahkan nomor lainnya di sini
    ];

    const pesan = 'Halo! Ini pesan otomatis dari sistem WhatsApp Blast.';

    for (let nomor of nomorList) {
        await client.sendMessage(nomor, pesan);
        console.log(`Pesan dikirim ke: ${nomor}`);
    }
});

client.initialize();
