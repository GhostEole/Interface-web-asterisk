//code javascript de la page web d'enregistrement de numéro de téléphone
//fichier en .wav mono 8000hz en sample rate, 64kbs
const URL = 'http://137.194.173.5:8080/api';
const submit = document.getElementById("submit");


bouton.addEventListener("click", (event) => {
  bouton.innerHTML = `Nombre de clics : ${event.detail}`;
});

// Définir les données que vous souhaitez envoyer dans le corps de la requête
const postData = {
  username: 'example',
  password: 'password123'
};

// Convertir les données au format JSON
const jsonData = JSON.stringify(postData);

fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ commandes: commandes, auto: modeAuto }),
        });



/*
const URL_SERVEUR = "http://localhost:8000/upload"; // à adapter
    const log = (m) => document.getElementById("log").textContent += m + "\n";

    document.getElementById("envoyer").addEventListener("click", async () => {
      const fichiers = document.getElementById("fichier").files;
      if (!fichiers.length) return log("Aucun fichier sélectionné.");

      for (const f of fichiers) {
        if (!f.name.toLowerCase().endsWith(".wav")) {
          log(`${f.name} : ignoré (pas un .wav)`);
          continue;
        }
        try {
          // Option A : multipart/form-data (le plus courant)
          const fd = new FormData();
          fd.append("fichier", f, f.name);
          const r = await fetch(URL_SERVEUR, { method: "POST", body: fd });

          // Option B : octets bruts (décommenter, commenter l'option A)
          // const r = await fetch(URL_SERVEUR, {
          //   method: "POST",
          //   headers: { "Content-Type": "audio/wav", "X-Filename": f.name },
          //   body: f,
          // });

          log(`${f.name} : ${r.status} ${r.statusText}`);
        } catch (e) {
          log(`${f.name} : erreur (${e.message})`);
        }
      }
    });
*/

