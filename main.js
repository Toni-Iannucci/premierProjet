function getData(){
    fetch('https://api.spacexdata.com/v3/capsules')
        .then(res => res.json())
        .then(data => console.log(data))
    }
    getData();
    