let emailCollectorForm = document.getElementById("Email-Collector")
emailCollectorForm.addEventListener("submit", event => {
    // Stop the default event behavior
    event.preventDefault()

    // use FormData to get the User's name and email    
    let ourFormData = new FormData(event.target)
    
    let userFirstName = ourFormData.get("firstName")
    let userEmailAddress = ourFormData.get("emailAddress")
        
    let updatedHtmlContent = `
        <h2>Congratulations, ${userFirstName}!</h2>

        <p>You're on your way to becoming a member of Pasatiempo Golf Club</p>
        
        <p class="fine-print">You will get a confirmation email sent to: ${userEmailAddress}</p>
    `
    
    let updatedContentContainer = document.getElementById("Main-Content")
    updatedContentContainer.innerHTML = updatedHtmlContent
})