    function calculate() {
        
        var arr = document.getElementById('totaal').value.split(",");
        var operations = {
        '+' : arr.reduce((a, b) => parseFloat(a) + parseFloat(b)),
        '-' : arr.reduce((c, d) => parseFloat(c) - parseFloat(d)),
        '*' : arr.reduce((e, f) => parseFloat(e) * parseFloat(f)),
        '/' : arr.reduce((g, h) => parseFloat(g) / parseFloat(h))
			     }   
        
			   var antwoord = operations[document.getElementById('tt').selectedOptions[0].text];

			   document.getElementById('antwoord').innerHTML = "resultaat: " + antwoord;
    }
