$(document).ready(function () {

    //step 1, creating button
    let $button1 = $('<button>Clicky Clicky</button>').attr('id', 'btn1').appendTo('body');

    //on click, display message of my choosing.  that's the message you get.
    $('#btn1').click(function () {
        alert("You've done gone and clicked THE BUTTON");
    })

    //btn2 isn't showing up.  why not?
    $('#btn2').click(function () {
        let $text = $('#textbox').val();
        alert($text);
    })

    //hoverdiv made in html
    //$('<div>hoverDiv</div>').
    $('#hoverDiv').css({
        backgroundColor: 'black',
        height: '100px',
        width: '100px'
    })

    //on hover, change div color to bright pink, and back to black on mouseout
    $('#hoverDiv').hover(function () {
        $('#hoverDiv').css('background-color', '#fe019a')
        $('#hoverDiv').mouseleave(function () {
            $('#hoverDiv').css('background-color', 'black')
        })
    })

    //create a paragraph.  i couldn't think of a longer paragraph, and i love this speech.
    $('<p>I have seen things you people would not believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die.</p>').attr('id', 'para').appendTo('body');

    //click on paragraph to change it to random colors
    $('#para').click(function () {
        let colors = ['red', 'green', 'blue', 'brown', 'orange', 'pink', 'white'];
        let random = Math.floor(Math.random() * colors.length);
        $('#para').css('color', colors[random]);
    })

    //empty div and button 
    $('<div></div>').attr({'name': 'emptyDiv', 'id': 'div3'}).appendTo('body');
    $('<button>Empty Div Button</button>').attr('id', 'btn3').appendTo('#div3');  //why are you making 3 buttons in the wrong spots?

    $('#btn3').click(function () {
        $('<span>' + $('#div3').attr('name') + '</span>').appendTo('div3');
    })

    let friends = ['shelby', 'claire', 'lizz', 'kristen', 'harrison', 'jared', 'david', 'blaze', 'nirmal', 'staci'];
    let count = 0;
    $('#btn4').click(function () {
        if(count<10){
            $('<li></li>').text(friends[count]).appendTo('#ul');
            count++
        }
    })

})