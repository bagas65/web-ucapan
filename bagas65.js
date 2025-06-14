
// Dibuat ulang oleh Bagas_65
// Versi custom tanpa watermark, bisa dimodifikasi sesuka hati

function Bagas65(musikUrl) {
  // Cek apakah musik disediakan
  if (musikUrl && musikUrl !== "") {
    const audio = new Audio(musikUrl);
    audio.loop = true;
    audio.play().catch(err => {
      console.log("Pemutaran musik gagal: ", err);
    });
  }

  // Inisialisasi AOS (animasi on scroll)
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: true
    });
  }

  // Tambahkan efek lainnya jika perlu, misalnya animasi tambahan atau popup
  console.log("Selamat datang! Fungsi Bagas65 telah berjalan.");
}
