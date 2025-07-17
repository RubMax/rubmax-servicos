const SHEET_NAME = "Produits";
const ADMIN_EMAIL = "rubmaxben@gmail.com";

// Appel des données via API Apps Script
fetch('https://script.google.com/macros/s/AKfycbwoTyj8mpGYPfWCOxszGA-SPYTSBsJbJoHyFKgIr-b5xSAu-CO9pgE3bCebLGAWCVDnPg/exec?page=api')
  .then(res => res.json())
  .then(data => {
    if (typeof displayProduits === "function") {
      displayProduits(data);
    }
  })
  .catch(err => console.error("Erreur de chargement des données:", err));

// GESTION DU SWIPE POUR LA GALLERY
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById('gallery-images');
  if (gallery) {
    let touchStartX = 0;
    let touchEndX = 0;

    gallery.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    gallery.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      if (touchEndX < touchStartX - 50) {
        // Swipe gauche
        gallery.scrollBy({ left: 200, behavior: 'smooth' });
      }
      if (touchEndX > touchStartX + 50) {
        // Swipe droit
        gallery.scrollBy({ left: -200, behavior: 'smooth' });
      }
    }
  }

  // Bouton d'installation PWA
  const installBtn = document.getElementById("atalhoBtn");
  if (installBtn) {
    let deferredPrompt;
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt = e;
      installBtn.style.display = "block";
    });

    installBtn.addEventListener("click", () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(choiceResult => {
          if (choiceResult.outcome === "accepted") {
            console.log("Installation acceptée");
          } else {
            console.log("Installation refusée");
          }
          deferredPrompt = null;
        });
      }
    });
  }
});
