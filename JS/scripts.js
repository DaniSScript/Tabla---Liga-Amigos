let equipos = [];
let jornadaActual = 1;

function generarJornada1() {
    jornadaActual = 1;
    document.getElementById('titulo').innerText = "Jornada 1";
    console.log('Generando Jornada 1');

    equipos = [
        { nombre: document.getElementById('equipo1').value, PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, DG: 0, PTS: 0 },
        { nombre: document.getElementById('equipo2').value, PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, DG: 0, PTS: 0 },
        { nombre: document.getElementById('equipo3').value, PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, DG: 0, PTS: 0 },
        { nombre: document.getElementById('equipo4').value, PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, DG: 0, PTS: 0 }
    ];

    console.log('Equipos inicializados:', equipos);

    const jornadaDiv = document.getElementById('jornada');
    jornadaDiv.innerHTML = ''; // Limpiar jornadas anteriores

    const enfrentamientos = generarEnfrentamientosPorJornada(1);
    console.log('Enfrentamientos generados para Jornada 1:', enfrentamientos);

    enfrentamientos.forEach((partido) => {
        const partidoDiv = document.createElement('div');
        partidoDiv.className = 'enfrentamiento';
        partidoDiv.innerHTML = `
            <div class="enfrentamiento-padre">
                <div class="equipo-enfrentamiento">
                    ${partido[0]}
                    <input type="number" class="resultado" data-equipo="${partido[0]}" min="0" data-jornada="1">
                </div>
                <div class="vs-enfrentamiento">vs</div>
                <div class="equipo-enfrentamiento">
                    ${partido[1]}
                    <input type="number" class="resultado" data-equipo="${partido[1]}" min="0" data-jornada="1">
                </div>
            </div>
        `;
        jornadaDiv.appendChild(partidoDiv);
    });

    console.log('Jornada 1 generada en el DOM');

    document.getElementById('formularioEquipos').style.display = 'none';
    jornadaDiv.style.display = 'block';
    document.getElementById('actualizarTabla').style.display = 'block';
    document.getElementById('tablaPosiciones').style.display = 'table';
    document.getElementById('pasarJornada2').style.display = 'block'; // Mostrar el botón de jornada 2
}

function generarJornada2() {
    jornadaActual = 2;
    console.log('Generando Jornada 2');
    document.getElementById('titulo').innerText = "Jornada 2";

    const jornadaDiv = document.getElementById('jornada');
    jornadaDiv.innerHTML = '';

    const enfrentamientos = generarEnfrentamientosPorJornada(2);
    console.log('Enfrentamientos generados para Jornada 2:', enfrentamientos);

    enfrentamientos.forEach((partido) => {
        const partidoDiv = document.createElement('div');
        partidoDiv.className = 'enfrentamiento';
        partidoDiv.innerHTML = `
            <div class="enfrentamiento-padre">
                <div class="equipo-enfrentamiento">
                    ${partido[0]}
                    <input type="number" class="resultado" data-equipo="${partido[0]}" min="0" data-jornada="2">
                </div>
                <div class="vs-enfrentamiento">vs</div>
                <div class="equipo-enfrentamiento">
                    ${partido[1]}
                    <input type="number" class="resultado" data-equipo="${partido[1]}" min="0" data-jornada="2">
                </div>
            </div>
        `;
        jornadaDiv.appendChild(partidoDiv);
    });

    console.log('Jornada 2 generada en el DOM');

    document.getElementById('actualizarTabla').style.display = 'block';
    document.getElementById('pasarJornada2').style.display = 'none'; // Ocultar el botón de jornada 2
    document.getElementById('pasarJornada3').style.display = 'block'; // Mostrar el botón de jornada 3
}

function generarJornada3() {
    jornadaActual = 3;
    console.log('Generando Jornada 3');
    document.getElementById('titulo').innerText = "Jornada 3";

    const jornadaDiv = document.getElementById('jornada');
    jornadaDiv.innerHTML = '';

    const enfrentamientos = generarEnfrentamientosPorJornada(3);
    console.log('Enfrentamientos generados para Jornada 3:', enfrentamientos);

    enfrentamientos.forEach((partido) => {
        const partidoDiv = document.createElement('div');
        partidoDiv.className = 'enfrentamiento';
        partidoDiv.innerHTML = `
            <div class="enfrentamiento-padre">
                <div class="equipo-enfrentamiento">
                    ${partido[0]}
                    <input type="number" class="resultado" data-equipo="${partido[0]}" min="0" data-jornada="3">
                </div>
                <div class="vs-enfrentamiento">vs</div>
                <div class="equipo-enfrentamiento">
                    ${partido[1]}
                    <input type="number" class="resultado" data-equipo="${partido[1]}" min="0" data-jornada="3">
                </div>
            </div>
        `;
        jornadaDiv.appendChild(partidoDiv);
    });

    console.log('Jornada 3 generada en el DOM');

    document.getElementById('actualizarTabla').style.display = 'block';
    document.getElementById('pasarJornada3').style.display = 'none'; // Ocultar el botón de jornada 3
}

function generarEnfrentamientosPorJornada(jornada) {
    let enfrentamientos = [];
    console.log('Generando enfrentamientos para Jornada', jornada);
    if (jornada === 1) {
        enfrentamientos = generarEnfrentamientos1();
    } else if (jornada === 2) {
        enfrentamientos = generarEnfrentamientos2();
    } else if (jornada === 3) {
        enfrentamientos = generarEnfrentamientos3();
    }
    console.log('Enfrentamientos para Jornada', jornada, ':', enfrentamientos);
    return enfrentamientos;
}

function generarEnfrentamientos1() {
    let enfrentamientos = [];
    console.log('Generando enfrentamientos para Jornada 1');
    enfrentamientos = [
        [equipos[0].nombre, equipos[1].nombre],
        [equipos[2].nombre, equipos[3].nombre]
    ];
    console.log('Enfrentamientos de Jornada 1:', enfrentamientos);
    return enfrentamientos;
}

function generarEnfrentamientos2() {
    let enfrentamientos = [];
    console.log('Generando enfrentamientos para Jornada 2');
    enfrentamientos = [
        [equipos[0].nombre, equipos[2].nombre],
        [equipos[1].nombre, equipos[3].nombre]
    ];
    console.log('Enfrentamientos de Jornada 2:', enfrentamientos);
    return enfrentamientos;
}

function generarEnfrentamientos3() {
    let enfrentamientos = [];
    console.log('Generando enfrentamientos para Jornada 3');
    enfrentamientos = [
        [equipos[0].nombre, equipos[3].nombre],
        [equipos[1].nombre, equipos[2].nombre]
    ];
    console.log('Enfrentamientos de Jornada 3:', enfrentamientos);
    return enfrentamientos;
}

function actualizarTabla() {
    console.log('Actualizando tabla para Jornada', jornadaActual);

    const resultados = document.querySelectorAll('.resultado[data-jornada="' + jornadaActual + '"]');
    const resultadosMap = new Map();

    resultados.forEach(input => {
        const equipo = input.dataset.equipo;
        const goles = parseInt(input.value) || 0;
        if (!resultadosMap.has(equipo)) {
            resultadosMap.set(equipo, goles);
        } else {
            resultadosMap.set(equipo, resultadosMap.get(equipo) + goles);
        }
    });

    console.log('Resultados obtenidos:', Array.from(resultadosMap.entries()));

    equipos.forEach(equipo => {
        if (!equipos.find(e => e.nombre === equipo.nombre)) {
            equipos.push(equipo);
        }
    });

    const enfrentamientos = generarEnfrentamientosPorJornada(jornadaActual);
    console.log('Enfrentamientos para actualizar la tabla:', enfrentamientos);

    enfrentamientos.forEach(partido => {
        const equipo1 = equipos.find(e => e.nombre === partido[0]);
        const equipo2 = equipos.find(e => e.nombre === partido[1]);
        const resultado1 = resultadosMap.get(equipo1.nombre) || 0;
        const resultado2 = resultadosMap.get(equipo2.nombre) || 0;

        console.log(`Partido: ${equipo1.nombre} (${resultado1}) vs ${equipo2.nombre} (${resultado2})`);

        equipo1.GF += resultado1;
        equipo1.GC += resultado2;
        equipo2.GF += resultado2;
        equipo2.GC += resultado1;

        // Incrementar partidos jugados (PJ)
        equipo1.PJ++;
        equipo2.PJ++;

        if (resultado1 > resultado2) {
            equipo1.PG++;
            equipo2.PP++;
            equipo1.PTS += 3;
        } else if (resultado1 < resultado2) {
            equipo2.PG++;
            equipo1.PP++;
            equipo2.PTS += 3;
        } else {
            equipo1.PE++;
            equipo2.PE++;
            equipo1.PTS += 1;
            equipo2.PTS += 1;
        }

        equipo1.DG = equipo1.GF - equipo1.GC;
        equipo2.DG = equipo2.GF - equipo2.GC;
    });

    console.log('Equipos actualizados:', equipos);

    // Llamar a la función para actualizar la tabla de posiciones en el DOM
    actualizarTablaEnDOM();
}

function actualizarTablaEnDOM() {
    const tabla = document.getElementById('tablaPosiciones');
    const tbody = tabla.querySelector('tbody');
    tbody.innerHTML = '';  // Limpiar solo el cuerpo de la tabla

    const equiposOrdenados = equipos.slice().sort((a, b) => b.PTS - a.PTS || b.DG - a.DG);

    equiposOrdenados.forEach(equipo => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${equipo.nombre}</td>
            <td>${equipo.PJ}</td>
            <td>${equipo.PG}</td>
            <td>${equipo.PE}</td>
            <td>${equipo.PP}</td>
            <td>${equipo.GF}</td>
            <td>${equipo.GC}</td>
            <td>${equipo.DG}</td>
            <td>${equipo.PTS}</td>
        `;
        tbody.appendChild(fila);
    });

    console.log('Tabla actualizada en el DOM');
}
