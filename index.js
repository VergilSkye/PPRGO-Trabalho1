//seleciona os elementos presente no documento
var keys = document.querySelectorAll('#calculator span');
console.log(keys)
var operator = ['+','-','*','/'];
var decimalAdd = false;

for(var i=0; i < keys.length; i++){
    keys[i].onclick = function(e){
        //retorna o elemento encontrado em keys[i]
        var input = document.querySelector('.screen');

        // pegando o input dos botões
        var inputVal = input.innerHTML;
        //Passando os botões para o screen
        var btnVal = this.innerHTML;

        if(btnVal =='C'){
            input.innerHTML = '';
            decimalAdd = false;
        }
        //Calculando um resultado
        else if(btnVal == '='){
            var equation = inputVal;
            var lastChar = equation[equation.length - 1];

            // Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

            if(operator.indexOf(lastChar) > -1 || (lastChar == '.')){
                equation = equation.replace(/.$/, '');}
            if(equation){
                    input.innerHTML = eval(equation);
            }
            decimalAdd = false;
            
        }
        else {
            input.innerHTML +=btnVal;
        }
    }
}