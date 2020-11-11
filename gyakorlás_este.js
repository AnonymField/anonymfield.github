function Szamol()
{
var szam_1 = document.getElementById("valami_1").value;
var szam_2 = document.getElementById("valami_2").value;

var eredmeny = parseInt(szam_1) + parseInt(szam_2);
document.getElementById("eredmenyek").innerHTML = eredmeny;
}
