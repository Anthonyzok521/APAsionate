export type Rule = {
    id: string;
    categoryId: string;
    title: string;
    description: string;
    example?: string;
    guidelines?: string[];
};

export const apaRules: Rule[] = [
    // Formato General
    {
        id: 'margins',
        categoryId: 'format',
        title: 'Márgenes',
        description: 'Configure los márgenes del documento a 2.54 cm (1 pulgada) en todos los lados.',
        guidelines: [
            'Margen superior: 2.54 cm',
            'Margen inferior: 2.54 cm',
            'Margen izquierdo: 2.54 cm',
            'Margen derecho: 2.54 cm'
        ]
    },
    {
        id: 'spacing',
        categoryId: 'format',
        title: 'Interlineado y Párrafo',
        description: 'Use doble espacio en todo el documento, incluyendo la página de título, resumen, texto, referencias, tablas y figuras.',
        guidelines: [
            'Doble espacio en todo el documento',
            'No añadir espacio extra entre párrafos',
            'Sangría de primera línea: 1.27 cm',
            'Alinear el texto a la izquierda (no justificado)'
        ]
    },
    {
        id: 'font',
        categoryId: 'format',
        title: 'Fuente y Tamaño',
        description: 'Utilice una fuente legible en un tamaño apropiado.',
        guidelines: [
            'Times New Roman: 12 pts',
            'Arial: 11 pts',
            'Calibri: 11 pts',
            'Georgia: 11 pts',
            'Lucida Sans Unicode: 10 pts'
        ]
    },
    {
        id: 'page-numbers',
        categoryId: 'format',
        title: 'Números de Página',
        description: 'Numere todas las páginas consecutivamente en la esquina superior derecha.',
        guidelines: [
            'Incluir número en todas las páginas',
            'Alinear a la derecha en el encabezado',
            'Usar el mismo tipo de letra del texto',
            'La portada cuenta como página 1'
        ]
    },

    // Estructura
    {
        id: 'title-page',
        categoryId: 'structure',
        title: 'Portada',
        description: 'La portada debe incluir el título del trabajo, nombre del autor, afiliación institucional y nota del autor.',
        example: `Título del Trabajo
Nombre del Autor
Universidad XYZ
Curso ABC-123
Profesor Dr. Juan Pérez
15 de enero de 2024`,
        guidelines: [
            'Título centrado, en negrita, a 3-4 líneas del margen superior',
            'Nombre del autor en la siguiente línea',
            'Afiliación institucional en la siguiente línea',
            'Nota del autor al final de la página'
        ]
    },
    {
        id: 'abstract',
        categoryId: 'structure',
        title: 'Resumen',
        description: 'El resumen es un sumario conciso del contenido del trabajo, limitado a 250 palabras.',
        example: 'Resumen\n\nEste estudio examina... [150-250 palabras]\n\nPalabras clave: término1, término2, término3',
        guidelines: [
            'Límite de 250 palabras',
            'Incluir objetivos principales',
            'Metodología utilizada',
            'Resultados más importantes',
            'Conclusiones principales',
            'Palabras clave al final'
        ]
    },
    {
        id: 'headings',
        categoryId: 'structure',
        title: 'Títulos y Subtítulos',
        description: 'APA utiliza cinco niveles de títulos, cada uno con su propio formato.',
        guidelines: [
            'Nivel 1: Centrado, Negrita',
            'Nivel 2: Alineado a la Izquierda, Negrita',
            'Nivel 3: Sangría, Negrita',
            'Nivel 4: Sangría, Negrita, Cursiva',
            'Nivel 5: Sangría, Cursiva'
        ]
    },
    {
        id: 'introduction',
        categoryId: 'structure',
        title: 'Introducción',
        description: 'La introducción presenta el problema específico bajo estudio y describe la estrategia de investigación.',
        guidelines: [
            'No requiere el encabezado "Introducción"',
            'Comenzar en una nueva página',
            'Presentar el problema y su contexto',
            'Describir la importancia del estudio',
            'Terminar con los objetivos o hipótesis'
        ]
    },

    // Citas
    {
        id: 'in-text-citations',
        categoryId: 'citations',
        title: 'Citas en el Texto',
        description: 'Las citas en el texto identifican la fuente de información.',
        example: '(García, 2020) o García (2020) afirma que...',
        guidelines: [
            'Un autor: (Apellido, año)',
            'Dos autores: (Apellido1 & Apellido2, año)',
            'Tres o más: (Apellido1 et al., año)',
            'Cita directa: Incluir número de página (p. 23)'
        ]
    },
    {
        id: 'long-quotes',
        categoryId: 'citations',
        title: 'Citas Largas',
        description: 'Las citas de 40 palabras o más se presentan en bloque.',
        example: `Smith (2019) concluyó lo siguiente:
    Las investigaciones demuestran que... [cita de 40+ palabras]
    Este hallazgo sugiere... (p. 123)`,
        guidelines: [
            'Sangría de 1.27 cm en todo el bloque',
            'Sin comillas',
            'Doble espacio',
            'Punto final antes de la citación'
        ]
    },
    {
        id: 'secondary-sources',
        categoryId: 'citations',
        title: 'Citas Secundarias',
        description: 'Cuando se cita una fuente citada en otra fuente.',
        example: 'López (citado en García, 2020) sugiere que...',
        guidelines: [
            'Mencionar autor original',
            'Usar "citado en"',
            'Incluir solo la fuente secundaria en referencias',
            'Evitar el uso excesivo de citas secundarias'
        ]
    },

    // Referencias
    {
        id: 'ref-format',
        categoryId: 'references',
        title: 'Formato de Referencias',
        description: 'La lista de referencias se organiza alfabéticamente.',
        guidelines: [
            'Doble espacio',
            'Sangría francesa de 1.27 cm',
            'Orden alfabético por apellido del autor',
            'Sin viñetas ni numeración'
        ]
    },
    {
        id: 'ref-book',
        categoryId: 'references',
        title: 'Referencias de Libros',
        description: 'Formato para referenciar libros completos y capítulos.',
        example: 'Apellido, A. A. (2020). Título del libro. Editorial.',
        guidelines: [
            'Autor(es)',
            'Año de publicación entre paréntesis',
            'Título en cursiva',
            'Editorial'
        ]
    },
    {
        id: 'ref-journal',
        categoryId: 'references',
        title: 'Referencias de Artículos',
        description: 'Formato para artículos de revistas científicas.',
        example: 'Apellido, A. A. (2020). Título del artículo. Nombre de la Revista, 12(3), 45-67.',
        guidelines: [
            'Autor(es)',
            'Año de publicación',
            'Título del artículo',
            'Nombre de la revista en cursiva',
            'Volumen en cursiva',
            'Número entre paréntesis',
            'Páginas'
        ]
    },

    // Contenido Digital
    {
        id: 'digital-sources',
        categoryId: 'digital',
        title: 'Fuentes Digitales',
        description: 'Cómo citar recursos en línea y contenido digital.',
        example: 'Apellido, A. A. (2020, 15 de enero). Título de la página web. Nombre del Sitio. URL',
        guidelines: [
            'Incluir URL cuando esté disponible',
            'Fecha de consulta solo si el contenido puede cambiar',
            'DOI preferido sobre URL para artículos',
            'No incluir punto final después de URL/DOI'
        ]
    },
    {
        id: 'social-media',
        categoryId: 'digital',
        title: 'Redes Sociales',
        description: 'Cómo citar publicaciones en redes sociales.',
        example: '@Usuario. (2024, 15 de enero). Contenido del tweet [Tweet]. Twitter. URL',
        guidelines: [
            'Incluir nombre de usuario',
            'Fecha exacta de la publicación',
            'Primeras 20 palabras del contenido',
            'Tipo de publicación entre corchetes',
            'Nombre de la red social',
            'URL de la publicación'
        ]
    },

    // Tablas y Figuras
    {
        id: 'tables',
        categoryId: 'tables',
        title: 'Tablas',
        description: 'Las tablas presentan datos de manera organizada y eficiente.',
        guidelines: [
            'Número de tabla en la primera línea (Tabla 1)',
            'Título descriptivo en cursiva debajo del número',
            'Notas debajo de la tabla cuando sea necesario',
            'Líneas horizontales principales, evitar líneas verticales'
        ]
    },
    {
        id: 'figures',
        categoryId: 'tables',
        title: 'Figuras',
        description: 'Las figuras incluyen gráficos, diagramas, fotografías y otros elementos visuales.',
        guidelines: [
            'Número de figura en cursiva (Figura 1)',
            'Título descriptivo debajo del número',
            'Leyenda cuando sea necesaria',
            'Notas explicativas debajo de la figura'
        ]
    },
    {
        id: 'table-notes',
        categoryId: 'tables',
        title: 'Notas en Tablas',
        description: 'Las notas proporcionan información adicional sobre el contenido de las tablas.',
        guidelines: [
            'Nota general: Explica unidades de medida, abreviaturas, etc.',
            'Nota específica: Se refiere a filas o columnas específicas',
            'Nota de probabilidad: Explica los valores p y significancia',
            'Usar superíndices para notas específicas'
        ]
    }
];