export type Category = {
    id: string;
    title: string;
    icon: string;
    description: string;
};

export const categories: Category[] = [
    {
        id: 'format',
        title: 'Formato General',
        icon: '📄',
        description: 'Márgenes, interlineado y formato básico'
    },
    {
        id: 'structure',
        title: 'Estructura',
        icon: '📑',
        description: 'Portada, resumen y secciones principales'
    },
    {
        id: 'citations',
        title: 'Citas',
        icon: '✒️',
        description: 'Citas en el texto y referencias'
    },
    {
        id: 'tables',
        title: 'Tablas y Figuras',
        icon: '📊',
        description: 'Formato de elementos visuales'
    },
    {
        id: 'references',
        title: 'Referencias',
        icon: '📚',
        description: 'Formato de lista de referencias'
    },
    {
        id: 'digital',
        title: 'Contenido Digital',
        icon: '💻',
        description: 'Citas de recursos electrónicos'
    }
];