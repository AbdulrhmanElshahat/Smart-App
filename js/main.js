const links = document.querySelectorAll(".container a");
const exitBtn = document.querySelector(".exit")

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
//when the user in questions page
 if(window.location.pathname.includes('questions.html')){keys(questions)}

 document.addEventListener("keydown", (event) => {
    if (event.key == "Backspace") {
      exitBtn.click();
    }
  });

