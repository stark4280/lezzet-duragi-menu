document.addEventListener('DOMContentLoaded', function() {
    // QR kodu oluştur
    new QRCode(document.getElementById("qrcode"), {
        text: "https://[kullanıcı-adınız].github.io/kafe-menu", // Bu URL'yi GitHub Pages'den alacağınız URL ile değiştirin
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    // Sayfa içi linkler için smooth scroll
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}); 