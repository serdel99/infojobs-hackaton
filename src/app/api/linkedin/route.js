import { NextResponse } from "next/server"
import { getLinkedinProfile } from "../../../linkedin-scrapper"

const mockData = {

    "name": "Miguel Ángel Durán García ",
    "headline": "Programación JavaScript y Desarrollo Web. Reconocido Google Developer Expert, Microsoft MVP y GitHub Star. ⭐",
    "experience": [
        {
            "title": "Content Creator",
            "company": "midudev",
            "time": "2 años 5 meses",
            "location": "Barcelona, Catalonia, Spain"
        },
        {
            "title": "Lead Frontend Architect",
            "company": "Adevinta Spain",
            "time": "6 años 4 meses",
            "location": "Barcelona y alrededores, España",
            "description": "Soy parte del equipo Enablers Frontend en Adevinta Spain. Nuestra misión es conseguir que todos nuestros verticales (Fotocasa, MilAnuncios, Habitaclia, Coches.net, Infojobs) converjan tecnológicamente, tener una arquitectura moderna, flexible y optimizada, y la excelencia tecnológica de los desarrolladores, fomentando buenas prácticas y dando talleres para compartir conocimiento."
        },
        {
            "title": "Socio fundador",
            "company": "Uikú Coworking el Prat",
            "time": "9 años 11 meses",
            "location": "el Prat de Llobregat",
            "description": "Socio fundador de la cooperativa de servicios creada para crear un espacio de coworking como actividad principal."
        },
        {
            "title": "Co-Founder and Software Engineer",
            "company": "Sublime Codes",
            "time": "3 años 5 meses",
            "location": "Barcelona Area, Spain",
            "description": "Code consultancy studio. We help you creating your next MVP or project with care, focusing on quality and endurability. Best-in-class projects based on Javascript, ReactJS, GraphQL and Node."
        },
        {
            "title": "Front End Engineer",
            "company": "Typeform.com",
            "time": "3 meses",
            "location": "Barcelona y alrededores, España"
        },
        {
            "title": "Senior front-end and back-end developer",
            "company": "Hubii",
            "time": "5 años 3 meses",
            "location": "el Prat de Llobregat",
            "description": "Start-up sobre localización de noticias y servicios de información con contribuciones de usuarios.\n\nEn este período, entre otras cosas, desarrollé:\n\n- Website utilizando Jade como Template Engine, BEM, Stylus y CoffeeScript con un mínimo uso de jQuery para una experiencia fluida.\n- App de Firefox OS, con una experiencia totalmente nativa y offline first, optimizada para ir a 60fps incluso en los dispositivos low-cost.\n- App de Smart TV con un cuidado sentido de la…\nMostrar más "
        },
        {
            "title": "Web developer and Wordpress expert",
            "company": "miduga",
            "time": "5 años 11 meses",
            "location": "el Prat de Llobregat",
            "description": "Afronté diversos proyectos web como freelance de diferentes sectores: desde la página web de la cantautora catalana Clara Peya hasta la tienda online de la prestigiosa diseñadora Ingrid Rügemer."
        },
        {
            "title": "Webmaster y redactor jefe",
            "company": "WildGames",
            "time": "4 años 4 meses",
            "description": "Crear, desarrollar y mantener una comunidad con más de 300.000 visitantes únicos al mes."
        },
        {
            "title": "Senior web developer",
            "company": "HABITAR - Grupo de Investigación",
            "time": "1 año 1 mes",
            "description": "Desarrollé la revista digital de Habitar, creando una página web que encajara con las necesidades del grupo de investigación."
        },
        {
            "title": "Director y presentador",
            "company": "WildGames FM",
            "time": "3 años 5 meses",
            "location": "el Prat de Llobregat"
        },
        {
            "title": "Web Design & Programmer",
            "company": "Nacencia - Web 2.0 and Social Technologies",
            "time": "1 año",
            "location": "Barcelona y alrededores, España",
            "description": "Creé diferentes proyectos Wordpress para clientes internacionales como Clariba o NBS.\nInvestigué y construí diferentes pruebas de concepto sobre análisis semántico y sentimiento."
        },
        {
            "title": "News editor",
            "company": "Blogo.it",
            "time": "9 meses",
            "description": "Redacté artículos sobre tecnología, gadgets y software."
        },
        {
            "title": "Jefe de compras y márketing",
            "company": "Hardcore Gamer",
            "time": "1 año 1 mes",
            "location": "Urnieta, País Vasco",
            "description": "Coordiné, ejecuté y controlé la adquisición de productos (accesorios de videojuegos, videojuegos, juguetes, figuras y otro merchandising) que necesitaba la empresa para su funcionamiento velando por que dichas adquisiciones se realizarán en el momento justo, en las cantidades necesarias, con la calidad adecuada y al precio mas conveniente.\n\nTrabajé con distribuidores tanto europeos como americanos y orientales.\n\nTambién realicé estrategias de ventas, comunicación incluyendo…\nMostrar más "
        }
    ],
    "education": [
        {
            "name": "Universitat Oberta de Catalunya",
            "title": "Ingeniería Técnica de Informática de Gestión(Informática, Economía, Márketing, Física, Matemáticas)",
            "duration": "2003 - 2009"
        }
    ]

}


export async function POST(request) {
    const res = await request.json();
    // const data = await getLinkedinProfile(res.url)
    return NextResponse.json({ profile: mockData });
}