// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let h1 = document.createElement('h1');
    let tempSpan = document.createElement('span');

    // Add Attributes
    div.classList.add('header');
    span.classList.add('date');
    tempSpan.classList.add('temp');

    // Add Text
    span.textContent = 'SMARCH 28, 2019'; // Is there a typo in the instructions? SMARCH when it should be March?
    h1.textContent = 'Lambda Times';
    tempSpan.textContent = '98°';


    // Putting it all together
    div.appendChild(span);
    div.appendChild(h1);
    div.appendChild(tempSpan);

    document.querySelector('.header-container').appendChild(div);
}

Header();