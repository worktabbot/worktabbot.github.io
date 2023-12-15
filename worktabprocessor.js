// import text processing function
import {workFixer} from './workfixer.js';
import {classOrder} from './classorder.js';

// create variables for things on the website

const inputWorkList = document.getElementById('input-worklist');
const enterWorks = document.getElementById('enter-works');
const derbyWorks = document.getElementById('derby-works');
const cleanedWorks = document.getElementById('cleaned-worklist');
const copyWorks = document.getElementById('copy-works');
const clearWorks = document.getElementById('clear-works');

// make sure cleaned works is clear on new or reloaded instance

cleanedWorks.value = '';

// create event listener for regular works button

enterWorks.addEventListener('click', function() {

    if (inputWorkList.value === '') {
        alert('You need to paste the works.');
    } else {
        let rawWorks = inputWorkList.value;
        let editedWorksText = workFixer(rawWorks);
        let sortedWorksText = classOrder(editedWorksText);
        cleanedWorks.value = sortedWorksText;
    }

    inputWorkList.value = '';
});

// create event listener for derby works button

derbyWorks.addEventListener('click', function() {

    if (inputWorkList.value === '') {
        alert('You need to paste the works.');
    } else {
        let rawWorks = inputWorkList.value;
        let editedWorksText = workFixer(rawWorks);
        cleanedWorks.value = editedWorksText;
    }

    inputWorkList.value = '';
});

// click handler for copy button

copyWorks.addEventListener('click', function() {
    let cleanedWorksText = cleanedWorks.value;
    console.log(cleanedWorksText);
    const copyWorksText = async() => {
        try {
            await navigator.clipboard.writeText(cleanedWorksText);
            copyWorks.innerHTML = '<i class="fa-solid fa-copy"></i> copied <i class="fa-solid fa-copy"></i>';
            console.log('Content copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
    
    copyWorksText();
    
});

// click handler for clear button

clearWorks.addEventListener('click', function() {
    cleanedWorks.value = '';  
    copyWorks.innerHTML = '<i class="fa-solid fa-copy"></i> click to copy <i class="fa-solid fa-copy"></i>';
});