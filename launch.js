let url =`https://api.spacexdata.com/v3/capsules`;
fetch(url).then((response) =>
    response.json().then((data) => {
        console.log(data);
        let affichage = '<ul>';
        for (let capsule of data) {
            affichage += `<li>${capsule.capsule_serial}</li>`;
        }
        affichage += '</ul>';
        document.querySelector("#capsules").innerHTML = affichage;
    })
);       