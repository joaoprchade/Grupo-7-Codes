document.addEventListener('DOMContentLoaded', function() {

    text = document.querySelector('input[type="text"]')

    submit = document.querySelector('button')

    prot = document.querySelector('.produto1')

    submit.addEventListener('click', function(event) {
        if (text.value=="Proteínas") {
            prot.style.border = "solid 0.1rem black ";
            prot.style.padding = "0.1rem";
            prot.style.borderRadius = "0.3rem";
            prot.style.backgroundColor = "#c8c2d0";
        }


            
        
        
    })
})