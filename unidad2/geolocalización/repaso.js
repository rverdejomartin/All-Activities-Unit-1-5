window.onload = ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((pos)=>{
            console.log(pos.coords.latitude);
            console.log(pos.coords.longitude);
        });
    }

    let seguimiento;
    if(navigator.geolocation){
        seguimiento = navigator.geolocation.watchPosition((pos)=>{
            console.log(pos.coords.latitude);
            console.log(pos.coords.longitude);
        })
    }
}