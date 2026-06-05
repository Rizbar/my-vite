// Deklarasi variabel nama dengan var (global scope)
var nama; // deklarasi, scope global

// Inisialisasi variabel nama
nama = "Akbar"; // inisialisasi, scope global

// Deklarasi variabel makanan dengan const (block scope)
const makanan = "Sate Padang"; // deklarasi dan inisialisasi, scope block

// Deklarasi variabel minuman dengan const (block scope)
const minuman = "Teh Manis"; // deklarasi dan inisialisasi, scope block

// Fungsi untuk menampilkan data
function tampilkanData() {
    // Menggunakan variabel dalam fungsi (fungsi scope)
    console.log("Nama: " + nama); // akses variabel nama (global)
    console.log("Makanan Kesukaan: " + makanan); // akses variabel makanan (block scope)
    console.log("Minuman Kesukaan: " + minuman); // akses variabel minuman (block scope)
}

// Panggil fungsi untuk menampilkan data
tampilkanData();