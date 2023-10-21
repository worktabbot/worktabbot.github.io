// import text processing function
import {workFixer} from './workfixer.js';

// create variables for things on the website

const inputWorkList = document.getElementById('input-worklist');
const enterWorks = document.getElementById('enter-works');
const cleanedWorks = document.getElementById('cleaned-worklist');
const copyWorks = document.getElementById('copy-works');
const clearWorks = document.getElementById('clear-works');

// make sure cleaned works is clear on new or reloaded instance

cleanedWorks.value = '';

// create event listener for add button

enterWorks.addEventListener('click', function() {

    let rawWorks = inputWorkList.value;
    let editedWorksText = workFixer(rawWorks);

    if (inputWorkList.value === '') {
        alert('You need to paste the works.');
    } else {
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
            console.log('Content copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
    
    copyWorksText();
    
});

// click handler for clear button

clearWorks.addEventListener('click', function() {
    cleanedWorks.value = ''    
});