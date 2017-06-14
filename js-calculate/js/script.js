    function count() {
        
        var arr = document.getElementById('fill').value.split(",");
        var operations = {
        '+' : arr.reduce((a, b) => parseFloat(a) + parseFloat(b)),
        '-' : arr.reduce((a, b) => parseFloat(a) - parseFloat(b)),
        '*' : arr.reduce((a, b) => parseFloat(a) * parseFloat(b)),
        '/' : arr.reduce((a, b) => parseFloat(a) / parseFloat(b))
			     }   
        
			   var answer = operations[document.getElementById('select').selectedOptions[0].text];

			   document.getElementById('answer').innerHTML = "Resultaat: " + answer;
    }
// gemaakt met hulp