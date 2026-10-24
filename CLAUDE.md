# CLAUDE.md · Nuestro proyecto — prototipo del LAB (sesión 2)

## Proyecto
- Problema (POV): Estudiantes internacionales y jóvenes viajeros que llegan a una ciudad que no conocen, solos o en grupo, con presupuesto limitado y, a veces, con una dieta propia o de alguien del grupo (p. ej. vegana o vegetariana) necesitan confirmar, antes de desplazarse, que un local encaja con lo que les apetece, con lo que pueden pagar y con lo que pueden comer, porque su problema no es tanto la falta de opciones como la falta de confianza en la información disponible: lo que ven en mapas y redes no siempre coincide con lo que encuentran en el local (menús y precios desactualizados), y por eso acaban cruzando varias fuentes y verificando por su cuenta, y aun así a veces fallan.
- Concepto: FoodMatch — Come bien, ve a lo seguro — Enconta
- Equipo: Paula Carpio, Laura Gutiérrez, José Antonio Naula, David Tello, Bruno Pantoja, El Comedor
- Qué construimos: dos versiones: (1) la web, una landing en index.html en la raíz que presenta la app, con el CTA «Probar la app» que lleva a app/ y un bloque «Cómo instalarla en el móvil» (Android: Chrome → menú ⋮ → Instalar aplicación o Añadir a pantalla de inicio; iPhone: Safari → botón Compartir → Añadir a pantalla de inicio); y (2) la app instalable en app/: app/index.html con una sección por pantalla (solo una visible a la vez, navegación con botones, diseño de 375 px a pantalla completa, sin backend), app/manifest.webmanifest (name, short_name, start_url ./, display standalone, theme_color, background_color e iconos), iconos app/icon-192.png y app/icon-512.png (si no puedes generar PNG, usa app/icon.svg y avísanos), <link rel="manifest">, meta theme-color y apple-mobile-web-app-capable, y un service worker mínimo app/sw.js registrado desde app/index.html. El medidor del curso va en las dos versiones.

## Lo que ya sabemos (estaciones 0–7)
- Trabajo por hacer (JTBD): Cuando llego a una ciudad que no conozco, solo o con un grupo, y tengo que decidir dónde comer con un presupuesto limitado y, a veces, con una dieta o restricción propia o de alguien del grupo, quiero tener la certeza de que el sitio que elijo encaja con lo que me apetece, con lo que puedo pagar y con lo que puedo comer, sin tener que cruzar varias fuentes ni confiar en información que luego no coincide con la realidad, para decidir rápido y con confianza, evitar sitios que no me sirven, gastos o tiempo perdidos inesperados, y dedicar mi tiempo a disfrutar de la comida y de la compañía en lugar de a buscarla.
- Dolores del cliente ([E] = evidencia, [S] = suposición):
  - [E] Información dispersa en muchas fuentes y proceso largo (D01, D02, D03).
  - [E] Menús y precios desactualizados o distintos a la realidad (D03).
  - [E] Brecha entre lo que muestran redes y mapas y lo que se encuentra en el local (D01).
  - [E] Fallo en el pedido para una persona vegana: llegó algo con carne y tuvieron que irse (D01).
  - [E] Sobrecoste de unos 8-10 € y unos 20 minutos perdidos tras un mal acierto (D03).
- Ganancias que busca:
  - [E] Ahorro de tiempo en la decisión (D02, D03; D02 inducido por pregunta hipotética).
  - [E] Saber con antelación que hay opción dietética y que el precio encaja (D01, D03).
  - [E] Elegir sitios que no sean turísticos y se ajusten a lo que apetece ese día (D02, D03).
  - [S] Datos de menú y precios recientes y con fuente visible, para no depender de varias apps.
  - [S] Menos fricción para decidir en grupo.
- Qué ofrecemos (VPC):
  - Ofrecemos un buscador y comparador de restaurantes según las necesidades y preferencias de cada cliente
- Cómo aliviamos cada dolor (para los beneficios):
  - Incentivos a restaurantes con el posicionamiento SEO si se comprometen con mantenerse actualizados
- Cómo creamos ganancias:
  - Hacer el
- Propuesta única de valor: Come bien, ve a lo seguro Enconta
- Concepto de alto nivel: Un comparador de restaurantes verificado para estudiantes internacionales con presupuesto y dieta propios [S]
- Solución: Búsqueda que filtra a la vez por antojo, presupuesto y dieta, también la de cada persona del grupo [E] (D01, D02, D03) · Menú, precios y tipo de comida contrastados con varias fuentes, con fecha y fuente visibles [E] (D03) · Opción para mostrar solo sitios que no son turísticos [E] (D02, D03)
- Early adopters: Grupos con al menos una persona vegana o vegetariana que ya comparan varias fuentes antes de ir [E] (D01, D03) · Estudiantes y viajeros que ya han tenido un mal acierto, con sobrecoste o tiempo perdido [E] (D01, D03) · Estudiantes Erasmus en sus primeras semanas en la ciudad [S]
- Alternativas que usan hoy (competencia): Existen aplicaciones pero solo de pádel y tenis.
- Ingresos y precio: Gratis para el usuario (ya decidido) · Pago de los restaurantes por mejor posicionamiento si mantienen sus datos al día [S] · Promociones para estudiantes patrocinadas por los locales [S]
- Canales: Asociaciones Erasmus y oficinas internacionales de las universidades [S] · Grupos de WhatsApp y Telegram de estudiantes recién llegados [S] · Residencias de estudiantes y albergues [S]
- Insight del concepto: Su problema no es tanto la falta de opciones como la falta de confianza en la información disponible: lo que ven en mapas y redes no siempre coincide con lo que encuentran en el local (menús y precios desactualizados), y por eso acaban cruzando varias fuentes y verificando por su cuenta, y aun así a veces fallan.
- Razón para creer: Tenemos resultados confiables y contrastados
- Precio del concepto: Gratis
- Hipótesis que el prototipo tiene que permitir medir (test cards):
  - H1: Creemos que quien pide una recomendación verificada acaba yendo al local sin volver a comprobarlo · mediremos: Peticiones que acaban en una visita confirmada, · acertamos si: 1 de cada 3 peticiones termina en visita
  - H2: Creemos que podemos verificar menú, precio y opción dietética de un local en poco tiempo y mantenerlo al día cada 30 días · mediremos: Minutos por local y porcentaje de locales con datos distintos en los mapas · acertamos si: El tiempo total cabe en las horas semanales que el equipo puede dedicar para todo el barrio cada 30 días

## Brief
- Objetivo: Validar: Creemos que quien pide una recomendación verificada acaba yendo al local sin volver a comprobarlo (acertamos si 1 de cada 3 peticiones termina en visita)
- Público: Jóvenes y personas de mediana edad con perfiles que abarcan desde viajeros que acaban de llegar a un nuevo destino y necesitan recomendaciones basadas en sus gustos, presupuestos y necesidades alimenticias, como estudiantes de erasmus que quieren explorar distintos restaurantes en su ciudad de destino.
- Mensaje clave: Come bien, ve a lo seguro
- Tono: Informal pero con rigor
- Colores y estilo: Azul claro y blanco talco tirando a beige
- Llamada a la acción (CTA): Encuentra tu restaurante ideal
- Qué mediremos: Peticiones que acaban en una visita confirmada,

## Wireframe aprobado
Wireframe de baja fidelidad · app de 7 pantallas · formato móvil

Pantalla 1 — Inicio
1. Imagen: «logo»
2. Texto: «Come bien, ve a lo seguro»

Pantalla 2
1. Cabecera / menú: «FoodMatch»
2. Tarjetas / listado: «¿Qué te apetece hoy?»; «Restaurantes» / «Tipo de comida» / «Ubicación»

Pantalla 3
1. Cabecera / menú: «Restaurantes cerca de ti»
2. Imagen: «mapa»

Pantalla 4
1. Cabecera / menú: «Nombre del restaurante elegido»
2. Imagen: «restaurante»
3. Botón «Enlaces a redes sociales y web»
4. Imagen: «menú»
5. Botón «Reseñas»

Pantalla 5
1. Cabecera / menú: «Formulario de gustos y alergias»
2. Formulario: «Cuéntanos tus gustos y necesidades»

Pantalla 6
1. Cabecera / menú: «Cuéntanos tu opinión»
2. Texto: «Reseñas»; «Me ha encantado!! Volvería sin duda»

Pantalla 7
1. Cabecera / menú: «About us»
2. Tarjetas / listado: «Quienes somos» / «Por qué nosotros» / «Datos y privacidad» / «Preguntas frecuentes»

## Reglas de trabajo
- Todo en castellano de España: los textos de la página y tus explicaciones.
- Un único archivo HTML autocontenido: HTML, CSS y JavaScript en el mismo archivo, sin frameworks ni servicios externos (sin Google Analytics, Tally, Clarity, cookies ni fuentes de terceros). Para medir usamos solo el medidor del curso que te daremos.
- Responsive y mobile-first: tiene que verse bien a 375 px de ancho sin scroll horizontal.
- Accesible: HTML semántico, contraste suficiente, texto alternativo en imágenes, labels en los formularios y navegable con teclado.
- Sin datos personales reales: nombres y fotos ficticios o marcadores. En formularios, pide solo los datos imprescindibles.
- No inventes cifras, testimonios, logos ni premios. Si hace falta un dato, deja [DATO PENDIENTE] y avísanos.
- Respeta el orden de bloques y los textos del wireframe; si propones cambios, explícalos antes de aplicarlos.
- Pide confirmación antes de borrar o sobrescribir cualquier archivo.
- Publicas tú en GitHub Pages cada vez que terminamos un paso (bloque PUBLICAR): repositorio público ed-equipo-2 en nuestra cuenta de GitHub (la enlazada con gh), URL https://david-tell0/equipo-2.github.io/ed-equipo-2/. Sube los cambios (commit y push) sin pedirnos confirmación; solo avísanos si algo falla. No subas datos/, CSV de encuestas, transcripciones, .env, contraseñas ni claves, y nunca uses --force ni borres repositorios.
- Trabaja por pasos (plan → construir → revisar) y, tras cada paso, resume en 3 líneas qué has hecho y qué falta.
- La pantalla 5 debe estar después de la pantalla 1
