document.addEventListener('DOMContentLoaded', function () {

    //step 1
    let button = document.createElement('BUTTON');
    let btnText = document.createTextNode('CLICKY CLICKY');
    button.appendChild(btnText);
    document.body.prepend(button);

    button.addEventListener('click', function () {
        alert('well looky looky, you done and gone clicked');
    })

    //step 2
    let button2 = document.getElementById('button2');
    button2.addEventListener('click', function () {
        let text = document.getElementById('textbox').value;
        alert(text);
    })

    //step 3
    let hoverDiv = document.getElementById('hoverDiv');
    hoverDiv.addEventListener('mouseover', function () {
        hoverDiv.style.backgroundColor = 'green';
    })
    hoverDiv.addEventListener('mouseout', function () {
        hoverDiv.style.backgroudColor = 'black';
    })

    //step 4
    let p = document.createElement('p');
    let pText = document.createTextNode("I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die.");
    p.appendChild(pText);
    document.body.appendChild(p);

    p.addEventListener('click', function () {
        let colors = ['red', 'blue', 'pink', 'green', 'orange'];
        let randColor = colors[Math.floor(Math.random() * colors.length)];
        p.style.color = randColor;
    })

    //step 5
    let button3 = document.createElement('button');
    let btn3Text = document.createTextNode('Emptiness');
    button3.appendChild(btn3Text);
    document.body.appendChild(button3);
    button.addEventListener('click', function () {
        let span = document.createElement('span');
        div.appendChild(span);
        let text = document.createTextNode('Owen');
        span.appendChild(text);
    })

    //step 6
    // let friends = ['shelby', 'claire', 'lizz', 'jared', 'harrison', 'kristen', 'david', 'blaze', 'nirmal', 'savannah'];
    // let button3 = document.createElement('button');
    // let ul = document.getElementById('ul');
    // button.addEventListener('click', function () {
    //     for (let i = 0; i < friends.length; i++) {
    //         let li = document.createElement('li');
    //         let name = document.createTextNode(friends[i]);
    //         li.appendChild(name);
    //         ul.appendChild(li);
    //     }

    // })
})