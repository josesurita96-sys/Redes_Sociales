function abrirMenu() {

    const menu =
        document.getElementById("menu");


    if (menu) {

        menu.classList.toggle("activo");

    }

}



const redesSociales = {


    facebook: {

        nombre:
            "Facebook",

        categoria:
            "RED SOCIAL Y COMUNIDADES",

        color:
            "#1877F2",

        imagen:
            "imagenes/facebook.png",

        portada:
            "imagenes/facebook-portada.png",

        descripcion:
            "Facebook es una plataforma social que permite conectar personas, comunidades, creadores y negocios mediante publicaciones, fotografías, videos, grupos, eventos y diferentes herramientas digitales.",

        etiquetas: [
            "Publicaciones",
            "Reels",
            "Grupos",
            "Marketplace",
            "Eventos"
        ],

        queEs: [

            "Facebook es una red social creada para conectar personas y permitir la comunicación y el intercambio de contenido mediante internet.",

            "Los usuarios pueden crear perfiles, compartir publicaciones, fotografías y videos, seguir páginas, participar en grupos y comunicarse con otras personas.",

            "También incluye herramientas para empresas, creadores de contenido y comunidades."

        ],

        usos: [

            {
                icono: "01",
                titulo: "Comunicación",
                texto: "Permite mantener contacto con amigos, familiares y otras personas."
            },

            {
                icono: "02",
                titulo: "Comunidades",
                texto: "Los grupos permiten encontrar personas con intereses similares."
            },

            {
                icono: "03",
                titulo: "Negocios",
                texto: "Empresas pueden mostrar productos, servicios y comunicarse con clientes."
            },

            {
                icono: "04",
                titulo: "Marketplace",
                texto: "Permite descubrir productos publicados por vendedores y otras personas."
            }

        ],

        funciones: [

            {
                titulo: "Feed",
                texto: "Espacio donde aparecen publicaciones, videos y contenido recomendado."
            },

            {
                titulo: "Reels",
                texto: "Formato de videos cortos para descubrir contenido."
            },

            {
                titulo: "Grupos",
                texto: "Comunidades relacionadas con diferentes intereses."
            },

            {
                titulo: "Marketplace",
                texto: "Espacio para descubrir productos publicados por usuarios y negocios."
            },

            {
                titulo: "Eventos",
                texto: "Permite organizar y descubrir actividades."
            },

            {
                titulo: "Páginas",
                texto: "Utilizadas por empresas, organizaciones, figuras públicas y creadores."
            }

        ],

        ventajas: [

            "Permite mantener comunicación con otras personas.",

            "Ayuda a encontrar grupos y comunidades.",

            "Puede utilizarse para promocionar negocios.",

            "Permite compartir diferentes tipos de contenido.",

            "Incluye herramientas para empresas y creadores."

        ],

        cuidados: [

            "Evita publicar información privada.",

            "No aceptes solicitudes de personas desconocidas sin verificar.",

            "Ten cuidado con enlaces sospechosos.",

            "Comprueba la información antes de compartirla.",

            "Utiliza las opciones de privacidad de la plataforma."

        ],

        seguridad: [

            {
                numero: "01",
                titulo: "Protege tu cuenta",
                texto: "Utiliza una contraseña segura y activa medidas adicionales de seguridad."
            },

            {
                numero: "02",
                titulo: "Configura tu privacidad",
                texto: "Decide quién puede ver tus publicaciones y tu información personal."
            },

            {
                numero: "03",
                titulo: "Verifica información",
                texto: "Comprueba la fuente antes de compartir noticias o publicaciones."
            }

        ],

        resumen:
            "Facebook permite conectar personas, participar en comunidades, compartir contenido y utilizar herramientas para creadores y negocios.",

        oficial:
            "https://www.facebook.com/"

    },



    instagram: {

        nombre:
            "Instagram",

        categoria:
            "CONTENIDO VISUAL Y CREATIVIDAD",

        color:
            "#D62976",

        imagen:
            "imagenes/instagram.png",

        portada:
            "imagenes/instagram.portada.png",

        descripcion:
            "Instagram es una plataforma social enfocada principalmente en fotografías, videos, historias y reels, utilizada por personas, creadores y negocios.",

        etiquetas: [
            "Reels",
            "Historias",
            "Fotografías",
            "Mensajes",
            "Creadores"
        ],

        queEs: [

            "Instagram es una red social enfocada principalmente en contenido visual.",

            "Permite publicar fotografías, videos, historias, reels y comunicarse mediante mensajes privados.",

            "También es utilizada por creadores y negocios para mostrar proyectos, productos y contenido."

        ],

        usos: [

            {
                icono: "01",
                titulo: "Fotografías",
                texto: "Permite compartir fotografías y publicaciones visuales."
            },

            {
                icono: "02",
                titulo: "Videos",
                texto: "Los Reels permiten crear y descubrir videos cortos."
            },

            {
                icono: "03",
                titulo: "Marca personal",
                texto: "Los usuarios pueden mostrar sus proyectos, trabajos y habilidades."
            },

            {
                icono: "04",
                titulo: "Negocios",
                texto: "Las empresas pueden mostrar productos y comunicarse con clientes."
            }

        ],

        funciones: [

            {
                titulo: "Publicaciones",
                texto: "Fotografías, carruseles y videos publicados dentro del perfil."
            },

            {
                titulo: "Historias",
                texto: "Contenido temporal utilizado para compartir momentos y novedades."
            },

            {
                titulo: "Reels",
                texto: "Videos cortos orientados al entretenimiento y descubrimiento."
            },

            {
                titulo: "Mensajes",
                texto: "Permiten conversaciones privadas entre usuarios."
            },

            {
                titulo: "Explorar",
                texto: "Permite descubrir nuevas cuentas y contenido."
            },

            {
                titulo: "Perfil",
                texto: "Espacio donde se organiza todo el contenido publicado."
            }

        ],

        ventajas: [

            "Excelente plataforma para contenido visual.",

            "Permite mostrar trabajos y proyectos.",

            "Facilita descubrir creadores.",

            "Puede ayudar a promocionar una marca.",

            "Ofrece diferentes formatos de contenido."

        ],

        cuidados: [

            "No publiques ubicación innecesariamente.",

            "Ten cuidado con cuentas falsas.",

            "Configura correctamente tu privacidad.",

            "Evita compartir información personal.",

            "Controla el tiempo de uso."

        ],

        seguridad: [

            {
                numero: "01",
                titulo: "Privacidad",
                texto: "Puedes configurar tu cuenta como privada."
            },

            {
                numero: "02",
                titulo: "Protección",
                texto: "Utiliza una contraseña segura y verificación adicional."
            },

            {
                numero: "03",
                titulo: "Control",
                texto: "Puedes bloquear, restringir y reportar cuentas."
            }

        ],

        resumen:
            "Instagram destaca por su contenido visual y herramientas como fotografías, historias y reels.",

        oficial:
            "https://www.instagram.com/"

    },



    tiktok: {

        nombre:
            "TikTok",

        categoria:
            "VIDEO Y ENTRETENIMIENTO",

        color:
            "#20C5C9",

        imagen:
            "imagenes/tiktok.png",

        portada:
            "imagenes/tiktok-portada.png",

        descripcion:
            "TikTok es una plataforma de videos cortos utilizada para entretenimiento, creatividad, tendencias, aprendizaje y descubrimiento de contenido.",

        etiquetas: [
            "Videos",
            "LIVE",
            "Tendencias",
            "Creadores",
            "Efectos"
        ],

        queEs: [

            "TikTok es una plataforma centrada principalmente en videos.",

            "Los usuarios pueden crear, editar, publicar y descubrir videos de diferentes temáticas.",

            "Su sistema de recomendaciones permite encontrar contenido basado en intereses e interacciones."

        ],

        usos: [

            {
                icono: "01",
                titulo: "Entretenimiento",
                texto: "Permite descubrir videos de música, humor, deportes y videojuegos."
            },

            {
                icono: "02",
                titulo: "Aprendizaje",
                texto: "También contiene tutoriales y videos educativos."
            },

            {
                icono: "03",
                titulo: "Creación",
                texto: "Los usuarios pueden crear videos usando efectos y música."
            },

            {
                icono: "04",
                titulo: "Comunidades",
                texto: "Permite descubrir creadores relacionados con distintos intereses."
            }

        ],

        funciones: [

            {
                titulo: "Para ti",
                texto: "Feed donde aparecen videos recomendados."
            },

            {
                titulo: "Videos",
                texto: "Formato principal de contenido."
            },

            {
                titulo: "LIVE",
                texto: "Permite realizar transmisiones en directo."
            },

            {
                titulo: "Efectos",
                texto: "Herramientas para crear videos más creativos."
            },

            {
                titulo: "Búsqueda",
                texto: "Permite encontrar temas, creadores y tendencias."
            },

            {
                titulo: "Interacción",
                texto: "Los usuarios pueden comentar, compartir y reaccionar."
            }

        ],

        ventajas: [

            "Gran variedad de contenido.",

            "Herramientas sencillas para crear videos.",

            "Contenido educativo disponible.",

            "Permite descubrir nuevos creadores.",

            "Facilita seguir tendencias."

        ],

        cuidados: [

            "No toda la información publicada es verdadera.",

            "Evita retos peligrosos.",

            "No compartas información privada.",

            "Controla el tiempo que pasas usando la aplicación.",

            "Comprueba información importante en otras fuentes."

        ],

        seguridad: [

            {
                numero: "01",
                titulo: "Privacidad",
                texto: "Configura quién puede ver e interactuar con tu contenido."
            },

            {
                numero: "02",
                titulo: "Tendencias",
                texto: "No participes en retos que puedan ser peligrosos."
            },

            {
                numero: "03",
                titulo: "Información",
                texto: "Comprueba noticias y consejos importantes."
            }

        ],

        resumen:
            "TikTok combina videos, creatividad, entretenimiento y descubrimiento de contenido.",

        oficial:
            "https://www.tiktok.com/"

    },



    youtube: {

        nombre:
            "YouTube",

        categoria:
            "VIDEO, EDUCACIÓN Y CREADORES",

        color:
            "#FF0000",

        imagen:
            "imagenes/youtube.png",

        portada:
            "imagenes/youtube-portada.png",

        descripcion:
            "YouTube es una plataforma audiovisual que permite ver, publicar y descubrir videos, transmisiones, Shorts, tutoriales, música y contenido educativo.",

        etiquetas: [
            "Videos",
            "Shorts",
            "Directos",
            "Tutoriales",
            "Creadores"
        ],

        queEs: [

            "YouTube es una plataforma de video propiedad de Google.",

            "Permite a personas y organizaciones publicar y visualizar contenido audiovisual.",

            "Existe contenido sobre educación, música, videojuegos, tecnología, entretenimiento y prácticamente cualquier tema."

        ],

        usos: [

            {
                icono: "01",
                titulo: "Aprender",
                texto: "Permite encontrar tutoriales, clases y explicaciones."
            },

            {
                icono: "02",
                titulo: "Entretenimiento",
                texto: "Ofrece música, videojuegos, podcasts y entretenimiento."
            },

            {
                icono: "03",
                titulo: "Canales",
                texto: "Los creadores pueden publicar contenido regularmente."
            },

            {
                icono: "04",
                titulo: "Transmisiones",
                texto: "Permite ver contenido en directo."
            }

        ],

        funciones: [

            {
                titulo: "Videos",
                texto: "Formato principal de YouTube."
            },

            {
                titulo: "Shorts",
                texto: "Videos verticales de corta duración."
            },

            {
                titulo: "Canales",
                texto: "Espacios donde los creadores organizan su contenido."
            },

            {
                titulo: "Suscripciones",
                texto: "Permiten seguir canales."
            },

            {
                titulo: "Directos",
                texto: "Contenido transmitido en tiempo real."
            },

            {
                titulo: "Listas",
                texto: "Permiten organizar videos en colecciones."
            }

        ],

        ventajas: [

            "Gran cantidad de contenido educativo.",

            "Permite aprender nuevas habilidades.",

            "Los creadores pueden construir una audiencia.",

            "Incluye videos largos y cortos.",

            "Permite buscar temas muy específicos."

        ],

        cuidados: [

            "No toda la información es confiable.",

            "Evita enlaces sospechosos.",

            "Comprueba fuentes importantes.",

            "No descargues archivos desconocidos.",

            "Administra el tiempo de uso."

        ],

        seguridad: [

            {
                numero: "01",
                titulo: "Revisa la fuente",
                texto: "Comprueba quién publicó el video."
            },

            {
                numero: "02",
                titulo: "Evita enlaces",
                texto: "No abras enlaces sospechosos de comentarios o descripciones."
            },

            {
                numero: "03",
                titulo: "Cuenta segura",
                texto: "Protege correctamente tu cuenta de Google."
            }

        ],

        resumen:
            "YouTube es una plataforma muy completa para aprender, entretenerse y consumir contenido audiovisual.",

        oficial:
            "https://www.youtube.com/"

    },



    whatsapp: {

        nombre:
            "WhatsApp",

        categoria:
            "MENSAJERÍA Y COMUNICACIÓN",

        color:
            "#25D366",

        imagen:
            "imagenes/whatsapp.png",

        portada:
            "imagenes/whatsapp-portada.png",

        descripcion:
            "WhatsApp es una aplicación de comunicación que permite enviar mensajes, realizar llamadas, videollamadas, compartir archivos y organizar conversaciones.",

        etiquetas: [
            "Mensajes",
            "Llamadas",
            "Videollamadas",
            "Comunidades",
            "Canales"
        ],

        queEs: [

            "WhatsApp es una aplicación de mensajería propiedad de Meta.",

            "Permite enviar mensajes de texto, fotografías, videos, documentos y audios.",

            "También permite realizar llamadas, videollamadas y crear grupos y comunidades."

        ],

        usos: [

            {
                icono: "01",
                titulo: "Mensajes",
                texto: "Permite mantener conversaciones individuales y grupales."
            },

            {
                icono: "02",
                titulo: "Llamadas",
                texto: "Permite llamadas mediante internet."
            },

            {
                icono: "03",
                titulo: "Grupos",
                texto: "Facilita organizar conversaciones entre varias personas."
            },

            {
                icono: "04",
                titulo: "Comunidades",
                texto: "Permiten organizar diferentes grupos."
            }

        ],

        funciones: [

            {
                titulo: "Chats",
                texto: "Conversaciones mediante texto y contenido multimedia."
            },

            {
                titulo: "Llamadas",
                texto: "Comunicación mediante voz."
            },

            {
                titulo: "Videollamadas",
                texto: "Comunicación mediante audio y video."
            },

            {
                titulo: "Estados",
                texto: "Publicaciones temporales."
            },

            {
                titulo: "Comunidades",
                texto: "Agrupan diferentes grupos."
            },

            {
                titulo: "Canales",
                texto: "Permiten recibir actualizaciones de organizaciones y creadores."
            }

        ],

        ventajas: [

            "Comunicación rápida.",

            "Permite enviar archivos.",

            "Incluye llamadas y videollamadas.",

            "Los grupos permiten organizar equipos.",

            "Puede utilizarse para comunicación personal y profesional."

        ],

        cuidados: [

            "Nunca compartas códigos de verificación.",

            "Desconfía de mensajes que pidan dinero.",

            "No abras enlaces sospechosos.",

            "Comprueba la identidad de contactos desconocidos.",

            "Configura correctamente tu privacidad."

        ],

        seguridad: [

            {
                numero: "01",
                titulo: "Código de verificación",
                texto: "Nunca entregues tu código a otra persona."
            },

            {
                numero: "02",
                titulo: "Privacidad",
                texto: "Configura quién puede ver tu información."
            },

            {
                numero: "03",
                titulo: "Protección",
                texto: "Bloquea y reporta cuentas sospechosas."
            }

        ],

        resumen:
            "WhatsApp está orientado principalmente a la comunicación mediante mensajes, llamadas y videollamadas.",

        oficial:
            "https://www.whatsapp.com/"

    },



    x: {

        nombre:
            "X",

        categoria:
            "CONVERSACIÓN Y ACTUALIDAD",

        color:
            "#E5E7EB",

        imagen:
            "imagenes/x.png",

        portada:
            "imagenes/x-portada.png",

        descripcion:
            "X es una plataforma social utilizada para publicar contenido, seguir conversaciones, compartir opiniones y conocer acontecimientos de actualidad.",

        etiquetas: [
            "Posts",
            "Actualidad",
            "Spaces",
            "Comunidades",
            "Mensajes"
        ],

        queEs: [

            "X es una plataforma social enfocada en publicaciones y conversaciones públicas.",

            "Permite compartir texto, fotografías, videos y participar en conversaciones.",

            "También incluye herramientas como Spaces, comunidades y mensajes."
        ],

        usos: [

            {
                icono: "01",
                titulo: "Actualidad",
                texto: "Permite seguir acontecimientos y noticias."
            },

            {
                icono: "02",
                titulo: "Opinión",
                texto: "Los usuarios pueden compartir ideas y comentarios."
            },

            {
                icono: "03",
                titulo: "Comunidades",
                texto: "Permite participar en espacios relacionados con intereses."
            },

            {
                icono: "04",
                titulo: "Creadores",
                texto: "Permite seguir periodistas, expertos y creadores."
            }

        ],

        funciones: [

            {
                titulo: "Posts",
                texto: "Publicaciones de texto, fotografías y videos."
            },

            {
                titulo: "Respuestas",
                texto: "Permiten participar en conversaciones."
            },

            {
                titulo: "Reposts",
                texto: "Permiten volver a compartir publicaciones."
            },

            {
                titulo: "Spaces",
                texto: "Conversaciones de audio en directo."
            },

            {
                titulo: "Comunidades",
                texto: "Espacios de conversación sobre intereses."
            },

            {
                titulo: "Mensajes",
                texto: "Conversaciones privadas entre cuentas."
            }

        ],

        ventajas: [

            "Permite seguir acontecimientos actuales.",

            "Facilita encontrar expertos y periodistas.",

            "Permite interacción rápida.",

            "Sirve para compartir ideas.",

            "Incluye espacios de audio."

        ],

        cuidados: [

            "Puede circular información falsa.",

            "Verifica noticias antes de compartirlas.",

            "Evita publicar información privada.",

            "Ten cuidado con perfiles falsos.",

            "No abras enlaces sospechosos."

        ],

        seguridad: [

            {
                numero: "01",
                titulo: "Verifica fuentes",
                texto: "Contrasta noticias con fuentes confiables."
            },

            {
                numero: "02",
                titulo: "Protege tus datos",
                texto: "Evita publicar información personal."
            },

            {
                numero: "03",
                titulo: "Controla interacciones",
                texto: "Utiliza bloqueo y reporte cuando sea necesario."
            }

        ],

        resumen:
            "X permite participar en conversaciones públicas, seguir acontecimientos y descubrir información.",

        oficial:
            "https://x.com/"

    }

};



function cargarDetalle() {


    const titulo =
        document.getElementById(
            "tituloDetalle"
        );


    if (!titulo) {

        return;

    }


    const parametros =
        new URLSearchParams(
            window.location.search
        );


    const nombreRed =
        parametros.get("red") ||
        "facebook";


    const red =
        redesSociales[nombreRed];


    if (!red) {

        window.location.href =
            "index.html";

        return;

    }


    document.title =
        red.nombre +
        " | SocialWeb";


    const portada =
        document.getElementById(
            "detallePortada"
        );


    portada.style.setProperty(
        "--detalle-color",
        red.color
    );


    document.getElementById(
        "imagenDetalle"
    ).src =
        red.imagen;


    document.getElementById(
        "imagenDetalle"
    ).alt =
        red.nombre;


    document.getElementById(
        "portadaDetalle"
    ).src =
        red.portada;


    document.getElementById(
        "portadaDetalle"
    ).alt =
        "Imagen de " +
        red.nombre;


    document.getElementById(
        "categoriaDetalle"
    ).textContent =
        red.categoria;


    document.getElementById(
        "tituloDetalle"
    ).textContent =
        red.nombre;


    document.getElementById(
        "descripcionDetalle"
    ).textContent =
        red.descripcion;


    document.getElementById(
        "nombreQueEs"
    ).textContent =
        red.nombre;



    const etiquetas =
        document.getElementById(
            "etiquetasDetalle"
        );


    red.etiquetas.forEach(
        function(etiqueta) {


            const elemento =
                document.createElement(
                    "span"
                );


            elemento.textContent =
                etiqueta;


            etiquetas.appendChild(
                elemento
            );

        }
    );



    const textoQueEs =
        document.getElementById(
            "textoQueEs"
        );


    red.queEs.forEach(
        function(parrafo) {


            const elemento =
                document.createElement(
                    "p"
                );


            elemento.textContent =
                parrafo;


            textoQueEs.appendChild(
                elemento
            );

        }
    );



    const usos =
        document.getElementById(
            "usosDetalle"
        );


    red.usos.forEach(
        function(uso) {


            const elemento =
                document.createElement(
                    "div"
                );


            elemento.className =
                "uso-item";


            elemento.innerHTML = `

                <div class="uso-icono">

                    ${uso.icono}

                </div>

                <div>

                    <h3>

                        ${uso.titulo}

                    </h3>

                    <p>

                        ${uso.texto}

                    </p>

                </div>

            `;


            usos.appendChild(
                elemento
            );

        }
    );



    const funciones =
        document.getElementById(
            "funcionesDetalle"
        );


    red.funciones.forEach(
        function(funcion) {


            const elemento =
                document.createElement(
                    "div"
                );


            elemento.className =
                "funcion-item";


            elemento.innerHTML = `

                <h3>

                    ${funcion.titulo}

                </h3>

                <p>

                    ${funcion.texto}

                </p>

            `;


            funciones.appendChild(
                elemento
            );

        }
    );



    const ventajas =
        document.getElementById(
            "ventajasDetalle"
        );


    red.ventajas.forEach(
        function(ventaja) {


            const elemento =
                document.createElement(
                    "div"
                );


            elemento.className =
                "lista-punto";


            elemento.innerHTML = `

                <span>
                    ✓
                </span>

                <p>

                    ${ventaja}

                </p>

            `;


            ventajas.appendChild(
                elemento
            );

        }
    );



    const cuidados =
        document.getElementById(
            "cuidadosDetalle"
        );


    red.cuidados.forEach(
        function(cuidado) {


            const elemento =
                document.createElement(
                    "div"
                );


            elemento.className =
                "lista-punto";


            elemento.innerHTML = `

                <span>
                    •
                </span>

                <p>

                    ${cuidado}

                </p>

            `;


            cuidados.appendChild(
                elemento
            );

        }
    );



    const seguridad =
        document.getElementById(
            "seguridadDetalle"
        );


    red.seguridad.forEach(
        function(consejo) {


            const elemento =
                document.createElement(
                    "div"
                );


            elemento.className =
                "recomendacion";


            elemento.innerHTML = `

                <span>

                    ${consejo.numero}

                </span>

                <h3>

                    ${consejo.titulo}

                </h3>

                <p>

                    ${consejo.texto}

                </p>

            `;


            seguridad.appendChild(
                elemento
            );

        }
    );



    document.getElementById(
        "tituloResumen"
    ).textContent =
        red.nombre +
        " en pocas palabras";


    document.getElementById(
        "resumenDetalle"
    ).textContent =
        red.resumen;


    document.getElementById(
        "enlaceOficial"
    ).href =
        red.oficial;

}



document.addEventListener(
    "DOMContentLoaded",
    cargarDetalle
);
