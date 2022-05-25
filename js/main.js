const links = document.querySelectorAll(".container a");

function keys(ele){
    document.addEventListener("keydown", function(event){
        let theKey = event.key
        for(let i = 0 ; i < ele.length ; i++){
            if(theKey == ele[i].children[0].textContent){
                ele[i].click()
            }
        }
    
    })
}

keys(links)
if(window.location.pathname === '/questions.html'){keys(questions) ; console.log("Eshta ")}

