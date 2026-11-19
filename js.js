// URL à renseigner plus tard
const URL_SERVEUR = "";

document.getElementById("formulaire").addEventListener("submit", async function (event) {
  event.preventDefault(); // empêche le rechargement de la page

  // Stockage dans des variables
  const displayName = document.getElementById("displayName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const username    = document.getElementById("username").value;
  const password    = document.getElementById("password").value;
  const maxContact  = parseInt(document.getElementById("maxContact").value, 10);

  const donnees = { displayName, phoneNumber, username, password, maxContact };

  try {
    const reponse = await fetch(URL_SERVEUR, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(donnees)
    });
    document.getElementById("resultat").textContent =
      reponse.ok ? "Envoyé (" + reponse.status + ")" : "Erreur serveur : " + reponse.status;
  } catch (erreur) {
    document.getElementById("resultat").textContent = "Échec de l'envoi : " + erreur;
  }
});