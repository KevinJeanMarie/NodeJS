const fs = require("fs-extra");

const file = './id.json'
// methode outputJSON car le fichier qu'on veut générer est un fichier json (file) car c'est un fichier et -> {}
// car c'est un objet ensuite .then car on utilise une promesse (.then ne fonctionne que pour les promesses) 
fs.outputJson(file, { "login": "kevin", "password": "kevkev" })
    .then(() => fs.readJsonSync(file, 'utf8'))
    .then(data => {
        console.log(data)
    });

const password = './password.json'
fs.outputJson(file, "test")
    .then(() => fs.readJsonSync(password, 'utf8'))
    .then(data => {
        console.log(data)
    })

// let id = "ceci est un test";

// switch (id) {
//     case "Test":
//         console.log("ceci est un test");
// }

