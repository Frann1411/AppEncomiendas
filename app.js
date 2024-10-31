const deliveryPoints = [
    {
        lugar: "Acajutla, Metalio, Cara Sucia",
        fechas: "Martes y Jueves",
        horario: "ver imagen",
        imagen: "Encomiendas/Acajutla-Metalio-Cara Sucia.jpg"
    },
    {
        lugar: "Apopa",
        fechas: "De Lunes a Sábado",
        horario: "10:00 AM - 5:00 PM",
        imagen: "Encomiendas/Apopa.jpg"
    },
    {
        lugar: "Antiguo Cuscatlan-Zaragoza-Puerto de la Libertad",
        fechas: "Miércoles y Sábado",
        horario: "ver imagen",
        imagen: "Encomiendas/Antiguo Cuscatlan-Zaragoza-Puerto de la Libertad.jpg"
    },
    {
        lugar: "Armenia-Izalco-Sonzacate-Sonsonate-Acajutla",
        fechas: "Domingo",
        horario: "ver imagen",
        imagen: "Encomiendas/Armenia-Izalco-Sonzacate-Sonsonate-Acajutla.jpg"
    },
    {
        lugar: "Cacaopera-Osicala-San Luis de la Reina-San Gerardo-Nuevo Eden de San Juan-Dolores-San Ildenfonso",
        fechas: "Jueves",
        horario: "ver imagen",
        imagen: "Encomiendas/Cacaopera-Osicala-San Luis de la Reina-San Gerardo-Nuevo Eden de San Juan-Dolores-San Ildenfonso.jpg"
    },
    {
        lugar: "Candelaria de la Frontera",
        fechas: "De Lunes a Viernes",
        horario: "9:00 AM - 3:00 PM",
        imagen: "Encomiendas/Candelaria de la Frontera.jpg"
    },
    {
        lugar: "Chalatenango Centro",
        fechas: "Martes y Viernes",
        horario: "12:00 PM - 5:00 PM",
        imagen: "Encomiendas/Chalatenango Centro.jpg"
    },
    {
        lugar: "Chalchuapa",
        fechas: "De Lunes a Viernes",
        horario: "9:00 AM - 4:00 PM",
        imagen: "Encomiendas/Chalchuapa.jpg"
    },
    {
        lugar: "Chirilagua-Playa el Cuco-Intipuca-La Union-Conchagua-San Alejo",
        fechas: "Lunes",
        horario: "ver imagen",
        imagen: "Encomiendas/Chirilagua-Playa el Cuco-Intipuca-La Union-Conchagua-San Alejo.jpg"
    },
    {
        lugar: "Coatepeque-El Congo-Cuidad Arce-Cuidad Marsella-Cuidad Versalles-Pasatiempo Lourdes",
        fechas: "Lunes y Jueves",
        horario: "ver imagen",
        imagen: "Encomiendas/Coatepeque-El Congo-Cuidad Arce-Cuidad Marsella-Cuidad Versalles-Pasatiempo Lourdes.jpg"
    },
    {
        lugar: "Cojutepeque",
        fechas: "De Lunes a Sábado",
        horario: "9:00 AM - 4:00 PM- Sabados de 9:00 AM - 12:00 PM",
        imagen: "Encomiendas/Cojutepeque.jpg"
    },
    {
        lugar: "Cuidad Barrios-Chapeltique-Moncagua-Lolotique-Nueva Guadalupe-Chinameca",
        fechas: "Viernes",
        horario: "Ver imagen",
        imagen: "Encomiendas/Cuidad Barrios-Chapeltique-Moncagua-Lolotique-Nueva Guadalupe-Chinameca.jpg"
    },
    {
        lugar: "Cuidad el Triunfo-Santiago de Maria-Berlin-Mercedes Umaña",
        fechas: "Martes y Viernes",
        horario: "Ver imagen",
        imagen: "Encomiendas/Cuidad el Triunfo-Santiago de Maria-Berlin-Mercedes Umaña.jpg"
    },
    {
        lugar: "Cuidad Paraiso 1-Candelaria de la Frontera-Santiago de la Frontera-San Antonio Pajonal-Paraje Galan",
        fechas: "Martes y Viernes",
        horario: "Ver imagen",
        imagen: "Encomiendas/Cuidad Paraiso 1-Candelaria de la Frontera-Santiago de la Frontera-San Antonio Pajonal-Paraje Galan.jpg"
    },
    {
        lugar: "Cuidad Real-Chalchuapa-Atiquizaya-Turin-Ataco",
        fechas: "Martes y Viernes",
        horario: "Ver imagen",
        imagen: "Encomiendas/Cuidad Real-Chalchuapa-Atiquizaya-Turin-Ataco.jpg"
    },
    {
        lugar: "El Congo",
        fechas: "Lunes y Jueves",
        horario: "9:30 AM - 12:00 PM",
        imagen: "Encomiendas/El Congo.jpg"
    },
    {
        lugar: "Ilobasco",
        fechas: "Martes y Viernes",
        horario: "9:00 AM - 1:00 PM",
        imagen: "Encomiendas/Ilobasco.jpg"
    },
    {
        lugar: "Juayua",
        fechas: "Lunes y Jueves",
        horario: "11:30 AM - 5:00 PM",
        imagen: "Encomiendas/Juayua.jpg"
    },
    {
        lugar: "Los Naranjos-Nahuizalco-Juayua-Salcoatitan-Apaneca",
        fechas: "Lunes y Jueves",
        horario: "Ver imagen",
        imagen: "Encomiendas/Los Naranjos-Nahuizalco-Juayua-Salcoatitan-Apaneca.jpg"
    },
    {
        lugar: "Metro Lourdes",
        fechas: "Miércoles y Sábado",
        horario: "2:10 PM - 3:00 PM",
        imagen: "Encomiendas/Metro Lourdes.jpg"
    },
    {
        lugar: "Nahuizalco",
        fechas: "Lunes y Jueves",
        horario: "11:00 AM - 5:00 PM",
        imagen: "Encomiendas/Nahuizalco.jpg"
    },
    {
        lugar: "Nueva Concepcion-Agua Caliente-Desvio Amayo-El Paraiso-Chalatenango-La Palma-San Ignacio-Plaza Don Yon",
        fechas: "Martes y Viernes",
        horario: "Ver imagen",
        imagen: "Encomiendas/Nueva Concepcion-Agua Caliente-Desvio Amayo-El Paraiso-Chalatenango-La Palma-San Ignacio-Plaza Don Yon.jpg"
    },
    {
        lugar: "Plaza Merliot-La Gran Via-Planes de Renderos-San Marcos-Plaza San Jacinto",
        fechas: "Martes",
        horario: "Ver imagen",
        imagen: "Encomiendas/Plaza Merliot-La Gran Via-Planes de Renderos-San Marcos-Plaza San Jacinto.jpg"
    },
    {
        lugar: "Plaza Santo Tomas-Santiago Texacuangos-Olocuilta-San Juan Talpa-San Luis Talpa-El Rosario de la Paz-San Rafael Obrajuelos",
        fechas: "Viernes",
        horario: "Ver imagen",
        imagen: "Encomiendas/Plaza Santo Tomas.jpg"
    },
    {
        lugar: "Poloros-Nueva Esparta-Anamoros-Lislique-Corinto-Sociedad",
        fechas: "Domingo",
        horario: "Ver imagen",
        imagen: "Encomiendas/Poloros-Nueva Esparta-Anamoros-Lislique-Corinto-Sociedad.jpg"
    },
    {
        lugar: "San Francisco Gotera-Jocoro-Santa Rosa de Lima-Pasaquina-La Union Centro",
        fechas: "Viernes",
        horario: "Ver imagen",
        imagen: "Encomiendas/San Francisco Gotera-Jocoro-Santa Rosa de Lima-Pasaquina-La Union Centro.jpg"
    },
    {
        lugar: "San Isidro Cabañas",
        fechas: "Martes y Viernes",
        horario: "11:30 AM - 12:00 PM",
        imagen: "Encomiendas/San Isidro Cabañas.jpg"
    },
    {
        lugar: "San Miguel",
        fechas: "Lunes y Jueves",
        horario: "10:00 AM - 4:00 PM",
        imagen: "Encomiendas/San Miguel.jpg"
    },
    {
        lugar: "San Salvador",
        fechas: "Miércoles o Sábado",
        horario: "9:00 AM - 1:00 PM",
        imagen: "Encomiendas/San Salvador.jpg"
    },
    {
        lugar: "San Vicente Centro-Cojutepeque-Altavista-Unicentro Soyapango-Plaza Venecia-Cuidad Delgado",
        fechas: "Viernes",
        horario: "Ver imagen",
        imagen: "Encomiendas/San Vicente Centro-Cojutepeque-Altavista-Unicentro Soyapango-Plaza Venecia-Cuidad Delgado.jpg"
    },
    {
        lugar: "San Vicente Centro-Cojutepeque-Apastepeque-Santo Domingo-San Sebastian-San Rafael Cendros-Altavista",
        fechas: "Martes",
        horario: "Ver imagen",
        imagen: "Encomiendas/San Vicente Centro-Cojutepeque-Apastepeque-Santo Domingo-San Sebastian-San Rafael Cendros-Altavista.jpg"
    },
    {
        lugar: "San Vicente Centro-Cojutepeque-San Martin-Ilopando-Plaza Mundo Soyapango-Unicentro Soyapango",
        fechas: "Lunes y Jueves",
        horario: "Ver imagen",
        imagen: "Encomiendas/San Vicente Centro-Cojutepeque-San Martin-Ilopando-Plaza Mundo Soyapango-Unicentro Soyapango.jpg"
    },
    {
        lugar: "San Vicente",
        fechas: "De Lunes a Sábado",
        horario: "9:00 AM - 3:30 PM, y Sábados de 9:00 AM - 12:00 PM",
        imagen: "Encomiendas/San Vicente.jpg"
    },
    {
        lugar: "Santa Ana Centro",
        fechas: "De Lunes a Sábado",
        horario: "9:00 AM - 4:00 PM, y Sábados de 9:00 AM - 12:00 PM",
        imagen: "Encomiendas/Santa Ana Centro.jpg"
    },
    {
        lugar: "Santa Ana Plaza 33",
        fechas: "De Lunes a Sábado",
        horario: "10:00 AM - 4:00 PM",
        imagen: "Encomiendas/Santa Ana Plaza 33.jpg"
    },
    {
        lugar: "Santa Tecla",
        fechas: "Miércoles y Sábado",
        horario: "1:00 PM - 3:00 PM",
        imagen: "Encomiendas/Santa Tecla.jpg"
    },
    {
        lugar: "Santiago Nonualco-Zacatecoluca-Jiquilisco-Puerto el Triunfo-El Transito-Santa Elena Usulutan",
        fechas: "Lunes y Jueves",
        horario: "Ver imagen",
        imagen: "Encomiendas/Santiago Nonualco-Zacatecoluca-Jiquilisco-Puerto el Triunfo-El Transito-Santa Elena Usulutan.jpg"
    },
    {
        lugar: "Sensuntepeque",
        fechas: "Martes y Viernes",
        horario: "9:00 AM - 11:00 AM",
        imagen: "Encomiendas/Sensuntepeque.jpg"
    },
    {
        lugar: "Sesori-Jucuapa-Estanzuelas",
        fechas: "Viernes",
        horario: "Ver imagen",
        imagen: "Encomiendas/Sesori-Jucuapa-Estanzuelas.jpg"
    },
    {
        lugar: "Sonsonate 2",
        fechas: "Domingo",
        horario: "10:15 AM - 11:00 AM",
        imagen: "Encomiendas/Sonsonate 2.jpg"
    },
    {
        lugar: "Sonsonate",
        fechas: "Martes y Jueves",
        horario: "10:00 AM - 3:30 PM",
        imagen: "Encomiendas/Sonsonate.jpg"
    },
    {
        lugar: "Suchitoto-Aguilares-Guazapa-Tonacatepeque",
        fechas: "Martes y Viernes",
        horario: "Ver imagen",
        imagen: "Encomiendas/Suchitoto-Aguilares-Guazapa-Tonacatepeque.jpg"
    },
    {
        lugar: "Tacachico-Opico Centro-San Matias-Quezaltepeque-Desvio de Opico",
        fechas: "Lunes y Jueves",
        horario: "Ver imagen",
        imagen: "Encomiendas/Tacachico-Opico Centro-San Matias-Quezaltepeque-Desvio de Opico.jpg"
    },
    {
        lugar: "Tejutepeque Cabañas",
        fechas: "Martes y Viernes",
        horario: "1:00 PM - 1:30 PM",
        imagen: "Encomiendas/Tejutepeque Cabañas.jpg"
    },
    {
        lugar: "Texistepeque-Metapan",
        fechas: "Martes y Viernes",
        horario: "Ver imagen",
        imagen: "Encomiendas/Texistepeque-Metapan.jpg"
    },
    {
        lugar: "Usulutan",
        fechas: "Lunes y Jueves",
        horario: "9:00 AM - 4:00 PM",
        imagen: "Encomiendas/Usulutan.jpg"
    },
    {
        lugar: "Metrocentro Sonsonate",
        fechas: "Miércoles y Sábado",
        horario: "3:50 PM - 4:20 PM",
        imagen: "Encomiendas/Kourier- Metrocentro Sonsonate.jpg"
    },
    {
        lugar: "Acajutla",
        fechas: "Lunes y Jueves",
        horario: "Ver horarios",
        imagen: "Encomiendas/Kourier-Acajutla.jpg"
    },
    {
        lugar: "Ahuachapan",
        fechas: "Lunes y Jueves",
        horario: "3:00 PM - 4:00 PM",
        imagen: "Encomiendas/Kourier-Ahuachapan.jpg"
    },
    {
        lugar: "San Marcos",
        fechas: "Miércoles y Sábado",
        horario: "1:30 PM - 2:00 PM",
        imagen: "Encomiendas/Kourier-Alcaldia San Marcos.jpg"
    },
    {
        lugar: "Apopa",
        fechas: "Miércoles y Sábado",
        horario: "3:40 PM - 4:10 PM",
        imagen: "Encomiendas/Kourier-Apopa Plaza Mundo.jpg"
    },
    {
        lugar: "Arcos",
        fechas: "Lunes y Viernes",
        horario: "ver imagen",
        imagen: "Encomiendas/Kourier-Arcos.jpg"
    },
    {
        lugar: "Armenia",
        fechas: "Miércoles y Sábado",
        horario: "2:40 PM - 3:00 PM",
        imagen: "Encomiendas/Kourier-Armenia.jpg"
    },
    {
        lugar: "Caluco",
        fechas: "Lunes y Jueves",
        horario: "Ver horarios",
        imagen: "Encomiendas/Kourier-Caluco.jpg"
    },
    {
        lugar: "Chalchuapa",
        fechas: "Lunes y Jueves",
        horario: "9:45 AM - 10:30 AM",
        imagen: "Encomiendas/Kourier-Chalchuapa.jpg"
    }, 
    {
        lugar: "Ciudad Arce",
        fechas: "Jueves y Domingo",
        horario: "Ver horarios",
        imagen: "Encomiendas/Kourier-Ciudad Arce.jpg"
    }, 
    {
        lugar: "Ciudad Delgado",
        fechas: "Miércoles y Sábado",
        horario: "2:40 PM - 3:00 PM",
        imagen: "Encomiendas/Kourier-Ciudad Delgado.jpg"
    }, 
    {
        lugar: "Ciudad Marsella",
        fechas: "Martes y Jueves",
        horario: "3:30 PM - 4:00 PM",
        imagen: "Encomiendas/Kourier-Ciudad Marsella.jpg"
    }, 
    {
        lugar: "Ciudad Real",
        fechas: "Lunes y Jueves",
        horario: "9:00 AM - 9:30 AM",
        imagen: "Encomiendas/Kourier-Ciudad Real.jpg"
    }, 
    {
        lugar: "Cojutepeque",
        fechas: "Miécoles y Sábado",
        horario: "4:30 PM - 5:15 PM",
        imagen: "Encomiendas/Kourier-Cojutepeque.jpg"
    }, 
    {
        lugar: "Comalapa",
        fechas: "Miércoles y Sábado",
        horario: "4:25 PM - 4:50 PM",
        imagen: "Encomiendas/Kourier-Comalapa.jpg"
    }, 
    {
        lugar: "Costa del Sol",
        fechas: "Lunes y Viernes",
        horario: "2:00 PM - 2:20 PM",
        imagen: "Encomiendas/Kourier-Costa del Sol.jpg"
    }, 
    {
        lugar: "Desvio de Tapalhuaca",
        fechas: "Lunes y Jueves",
        horario: "Ver horarios",
        imagen: "Encomiendas/Kourier-Desvio de Tapalhuaca.jpg"
    }, 
    {
        lugar: "Desvio San Pedro Nonualco",
        fechas: "Martes y Jueves",
        horario: "Ver horarios",
        imagen: "Encomiendas/Kourier-Desvio San Pedro Nonualco.jpg"
    }, 
    {
        lugar: "Ilobasco",
        fechas: "Lunes y Jueves",
        horario: "2:20 PM - 2:50 PM",
        imagen: "Encomiendas/Kourier-Ilobasco.jpg"
    },
    {
        lugar: "Izalco",
        fechas: "Miércoles y Sábado",
        horario: "3:50 PM - 4:15 PM",
        imagen: "Encomiendas/Kourier-Izalco.jpg"
    }, 
    {
        lugar: "Jiquilisco",
        fechas: "Lunes y Viernes",
        horario: "4:20 PM - 4:40 PM",
        imagen: "Encomiendas/Kourier-Jiquilisco.jpg"
    }, 
    {
        lugar: "Juayua",
        fechas: "Domingo",
        horario: "8:30 AM - 9:00 AM",
        imagen: "Encomiendas/Kourier-Juayua.jpg"
    }, 
    {
        lugar: "Mejicanos",
        fechas: "Miércoles y Sábado",
        horario: "1:30 PM - 1:50 PM",
        imagen: "Encomiendas/Kourier-Mejicanos.jpg"
    }, 
    {
        lugar: "Metro Lourdes",
        fechas: "Miércoles y Sábado",
        horario: "2:00 PM - 2:50 PM",
        imagen: "Encomiendas/Kourier-Metro Lourdes.jpg"
    },
    {
        lugar: "Metrocentro Santa Ana",
        fechas: "Miércoles y Sábado",
        horario: "5:00 PM - 6:00 PM",
        imagen: "Encomiendas/Kourier-Metrocentro Santa Ana.jpg"
    },
    {
        lugar: "Olocuilta",
        fechas: "Miércoles y Sábado",
        horario: "2:15 PM - 2:40 PM",
        imagen: "Encomiendas/Kourier-Olocuilta.jpg"
    },
    {
        lugar: "Plaza Mundo Soyapango",
        fechas: "Miércoles y Sábado",
        horario: "1:30 PM - 2:00 PM",
        imagen: "Encomiendas/Kourier-Plaza mundo Soyapango.jpg"
    },
    {
        lugar: "Quezaltepeque",
        fechas: "Martes y Jueves",
        horario: "2:20 PM - 2:50 PM",
        imagen: "Encomiendas/Kourier-Quezaltepeque.jpg"
    },
    {
        lugar: "Rosario de la Paz",
        fechas: "Miércoles y Sábado",
        horario: "3:25 PM - 3:50 PM",
        imagen: "Encomiendas/Kourier-Rosario de la Paz.jpg"
    },
    {
        lugar: "Salcoatitan",
        fechas: "Domingo",
        horario: "9:30 AM - 9:50 AM",
        imagen: "Encomiendas/Kourier-Salcoatitan.jpg"
    },
    {
        lugar: "San Bartolo",
        fechas: "Miércoles y Sábado",
        horario: "4:20 PM - 4:40 PM",
        imagen: "Encomiendas/Kourier-San Bartolo.jpg"
    },
    {
        lugar: "San Isidro Cabañas",
        fechas: "Lunes y Jueves",
        horario: "12:20 MD - 12:45 MD",
        imagen: "Encomiendas/Kourier-San Isidro Cabañas.jpg"
    },
    {
        lugar: "San Juan Nonualco",
        fechas: "Martes y Jueves",
        horario: "3:30 PM - 3:45 PM",
        imagen: "Encomiendas/Kourier-San Juan Nonualco.jpg"
    },
    {
        lugar: "San Juan Talpa",
        fechas: "Lunes y Jueves",
        horario: "8:40 AM - 9:00 AM",
        imagen: "Encomiendas/Kourier-San Juan Talpa.jpg"
    },
    {
        lugar: "San Julian",
        fechas: "Lunes y Jueves",
        horario: "Ver horarios",
        imagen: "Encomiendas/Kourier-San Julian.jpg"
    },
    {
        lugar: "San Luis La Herradura",
        fechas: "Lunes y Viernes",
        horario: "3:15 PM - 3:40 PM",
        imagen: "Encomiendas/Kourier-San Luis la Herradura.jpg"
    },
    {
        lugar: "San Luis Talpa",
        fechas: "Miércoles y Sábado",
        horario: "2:15 PM - 3:00 PM",
        imagen: "Encomiendas/Kourier-San Luis Talpa.jpg"
    },
    {
        lugar: "San Martin",
        fechas: "Miércoles y Sábado",
        horario: "4:15 PM - 5:00 PM",
        imagen: "Encomiendas/Kourier-San Martin.jpg"
    },
    {
        lugar: "San Miguel",
        fechas: "Lunes y Viernes",
        horario: "8:30 AM - 9:00 AM",
        imagen: "Encomiendas/Kourier-San Miguel.jpg"
    },
    {
        lugar: "San Pedro Masahuat",
        fechas: "Lunes y Jueves",
        horario: "9:45 AM - 10:00 AM",
        imagen: "Encomiendas/Kourier-San Pedro Masahuat.jpg"
    },
    {
        lugar: "San Rafael Cedros",
        fechas: "Lunes y Jueves",
        horario: "10:30 AM - 11:00 AM",
        imagen: "Encomiendas/Kourier-San Rafael Cedros.jpg"
    },
    {
        lugar: "San Rafael Obrajuelo",
        fechas: "Martes y Jueves",
        horario: "3:00 PM - 3:15 PM",
        imagen: "Encomiendas/Kourier-San Rafael Obrajuelo.jpg"
    },
    {
        lugar: "Santiago Nonualco",
        fechas: "Martes y Jueves",
        horario: "2:15 PM - 2:45 PM",
        imagen: "Encomiendas/Kourier-Santiago Nonualco.jpg"
    },
    {
        lugar: "Santiago Texacuangos",
        fechas: "Miércoles y Sábado",
        horario: "4:30 PM - 5:00 PM",
        imagen: "Encomiendas/Kourier-Santiago Texacuangos.jpg"
    },
    {
        lugar: "Santo Tomás",
        fechas: "Miércoles y Sábado",
        horario: "3:00 PM - 4:00 PM",
        imagen: "Encomiendas/Kourier-Santo Tomas.jpg"
    },
    {
        lugar: "Sonsonate Centro",
        fechas: "Miércoles y Sábado",
        horario: "4:45 PM - 5:10 PM",
        imagen: "Encomiendas/Kourier-Sonsonate Centro.jpg"
    },
    {
        lugar: "Sonzacate",
        fechas: "Domingo",
        horario: "11:40 PM - 11:45 PM",
        imagen: "Encomiendas/Kourier-Sonzacate.jpg"
    },
    {
        lugar: "Unicentro Altavista",
        fechas: "Miércoles y Sábado",
        horario: "3:30 PM - 4:00 PM",
        imagen: "Encomiendas/Kourier-Unicentro Altavista.jpg"
    },
    {
        lugar: "Unicentro Soyapango",
        fechas: "Miércoles y Sábado",
        horario: "2:30 PM - 3:00 PM",
        imagen: "Encomiendas/Kourier-Unicentro Soyapango.jpg"
    },
    {
        lugar: "Usulutan",
        fechas: "Lunes y Viernes",
        horario: "2:50 PM - 3:20 PM",
        imagen: "Encomiendas/Kourier-Usulutan.jpg"
    },
    {
        lugar: "Villa Palestina",
        fechas: "Lunes y Jueves",
        horario: "8:00 AM - 8:15 AM",
        imagen: "Encomiendas/Kourier-Villa Palestina.jpg"
    },
    {
        lugar: "Zacatecoluca",
        fechas: "Miércoles y Sábado",
        horario: "4:00 PM - 4:45 PM",
        imagen: "Encomiendas/Kourier-Zacatecoluca1.jpg"
    },
    {
        lugar: "Zacatecoluca",
        fechas: "Miércoles y Sábado",
        horario: "5:00 PM - 5:15 PM",
        imagen: "Encomiendas/Kourier-Zacatecoluca2.jpg"
    },
];

let currentPage = 1;
const itemsPerPage = 8;
const searchBox = document.getElementById('searchBox');

function renderGallery() {
    const gallery = document.getElementById('deliveryPoints');
    gallery.innerHTML = '';

    const filteredPoints = deliveryPoints.filter(point =>
        point.lugar.toLowerCase().includes(searchBox.value.toLowerCase())
    );

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pointsToShow = filteredPoints.slice(startIndex, endIndex);

    pointsToShow.forEach(point => {
        gallery.innerHTML += `
        <div class="col-md-3 gallery-item">
            <div class="card">
                <img src="${point.imagen}" class="card-img-top" alt="${point.lugar}">
                <div class="card-body">
                    <h5 class="card-title">${point.lugar}</h5>
                    <p class="card-text">Fechas: ${point.fechas}<br>Horario: ${point.horario}</p>
                    <a href="${point.imagen}" download class="btn btn-primary">Descargar Imagen</a>
                </div>
            </div>
        </div>
        `;
    });

    renderPagination(filteredPoints.length);
}

function renderPagination(totalItems) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `
        <li class="page-item ${i === currentPage ? 'active' : ''}">
            <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
        </li>
        `;
    }
}

function changePage(page) {
    currentPage = page;
    renderGallery();
}

searchBox.addEventListener('input', () => {
    currentPage = 1; // Reinicia a la primera página al buscar
    renderGallery();
});

renderGallery(); // Inicializa la galería
