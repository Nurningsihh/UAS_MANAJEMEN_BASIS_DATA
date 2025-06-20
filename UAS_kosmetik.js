// DATABASE KEY-VALUE
use toko_kosmetik
// Membuat Collection dengan nama "NingSkincare"
db.createCollection("NingSkincare")

// Key-value model (satu key = ID produk, value = seluruh data produk)
db.NingSkincare.insertMany([
  {
    _id: "P001",
    value: {
      nama: "Lipstik Matte",
      merek: "Wardah",
      harga: 45000,
      stok: 20
    }
  },
  {
    _id: "P002",
    value: {
      nama: "Foundation Natural",
      merek: "Make Over",
      harga: 75000,
      stok: 15
    }
  },
  {
    _id: "P003",
    value: {
      nama: "Blush On Pink",
      merek: "Emina",
      harga: 39000,
      stok: 10
    }
  },
  {
    _id: "P004",
    value: {
      nama: "Eyeliner Waterproof",
      merek: "Sariayu",
      harga: 50000,
      stok: 12
    }
  },
  {
    _id: "P005",
    value: {
      nama: "Bedak Tabur",
      merek: "La Tulipe",
      harga: 42000,
      stok: 18
    }
  }
]);

//wide column
db.createCollection("penjualan")
{ ok: 1 }
db.penjualan.insertMany([
  {
    produk_id: "P001",
    nama: "Lipstik Matte",
    Januari: 12,
    Februari: 8,
    Maret: 10
  },
  {
    produk_id: "P002",
    nama: "Foundation Natural",
    Januari: 15,
    Februari: 13,
    Maret: 17
  },
  {
    produk_id: "P003",
    nama: "Blush On Pink",
    Januari: 7,
    Februari: 6,
    Maret: 9
  },
  {
    produk_id: "P004",
    nama: "Eyeliner Waterproof",
    Januari: 10,
    Februari: 9,
    Maret: 12
  },
  {
    produk_id: "P005",
    nama: "Bedak Tabur",
    Januari: 11,
    Februari: 14,
    Maret: 13
  }
]);

