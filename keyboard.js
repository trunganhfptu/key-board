let textBox = document.getElementById('prx');
textBox.addEventListener('keydown', (event) => {
        event.preventDefault();
        console.log(`key=${event.key},code=${event.code}`);

        if(event.code.endsWith("MetaLeft")){
            var image = document.getElementById(event.code);
            image.src = "./images/win_orange.png";
        } else if(event.code.endsWith("ContextMenu")){
            var image = document.getElementById(event.code);
            image.src = "./images/menu_orange.png";
        } else {
            document.getElementById(event.code).style.backgroundColor = "#FFA500";
        }
});

textBox.addEventListener('keyup', (event) => {
    event.preventDefault();
    console.log(`key=${event.key},code=${event.code}`);

    if(event.code.endsWith("MetaLeft")){
        var image = document.getElementById(event.code);
        image.src = "./images/win_green.png";
    } else if(event.code.endsWith("ContextMenu")){
        var image = document.getElementById(event.code);
        image.src = "./images/menu_green.png";
    } else {
        document.getElementById(event.code).style.backgroundColor = "rgb(0, 255, 0)";
    }

    console.log(`key=${event.key},code=${event.code}`);
    
});

textBox.addEventListener('mouseup', (event) => {
    event.preventDefault();
    console.log(`key=${event.key},code=${event.code}`);

    if(event.code.endsWith("MetaLeft")){
        var image = document.getElementById(event.code);
        image.src = "./images/win_orange.png";
    } else if(event.code.endsWith("ContextMenu")){
        var image = document.getElementById(event.code);
        image.src = "./images/menu_orange.png";
    } else {
        document.getElementById(event.code).style.backgroundColor = "#FFA500";
    }
});

textBox.addEventListener('mousedown', (event) => {
    event.preventDefault();
    console.log(`key=${event.key},code=${event.code}`);

    if(event.code.endsWith("MetaLeft")){
        var image = document.getElementById(event.code);
        image.src = "./images/win_green.png";
    } else if(event.code.endsWith("ContextMenu")){
        var image = document.getElementById(event.code);
        image.src = "./images/menu_green.png";
    } else {
        document.getElementById(event.code).style.backgroundColor = "rgb(0, 255, 0)";
    }

    console.log(`key=${event.key},code=${event.code}`);
});



