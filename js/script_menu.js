// popup element
const popup = document.getElementById('popup-buy');
const closePopup = document.querySelector('.close-popup');

// Untuk mengganti judul popup sesuai produk
const popupTitle = document.getElementById('popup-title');

// Link tombol
const linkWA = document.getElementById('buy-wa');
const linkTT = document.getElementById('buy-tt');
const linkShopee = document.getElementById('buy-shopee');

// Event: klik pada menu-card
document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('click', () => {

        let produk = card.getAttribute("data-produk");

        // Ubah judul popup
        popupTitle.innerText = "Beli " + produk;

        // (Opsional) ubah link sesuai kebutuhan
        linkWA.href = "https://wa.me/085748331696?text=Saya%20mau%20beli%20" + produk;
        linkTT.href = "https://www.tiktok.com/";
        linkShopee.href = "https://shopee.co.id/";

        // tampilkan popup
        popup.style.display = 'flex';
    });
});

// Tutup popup
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Klik luar popup untuk tutup
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});