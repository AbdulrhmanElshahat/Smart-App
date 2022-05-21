const days = document.querySelectorAll(".day a")
days.forEach(day =>{
    day.onclick = function (e){
        let theDay = this.children[1].textContent
        if(theDay !== 'رجوع'){
            localStorage.setItem('day' ,"يوم " + theDay)
        }
        
    }
})
