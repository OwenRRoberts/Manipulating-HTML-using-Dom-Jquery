document.addEventListener('DOMContentLoaded', function () {
    
    let button = document.createElement('BUTTON');
    let btnText = document.createTextNode('CLICKY CLICKY');
    button.appendChild(btnText);
    document.body.prepend(button);

    button.addEventListener('click', function(){
        alert('well looky looky, you done and gone clicked');
    })

    let button2 = document.getElementById('button2');
    button2.addEventListener('click', function(){
        let text = document.getElementById('textbox').value;
        alert(text);
    })

    let hoverDiv = document.getElementById('hoverDiv');
    hoverDiv.style.backgroudColor = 'red';
    hoverDiv.style.width = '50px';
    hoverDiv.style.height = '50px';

    hoverDiv.addEventListener('mouseover', function(){
        hoverDiv.style.backgroundColor = 'green';
        hoverDiv.addEventListener('mouseout', function(){
            hoverDiv.style.backgroudColor = 'red';
        })

    })

})