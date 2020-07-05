const stayDiv = document.getElementById('stay');
const switchDiv = document.getElementById('switch');
const iterationLimit = 10;

// let staySuccessCount = 0;

// for (let ii = 0; ii < iterationLimit; ii++) {
    
//     const prizeDoor = generateDoorChoice();
//     const contestantsChoice = generateDoorChoice();

//     if (prizeDoor === contestantsChoice) {
//         staySuccessCount++;
//     }
    
// }

// stayDiv.innerText = staySuccessCount;

let switchSuccessCount = 0;

for (let ii = 0; ii < iterationLimit; ii++) {

    const doors = new Array(3);
    const prizeDoor = generateDoorChoice();
    doors[prizeDoor] = 'prize';

    console.log('prizeDoor', prizeDoor + 1);
    console.log('doors', doors.toString());
    
    
    
    const contestantsChoice = generateDoorChoice();
    console.log('contestantsChoice', contestantsChoice + 1);


    if (contestantsChoice === prizeDoor) {
        console.log('Initial Selection was right..');
        console.log(' ');
        console.log(' ');
        
        continue;

    } else {
        
        
        
        const otherEmptyDoor = getOtherEmptyDoor(prizeDoor, contestantsChoice);
        
        console.log('otherEmptyDoor', otherEmptyDoor + 1);
        
        doors[otherEmptyDoor] = 'open';
        
        console.log('doors', doors.toString());
        
        
        let contestantsNewChoice;
        
        for (let jj = 0; jj < doors.length; jj++) {
            const door = doors[jj];
            if (jj === contestantsChoice) {
                continue;

            } else if (door === 'open') {
                continue;
            
            } else {
                contestantsNewChoice = jj;
            }
            
        }
        
        console.log('contestantsNewChoice', contestantsNewChoice + 1);
        console.log('result', doors[contestantsNewChoice] === 'prize');
        console.log(' ');
        console.log(' ');
        
        
        
        
        if (doors[contestantsNewChoice] === 'prize') {
            
            switchSuccessCount++;
        }
        
    }
    
}

switchDiv.innerText = switchSuccessCount;

function generateDoorChoice() {
    return Math.floor(Math.random() * 3);
}

function getOtherEmptyDoor(prizeDoor, contestantsChoice) {
    for (let ii = 0; ii < 3; ii++) {
        
        if ((ii) === prizeDoor) {
            continue;

        } else if ((ii) === contestantsChoice) {
            continue;
        } else {
            return ii;
        }
        
    }
}
