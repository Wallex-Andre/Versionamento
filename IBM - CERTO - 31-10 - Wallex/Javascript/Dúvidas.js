const duvidas =  document.getElementsByTagName("summary");

document.getElementById('searchInput').addEventListener('input', (e) =>{
    for(var i=0; i < duvidas.length; i++)
    if(duvidas[i].innerHTML.toLowerCase().includes(e.target.value.toLowerCase())){
        
        duvidas[i].style.display= "block";

    }else{
        duvidas[i].style.display= "none";

    }
});
