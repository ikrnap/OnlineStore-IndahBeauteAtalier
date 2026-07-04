# 🛍️ INDAH'S BEAUTÉ ATELIER
> Proyek Pengembangan Platform E-Commerce Kosmetik & Perawatan Diri Terintegrasi

---

### 👤 IDENTITAS MAHASISWA
* **Nama:** Indah Kirana Putri
* **NIM:** 209250134
* **Mata Kuliah:** Komputer Aplikasi IT-II (KAIT II)
* **Program Studi:** Administrasi Bisnis (ABI 6)
* **Semester:** Genap 2025/2026

---

## 🔗 LINK AKSES UTAMA
* **Link Live Website (Customer):** [Klik di sini](https://ikrnap.github.io/OnlineStore-IndahBeauteAtalier/) untuk mengakses toko utama pelanggan.
* **Link Halaman Admin:** [Klik di sini](https://ikrnap.github.io/OnlineStore-IndahBeauteAtalier/admin_login.html) untuk masuk ke panel pengelolaan admin.
* **Link Repository GitHub:** [Klik di sini](https://github.com/ikrnap/OnlineStore-IndahBeauteAtalier) untuk melihat *source code* repositori.

---

## 📝 DESKRIPSI & STRATEGI BISNIS

### 1. Judul Proyek
“Membangun Website E-Commerce Fungsional dengan Integrasi Strategi Bisnis Modern”

### 2. Business Overview & Analisis Manajemen Strategis

*   **Visi, Nama, & Konsep Bisnis:**  
    **Indah's Beauté Atelier** didirikan sebagai platform *smart e-commerce* yang mengurasi produk kecantikan premium—mencakup kategori *skincare, cosmetics, haircare, bodycare,* hingga *perfume*—dari merek lokal pilihan yang telah teruji secara klinis dan memiliki sertifikasi keamanan ketat. Bisnis ini tidak sekadar bertindak sebagai toko kosmetik daring biasa, melainkan sebuah wadah kurasi (*curated marketplace*) yang mengedukasi konsumen untuk menemukan produk yang benar-benar sesuai dengan kebutuhan spesifik tubuh dan kulit mereka.

*   **Proposisi Nilai Keunggulan (*Value Proposition*):**  
    Kami mengusung tiga pilar nilai utama: *Ethical Beauty, Price Transparency,* dan *Seamless Shopping Experience*. Seluruh produk yang tersedia dijamin 100% *cruelty-free* (tidak diuji pada hewan) dan ramah lingkungan. Di tengah maraknya produk tiruan di pasar digital, Indah's Beauté Atelier menjamin keaslian mutlak dengan jalur distribusi yang transparan, memberikan informasi kandungan produk secara detail, serta menghadirkan pengalaman belanja personal lewat antarmuka yang intuitif dan bebas gangguan iklan pihak ketiga.

*   **Segmentasi & Analisis Pasar Sasaran (*Target Market*):**  
    Segmentasi pasar difokuskan pada demografi perempuan urban berusia 18–35 tahun, yang didominasi oleh mahasiswi dan pekerja kantoran (*early jobbers*). Berdasarkan analisis perilaku konsumen, segmen ini memiliki karakteristik yang sangat peduli pada kesehatan kulit jangka panjang (*skin investment*), cenderung melakukan riset mandiri (*smart buyer*) sebelum membeli, dan sangat sensitif terhadap estetika visual sebuah platform belanja. Mereka adalah kelompok yang memprioritaskan kualitas dan pengalaman dibanding sekadar mencari harga termurah.

*   **Analisis Lanskap Kompetitif (*Competitor Analysis*):**  
    Di tengah ketatnya persaingan dengan raksasa *marketplace* dan distributor kosmetik massal, Indah's Beauté Atelier mengambil ceruk pasar (*niche market*) melalui strategi diferensiasi fokus. Kelemahan utama kompetitor massal adalah visual yang terlalu padat, banyaknya produk replika, serta algoritma yang membingungkan. Kami mengantisipasi hal tersebut dengan menyajikan *User Interface* (UI) yang minimalis, elegan, dan fokus penuh pada kenyamanan eksplorasi katalog. Pendekatan ini membangun kedekatan emosional (*brand intimacy*) yang membuat konsumen merasa berbelanja di sebuah butik kecantikan eksklusif, bukan di pasar daring yang bising.

*   **Arsitektur Model Bisnis & Aliran Pendapatan (*Revenue Stream*):**  
    Bisnis ini beroperasi dengan model **B2C (Business-to-Consumer) Online Retailer** murni, mengadopsi rantai pasok langsung dari produsen atau distributor resmi (*authorized distributor*) guna memotong margin perantara yang tidak perlu. Aliran pendapatan utama (*primary revenue stream*) diperoleh secara langsung melalui selisih harga jual produk (*direct retail margin*) kepada konsumen akhir. Di masa mendatang, model ini dirancang untuk dapat berkembang ke arah *recurring revenue* melalui sistem paket langganan produk bulanan (*beauty box subscription*).

*   **Strategi Penetapan Harga & Manajemen Promosi (*Pricing & Promotion*):**  
    Penetapan harga menggunakan pendekatan campuran antara *value-based pricing* (menyelaraskan harga dengan persepsi nilai premium produk) dan *competitive pricing* untuk produk-produk komoditas kecantikan yang populer. Untuk memicu keputusan pembelian, strategi promosi dirancang secara berkala menggunakan stimulus psikologis:
    *   **Aktivasi Kupon Diskon Tematik:** Promosi berbasis momentum kalender atau *event-driven marketing* untuk meningkatkan volume transaksi pada hari-hari besar.
    *   **Strategi Bundling:** Mengombinasikan beberapa produk pelengkap (misal: *facial wash + toner + ampoule*) dalam satu paket harga khusus demi mengoptimalkan nilai rata-rata transaksi per konsumen (*Average Order Value*).

*   **Alur Checkout & Simulasi Arsitektur Transaksi (*Payment Workflow*):**  
    Guna meminimalkan hambatan psikologis saat memproses pembayaran, alur transaksi dirancang seringkas mungkin (maksimal 3 langkah dari keranjang belanja hingga halaman sukses). Pengguna diarahkan untuk mengisi form pengiriman yang ringkas pada `checkout.html`, diikuti dengan simulasi integrasi gerbang pembayaran otomatis (*dummy payment gateway payment loop*). Arsitektur ini mengadopsi standardisasi industri global seperti sistem API Midtrans atau Xendit, memastikan alur enkripsi data dan validasi transaksi berjalan presisi dari sisi pengguna maupun panel admin.

*   **Rencana Optimasi Mesin Pencari & Analisis Metrik (*SEO & Analytics Plan*):**  
    Implementasi teknis pada kode sumber menyertakan optimasi komponen *On-Page SEO*, seperti penggunaan struktur tag semantik (`<header>`, `<main>`, `<article>`), meta description yang kaya kata kunci (*keywords*), serta optimasi atribut `alt` pada ke-24 aset gambar produk agar mudah diindeks oleh Google. Dari sisi operasional bisnis, keberhasilan performa digital web diukur menggunakan tiga metrik utama:
    1.  *Conversion Rate* (mengukur persentase pengunjung yang sukses melakukan *checkout*).
    2.  *Bounce Rate* (menganalisis relevansi konten halaman terhadap ekspektasi pengunjung).
    3.  *Cart Abandonment Rate* (memantau persentase pengguna yang meninggalkan keranjang belanja untuk kemudian dioptimalkan melalui perbaikan alur JavaScript).

---

## 🛠️ FITUR TEKNIS & DOKUMENTASI

### 1. Fitur Utama Website (Pure Vanilla HTML, CSS, JS)
* **Responsive Layout:** Implementasi penuh CSS Flexbox dan Grid untuk memastikan tampilan web tetap presisi baik di layar Desktop, Tablet, maupun *Smartphone*.
* **Manajemen Keranjang Belanja:** Sistem penyimpanan keranjang belanja interaktif yang sinkron secara otomatis menggunakan fitur `localStorage` pada browser.
* **Arsitektur Multi-Halaman:** Pemisahan halaman yang terstruktur antara katalog utama pelanggan, detail produk, form pembayaran, hingga panel login dan pengelolaan back-end untuk admin.
* **Sistem Pencarian & Filter:** Fitur pencarian produk secara *real-time* berbasis JavaScript untuk mempermudah navigasi konsumen dalam menemukan kategori produk spesifik.

### 2. Struktur File Proyek
```text
OnlineStore-IndahBeauteAtalier/
├── index.html                  # Halaman Utama Toko (Katalog Toko)
├── detail_produk.html          # Modul Tampilan Detail Informasi Produk
├── keranjang.html              # Halaman Keranjang Belanja Pelanggan
├── checkout.html               # Form Pengisian Data & Pembayaran
├── order_success.html          # Halaman Konfirmasi Transaksi Berhasil
├── login.html                  # Halaman Autentikasi Pengguna/Customer
├── profile.html                # Halaman Informasi Akun Customer
│
├── admin.html                  # Gerbang Utama Dashboard Admin
├── admin_login.html            # Halaman Autentikasi Keamanan Admin
├── admin_dashboard.html        # Panel Monitoring & Ringkasan Data Admin
├── admin_produk.html           # Manajemen Daftar Inventori Produk
├── admin_tambah_produk.html    # Form Input Penambahan Produk Baru
├── admin_edit_produk.html      # Form Perubahan Data Produk
├── admin_pesanan.html          # Panel Pemantauan Transaksi Masuk
│
├── README.md                   # Dokumentasi Resmi Proyek
│
│── [Aset Gambar Produk] (24 file visual di direktori utama)
│   ├── ampoule baru.jpeg
│   ├── blushon.jpg.jpeg
│   ├── body wash.jpg.jpeg
│   ├── claymask baru.jpeg
│   └── ... (dan aset produk kecantikan lainnya)
