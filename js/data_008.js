const questions = [
    {
        question: "¿Qué es un diagrama esquemático?",
        options: ["Una fotografía de un circuito electrónico.", "Una representación gráfica que muestra la disposición física de los componentes.", "Una representación abstracta de un circuito que muestra sus componentes y conexiones lógicas.", "Un manual de instrucciones para un dispositivo."],
        answer: "Una representación abstracta de un circuito que muestra sus componentes y conexiones lógicas."
    },
    {
        question: "¿Qué símbolo se utiliza para representar una resistencia en un diagrama esquemático?",
        options: ["Un círculo con una flecha.", "Una línea en zigzag o un rectángulo.", "Dos líneas paralelas.", "Un triángulo."],
        answer: "Una línea en zigzag o un rectángulo."
    },
    {
        question: "¿Qué símbolo representa un condensador o capacitor?",
        options: ["Una flecha apuntando a una línea.", "Un círculo con una cruz.", "Dos líneas paralelas separadas por un espacio.", "Una onda."],
        answer: "Dos líneas paralelas separadas por un espacio."
    },
    {
        question: "¿Para qué se utiliza una protoboard?",
        options: ["Para soldar componentes electrónicos de forma permanente.", "Para imprimir circuitos.", "Para construir prototipos de circuitos electrónicos sin necesidad de soldar.", "Para medir voltaje."],
        answer: "Para construir prototipos de circuitos electrónicos sin necesidad de soldar."
    },
    {
        question: "¿Cómo se conectan los orificios de una fila en la parte central de una protoboard?",
        options: ["Están conectados en serie, de arriba a abajo.", "Están conectados en paralelo, de forma horizontal.", "Están conectados de forma independiente.", "Están conectados en paralelo, de forma vertical."],
        answer: "Están conectados en paralelo, de forma horizontal."
    },
    {
        question: "¿Cómo se conectan las líneas de orificios en los rieles laterales de una protoboard?",
        options: ["De forma horizontal (en filas).", "De forma vertical (en columnas).", "No tienen conexión entre sí.", "En zigzag."],
        answer: "De forma vertical (en columnas)."
    },
    {
        question: "¿Qué se suele conectar a los rieles laterales de la protoboard?",
        options: ["Los resistores.", "Las fuentes de alimentación (positivo y negativo).", "Los LEDs.", "Los interruptores."],
        answer: "Las fuentes de alimentación (positivo y negativo)."
    },
    {
        question: "Para construir un circuito en una protoboard, ¿dónde se deben insertar las patillas de los componentes?",
        options: ["En cualquier orificio de la protoboard, sin seguir un patrón.", "En las ranuras que separan los rieles laterales.", "En los orificios que están conectados lógicamente según el diagrama esquemático.", "Solo en los orificios de los extremos de la protoboard."],
        answer: "En los orificios que están conectados lógicamente según el diagrama esquemático."
    },
    {
        question: "¿Qué precaución es importante tomar al insertar componentes en la protoboard?",
        options: ["Usar la fuerza para que entren.", "Doblar las patillas antes de insertarlas.", "Asegurarse de que no haya cortocircuitos entre las patillas adyacentes.", "Cortar las patillas para que no sobresalgan."],
        answer: "Asegurarse de que no haya cortocircuitos entre las patillas adyacentes."
    },
    {
        question: "¿Cuál es una de las principales ventajas de usar una protoboard?",
        options: ["Permite crear circuitos muy pequeños y compactos.", "Permite soldar componentes de forma permanente.", "Facilita la construcción y modificación rápida de circuitos sin soldadura.", "Es ideal para circuitos de alta potencia."],
        answer: "Facilita la construcción y modificación rápida de circuitos sin soldadura."
    },
    {
        question: "¿Qué precaución se debe tener al conectar la fuente de alimentación a una protoboard?",
        options: ["Conectarla con los cables de forma aleatoria.", "Asegurarse de la polaridad correcta (positivo a positivo y negativo a negativo).", "Conectarla al revés para probar el circuito.", "No es necesario tener cuidado con la polaridad."],
        answer: "Asegurarse de la polaridad correcta (positivo a positivo y negativo a negativo)."
    },
    {
        question: "¿Qué símbolo representa un diodo LED?",
        options: ["Un círculo con una cruz y dos flechas saliendo.", "Un triángulo con una línea en el extremo y dos flechas saliendo.", "Un rectángulo con dos líneas paralelas.", "Un círculo con una línea vertical."],
        answer: "Un triángulo con una línea en el extremo y dos flechas saliendo."
    },
    {
        question: "¿Qué símbolo se usa para representar un interruptor?",
        options: ["Un círculo.", "Una línea con un espacio en el medio.", "Una línea en zigzag.", "Dos flechas opuestas."],
        answer: "Una línea con un espacio en el medio."
    },
    {
        question: "¿Por qué es importante desconectar la fuente de alimentación antes de modificar un circuito en la protoboard?",
        options: ["Para que los componentes no se calienten.", "Para evitar recibir una descarga eléctrica o dañar los componentes.", "Para que las conexiones se vean mejor.", "Para ahorrar energía."],
        answer: "Para evitar recibir una descarga eléctrica o dañar los componentes."
    },
    {
        question: "¿Qué es un nodo en un diagrama esquemático?",
        options: ["Un componente electrónico específico.", "Un punto donde dos o más cables o componentes se conectan.", "La representación de la fuente de alimentación.", "Una línea que representa un cable."],
        answer: "Un punto donde dos o más cables o componentes se conectan."
    },
    {
        question: "¿Qué símbolo representa una fuente de voltaje de corriente continua?",
        options: ["Una onda senoidal en un círculo.", "Un rectángulo.", "Dos líneas paralelas, una más larga que la otra.", "Una flecha."],
        answer: "Dos líneas paralelas, una más larga que la otra."
    },
    {
        question: "¿Qué componente electrónico se representa con una línea en zigzag o un rectángulo?",
        options: ["Un capacitor.", "Un inductor.", "Un diodo.", "Un resistor."],
        answer: "Un resistor."
    },
    {
        question: "¿Qué componente se representa con un círculo que contiene una flecha?",
        options: ["Un resistor.", "Un interruptor.", "Un amperímetro.", "Un voltímetro."],
        answer: "Un amperímetro."
    },
    {
        question: "¿Qué símbolo se utiliza para representar la tierra (ground)?",
        options: ["Un círculo con una flecha.", "Un círculo con una 'G'.", "Tres líneas horizontales, de longitud decreciente.", "Un interruptor abierto."],
        answer: "Tres líneas horizontales, de longitud decreciente."
    },
    {
        question: "¿Cuál es el símbolo de un interruptor abierto?",
        options: ["Una línea continua.", "Dos líneas paralelas.", "Una línea con un espacio o una patilla movible.", "Un círculo con una flecha dentro."],
        answer: "Una línea con un espacio o una patilla movible."
    },
    {
        question: "¿Qué componente se representa con una espiral o bobina?",
        options: ["Un capacitor.", "Un inductor.", "Un transistor.", "Un diodo."],
        answer: "Un inductor."
    },
    {
        question: "¿Qué símbolo representa un transistor BJT?",
        options: ["Un círculo con una cruz.", "Un círculo con tres patillas, una con una flecha.", "Un rectángulo con dos líneas.", "Una línea en zigzag."],
        answer: "Un círculo con tres patillas, una con una flecha."
    }
];