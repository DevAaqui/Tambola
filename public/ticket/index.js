//const { response } = require("express")

function getTickets(){
    const token = localStorage.getItem('token')
    axios.get('http://localhost:3000/user/getTickets', {headers: {'Authorization': token}})
    .then(response=> {
        console.log(response.data.data)
        let str = ''
        response.data.data.forEach(element => {
            element.forEach(el=> {
                addNewLine(el)
                
            })
        });
        //document.getElementById('str').innerHTML = str
    })
}
function addNewLine(str){
    let li = `<li>${str}</li><br><br>`
    showOnScreen(li)
}

function showOnScreen(li){
    let itemList = document.getElementById('box')

    itemList.innerHTML = itemList.innerHTML +li

}

function onCreate(){
    //e.preventDefault()
    const token = localStorage.getItem('token')
    console.log('OnCreate')
    let noOfTickets = 6

    let ticketObj ={
        numbers: noOfTickets
    }

    axios.post('http://localhost:3000/user/create-ticket', ticketObj, {headers: {'Authorization': token}})
    .then(response => {
        console.log(response.data.message)
        let msg = response.data.message
        showTicket(msg)
    })
}

function showTicket(msg){
    if(msg === 'CREATED'){
        document.getElementById('yourTicket').innerHTML ='Ticket Created'
    }
}

function showFunc(){
    const page =1
    const limit = document.getElementById('show').value
    const token = localStorage.getItem('token')
    console.log(limit)

    axios.get(`http://localhost:3000/user/pagination?page=${page}&limit=${limit}`, {headers: {'Authorization': token}})
    .then(response => {
        
        showPagination(response.data)
    })
    .catch(err=>console.log(err))

}

function showPagination({
    currentPage,
    hasNextPage,
    nextPage,
    hasPreviousPage,
    previousPage,
    lastPage
}){
    pagination.innerHTML = '' // Need to know what Pagination is

    if(hasPreviousPage){
        const btn2 = document.createElement('button')
        btn2.innerHTML = previousPage
        btn2.addEventListener('click', ()=> getProducts(previousPage) )
        pagination.appendChild(btn2)
    }

    const btn1 = document.createElement('button')
    btn1.innerHTML= `<h3>${currentPage}</h3>`
    btn1.addEventListener('click', ()=> getProducts(currentPage) )
    pagination.appendChild(btn1)

    if(hasNextPage){
        const btn3 = document.createElement('button')
        btn3.innerHTML = nextPage
        btn3.addEventListener('click', ()=> getProducts(nextPage) )
        pagination.appendChild(btn3)
    }

}

function getProducts(page){
    const token = localStorage.getItem('token')
    const limit = document.getElementById('show').value
    axios.get(`http://localhost:3000/user/pagination?page=${page}&limit=${limit}`, {headers: {'Authorization': token}})
    .then(response => {
        showPagination(response.data)
    })
    .catch(err=>console.log(err))
}

////////////////////////////////////////////////////
