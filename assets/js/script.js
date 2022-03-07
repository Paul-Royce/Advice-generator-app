const adviceNumber = document.getElementById('advice-number');
const adviceContent = document.getElementById('advice-text');
const dice = document.querySelector('.dice-ctnr');
const spinner = document.querySelector('.spinner-border');

async function apiFetch() {
    // SHOW THE SPINNER
    spinner.classList.toggle('shadow');
    let response = await fetch('https://api.adviceslip.com/advice');
    let myJson = await response.json();
    console.log(myJson);
    adviceNumber.textContent = myJson.slip.id;
    adviceContent.textContent = myJson.slip.advice;
    spinner.classList.toggle('shadow')
}


window.onload = ()=>{
    apiFetch()
    // HANDLE ERRORS
    .catch(err =>  {
        console.log(err.message);
        let errorMessage = document.createElement('p');
        errorMessage.textContent = 'Something went wrong with the data';
        errorMessage.style.color = 'red';
        const paragraph = document.querySelector('p');
        paragraph.append(errorMessage);
        spinner.classList.toggle('shadow')
    })
};
dice.addEventListener("click", apiFetch);

