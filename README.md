# Proyecto "React Meetup"

## Descripción
Este proyecto es un sitio web para "Meetups" y su administración, permite visualizar los existentes, crear nuevos y agregarlos o quitarlos de favoritos.

## Ejecución:
`yarn dev`

## Funcionamiento:
El proyecto corre con Next.js, por lo que la estructura cambió completamente a como estaba originalmente, ahora se cuentan con las ventajas de JavaScript Universal (Isomporphic) como la optimización del tiempo de renderizado, navegación por URL y la optimización para buscadores (SEO). También se cambió la estrategia de carga de estilos. Ahora funciona con styled-components.

El estado de la aplicación en React se implementó con Redux y el manejo asíncrono con Redux-Saga.

## Notas:
Se implementó una Arquitectura Hexagonal con Domain Driven Design (DDD) respetando principios SOLID y de Clean Code.

Para este proyecto que es muy pequeño podría considerarse "excesivo" sobretodo por el tiempo invertido en el desarrollo. Sin embargo se tomó a consideración como si este proyecto ficticio fuera a crecer mucho y a involucrar a muchos desarrolladores nuevos, con lo cual gracias a la implementación de esta arquitectura y a las buenas prácticas de desarrollo, el mantenimiento y escalabilidad resultaría muy adecuado y mucho más sencillo que si no se hubiera implementado la arquitectura propuesta.

## Pendientes:
Debido al poco tiempo disponible para trabajar en este proyecto, se priorizó cumplir con las características solicitadas y su buen funcionamiento además de re-estructurar su arquitectura para cumplir con buenas prácticas pensando en el mantenimiento y escalabilidad a futuro.

**Se proponen los siguientes puntos para mejorar el sistema:**
- Falta crear menu de hamburguesa para navegar en dispositivos móviles
- Falta manejo de errores
- Faltan tests
- Falta coverage
- Falta terminar de convertir todos archivos a Typescript
- Falta implementar PropTypes en los componentes de react
- Falta implementar un repositorio de base de datos en vez de almacenamiento en archivos
- Manejo de errores
- i18n para no hardcodear textos y/o permitir nuevos idiomas
- La configuración de yarn lint no es muy estricta y hay errores o archivos que no detecta
- Corregir Types de los Generators de las Sagas
- Se está haciendo doble llamada al API para obtener todos los meetups al cargar la página. Hay que corregir para que sólo sea una vez
- Mostrar un loader cada vez que se ejecuta un action que invoque a una Saga (comportamientos asíncronos)

Desarrollado con ❤️ por Sergio Enrique Vargas🦊 para Stradivarius