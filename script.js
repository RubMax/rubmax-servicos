

fetch('https://script.google.com/macros/s/AKfycbwoTyj8mpGYPfWCOxszGA-SPYTSBsJbJoHyFKgIr-b5xSAu-CO9pgE3bCebLGAWCVDnPg/exec?page=api')
  .then(res => res.json())
  .then(displayProduits)
  .catch(error => {
    console.error("Erreur de chargement :", error);
    document.body.innerHTML += `<p style="color:red;">Erreur de chargement des données</p>`;
  });

// Fonction pour afficher les produits dans le conteneur #produits
function displayProduits(data) {
  console.log(data); // Vérification console

  const container = document.getElementById("produits");
  if (!container) return;

  container.innerHTML = ""; // Nettoyer

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.nom}">
      <h3>${item.nom}</h3>
      <p>${item.description}</p>
      <p><strong>${item.prix}</strong></p>
    `;
    container.appendChild(card);
  });
}

}
