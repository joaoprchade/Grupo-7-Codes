document.addEventListener('DOMContentLoaded', function() {

    mais = document.querySelector('.mais')

    menos = document.querySelector('.menos')

    check = document.querySelector('.verde')
    

    grama = document.querySelector('.grama')

    mais.addEventListener('click', function(event) {
        x = parseFloat(grama.innerHTML) + 100;
        x.toString()
        grama.innerHTML=x;


    })

    menos.addEventListener('click', function(event) {
        if (grama.innerHTML != "100"){
            x = parseFloat(grama.innerHTML) - 100;
            x.toString()
            grama.innerHTML=x;
        }

    })


   


})