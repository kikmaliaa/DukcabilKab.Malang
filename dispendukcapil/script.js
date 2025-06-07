document.addEventListener('DOMContentLoaded', function() {
    // 1. Hover effect for "Liat Pengumuman" and "Layanan Lainnya" (announcement links)
    const announcementLinks = document.querySelectorAll('.announcement-link');

    announcementLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.fontWeight = 'bold'; // Makes the text bold
            this.style.backgroundColor = '#f0f0f0'; // Slight background change
        });

        link.addEventListener('mouseleave', function() {
            this.style.fontWeight = 'normal'; // Reverts to normal
            this.style.backgroundColor = 'transparent'; // Reverts background
        });
    });

    // 2. Form submission action for "Tinggalkan Pesan Anda"
    const messageForm = document.getElementById('messageForm');

    if (messageForm) {
        messageForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation (you can add more complex validation)
            if (!name || !email || !message) {
                alert('Semua kolom harus diisi!');
                return;
            }

            console.log('Form Submitted!');
            console.log('Nama: ' + name);
            console.log('Email: ' + email);
            console.log('Pesan: ' + message);

            alert('Terima kasih, pesan Anda telah terkirim!');

            messageForm.reset();
        });
    }

    // NEW: Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});