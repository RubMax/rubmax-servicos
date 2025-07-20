fetch('https://script.google.com/macros/s/AKfycbwoTyj8mpGYPfWCOxszGA-SPYTSBsJbJoHyFKgIr-b5xSAu-CO9pgE3bCebLGAWCVDnPg/exec?page=api')
  .then(res => res.json())
  .then(displayProduits)
  .catch(error => {
    console.error("Erreur de chargement :", error);
    document.body.innerHTML += `<p style="color:red;">Erreur de chargement des données</p>`;
  });

// Fonction de rendu (exemple de base)
function displayProduits(data) {
  console.log(data); // Pour voir si les données arrivent

  const container = document.getElementById("produits");
  if (!container) return;

  container.innerHTML = ""; // Nettoie le conteneur
  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.nom}" style="max-width:100%">
      <h3>${item.nom}</h3>
      <p>${item.description}</p>
      <p><strong>${item.prix}</strong></p>
    `;
    container.appendChild(card);
  });
}
