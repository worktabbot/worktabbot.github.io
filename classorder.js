// order workers by level of achievement (G1 winners, then G2, then G3, with horses ordered
// by number of victories at each level), and then alphabetically within each level

export function classOrder(worksList) {
    // turn the workouts into an array, with each line as an item
    // and then sort the array alphabetically
    let worksArray = worksList.split("\n");
    worksArray.sort();

    // set up empty arrays to put horses at each class level into
    let nineg1 = [];
    let eightg1 = [];
    let seveng1 = [];
    let sixg1 = [];
    let fiveg1 = [];
    let fourg1 = [];
    let threeg1 = [];
    let twog1 = [];
    let oneg1 = [];
    let nineg2 = [];
    let eightg2 = [];
    let seveng2 = [];
    let sixg2 = [];
    let fiveg2 = [];
    let fourg2 = [];
    let threeg2 = [];
    let twog2 = [];
    let oneg2 = [];
    let nineg3 = [];
    let eightg3 = [];
    let seveng3 = [];
    let sixg3 = [];
    let fiveg3 = [];
    let fourg3 = [];
    let threeg3 = [];
    let twog3 = [];
    let oneg3 = [];

    for (let i = 0; i < worksArray.length; i++) {
        if (worksArray[i].includes('nine-time Grade 1')) {
            nineg1.push(worksArray[i]);
        } else if (worksArray[i].includes('eight-time Grade 1')) {
            eightg1.push(worksArray[i]);
        } else if (worksArray[i].includes('seven-time Grade 1')) {
            seveng1.push(worksArray[i]);
        } else if (worksArray[i].includes('six-time Grade 1')) {
            sixg1.push(worksArray[i]);
        } else if (worksArray[i].includes('five-time Grade 1')) {
            fiveg1.push(worksArray[i]);
        } else if (worksArray[i].includes('four-time Grade 1')) {
            fourg1.push(worksArray[i]);
        } else if (worksArray[i].includes('three-time Grade 1')) {
            threeg1.push(worksArray[i]);
        } else if (worksArray[i].includes('two-time Grade 1')) {
            twog1.push(worksArray[i]);
        } else if (worksArray[i].includes('Grade 1 winner')) {
            oneg1.push(worksArray[i]);
        } else if (worksArray[i].includes('nine-time Grade 2')) {
            nineg2.push(worksArray[i]);
        } else if (worksArray[i].includes('eight-time Grade 2')) {
            eightg2.push(worksArray[i]);
        } else if (worksArray[i].includes('seven-time Grade 2')) {
            seveng2.push(worksArray[i]);
        } else if (worksArray[i].includes('six-time Grade 2')) {
            sixg2.push(worksArray[i]);
        } else if (worksArray[i].includes('five-time Grade 2')) {
            fiveg2.push(worksArray[i]);
        } else if (worksArray[i].includes('four-time Grade 2')) {
            fourg2.push(worksArray[i]);
        } else if (worksArray[i].includes('three-time Grade 2')) {
            threeg2.push(worksArray[i]);
        } else if (worksArray[i].includes('two-time Grade 2')) {
            twog2.push(worksArray[i]);
        } else if (worksArray[i].includes('Grade 2 winner')) {
            oneg2.push(worksArray[i]);
        } else if (worksArray[i].includes('nine-time Grade 3')) {
            nineg3.push(worksArray[i]);
        } else if (worksArray[i].includes('eight-time Grade 3')) {
            eightg3.push(worksArray[i]);
        } else if (worksArray[i].includes('seven-time Grade 3')) {
            seveng3.push(worksArray[i]);
        } else if (worksArray[i].includes('six-time Grade 3')) {
            sixg3.push(worksArray[i]);
        } else if (worksArray[i].includes('five-time Grade 3')) {
            fiveg3.push(worksArray[i]);
        } else if (worksArray[i].includes('four-time Grade 3')) {
            fourg3.push(worksArray[i]);
        } else if (worksArray[i].includes('three-time Grade 3')) {
            threeg3.push(worksArray[i]);
        } else if (worksArray[i].includes('two-time Grade 3')) {
            twog3.push(worksArray[i]);
        } else if (worksArray[i].includes('Grade 3 winner')) {
            oneg3.push(worksArray[i]);
        }
    }

    // concatenate all of the arrays of ordered horses to make one big array again
    let orderedWorks = nineg1.concat(eightg1, seveng1, sixg1, fiveg1, fourg1, threeg1, twog1, oneg1, nineg2, eightg2, seveng2, sixg2, fiveg2, fourg2, threeg2, twog2, oneg2, nineg3, eightg3, seveng3, sixg3, fiveg3, fourg3, threeg3, twog3, oneg3);

    // rejoin the correctly ordered array into a string and return it
    let orderedWorksStr = orderedWorks.join('\n');
    return orderedWorksStr;
}