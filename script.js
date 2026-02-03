// On utilise un chemin relatif pour que ça marche sur ton PC ET sur GitHub
fetch('stage1/zabbix'.md') 
    .then(reponse => {
        if (!reponse.ok) throw new Error("Fichier non trouvé");
        return reponse.text();
    })
    .then(data => {
        document.getElementById('content').innerHTML = marked.parse(data);
    })
    .catch(error => console.error("Erreur :", error));
