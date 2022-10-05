//const capsule_serial =document.getElementById('element');
//const capsule_id =document.getElementById('element');
//const statut =document.getElementById('element');

fetch  ('https://api.spacexdata.com/v3/capsules/')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        let affichage='<tr>';
        for (let post of data){
            affichage += `<td>${post.capsule_serial}</td>`;
            affichage += `<td>${post.capsule_id}</td>`;
            affichage += `<td>${post.statut}</td>`;
        }
        affichage+='</tr>';
        document.querySelector("#poste").innerHTML=affichage;
    })
        
    