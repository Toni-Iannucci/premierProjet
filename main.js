function getData(){
    fetch('https://api.spacexdata.com/v3/capsules')
        .then(res => res.json())
        .then(data => console.log(data))
        let affichage =`<ul>`;
        for (let capsules of data) {
            affichage += `<li>${capsules.capsule_serial}</li>`
        }
        affichage += `</ul>`; 
        document.querySelector("#container").innerHTML = affichage;
    }
    getData();
    