
alert("¡Bienvenido a FinanzaVersity! Descubre cómo manejar tu dinero de manera sabia y asegura un futuro financiero brillante.");

// menú principal
function mostrarMenu() {
    const opcion = prompt(
        "Selecciona un tema:\n1. Introducción a las Finanzas Personales\n2. Calculadora de Presupuesto Personal\n3. Consejos Prácticos de Finanzas Personales"
    );

    switch (opcion) {
        case "1":
            moduloIntroduccion();
            break;
        case "2":
            moduloPresupuesto();
            break;
        case "3":
            moduloConsejos();
            break;
        default:
            alert("Opción no válida. Por favor, selecciona una opción del menú.");
            mostrarMenu();
    }
}

// Módulo 1
function moduloIntroduccion() {
    alert("Conocer cómo se relacionan tus ingresos, gastos, ahorros y deudas es esencial para tomar decisiones financieras inteligentes.");
    mostrarMenu();
}

// Objeto para almacenar resultados del Módulo 2
let resultadosFinancieros = { ahorro: 0, deudas: false, gastos: 0, ingresos: 0, salud: "" };

// Módulo 2
function moduloPresupuesto() {
    resultadosFinancieros.ingresos = parseFloat(prompt("¿Cuál es tu ingreso mensual total? (en números)"));
    resultadosFinancieros.gastos = parseFloat(prompt("¿Cuánto gastas mensualmente en promedio? (en números)"));
    resultadosFinancieros.ahorro = parseFloat(prompt("¿Qué porcentaje de tus ingresos destinas al ahorro? (0-100%)"));
    resultadosFinancieros.deudas = confirm("¿Tienes deudas actualmente?");

    // Cálculo de la salud financiera
    const ahorroNeto = (resultadosFinancieros.ahorro / 100) * resultadosFinancieros.ingresos;
    const balanceMensual = resultadosFinancieros.ingresos - resultadosFinancieros.gastos;

    if (ahorroNeto >= 0.2 * resultadosFinancieros.ingresos && balanceMensual > 0 && !resultadosFinancieros.deudas) {
        resultadosFinancieros.salud = "Alta";
    } else if (ahorroNeto >= 0.1 * resultadosFinancieros.ingresos && balanceMensual >= 0) {
        resultadosFinancieros.salud = "Moderada";
    } else {
        resultadosFinancieros.salud = "Baja";
    }

    alert(`Tu índice de salud financiera es: ${resultadosFinancieros.salud}`);
    mostrarMenu();
}

// Módulo 3
function moduloConsejos() {
    let consejos = "Consejos Prácticos de Finanzas Personales:\n";

    if (resultadosFinancieros.salud === "Alta") {
        consejos += "- ¡Excelente trabajo! Considera diversificar tus inversiones.\n";
    } else if (resultadosFinancieros.salud === "Moderada") {
        consejos += "- Incrementa gradualmente tu porcentaje de ahorro al menos al 20%.\n";
    } else if (resultadosFinancieros.salud === "Baja") {
        consejos += "- Reduce tus gastos mensuales y prioriza el pago de deudas de alta tasa de interés.\n";
    }

    alert(consejos);
    mostrarMenu();
}


mostrarMenu();
