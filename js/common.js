function activateMenu(node) {
    const current = document.querySelector('.active')
    current.classList.remove('active')
    node.classList.add('active')
}