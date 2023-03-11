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

const SendAll = () => {
    const GetName = document.getElementById('get-name')
    const Name = GetName.value
    GetName.value = ""

    const GetEmail = document.getElementById('get-email')
    const Email = GetEmail.value
    GetEmail.value = ""

    const GetMessage = document.getElementById('get-message')
    const Message = GetMessage.value
    GetMessage.value = ""

}



const ResetAll = () => {
    localStorage.clear()
}