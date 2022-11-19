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
        let error;
        JSON.parse(localStorage.loginDetails).forEach((item)=>{
            
            if(item.Username == obj.Username){
                error = 'password'
                if(item.Password==obj.Password){
                    error='none'
                    location.href = 'profile.html'
                }
            }
        })
        if(error=='password'){
            alert('Check Password')
        }else if(error==undefined){
            alert('Check Username')
        }
    }


}