function getCapsules (){

let url =`https://api.spacexdata.com/v3/capsules`;
fetch(url).then((response) =>
    response.json().then((data) => {
        console.log(data);
        let affichageFirstTableau = '<table class="table table-bordered table-striped"> <tr><th>Capsule Serial</th><th>Capsule ID</th><th>Status</th><th>Original launch</th><th>Original Launch Unix</th>';
       
        for (let capsule of data) {

            affichageFirstTableau += `<tr><td>${capsule.capsule_serial}</td>`;
            affichageFirstTableau += `<td>${capsule.capsule_id}</td>`;
            affichageFirstTableau += `<td>${capsule.status}</td>`;
            affichageFirstTableau += `<td>${capsule.original_launch}</td>`;
            affichageFirstTableau += `<td>${capsule.original_launch_unix}</td></tr>`;           
        }
        document.querySelector("#capsules").innerHTML = affichageFirstTableau;
    })
);  
}
function getLaunches (){


    let url =`https://api.spacexdata.com/v3/launches`;
    fetch(url).then((response) =>
        response.json().then((data) => {
            console.log(data);
            let affichageFirstTableau = '<table class="table table-bordered table-striped"> <tr><th>Flight number</th><th>Mission name</th><th>Upcoming</th><th>Launch Year</th><th>Launch date utc</th>';
           
            for (let capsule of data) {
    
                affichageFirstTableau += `<tr><td>${capsule.flight_number}</td>`;
                affichageFirstTableau += `<td>${capsule.mission_name}</td>`;
                affichageFirstTableau += `<td>${capsule.upcoming}</td>`;
                affichageFirstTableau += `<td>${capsule.launch_year}</td>`;
                affichageFirstTableau += `<td>${capsule.launch_date_utc}</td></tr>`;           
            }
            document.querySelector("#launches").innerHTML = affichageFirstTableau;
        })
    );  
    }
getLaunches();
getCapsules(); 
    