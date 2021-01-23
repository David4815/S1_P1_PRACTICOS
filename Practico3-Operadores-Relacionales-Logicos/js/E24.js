let sueldo;
let totalSueldos = 0;
let contadorEmp = 0;
let sueldoMin = Number.MAX_VALUE;

$("#btnCalcular").click(calcular);

function calcular() {
    contadorEmp++;
    sueldo = Number($("#txtSueldo").val());
    totalSueldos = totalSueldos + sueldo;
    if (sueldo < sueldoMin) {
        sueldoMin = sueldo;
    }
    $("#pResultado").html("Total sueldos: $" + totalSueldos + ". Empleados: "
        + contadorEmp + ". Sueldo minimo: " + sueldoMin);
}