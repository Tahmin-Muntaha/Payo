const login=document.getElementById('login-btn')


login.addEventListener('click',(e)=>{
    e.preventDefault()
const mobile=document.getElementById('mobile').value
const pin=document.getElementById('pin').value
    if(mobile==12345678910 && pin==1234){
        window.location.href='./main.html'
        


    }

    else{
        window.alert('Invalid Credentials')
    }



})