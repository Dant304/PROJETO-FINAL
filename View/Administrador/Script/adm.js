
const $Fisio = document.getElementById("fisioterapeuta");
const $Paci = document.getElementById("paciente");
$($Fisio).hide();
$($Paci).hide();

function mostrarFisio(){
    $($Paci).hide();
    $($Fisio).show();
}
function mostrarPaci(){
    $($Paci).show();
    $($Fisio).hide();
}

$("#btnSair").click(()=> {
    window.open("../../index.html");
});
$("#btnConfigurar").click(()=> {
    window.open("../Configurar/adm_configurar.html");
});