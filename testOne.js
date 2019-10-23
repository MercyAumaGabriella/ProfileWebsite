var text = ["PROFESSIONAL", "PASSIONS"];
    var counter = 0;
    var elem = document.getElementByClassName("h1");
    setInterval(change, 3000);
    function change() {
     elem.innerHTML = text[counter];
        counter++;
        if(counter >= text.length) { counter = 0; }
    }