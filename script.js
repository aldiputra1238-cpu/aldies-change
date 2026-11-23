
"use strict";

// ==========================================
// ALDI'E$ CHANGER - SISTEM UTAMA
// ==========================================

let bahasaAktif = "id";

const kamus = {
  "Beranda": ["Beranda", "Home"],
  "Kurs": ["Kurs", "Exchange Rates"],
  "Kalkulator": ["Kalkulator", "Calculator"],
  "Layanan": ["Layanan", "Services"],
  "Tentang Kami": ["Tentang Kami", "About Us"],
  "Kontak": ["Kontak", "Contact"],

  "Your Trusted": ["Penukaran Valuta Asing", "Your Trusted"],
  "Money Changer": ["Terpercaya", "Money Changer"],
  "Solusi terbaik untuk transaksi valuta asing Anda,": ["Solusi terbaik untuk transaksi valuta asing Anda,", "The best solution for your foreign exchange transactions,"],
  "dengan kurs kompetitif, aman dan profesional.": ["dengan kurs kompetitif, aman dan profesional.", "with competitive rates, security and professional service."],

  "LIHAT KURS SEKARANG →": ["LIHAT KURS SEKARANG →", "VIEW EXCHANGE RATES →"],
  "TENTANG KAMI": ["TENTANG KAMI", "ABOUT US"],
  "Aman &": ["Aman &", "Safe &"],
  "Terpercaya": ["Terpercaya", "Reliable"],
  "Transaksi": ["Transaksi", "Transactions"],
  "Cepat": ["Cepat", "Fast"],
  "Layanan": ["Layanan", "Services"],
  "Profesional": ["Profesional", "Professional"],

  "FOREIGN EXCHANGE OVERVIEW": ["GAMBARAN VALUTA ASING", "FOREIGN EXCHANGE OVERVIEW"],
  "Global Currency Market": ["Pasar Mata Uang Global", "Global Currency Market"],
  "MARKET MOVEMENT": ["PERGERAKAN PASAR", "MARKET MOVEMENT"],
  "HIGH": ["TERTINGGI", "HIGH"],
  "MARKET": ["PASAR", "MARKET"],
  "LOW": ["TERENDAH", "LOW"],
  "GLOBAL FOREIGN EXCHANGE": ["VALUTA ASING GLOBAL", "GLOBAL FOREIGN EXCHANGE"],

  "MATA UANG": ["MATA UANG", "CURRENCY"],
  "KAMI BELI": ["KAMI BELI", "WE BUY"],
  "KAMI JUAL": ["KAMI JUAL", "WE SELL"],
  "US Dollar": ["Dolar Amerika", "US Dollar"],
  "Singapore Dollar": ["Dolar Singapura", "Singapore Dollar"],
  "Malaysian Ringgit": ["Ringgit Malaysia", "Malaysian Ringgit"],
  "Australian Dollar": ["Dolar Australia", "Australian Dollar"],
  "Euro": ["Euro", "Euro"],
  "Japanese Yen": ["Yen Jepang", "Japanese Yen"],
  "Hong Kong Dollar": ["Dolar Hong Kong", "Hong Kong Dollar"],
  "Chinese Yuan": ["Yuan Tiongkok", "Chinese Yuan"],

  "Informasi Update Kurs": ["Informasi Pembaruan Kurs", "Exchange Rate Updates"],
  "Kurs pada halaman ini merupakan referensi yang ditampilkan.": ["Kurs pada halaman ini merupakan referensi yang ditampilkan.", "The exchange rates displayed on this page are for reference only."],
  "Terakhir diperbarui: --": ["Terakhir diperbarui: --", "Last updated: --"],
  "ⓘ Informasi Kurs:": ["ⓘ Informasi Kurs:", "ⓘ Exchange Rate Information:"],
  "Kurs di website merupakan informasi indikatif dan dapat berubah sewaktu-waktu. Konfirmasikan kurs terbaru kepada petugas sebelum transaksi.": ["Kurs di website merupakan informasi indikatif dan dapat berubah sewaktu-waktu. Konfirmasikan kurs terbaru kepada petugas sebelum transaksi.", "The exchange rates shown are indicative and may change at any time. Please confirm the latest rates with our staff before making a transaction."],

  "ALDI'E$ EXCHANGE TOOL": ["ALDI'E$ ALAT PENUKARAN", "ALDI'E$ EXCHANGE TOOL"],
  "Kalkulator Valuta Asing": ["Kalkulator Valuta Asing", "Foreign Exchange Calculator"],
  "Hitung estimasi transaksi valuta asing dengan cepat dan praktis.": ["Hitung estimasi transaksi valuta asing dengan cepat dan praktis.", "Calculate estimated foreign exchange transactions quickly and easily."],
  "01 / TRANSACTION CALCULATOR": ["01 / KALKULATOR TRANSAKSI", "01 / TRANSACTION CALCULATOR"],
  "Hitung Transaksi": ["Hitung Transaksi", "Calculate Transaction"],
  "Masukkan detail transaksi untuk melihat estimasi nilai Rupiah.": ["Masukkan detail transaksi untuk melihat estimasi nilai Rupiah.", "Enter transaction details to see the estimated Rupiah amount."],
  "PILIH MATA UANG": ["PILIH MATA UANG", "SELECT CURRENCY"],
  "JENIS TRANSAKSI": ["JENIS TRANSAKSI", "TRANSACTION TYPE"],
  "Saya Membeli Valas": ["Saya Membeli Valas", "I Buy Foreign Currency"],
  "Saya Menjual Valas": ["Saya Menjual Valas", "I Sell Foreign Currency"],
  "JUMLAH VALAS": ["JUMLAH VALAS", "FOREIGN CURRENCY AMOUNT"],
  "Masukkan nominal dalam mata uang asing.": ["Masukkan nominal dalam mata uang asing.", "Enter the amount in foreign currency."],
  "HITUNG ESTIMASI TRANSAKSI →": ["HITUNG ESTIMASI TRANSAKSI →", "CALCULATE ESTIMATED TRANSACTION →"],

  "RATE REFERENCE": ["REFERENSI KURS", "RATE REFERENCE"],
  "Informasi Kurs": ["Informasi Kurs", "Exchange Rate Information"],
  "Lihat referensi kurs beli dan jual mata uang yang sedang kamu pilih.": ["Lihat referensi kurs beli dan jual mata uang yang sedang kamu pilih.", "View the buying and selling rates of your selected currency."],
  "KURS BELI": ["KURS BELI", "BUYING RATE"],
  "KURS JUAL": ["KURS JUAL", "SELLING RATE"],
  "Perlu diperhatikan": ["Perlu diperhatikan", "Please Note"],
  "Hasil kalkulator merupakan estimasi. Kurs final, kondisi uang, pecahan, dan ketersediaan stok perlu dikonfirmasi kepada petugas.": ["Hasil kalkulator merupakan estimasi. Kurs final, kondisi uang, pecahan, dan ketersediaan stok perlu dikonfirmasi kepada petugas.", "Calculator results are estimates. Final rates, banknote condition, denominations and stock availability must be confirmed with our staff."],
  "Gunakan kalkulator sebagai referensi awal sebelum melakukan transaksi valuta asing.": ["Gunakan kalkulator sebagai referensi awal sebelum melakukan transaksi valuta asing.", "Use this calculator as an initial reference before making a foreign exchange transaction."],

  "Panduan Transaksi": ["Panduan Transaksi", "Transaction Guide"],
  "Proses penukaran valuta asing dengan mudah dan praktis.": ["Proses penukaran valuta asing dengan mudah dan praktis.", "Exchange foreign currency easily and conveniently."],
  "Pilih Mata Uang": ["Pilih Mata Uang", "Select Currency"],
  "Tentukan mata uang asing yang ingin dibeli atau dijual melalui daftar kurs kami.": ["Tentukan mata uang asing yang ingin dibeli atau dijual melalui daftar kurs kami.", "Choose the foreign currency you wish to buy or sell from our exchange rate list."],
  "Konfirmasi Kurs": ["Konfirmasi Kurs", "Confirm Exchange Rates"],
  "Hubungi petugas melalui WhatsApp untuk memastikan ketersediaan valas dan kurs transaksi.": ["Hubungi petugas melalui WhatsApp untuk memastikan ketersediaan valas dan kurs transaksi.", "Contact our staff via WhatsApp to confirm currency availability and transaction rates."],
  "Selesaikan Transaksi": ["Selesaikan Transaksi", "Complete Transaction"],
  "Ikuti arahan petugas dan selesaikan transaksi sesuai prosedur yang berlaku.": ["Ikuti arahan petugas dan selesaikan transaksi sesuai prosedur yang berlaku.", "Follow our staff's instructions and complete the transaction according to the applicable procedures."],
  "HUBUNGI PETUGAS →": ["HUBUNGI PETUGAS →", "CONTACT OUR STAFF →"],

  "OUR SERVICE": ["LAYANAN KAMI", "OUR SERVICE"],
  "Layanan Kami": ["Layanan Kami", "Our Services"],
  "Kenyamanan dan kepercayaan dalam setiap transaksi.": ["Kenyamanan dan kepercayaan dalam setiap transaksi.", "Comfort and trust in every transaction."],
  "Kurs Kompetitif": ["Kurs Kompetitif", "Competitive Rates"],
  "Informasi kurs yang transparan sebagai referensi sebelum transaksi.": ["Informasi kurs yang transparan sebagai referensi sebelum transaksi.", "Transparent exchange rate information for your reference before transactions."],
  "Pelayanan Profesional": ["Pelayanan Profesional", "Professional Service"],
  "Pelayanan yang mengutamakan kebutuhan dan kenyamanan pelanggan.": ["Pelayanan yang mengutamakan kebutuhan dan kenyamanan pelanggan.", "Service that prioritizes customer needs and comfort."],
  "Transaksi Aman": ["Transaksi Aman", "Secure Transactions"],
  "Proses transaksi dengan konfirmasi dan prosedur yang sesuai.": ["Proses transaksi dengan konfirmasi dan prosedur yang sesuai.", "Transactions carried out with proper confirmation and procedures."],

  "ABOUT ALDI'E$ CHANGER": ["TENTANG ALDI'E$ CHANGER", "ABOUT ALDI'E$ CHANGER"],
  "Tentang Kami": ["Tentang Kami", "About Us"],
  "ALDI'E$ CHANGER menyediakan informasi valuta asing dan sarana kalkulator estimasi transaksi untuk membantu pelanggan memperoleh gambaran nilai penukaran. Hubungi petugas kami untuk konfirmasi kurs, ketersediaan mata uang, dan detail transaksi.": ["ALDI'E$ CHANGER menyediakan informasi valuta asing dan sarana kalkulator estimasi transaksi untuk membantu pelanggan memperoleh gambaran nilai penukaran. Hubungi petugas kami untuk konfirmasi kurs, ketersediaan mata uang, dan detail transaksi.", "ALDI'E$ CHANGER provides foreign exchange information and an estimated transaction calculator to help customers understand exchange values. Contact our staff to confirm exchange rates, currency availability and transaction details."],

  "Alamat": ["Alamat", "Address"],
  "Jakarta, Indonesia": ["Jakarta, Indonesia", "Jakarta, Indonesia"],
  "Jam Operasional": ["Jam Operasional", "Business Hours"],
  "Senin - Sabtu": ["Senin - Sabtu", "Monday - Saturday"],
  "Hubungi Kami": ["Hubungi Kami", "Contact Us"],
  "WhatsApp: 085156148341": ["WhatsApp: 085156148341", "WhatsApp: 085156148341"],
  "Chat WhatsApp": ["Chat WhatsApp", "Chat on WhatsApp"],
  "© 2026 ALDI'E$ CHANGER. All Rights Reserved.": ["© 2026 ALDI'E$ CHANGER. Hak Cipta Dilindungi.", "© 2026 ALDI'E$ CHANGER. All Rights Reserved."]
};

// ==========================================
// SISTEM TERJEMAHAN
// ==========================================

const teksAsli = new WeakMap();

function terjemahkanWebsite(bahasa) {
  bahasaAktif = bahasa;
  document.documentElement.lang = bahasa;

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT
  );

  let node;

  while ((node = walker.nextNode())) {
    if (!teksAsli.has(node)) {
      teksAsli.set(node, node.nodeValue);
    }

    const asli = teksAsli.get(node);
    const bersih = asli.trim();

    if (!bersih) continue;

    const terjemahan = kamus[bersih];

    if (terjemahan) {
      const hasil = terjemahan[bahasa === "en" ? 1 : 0];
      const awal = asli.match(/^\s*/)[0];
      const akhir = asli.match(/\s*$/)[0];

      node.nodeValue = awal + hasil + akhir;
    }
  }

  document.querySelectorAll("[placeholder]").forEach(el => {
    if (!el.dataset.placeholderAsli) {
      el.dataset.placeholderAsli = el.placeholder;
    }

    el.placeholder = bahasa === "en"
      ? "Enter amount (e.g. 1000)"
      : el.dataset.placeholderAsli;
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === bahasa);
  });

  const waktu = document.getElementById("waktu-update");

  if (waktu) {
    const isi = waktu.textContent.replace(
      /^(Terakhir diperbarui:|Last updated:)/,
      ""
    );

    waktu.textContent =
      (bahasa === "en" ? "Last updated:" : "Terakhir diperbarui:") + isi;
  }

  const hasil = document.getElementById("hasil");

  if (hasil && hasil.dataset.pernahHitung === "true") {
    hitungValas();
  }

  try {
    localStorage.setItem("bahasaALDIES", bahasa);
  } catch (error) {
    console.warn("Preferensi bahasa tidak dapat disimpan.");
  }
}

// ==========================================
// KALKULATOR VALAS
// ==========================================

function ambilKurs(mataUang, jenis) {
  const elemen = document.getElementById(jenis + "-" + mataUang);

  if (!elemen) {
    throw new Error("Kurs " + mataUang + " tidak ditemukan.");
  }

  const nilai = Number(elemen.textContent.trim().replace(/\./g, "").replace(",", "."));

  if (!Number.isFinite(nilai) || nilai <= 0) {
    throw new Error("Nilai kurs tidak valid.");
  }

  return nilai;
}

function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(angka);
}

function formatAngka(angka) {
  return new Intl.NumberFormat("id-ID", {
    maximumFractionDigits: 2
  }).format(angka);
}

function hitungValas() {
  const mataUang = document.getElementById("mataUang");
  const jenisTransaksi = document.getElementById("jenisTransaksi");
  const jumlahInput = document.getElementById("jumlahValas");
  const hasil = document.getElementById("hasil");

  if (!mataUang || !jenisTransaksi || !jumlahInput || !hasil) return;

  const kode = mataUang.value;
  const jenis = jenisTransaksi.value;
  const jumlah = Number(
  jumlahInput.value.replace(/\D/g, "")
);

  if (!jumlahInput.value.trim() || !Number.isFinite(jumlah) || jumlah <= 0) {
    hasil.textContent = bahasaAktif === "en"
      ? "Please enter a valid foreign currency amount."
      : "Silakan masukkan jumlah valas yang valid.";
    hasil.dataset.pernahHitung = "false";
    return;
  }

  try {
    const kurs = ambilKurs(kode, jenis);
    const total = jumlah * kurs;

    const keterangan = bahasaAktif === "en"
      ? (jenis === "sell" ? "You buy foreign currency" : "You sell foreign currency")
      : (jenis === "sell" ? "Anda membeli valas" : "Anda menjual valas");

    const teksTotal = bahasaAktif === "en"
      ? "Estimated Rupiah amount"
      : "Estimasi nilai Rupiah";

    hasil.innerHTML = `
  <div class="hasil-transaksi">
    <div class="hasil-judul">${keterangan}</div>

    <div class="hasil-perhitungan">
      ${formatAngka(jumlah)} ${kode} × Rp ${formatAngka(kurs)}
    </div>

    <table class="tabel-hasil">
      <thead>
        <tr>
          <th>RINCIAN</th>
          <th>NILAI</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jumlah valas</td>
          <td>${formatAngka(jumlah)} ${kode}</td>
        </tr>
        <tr>
          <td>Kurs</td>
          <td>Rp ${formatAngka(kurs)}</td>
        </tr>
        <tr class="baris-total">
          <td>${teksTotal}</td>
          <td>${formatRupiah(total)}</td>
        </tr>
      </tbody>
    </table>
  </div>
`;

    hasil.dataset.pernahHitung = "true";
  } catch (error) {
    hasil.textContent = error.message;
    hasil.dataset.pernahHitung = "false";
  }
}

// ==========================================
// PANEL KURS KALKULATOR
// ==========================================

function perbaruiPanelKurs() {
  const mataUang = document.getElementById("mataUang");
  if (!mataUang) return;

  const kode = mataUang.value;
  const beli = document.getElementById("buy-" + kode);
  const jual = document.getElementById("sell-" + kode);

  const kodePanel = document.getElementById("preview-currency");
  const beliPanel = document.getElementById("preview-buy");
  const jualPanel = document.getElementById("preview-sell");

  if (kodePanel) kodePanel.textContent = kode;
  if (beliPanel) beliPanel.textContent = beli ? beli.textContent.trim() : "—";
  if (jualPanel) jualPanel.textContent = jual ? jual.textContent.trim() : "—";
}

// ==========================================
// INISIALISASI WEBSITE
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      terjemahkanWebsite(this.dataset.lang);
    });
  });

  const mataUang = document.getElementById("mataUang");

  if (mataUang) {
    mataUang.addEventListener("change", perbaruiPanelKurs);
    perbaruiPanelKurs();
  }

  const jumlahInput = document.getElementById("jumlahValas");

  if (jumlahInput) {
  jumlahInput.addEventListener("input", function () {
    const angka = this.value.replace(/\D/g, "");

    this.value = angka
      ? angka.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      : "";
  });
}

  const waktu = document.getElementById("waktu-update");

  if (waktu) {
    waktu.textContent = "Terakhir diperbarui: " +
      new Date().toLocaleString("id-ID", {
        timeZone: "Asia/Jakarta"
      });
  }

  let bahasaTersimpan = "id";

  try {
    bahasaTersimpan = localStorage.getItem("bahasaALDIES") || "id";
  } catch (error) {
    bahasaTersimpan = "id";
  }

  terjemahkanWebsite(bahasaTersimpan);
});

// ==========================================
// NAVIGASI BERANDA
// ==========================================

function lihatKurs() {
  const tujuan = document.getElementById("daftar-kurs");

  if (tujuan) {
    tujuan.scrollIntoView({ behavior: "smooth" });
  }
}
