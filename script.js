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

function displayProduits(data) {
  const container = document.getElementById("produits");
  if (!container) return;

  container.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "produit-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.nom}">
      <h3>${item.nom}</h3>
      <p>${item.description}</p>
      <p><strong>Prix:</strong> ${item.prix}</p>
    `;
    container.appendChild(card);
  });
}
