function getData(){
    fetch('https://api.spacexdata.com/v3/launches')
        .then(res => res.json())
        .then(data => console.log(data))
    }
    getData();
    