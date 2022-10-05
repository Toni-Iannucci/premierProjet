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
            let showFirstTable = '<table class="table table-bordered table-striped"> <tr><th>Capsule Serial</th><th>Capsule ID</th><th>Status</th><th>Original launch</th><th>Original Launch Unix</th>';
           
            for (let capsule of data) {
    
                showFirstTable += `<tr><td>${capsule.capsule_serial}</td>`;
                showFirstTable += `<td>${capsule.capsule_id}</td>`;
                showFirstTable += `<td>${capsule.status}</td>`;
                showFirstTable += `<td>${capsule.original_launch}</td>`;
                showFirstTable += `<td>${capsule.original_launch_unix}</td></tr>`;           
            }
            document.querySelector("#capsules").innerHTML = showFirstTable;
        })
    );  
    }

    
    function getLaunches (){
    
    
        let url =`https://api.spacexdata.com/v3/launches`;
        fetch(url).then((response) =>
            response.json().then((data) => {
                console.log(data);
                let showFirstTable = '<table class="table table-bordered table-striped"> <tr><th>Flight number</th><th>Mission name</th><th>Upcoming</th><th>Launch Year</th><th>Launch date utc</th>';
               
                for (let capsule of data) {
        
                    showFirstTable += `<tr><td>${capsule.flight_number}</td>`;
                    showFirstTable += `<td>${capsule.mission_name}</td>`;
                    showFirstTable += `<td>${capsule.upcoming}</td>`;
                    showFirstTable += `<td>${capsule.launch_year}</td>`;
                    showFirstTable += `<td>${capsule.launch_date_utc}</td></tr>`;           
                }
                document.querySelector("#launches").innerHTML = showFirstTable;
            })
        );  
        }
    getLaunches();
    getCapsules(); 
