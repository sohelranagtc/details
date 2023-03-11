const SendName = () => {
    const GetName = document.getElementById('get-name')
    const Name = GetName.value
    GetName.value = ""
    localStorage.setItem('Name', Name)
}

const DeleteName = () => {
   localStorage.removeItem('Name')
}

const SendEmail = () =>{
    const GetEmail = document.getElementById('get-email')
    const Email = GetEmail.value
    GetEmail.value = ""
    localStorage.setItem('Email', Email)
}

const DeleteEmail = () => {
    localStorage.removeItem('Email')
}

const SendMessage = () => {
    const GetMessage = document.getElementById('get-message')
    const Message = GetMessage.value
    GetMessage.value = ""
    localStorage.setItem('Message', Message)
}

const DeleteMessage = () =>{
    localStorage.removeItem('Message')
}

const getDataAll = () => {
    let cart = {}
    const SaveCart = localStorage.getItem('player')
    if(SaveCart){
        cart = JSON.parse(SaveCart)
    }
    return cart
}


const showAllData = (name, others) =>{
    const Container = document.getElementById('container')
    const p = document.createElement('p')
    p.innerHTML = `${name} : ${others}`
    Container.appendChild(p)
}

const SendAll = () => {
    const cart = getDataAll()
    const IdName = document.getElementById('name').innerText
    const GetName = document.getElementById('get-name')
    const Name = GetName.value
    GetName.value = ""
    cart[IdName] = Name

    const EmailID = document.getElementById('email').innerText
    const GetEmail = document.getElementById('get-email')
    const Email = GetEmail.value
    GetEmail.value = ""
    cart[EmailID] = Email

    const MessageID = document.getElementById('message').innerText
    const GetMessage = document.getElementById('get-message')
    const Message = GetMessage.value
    GetMessage.value = ""
    cart[MessageID] = Message

    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('player', cartStringified)
}

const DisplayAllMyData = () => {
    const savedCart = getDataAll()
    for(const cart in savedCart){
        const others = savedCart[cart]
        showAllData(cart, others)
    }
}


const ResetAll = () => {
    localStorage.clear()
}

DisplayAllMyData ()