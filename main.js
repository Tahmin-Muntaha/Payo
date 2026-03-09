const toggle=document.getElementsByClassName('togg')
const sectionBtn=document.getElementsByClassName('section-btn')
const addMoneyBtn=document.getElementById('add-money')
const cashOutBtn=document.getElementById('cash-out')
const tranferBtn=document.getElementById('transfer')
const bonusBtn=document.getElementById('bonus-btn')
const billBtn=document.getElementById('bill-btn')
const transactionBtn=document.getElementById('transaction-btn')



const addMoneySection=document.getElementById('add-money-section')
const cashOutSection=document.getElementById('cash-out-section')
const transferSection=document.getElementById('transfer-section')
const bonusSection=document.getElementById('bonus-section')
const billSection=document.getElementById('bill-section')
const transactionSection=document.getElementById('transaction-section')




const toggling =(section,btn)=>{
 for(let t of toggle){
        t.classList.add('notShow')
        
    }
    for(let btn of sectionBtn){
        btn.classList.remove('highlight')
    }
    section.classList.remove('notShow')
    btn.classList.add('highlight')
}


addMoneyBtn.addEventListener('click',()=>{
    

    toggling(addMoneySection,addMoneyBtn)
})


cashOutBtn.addEventListener('click',()=>{
   

    toggling(cashOutSection,cashOutBtn)
})

tranferBtn.addEventListener('click',()=>{
    toggling(transferSection,tranferBtn)
})

bonusBtn.addEventListener('click',()=>{
    toggling(bonusSection,bonusBtn)
})

billBtn.addEventListener('click',()=>{
    toggling(billSection,billBtn)
})
transactionBtn.addEventListener('click',()=>{
    toggling(transactionSection,transactionBtn)
})






const balance=document.getElementById('balance')
let transaction=[]
document.getElementById('add-monet-btn').addEventListener('click',()=>{

    const bank=document.getElementById('bank').value 
    const acc=document.getElementById('acc').value 
    const amount=document.getElementById('amount').value
    const pin=document.getElementById('pinno').value 

    if(bank=='XYZ' && acc=="123456789" && pin=="1234"){
        amountValue=parseInt(amount)
        console.log(amountValue)
        balanceValue=parseInt(balance.innerText)
        console.log(balanceValue)
        const ans=amountValue+balanceValue
        console.log(ans)
        balance.innerText=ans
        console.log(balance.innerText)


        const data={
            name:"Add Money",
            date:new Date().toLocaleDateString()

        }
        transaction.push(data)
        console.log(transaction)
        window.alert('Add Money Successful!!')
        

    }
    else{
        window.alert('Invalid Credentails!!')
    }

})




document.getElementById('withdraw-monet-btn').addEventListener('click',()=>{
    const agent=document.getElementById('agent').value
    const amount=parseInt(document.getElementById('withdraw-amount').value)
    const pin=document.getElementById('witdraw-pinno').value
    const balanceValue=parseInt(balance.innerText)
    if(agent=='123456789' && pin=='1234'){
        if(amount<=balanceValue){
            const ans=balanceValue-amount
            balance.innerText=ans
            window.alert('Withdrawal Successful')

            const data={
            name:"Cash Out",
            date:new Date().toLocaleDateString()

        }
        transaction.push(data)
                console.log(transaction)


        }
        else{
            window.alert('Balance is not enough')
            return
        }

    }
    else{
        window.alert('Invalid Credentials')
    }
})


document.getElementById('transfer-monet-btn').addEventListener('click',()=>{
    const userAcc=document.getElementById('user-acc').value 
    const amount=parseInt(document.getElementById('transfer-amount').value)
    const pin=document.getElementById('transfer-pinno').value
    const b=parseInt(balance.innerText)
    if(userAcc=='123456789' && pin=='1234'){
        if(amount<=b){
            const ans=b-amount
            balance.innerText=ans
            const data={
            name:"Transfer",
            date:new Date().toLocaleDateString()

        }
        transaction.push(data)
        window.alert('Transfer Successful')


        }
        else{
            window.alert("Insufficient balance!!")
        }
    }
    else{
        window.alert('Invalid credentials')
    }
})






document.getElementById('bonus-money-btn').addEventListener('click',()=>{
    const bonus=parseInt(document.getElementById('bonus').value)
    const b=parseInt(balance.innerText)
    const ans=b+b*(bonus/100)
    balance.innerText=ans
    window.alert("You get bonus")

})



document.getElementById('bill-pay-btn').addEventListener('click',()=>{
    const billName=document.getElementById('bill-name').value
    const acc=document.getElementById('biller-acc').value
    const amount=parseInt(document.getElementById('bill-amount').value)
    const pin=document.getElementById('bill-pinno').value 
    const b=parseInt(balance.innerText)
    if(acc=='1234567899' && pin=='1234'){
        if(amount<=b){

            const ans=b-amount
            balance.innerText=ans
            const data={
            name:billName,
            date:new Date().toLocaleDateString()

        }
        transaction.push(data)
        console.log(transaction)
        window.alert("bill paid successfully!!")
        }
        else{
            window.alert('Insufficient Balance')
        }
    }
    else{
        window.alert("Inavalid credentials")
    }
})


const history=document.getElementById('history')
transactionBtn.addEventListener('click',()=>{
    transaction.map(data=>{
    console.log(data)
    const div=document.createElement('div')
    div.innerHTML=`

     <div class="my-4 w-full bg-white p-4 rounded-2xl">
               <p class="font-semibold text-[20px]">${data.name}</p>
               <p class="text-[14px]">${data.date}</p> 
            </div>
    `
    history.appendChild(div)
})
})

document.getElementById('clear').addEventListener('click',()=>{
    transaction=[]
    history.innerHTML=`<div>No Transaction History</div>`
})


document.getElementById('logout').addEventListener('click',()=>{
    window.location.href='/index.html'
})