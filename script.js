const API_URL = "https://script.google.com/macros/s/AKfycbwoTyj8mpGYPfWCOxszGA-SPYTSBsJbJoHyFKgIr-b5xSAu-CO9pgE3bCebLGAWCVDnPg/exec?page=api";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    console.log("Données reçues :", data);
    displayProduits(data); // remplace ceci par ta fonction d'affichage
  })
  .catch(error => {
    console.error("Erreur fetch:", error);
  });
