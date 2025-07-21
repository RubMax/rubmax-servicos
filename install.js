let deferredPrompt;
const installPrompt = document.getElementById('installPrompt');
const installBtn = document.getElementById('installBtn');

// Intercepte l’événement d’installation
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); // Empêche le prompt auto
  deferredPrompt = e;
  installPrompt.style.display = 'flex'; // Affiche le popup
});

// Clique sur le bouton "Oui"
installBtn.addEventListener('click', async () => {
  installPrompt.style.display = 'none';
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Résultat d’installation : ${outcome}`);
    deferredPrompt = null;
  }
});
