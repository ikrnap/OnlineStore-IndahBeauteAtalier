/* ============================================================
   default_products.js — Shared default product dataset
   Digunakan oleh halaman toko dan admin untuk memastikan produk default
   tersedia saat website baru diakses setelah upload GitHub.
   ============================================================ */

const defaultProducts = [
  {
    id: 1,
    name: "Luminous Silk Velvet Liptint",
    price: 490000,
    category: "makeup",
    img: "liptint.jpg.jpeg",
    image: "./image/liptint.jpg.jpeg",
    foto: "./image/liptint.jpg.jpeg",
    stock: 42,
    sold: 2400,
    desc: "An ultra-refined fluid liptint crafted with premium French Rose Extract and nourishing Squalane. Delivers weightless hydration with a couture matte finish.",
    reviews: [
      { user: "Alexandra M.", rate: 5, txt: "The formulation is exceptionally velvety. It sits comfortably on dry lips for hours. Exceptional packaging." },
      { user: "Victoria S.", rate: 4.9, txt: "Incredibly light weight texturing. The tint fades gracefully into a natural rose flush." },
      { user: "Clara H.", rate: 5, txt: "True high end artistry. Smells divine and the glass bottle feels heavily premium." }
    ],
    emoji: "💄",
    hot: true
  },
  {
    id: 2,
    name: "Couture Celestial Quad Eyeshadow",
    price: 980000,
    category: "makeup",
    img: "eyshadow.jpg.jpeg",
    image: "./image/eyshadow.jpg.jpeg",
    foto: "./image/eyshadow.jpg.jpeg",
    stock: 19,
    sold: 1100,
    desc: "Koleksi memukau yang terdiri dari empat eyeshadow berpigmen tinggi, diperkaya dengan 24k Gold Micro-shimmer dan bio-ceramides untuk aplikasi selembut butter.",
    reviews: [
      { user: "Isabella K.", rate: 5, txt: "Zero fallout dengan pigmentasi yang luar biasa pekat. Kilau emasnya tampak begitu memukau di bawah warm lighting." },
      { user: "Sophia L.", rate: 5, txt: "Tetap terlihat fresh dan sempurna seharian tanpa creasing. Benar-benar worth it!" },
      { user: "Giselle P.", rate: 4.9, txt: "Formulasi warna shimmernya menempel sempurna. Desain packaging yang sangat elegan dan mewah." }
    ],
    emoji: "✨",
    hot: true
  },
  {
    id: 3,
    name: "Satin Petal Infusion Blush On",
    price: 540000,
    category: "makeup",
    img: "blushon.jpg.jpeg",
    image: "./image/blushon.jpg.jpeg",
    foto: "./image/blushon.jpg.jpeg",
    stock: 28,
    sold: 1800,
    desc: "Diperkaya dengan micronized silk polymers dan bubuk mutiara asli yang dihancurkan secara halus. Memberikan rona pancaran dari dalam dengan bauran yang terasa ringan dan menyatu sempurna.",
    reviews: [
      { user: "Evelyn T.", rate: 5, txt: "Memberikan efek rona segar alami yang youthful banget. Partikel bedaknya sangat halus sampai bisa memberikan efek blur pada pori-pori." },
      { user: "Fiona G.", rate: 4.9, txt: "Warna nude pink yang super natural. Sudah termasuk wadah compact premium yang dilengkapi dengan cermin." },
      { user: "Diana W.", rate: 5, txt: "Formulanya stunning dan sangat buildable. Sama sekali enggak bikin tekstur kulit makin kelihatan." }
    ],
    emoji: "🌸",
    hot: true
  },
  {
    id: 4,
    name: "Perfecting Silk Veil Two Way Cake",
    price: 790000,
    category: "makeup",
    img: "two way cake.jpg.jpeg",
    image: "./image/two way cake.jpg.jpeg",
    foto: "./image/two way cake.jpg.jpeg",
    stock: 31,
    sold: 3200,
    desc: "Powder foundation high-definition dengan manfaat dual-action, diperkaya Hyaluronic Acid Spheres dan SPF 30. Menghasilkan coverage penuh dengan hasil akhir sehalus porselen.",
    reviews: [
      { user: "Grace N.", rate: 5, txt: "Menahan minyak hingga dua belas jam berturut-turut tanpa terlihat cakey. Absolute perfection!" },
      { user: "Nathalie B.", rate: 5, txt: "Kulitku kelihatan mulus banget kayak pakai filter. Formulanya menyatu sempurna dengan warna kulit asliku." },
      { user: "Helena M.", rate: 4.9, txt: "Terasa sangat ringan dan bikin kulit tetap bisa bernapas. Menjaga wajah tetap kelihatan fresh walau di bawah cuaca panas sekalipun." }
    ],
    emoji: "🪞",
    hot: false
  },
  {
    id: 5,
    name: "Soft Cashmere Matte Lipcream",
    price: 460000,
    category: "makeup",
    img: "lipcream.jpg.jpeg",
    image: "./image/lipcream.jpg.jpeg",
    foto: "./image/lipcream.jpg.jpeg",
    stock: 55,
    sold: 4100,
    desc: "Diformulasikan dengan pure botanic oils dan Shea Butter Comfort Blend. Memberikan efek blurred lip yang elegan tanpa membuat bibir kering atau cracking.",
    reviews: [
      { user: "Chloe J.", rate: 5, txt: "Teksturnya selembut kain cashmere mewah. Memberikan pigment distribution yang sangat merata." },
      { user: "Miranda C.", rate: 4.9, txt: "Color payoff-nya cantik banget. Formula transfer-resistant tapi tetap bikin bibir terasa super lembap." },
      { user: "Rachel V.", rate: 5, txt: "Wangi krim vanilanya lembut dan mewah banget. Benar-benar produk essential yang wajib selalu ada di dalam tas!" }
    ],
    emoji: "💋",
    hot: false
  },
  {
    id: 6,
    name: "Rouge Supreme Satin Lipstik",
    price: 520000,
    category: "makeup",
    img: "lipstik.jpg.jpeg",
    image: "./image/lipstik.jpg.jpeg",
    foto: "./image/lipstik.jpg.jpeg",
    stock: 22,
    sold: 1900,
    desc: "Lipstik classic couture ikonik yang diperkaya dengan precious Camellia Seed Oil. Formulanya terasa gliding selembut satin cair untuk hasil akhir yang tampak mewah dan intens.",
    reviews: [
      { user: "Bianca R.", rate: 5, txt: "Sensasi magnetic click dari case-nya yang benar-benar terasa mewah banget. Formulasinya juga hyper rich!" },
      { user: "Seraphina D.", rate: 5, txt: "Efek sheen yang pas tanpa terlihat terlalu glossy. Instan memberikan impresi tampilan yang opulent dan penuh percaya diri." },
      { user: "Alice F.", rate: 4.9, txt: "Menghasilkan depth of tone yang memukau. Formulanya aman, tidak akan feathering atau masuk ke kerutan bibir." }
    ],
    emoji: "💄",
    hot: false
  },
  {
    id: 7,
    name: "Liquid Gold Strobing Highlighter",
    price: 610000,
    category: "makeup",
    img: "highlighter baru.jpeg",
    image: "./image/highlighter baru.jpeg",
    foto: "./image/highlighter baru.jpeg",
    stock: 14,
    sold: 1500,
    desc: "Fluid illuminator yang terasa weightless, dipenuhi ultra fine prismatic gold crystals di dalam formula organic botanical squalane matrix.",
    reviews: [
      { user: "Tiffany P.", rate: 5, txt: "Bikin hasil akhir wet glass skin look yang super hits itu, dan sama sekali enggak ada kesan glitter yang chunky. Juara banget!" },
      { user: "Leona S.", rate: 4.9, txt: "Cukup pake satu tetes, langsung dapat efek expensive skin glow di seluruh wajah tanpa ribet. Suka banget!" },
      { user: "Katrina Y.", rate: 5, txt: "Hasil akhirnya stunningly luminous. Pantulan cahayanya benar-benar seamless dan memberikan impresi high couture yang mewah." }
    ],
    emoji: "✨",
    hot: true
  },
  {
    id: 8,
    name: "Majesty Imperial Extrait de Parfum",
    price: 3200000,
    category: "parfum",
    img: "parfum baru 1.jpeg",
    image: "./image/parfum baru 1.jpeg",
    foto: "./image/parfum baru 1.jpeg",
    stock: 8,
    sold: 1200,
    desc: "Konsentrasi wewangian tertinggi kami yang menghadirkan kemewahan Jasmine Sambac Absolue, White Oud Amber, dan biji Vanila Madagaskar yang langka.",
    reviews: [
      { user: "Duchess E.", rate: 5, txt: "Sillage dari aroma ini bertahan dengan menawan selama lebih dari 24 jam. Benar-benar sebuah olfactory symphony yang mewah dan berkelas." },
      { user: "Vivian L.", rate: 5, txt: "Sillage-nya sangat kompleks dan memukau. Tak heran jika terus mendapatkan pujian dari kalangan kelas atas." },
      { user: "Marcus O.", rate: 5, txt: "Sebuah mahakarya yang kaya akan karakter. Botol kristal yang berat tampak luar biasa menawan di atas meja rias saya." }
    ],
    emoji: "🔮",
    hot: true
  },
  {
    id: 9,
    name: "Opulence Bloom Eau de Parfum",
    price: 2450000,
    category: "parfum",
    img: "parfum baru 2.jpeg",
    image: "./image/parfum baru 2.jpeg",
    foto: "./image/parfum baru 2.jpeg",
    stock: 12,
    sold: 2100,
    desc: "Wewangian romantis yang penuh energi, menangkap aroma bunga peony liar Prancis, kulit jeruk bergamot segar, dan dasar aroma musk sutra yang sensual.",
    reviews: [
      { user: "Rosamund G.", rate: 4.9, txt: "Wangi yang segar namun tetap terasa profoundly sophisticated. Pilihan parfum signature terbaik untuk menampilkan kesan modern elegance." },
      { user: "Penelope C.", rate: 5, txt: "Memiliki projection yang soft namun intens dalam memikat perhatian. Definisi terbaik dari aroma crisp floral." },
      { user: "Sybil V.", rate: 5, txt: "Terasa seperti berjalan melalui konservatori botani istana yang mewah. Daya tahan yang luar biasa." }
    ],
    emoji: "🌺",
    hot: false
  },
  {
    id: 10,
    name: "Gilded Citrus Eau de Toilette",
    price: 1850000,
    category: "parfum",
    img: "parfum baru 3.jpeg",
    image: "./image/parfum baru 3.jpeg",
    foto: "./image/parfum baru 3.jpeg",
    stock: 25,
    sold: 1600,
    desc: "Wewangian menyenangkan yang memancarkan cahaya matahari di mediterania, bunga jeruk nipis, dan kayu amber yang disalut.",
    reviews: [
      { user: "Adrian M.", rate: 5, txt: "Segar, cerah, dan sangat menggugah. Ideal untuk pertemuan sore mewah." },
      { user: "Beatrice D.", rate: 4.9, txt: "Pendekatan yang sangat keren terhadap citrus. Tidak tajam, tetapi tercampur dengan mulus." },
      { user: "Cecilia R.", rate: 5, txt: "Profil yang sangat bersih dengan nada kayu yang mahal." }
    ],
    emoji: "🍋",
    hot: false
  },
  {
    id: 11,
    name: "Verdant Breeze Eau de Cologne",
    price: 1400000,
    category: "parfum",
    img: "parfum 4.jpg.jpeg",
    image: "./image/parfum 4.jpg.jpeg",
    foto: "./image/parfum 4.jpg.jpeg",
    stock: 40,
    sold: 1300,
    desc: "Wewangian yang membangkitkan semangat dengan campuran dedaunan mint hijau yang dihancurkan, ekstrak teh putih premium, dan rumput cedarwood yang segar.",
    reviews: [
      { user: "Gavin T.", rate: 4.9, txt: "Siasat sempurna setelah ritual. Sangat menyegarkan dan penuh kebahagiaan sensorik." },
      { user: "Julian E.", rate: 5, txt: "Alami, keren, bersih. Membawa kembali semangat secara instan." },
      { user: "Helena W.", rate: 5, txt: "Kesegaran herbal yang sangat halus. Profil yang sempurna dan terkendali." }
    ],
    emoji: "🌿",
    hot: false
  },
  {
    id: 12,
    name: "Aqueous Mist Eau Fraîche",
    price: 1250000,
    category: "parfum",
    img: "parfum 5.jpg.jpeg",
    image: "./image/parfum 5.jpg.jpeg",
    foto: "./image/parfum 5.jpg.jpeg",
    stock: 35,
    sold: 1000,
    desc: "Wewangian ringan yang memancarkan aroma air tawar etereal, ekstrak mineral alpine murni, jus kelopak lotus, dan musk transparan yang lembut.",
    reviews: [
      { user: "Nadia Q.", rate: 5, txt: "Sangat bersih dan segar. Terasa seperti angin spa resort pagi yang mahal." },
      { user: "Lydia F.", rate: 4.9, txt: "Sangat halus. Sempurna untuk lapisan atau ritual relaksasi setelah mandi." },
      { user: "Zoe P.", rate: 5, txt: "Sangat lembut dan sangat menenangkan. Sebuah karya seni yang tidak terlalu mencolok." }
    ],
    emoji: "💧",
    hot: false
  },
  {
    id: 13,
    name: "Bio-Cellular Advanced Gel Cream",
    price: 1350000,
    category: "skincare",
    img: "gel cream.jpg.jpeg",
    image: "./image/gel cream.jpg.jpeg",
    foto: "./image/gel cream.jpg.jpeg",
    stock: 18,
    sold: 2700,
    desc: "Pelembap dengan sensasi dingin yang revolusioner, diformulasikan dengan plant-derived Squalane, ekstrak centella, serta moisture-locking ceramides.",
    reviews: [
      { user: "Dr. Elena R.", rate: 5, txt: "Perlindungan skin barrier dengan formulasi ilmiah yang superior. Kemerahan langsung hilang hanya dalam sekali aplikasi." },
      { user: "Monica G.", rate: 5, txt: "Sensasi hidrasi yang weightless tapi hasilnya juara. Kulit jadi terasa kenyal, bouncy, dan jauh lebih sehat!" },
      { user: "Priscila O.", rate: 4.9, txt: "Meresap seketika tanpa meninggalkan residu berminyak sedikit pun. Benar-benar keahlian perawatan kulit kelas atas." }
    ],
    emoji: "🧴",
    hot: false
  },
  {
    id: 14,
    name: "Purifying French Rose Clay Mask",
    price: 850000,
    category: "skincare",
    img: "claymask baru.jpeg",
    image: "./image/claymask baru.jpeg",
    foto: "./image/claymask baru.jpeg",
    stock: 22,
    sold: 1400,
    desc: "Perpaduan premium pink clay dengan real French Rose hydrosol dan enzim eksfoliasi untuk mengangkat kotoran secara mendalam sekaligus memoles tekstur kulit agar tampak lebih halus.",
    reviews: [
      { user: "Sasha K.", rate: 5, txt: "Beda banget sama masker clay lain, yang ini sama sekali enggak bikin kulit kering atau terasa ketarik. Nyaman banget dipakai!" },
      { user: "Tara N.", rate: 5, txt: "Pori-pori tampak tersamarkan sepenuhnya dan komedo hilang secara tuntas." },
      { user: "Yvonne D.", rate: 4.9, txt: "Hasilnya bikin kulit super bright, radiant, dan teksturnya halus banget kayak kain velvet." }
    ],
    emoji: "🌹",
    hot: false
  },
  {
    id: 15,
    name: "Supreme Golden Elixir Ampoule",
    price: 2100000,
    category: "skincare",
    img: "ampoule baru.jpeg",
    image: "./image/ampoule baru.jpeg",
    foto: "./image/ampoule baru.jpeg",
    stock: 11,
    sold: 1900,
    desc: "Sebuah shock treatment yang intens dan mewah, memadukan high-density Marine Collagen, Peptide Complexes, dan serpihan emas 24k asli untuk hasil yang memukau.",
    reviews: [
      { user: "Vivienne E.", rate: 5, txt: "Keajaiban perawatan di malam hari. Garis-garis halus tampak terisi dan tersamar seketika." },
      { user: "Georgia T.", rate: 5, txt: "Solusi terbaik untuk mengatasi kulit kusam dan tampak lelah. Mengembalikan youthful elastic luster untuk tampilan yang segar dan kenyal." },
      { user: "Opal S.", rate: 5, txt: "Nutrisinya sangat padat dan intens. Benar-benar aset mewah yang wajib ada dalam rutinitas anti-aging saya." }
    ],
    emoji: "✨",
    hot: false
  },
  {
    id: 16,
    name: "Amino Rich Velvet Cleansing Foam",
    price: 580000,
    category: "skincare",
    img: "cleansing foam.jpg.jpeg",
    image: "./image/cleansing foam.jpg.jpeg",
    foto: "./image/cleansing foam.jpg.jpeg",
    stock: 30,
    sold: 3400,
    desc: "Pembersih wajah yang sangat lembut, soap-free, diformulasikan dengan primary amino acids dan thermal water. Efektif mengangkat kotoran namun tetap menjaga keseimbangan pH serta lapisan lipid alami kulit.",
    reviews: [
      { user: "Faye L.", rate: 5, txt: "Menghasilkan busa yang padat dan cushiony seperti krim meringue. Sangat lembut dan nyaman untuk kulit." },
      { user: "Nora B.", rate: 4.9, txt: "Kulit terasa bersih maksimal tanpa kehilangan kelembapan alaminya, tetap kenyal dan terhidrasi. Benar-benar formulasi yang jenius." },
      { user: "Maeve C.", rate: 5, txt: "Mengangkat sisa makeup dengan sangat mudah tanpa rasa perih di mata atau iritasi pada kulit. Sangat aman dan nyaman digunakan." }
    ],
    emoji: "🧼",
    hot: true
  },
  {
    id: 17,
    name: "Hydra Replenish Botanical Lotion",
    price: 690000,
    category: "skincare",
    img: "lotion baru.jpeg",
    image: "./image/lotion baru.jpeg",
    foto: "./image/lotion baru.jpeg",
    stock: 26,
    sold: 2100,
    desc: "Sebuah fluid prepping kulit yang sangat melembapkan, dikemas dengan molekul Hyaluronic Acid berat multi dan polifenol teh hijau Jepang.",
    reviews: [
      { user: "Anya R.", rate: 5, txt: "Segera menghilangkan sensasi kering pada barier kulit saya. Membuat kulit terasa lebih padat segera." },
      { user: "Celine J.", rate: 5, txt: "Memberikan dasar basah yang indah. Serum saya menyerap dua kali lebih baik sekarang." },
      { user: "Tessa P.", rate: 4.9, txt: "Tekstur yang sangat bersih dan menyegarkan. Bau-nya harum seperti tumbuhan segar alami." }
    ],
    emoji: "🌿",
    hot: false
  },
  {
    id: 18,
    name: "Ceramide Barrier Defense Moisturizer",
    price: 1150000,
    category: "skincare",
    img: "mois.jpg.jpeg",
    image: "./image/mois.jpg.jpeg",
    foto: "./image/mois.jpg.jpeg",
    stock: 15,
    sold: 2900,
    desc: "Sebuah krim wajah yang sangat menenangkan, dikemas dengan 5 Ceramides esensial, Asam Lemak, dan kompleks struktural kolesterol berkualitas tinggi.",
    reviews: [
      { user: "Dr. Marcus V.", rate: 5, txt: "Pengiriman molekuler yang sempurna. Essensial untuk barier kering yang rusak." },
      { user: "Lana S.", rate: 5, txt: "Menyelamatkan kulit saya yang mengelupas selama perubahan cuaca kering yang keras. Selimut yang sangat menenangkan." },
      { user: "Paige D.", rate: 4.9, txt: "Tekstur yang kaya yang meleleh dengan elegan seperti mentega saat kontak dengan panas kulit." }
    ],
    emoji: "🛡️",
    hot: false
  },
  {
    id: 19,
    name: "Satin Cocoon Hydrating Body Wash",
    price: 490000,
    category: "bodycare",
    img: "body wash.jpg.jpeg",
    image: "./image/body wash.jpg.jpeg",
    foto: "./image/body wash.jpg.jpeg",
    stock: 45,
    sold: 3300,
    desc: "Sebuah body cleanser berbentuk gel yang kaya akan nutrisi, dilengkapi dengan premium Sweet Almond Oil dan warm soothing amber essential distillates.",
    reviews: [
      { user: "Isla M.", rate: 5, txt: "Mengubah shower biasa menjadi momen spa lima bintang yang luar biasa. Bau yang indah." },
      { user: "Gemma K.", rate: 4.9, txt: "Kulit terasa benar-benar terhidrasi bahkan sebelum aplikasi body lotions." },
      { user: "Wanda N.", rate: 5, txt: "Sillage of amber lingers gently on skin long after rinsing. Delightful." }
    ],
    emoji: "🛁",
    hot: false
  },
  {
    id: 20,
    name: "Crushed Pearl Smoothing Body Scrub",
    price: 550000,
    category: "bodycare",
    img: "scrub.jpg.jpeg",
    image: "./image/scrub.jpg.jpeg",
    foto: "./image/scrub.jpg.jpeg",
    stock: 33,
    sold: 2500,
    desc: "Perpaduan mewah dari butiran Mother of Pearl mikronisasi, kristal sukrosa tebu organik, dan Rice Bran oil yang kaya akan nutrisi untuk mencerahkan kulit.",
    reviews: [
      { user: "Brooke T.", rate: 5, txt: "Mengangkat sel kulit mati dengan sempurna. Siku dan lutut saya kini terasa lebih halus dari sebelumnya." },
      { user: "Daphne F.", rate: 5, txt: "Meninggalkan kesan lembap yang menutrisi tanpa rasa lengket. Memberikan kilau yang sangat memukau." },
      { user: "Cara L.", rate: 4.9, txt: "Eksfoliator fisik yang lembut untuk meratakan warna kulit sekaligus memperbaiki tekstur secara instan." }
    ],
    emoji: "🧖",
    hot: false
  },
  {
    id: 21,
    name: "Marula Infusion Intense Hair Oil",
    price: 680000,
    category: "haircare",
    img: "hair oil.jpg.jpeg",
    image: "./image/hair oil.jpg.jpeg",
    foto: "./image/hair oil.jpg.jpeg",
    stock: 20,
    sold: 2800,
    desc: "Perpaduan cold-pressed Marula Oil premium, Vitamin E, dan esensi Argan yang bekerja intensif memperbaiki kutikula kering dan memberikan hasil akhir rambut yang berkilau sempurna bagaikan cermin.",
    reviews: [
      { user: "Rene B.", rate: 5, txt: "Mengembalikan rambut yang rusak dan kasar akibat bleaching menjadi sehalus sutra dalam sekejap. Hasilnya ringan, sama sekali tidak membuat rambut lepek." },
      { user: "Sonia V.", rate: 5, txt: "Cukup beberapa tetes untuk menghaluskan anak rambut yang sulit diatur secara sempurna. Hasil akhir sekelas salon mewah." },
      { user: "Nina M.", rate: 4.9, txt: "Membuat rambut tampak berkilau sebening kaca di bawah sinar matahari. Kesan rambut sehat dan mewah yang sesungguhnya." }
    ],
    emoji: "🌰",
    hot: true
  },
  {
    id: 22,
    name: "Resveratrol Scalp Serum Oil",
    price: 890000,
    category: "haircare",
    img: "serum oil.jpg.jpeg",
    image: "./image/serum oil.jpg.jpeg",
    foto: "./image/serum oil.jpg.jpeg",
    stock: 16,
    sold: 1700,
    desc: "Perpaduan drop nutrisi target yang canggih dengan kompleks anti-oksidan Resveratrol dan konsentrat aktif Rosemary.",
    reviews: [
      { user: "Helene K.", rate: 5, txt: "Secara signifikan mengurangi tingkat rontoknya rambut dalam tiga minggu. Kesehatan luar biasa." },
      { user: "Ingrid L.", rate: 5, txt: "Kulit kepala terasa seimbang, bersih, dan benar-benar bebas dari iritasi kering." },
      { user: "Clara Z.", rate: 4.9, txt: "Tekstur cair yang sangat ringan yang tidak merusak gaya styling pengeringan." }
    ],
    emoji: "🌿",
    hot: false
  },
  {
    id: 23,
    name: "Silk Protein Weightless Conditioner",
    price: 520000,
    category: "haircare",
    img: "conditioner.jpg.jpeg",
    image: "./image/conditioner.jpg.jpeg",
    foto: "./image/conditioner.jpg.jpeg",
    stock: 38,
    sold: 3100,
    desc: "Perpaduan dengan protein silk hidrolik dan matriks keratin cair untuk meluruskan ikatan rambut dan memberikan hasil yang luar biasa.",
    reviews: [
      { user: "Justine P.", rate: 5, txt: "Rambut terlihat seperti air. Memberikan volume dan kelembutan yang luar biasa." },
      { user: "Elissa D.", rate: 4.9, txt: "Harumnya sangat mewah dan membuat rambut terasa sangat lembut." },
      { user: "Colette R.", rate: 5, txt: "Antidote sempurna untuk struktur rambut kering dan porus. Benar-benar elite." }
    ],
    emoji: "💧",
    hot: false
  },
  {
    id: 24,
    name: "Botanical Caviar Fortifying Shampoo",
    price: 550000,
    category: "haircare",
    img: "shampo.jpg.jpeg",
    image: "./image/shampo.jpg.jpeg",
    foto: "./image/shampo.jpg.jpeg",
    stock: 40,
    sold: 3900,
    desc: "Perpaduan dengan ekstrak Green Caviar dan molekul pembersih glucoside yang lembut untuk membersihkan kulit kepala secara mendalam.",
    reviews: [
      { user: "Aline M.", rate: 5, txt: "Membersihkan secara mendalam tanpa menghilangkan kelembapan dari rambut. Rambut terasa kuat." },
      { user: "Odelia G.", rate: 5, txt: "Jumlah minimal menciptakan busa terapeutik yang kaya dan padat. Pengalaman yang benar-benar bagus." },
      { user: "Valerie S.", rate: 4.9, txt: "Hasil pembersihan kulit kepala yang luar biasa sambil menambahkan kilau holistik yang indah." }
    ],
    emoji: "🧴",
    hot: true
  }
];
