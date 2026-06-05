// Variabel namaItem (var): deklarasi, scope global
var namaItem = "Baju Kaos"; // deklarasi dan inisialisasi, scope global

// Variabel hargaItem (const): deklarasi, scope block
const hargaItem = 150000; // deklarasi dan inisialisasi, scope block

// Fungsi untuk menampilkan nama dan harga item
function tampilkanItem() {
    console.log("Nama Item: " + namaItem); // akses variabel namaItem (global)
    console.log("Harga Item: Rp " + hargaItem); // akses variabel hargaItem (block scope)
}

// Panggil fungsi untuk menampilkan data
tampilkanItem();