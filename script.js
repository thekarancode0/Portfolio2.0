//toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        
        else{
            sec.classList.remove('show-animate');
        }
    })
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}





function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries()); // Convert form data to object

    // Example: Log data to the console
    console.log('Form Data Submitted:', data);

    // Display a success message to the user
    alert('Form submitted successfully!');

    // Clear the form
    event.target.reset();
}