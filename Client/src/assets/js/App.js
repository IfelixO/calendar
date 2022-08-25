const addModal = document.getElementById('addModal')

const userModal = document.getElementById('userModal')

const registerModal = document.getElementById('registerModal')

function exitAdd () {
    addModal.style.display = 'none'
    console.log('saiu add')
}

function showAdd () {
    addModal.style.display = 'block'
    console.log('apareceu add')
}

function exitUser () {
    userModal.style.display = 'none'
    console.log('saiu user')
}

function showUser () {
    userModal.style.display = 'block'
    console.log('apareceu user')
}

function exitRegister () {
    registerModal.style.display = 'none'
    console.log('saiu register')
}

function showRegister () {
    registerModal.style.display = 'block'
    console.log('apareceu register')
}


export default showAdd; exitAdd; showUser; exitUser; showRegister; exitRegister