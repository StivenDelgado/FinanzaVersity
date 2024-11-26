
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

    alert("Ingresos: Son las entradas de dinero que obtienes, como tu sueldo, ventas, intereses, o cualquier otra fuente de ganancias.");

    alert("Egresos: Son las salidas de dinero que realizas, como gastos en alimentación, vivienda, transporte o entretenimiento.");

    alert("Ahorro: Es la parte de tus ingresos que decides no gastar, sino reservar para el futuro o para metas específicas.");

    alert("Deuda: Es el dinero que debes a otra persona o entidad, como préstamos, créditos o financiamiento que tienes pendiente de pagar.");

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

    if (ahorroNeto >= (0.2 * resultadosFinancieros.ingresos && balanceMensual) > 0 && !resultadosFinancieros.deudas) {
        resultadosFinancieros.salud = "Alta";
    } else if (ahorroNeto >= (0.1 * resultadosFinancieros.ingresos) && balanceMensual >= 0) {
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
    let sobrante = resultadosFinancieros.ingresos - resultadosFinancieros.gastos;
    if (resultadosFinancieros.deudas && sobrante < (resultadosFinancieros.ingresos * 0.25)) {
        alert("Entiendo que estar en una situación de deudas y con poco dinero para ahorrar puede ser muy difícil, pero es importante mantener la calma y actuar con estrategia. \n Comienza por organizar tus deudas, priorizando las que tienen intereses más altos, y elabora un presupuesto donde separes tus gastos esenciales de los prescindibles, reduciendo lo que no es necesario. Aunque sea poco, intenta ahorrar algo cada mes para emergencias, ya que esto evitará que te endeudes más en el futuro.");
    }else if (resultadosFinancieros.deudas && sobrante >= (resultadosFinancieros.ingresos * 0.25)) {
        alert("Si tienes deudas pero cuentas con un buen ingreso o suficiente dinero para hacer algo, es una excelente oportunidad para tomar decisiones financieras inteligentes. \n En primer lugar, prioriza liquidar las deudas con los intereses más altos, ya que estas suelen ser las que más impactan tus finanzas a largo plazo. Mientras tanto, destina una parte de tu dinero a crear o fortalecer un fondo de emergencia que cubra al menos tres meses de gastos esenciales, para evitar futuras deudas si surge algún imprevisto.");
    }else if(!resultadosFinancieros.deudas && sobrante < (resultadosFinancieros.ingresos * 0.25)) {
        alert("Si no tienes deudas y tienes poco dinero para ahorrar, es importante mantener la calma y actuar con estrategia. Comienza por organizar tus gastos, priorizando los que son esenciales y reduciendo lo que no es necesario. \n Aunque sea poco, intenta ahorrar algo cada mes para emergencias, ya que esto evitará que te endeudes más en el futuro.");
    }else if(!resultadosFinancieros.deudas && sobrante >= (resultadosFinancieros.ingresos * 0.25)) {    
        alert("Si no tienes deudas y tienes suficiente dinero para hacer algo, es una excelente oportunidad para tomar decisiones financieras inteligentes. En primer lugar, prioriza crear o fortalecer un fondo de emergencia que cubra al menos tres meses de gastos esenciales, para evitar futuras deudas si surge algún imprevisto.");
        
    }else {
        alert("¡No hay consejos para ti! ¡Continúa trabajando y manteniendo tus ingresos y ahorros en buenas condiciones!\n");
    }
    alert(consejos);
    mostrarMenu();
}


mostrarMenu();
