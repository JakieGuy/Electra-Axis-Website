const exampleModal = document.getElementById('exampleModal')
var picture = "C:\Users\13619\Desktop\Electra Art Website\Resources\300x300.png"
if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an Ajax request here
        // and then do the updating in a callback.

        // Update the modal's content.
        const modalTitle = exampleModal.querySelector('.modal-title')
        const portImg = exampleModal.querySelector('[alt="carousel1"]')

        modalTitle.textContent = `${recipient}'s Portfolio ${portImg.getAttribute('src')}`
    })
}
