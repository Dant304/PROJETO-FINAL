$(document).ready(()=> {
    let option = 0;
    $('#fisioterapeuta').click(function() {
        if(option === 0){
            $('#fisioterapeuta').addClass("selecionado");
            option++;
        }
        else{
            $('#fisioterapeuta').removeClass("selecionado");
            option = 0;
        }
    });
    $('#paciente').click(function() {
        if(option === 0){
            $('#paciente').addClass("selecionado");
            option++;
        }
        else{
            $('#paciente').removeClass("selecionado");
            option = 0;
        }
    });
});