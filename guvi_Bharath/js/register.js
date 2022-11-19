let subBtn = document.getElementById('subBtn')
subBtn.onclick = (e)=>{
    let flag=0,obj={};
    e.preventDefault()
    Object.values(document.querySelectorAll('input')).forEach((item)=>{
        if(item.value=='') {
            flag=1
        }else{
            obj[item.name]=item.value
            } 
    })
    if(flag==1){
        alert('Please fill the details')
    }else{
        try{
            let parsedData = JSON.parse(localStorage.loginDetails)
            parsedData.push(obj)
             localStorage.loginDetails = JSON.stringify(parsedData)
             

        }catch(err){
            console.log(err)
            localStorage.loginDetails = JSON.stringify([obj])
            location.href='login.html'
        }
        
    }


}