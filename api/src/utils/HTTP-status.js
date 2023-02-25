const HTTP_STATUS = {
    CONTINUE: 100,
    SWITCHING_PROTOCOL: 101, 
    PROCESSING: 102, 
    EARLY_HINTS: 103, 
    
    OK: 200, 
    CREATED: 201, 
    ACEPTED: 202, 
    sNO_CONTENT: 204, 
    RESET_CONTENT:205, 
    PARTIAL_CONTENT: 206,
    
    MULTIPLE_CHOISE: 300,
    MOVED_PERMANENTLY: 301, 
    FOUND: 302, 
    SEE_OTHER: 303, 
    NOT_MODIFIED: 304, 
    TEMP_REDIRECT: 307,   
    PERM_REDIRECT: 308,
 
    BAD_REQUEST: 400, 
    UNAUTHORIZED: 401, 
    FORBIDDEN: 403, 
    NOT_FOUND: 404, 
    METH_NOT_ALLOWED: 405, 
    NOT_ACCETABLE: 406, 
    PROXY_AUTH_REQUIRED: 407, 
    REQUEST_TIMEOUT: 408, 
    CONFLICT: 409, 
    GONE: 410, 
    LENGTH_REQUIRED: 411, 
    PRECOND_FAILED: 412, 
    PAYLOAD_TOO_LARGE: 413, 
    URI_TOO_LONG: 414, 
    UNSUP_MEDIA_TYPE: 415, 
    REQ_RANGE_NOT_SATISFABLE: 416, 
    EXPECTATION_FILED: 417, 
    IM_A_TEAPOT: 418, 
    UNPROC_ENTITY: 422, 
    LOCKED: 423, 
    FAILED_DEPENDENCY: 424, 
    UPGRADE_REQUIRED: 426, 
    PRECONDITION_REQUIRED: 428, 
    TOO_MANY_REQUESTS: 429, 
    REQ_HEADER_LARGE: 431, 
    LEGAL: 451,
     
    INT_SERVER_ERR: 500, 
    NOT_IMPLEMENTED: 501, 
    BAD_GATEAWAY: 502, 
    SERVICE_UNAVAILABLE: 503, 
    GATEAWAY_TIMEOUT: 504, 
    HTTP_VER_UNSUPORTED: 505, 
    VARIANT_ALSO_NEGOTIATES: 506, 
    INSUFFICIENT_STORAGE: 507, 
    LOOP_DETECTED: 508, 
    NOT_EXTENDED: 510, 
    NETW_AUTH_REQUIRED: 511, 
 }
 
 
 
 //! RESPUESTAS INFORMATIVAS
 
 
 //? CONTINUE = 100; 
 //* provisional indica que todo está bien y que el cliente debe continuar con la solicitud o ignorarla si ya está terminada.
 //? SWITCHING_PROTOCOL = 101 
 //*  en respuesta a un encabezado de solicitud Upgrade (en-US) por el cliente, indica que el servidor acepta el cambio de protocolo propuesto por el agente de usuario.
 //? PROCESSING = 102 
 //* indica que el servidor ha recibido la solicitud y aún se encuentra procesandola, por lo que no hay respuesta disponible.
 //? EARLY_HINTS = 103 
 //* pensado para ser usado con el encabezado Link, permitiendo que el agente de usuario empiece a pre-cargar recursos mientras el servidor prepara una respuesta.
 
 
 
 //! RESPUESTAS SATISTACTORIAS
 
 
 //? OK = 200; 
 //* La solicitud tuvo exito
 //? CREATED = 201; 
 //* La solicitud tuvo exito y se creo un nuevo recurso como resultado.
 //? ACEPTED = 202; 
 //* Se recibio la solicitud pero todavia no se ha actuado. Pensado para casos en que otro proceso o servidor maneja la solicitud, o para el procesamiento por lotes.
 //? NO_CONTENT = 204; 
 //* Peticion completada con exito pero la respuesta no tiene contenido.
 //? RESET_CONTENT =205; 
 //* Peticion completada con éxito, pero su respuesta no tiene contenidos y además, el agente de usuario tiene que inicializar la página desde la que se realizó la petición.
 //? PARTIAL_CONTENT = 206 
 //* La petición servirá parcialmente el contenido solicitado. 
 
 
 
 //! REDIRECCIONES
 
 
 //? MULTIPLE_CHOISE = 300 
 //* Esta solicitud tiene más de una posible respuesta. User-Agent o el usuario debe escoger uno de ellos. No hay forma estandarizada de seleccionar una de las respuestas.
 //? MOVED_PERMANENTLY = 301; 
 //* Este código de respuesta significa que la URI del recurso solicitado ha sido cambiado. Probablemente una nueva URI sea devuelta en la respuesta.
 //? FOUND = 302; 
 //* Este código de respuesta significa que el recurso de la URI solicitada ha sido cambiado temporalmente. Nuevos cambios en la URI serán agregados en el futuro. Por lo tanto, la misma URI debe ser usada por el cliente en futuras solicitudes.
 //? SEE_OTHER = 303; 
 //* El servidor envía esta respuesta para dirigir al cliente a un nuevo recurso solicitado a otra dirección usando una petición GET.
 //? NOT_MODIFIED = 304; 
 //* Esta es usada para propósitos de "caché". Le indica al cliente que la respuesta no ha sido modificada. Entonces, el cliente puede continuar usando la misma versión almacenada en su caché.
 //? TEMP_REDIRECT = 307; 
 //* El servidor envía esta respuesta para dirigir al cliente a obtener el recurso solicitado a otra URI con el mismo método que se usó la petición anterior. Tiene la misma semántica que el código de respuesta HTTP 302 Found, con la excepción de que el agente usuario no debe cambiar el método HTTP usado: si un POST fue usado en la primera petición, otro POST debe ser usado en la segunda petición.
 //? PERM_REDIRECT = 308; 
 //*Significa que el recurso ahora se encuentra permanentemente en otra URI, especificada por la respuesta de encabezado HTTP Location:. Tiene la misma semántica que el código de respuesta HTTP 301 Moved Permanently, con la excepción de que el agente usuario no debe cambiar el método HTTP usado: si un POST fue usado en la primera petición, otro POST debe ser usado en la segunda petición.
 
 
 
 //! ERRORES DEL CLIENTE
 
 
 //? BAD_REQUEST = 400; 
 //* Esta respuesta significa que el servidor no pudo interpretar la solicitud dada una sintaxis inválida.
 //? UNAUTHORIZED = 401; 
 //* Es necesario autenticar para obtener la respuesta solicitada. Esta es similar a 403, pero en este caso, la autenticación es posible.
 //? FORBIDDEN = 403; 
 //* El cliente no posee los permisos necesarios para cierto contenido, por lo que el servidor está rechazando otorgar una respuesta apropiada.
 //? NOT_FOUND = 404; 
 //* El servidor no pudo encontrar el contenido solicitado. Este código de respuesta es uno de los más famosos dada su alta ocurrencia en la web.
 //? METH_NOT_ALLOWED = 405; 
 //* El método solicitado es conocido por el servidor pero ha sido deshabilitado y no puede ser utilizado. Los dos métodos obligatorios, GET y HEAD, nunca deben ser deshabilitados y no deberían retornar este código de error.
 //? NOT_ACCETABLE = 406; 
 //* Esta respuesta es enviada cuando el servidor, después de aplicar una negociación de contenido servidor-impulsado, no encuentra ningún contenido seguido por la criteria dada por el usuario.
 //? PROXY_AUTH_REQUIRED = 407; 
 //* Esto es similar al código 401, pero la autenticación debe estar hecha a partir de un proxy.
 //? REQUEST_TIMEOUT = 408; 
 //* Esta respuesta es enviada en una conexión inactiva en algunos servidores, incluso sin alguna petición previa por el cliente. Significa que el servidor quiere desconectar esta conexión sin usar. Esta respuesta es muy usada desde algunos navegadores, como Chrome, Firefox 27+, o IE9, usa mecanismos de pre-conexión HTTP para acelerar la navegación. También hay que tener en cuenta que algunos servidores simplemente desconecta la conexión sin enviar este mensaje.
 //? CONFLICT = 409; 
 //* Esta respuesta puede ser enviada cuando una petición tiene conflicto con el estado actual del servidor.
 //? GONE = 410; 
 //* Esta respuesta puede ser enviada cuando el contenido solicitado ha sido borrado del servidor.
 //? LENGTH_REQUIRED = 411; 
 //* El servidor rechaza la petición porque el campo de encabezado Content-Length no esta definido y el servidor lo requiere.
 //? PRECOND_FAILED = 412; 
 //* El cliente ha indicado pre-condiciones en sus encabezados la cual el servidor no cumple.
 //? PAYLOAD_TOO_LARGE = 413; 
 //* La entidad de petición es más larga que los límites definidos por el servidor; el servidor puede cerrar la conexión o retornar un campo de encabezado Retry-After.
 //? URI_TOO_LONG = 414; 
 //* La URI solicitada por el cliente es más larga de lo que el servidor está dispuesto a interpretar.
 //? UNSUP_MEDIA_TYPE = 415; 
 //* El formato multimedia de los datos solicitados no está soportado por el servidor, por lo cual el servidor rechaza la solicitud.
 //? REQ_RANGE_NOT_SATISFABLE = 416; 
 //* El rango especificado por el campo de encabezado Range en la solicitud no cumple; es posible que el rango está fuera del tamaño de los datos objetivo del URI.
 //? EXPECTATION_FILED = 417; 
 //* Significa que la expectativa indicada por el campo de encabezado Expect solicitada no puede ser cumplida por el servidor.
 
 //? IM_A_TEAPOT = 418; 
 //* El servidor se rehúsa a intentar hacer café con una tetera.
 
 //? UNPROC_ENTITY = 422; 
 //* La petición estaba bien formada pero no se pudo seguir debido a errores de semántica.
 //? LOCKED = 423; 
 //* El recurso que está siendo accedido está bloqueado.
 //? FAILED_DEPENDENCY = 424; 
 //* La petición falló debido a una falla de una petición previa.
 //? UPGRADE_REQUIRED = 426; 
 //* El servidor se rehúsa a aplicar la solicitud usando el protocolo actual pero puede estar dispuesto a hacerlo después que el cliente se actualice a un protocolo diferente. El servidor envía un encabezado Upgrade en una respuesta para indicar los protocolos requeridos.
 //? PRECONDITION_REQUIRED = 428; 
 //* El servidor origen requiere que la solicitud sea condicional. Tiene la intención de prevenir problemas de 'actualización perdida', donde un cliente OBTIENE un estado del recurso, lo modifica, y lo PONE devuelta al servidor, cuando mientras un tercero ha modificado el estado del servidor, llevando a un conflicto.
 //? TOO_MANY_REQUESTS = 429; 
 //* El usuario ha enviado demasiadas solicitudes en un periodo de tiempo dado.
 //? REQ_HEADER_LARGE = 431; 
 //* El servidor no está dispuesto a procesar la solicitud porque los campos de encabezado son demasiado largos. La solicitud PUEDE volver a subirse después de reducir el tamaño de los campos de encabezado solicitados.
 //? LEGAL = 451; 
 //* El usuario solicita un recurso ilegal, como alguna página web censurada por algún gobierno.
 
 
 
 //! ERRORES DEL SERVIDOR 
 
 
 //?  INT_SERVER_ERR = 500; 
 //* El servidor ha encontrado una situación que no sabe cómo manejarla.
 //?  NOT_IMPLEMENTED = 501; 
 //* El método solicitado no está soportado por el servidor y no puede ser manejado. Los únicos métodos que los servidores requieren soporte (y por lo tanto no deben retornar este código) son GET y HEAD.
 //?  BAD_GATEAWAY =  502; 
 //* Esta respuesta de error significa que el servidor, mientras trabaja como una puerta de enlace para obtener una respuesta necesaria para manejar la petición, obtuvo una respuesta inválida.
 //?  SERVICE_UNAVAILABLE = 503; 
 //* El servidor no está listo para manejar la petición. Causas comunes puede ser que el servidor está caído por mantenimiento o está sobrecargado. Hay que tomar en cuenta que junto con esta respuesta, una página usuario-amigable explicando el problema debe ser enviada. Estas respuestas deben ser usadas para condiciones temporales y el encabezado HTTP Retry-After: debería, si es posible, contener el tiempo estimado antes de la recuperación del servicio. El webmaster debe también cuidar los encabezados relacionados al caché que son enviados junto a esta respuesta, ya que estas respuestas de condición temporal deben usualmente no estar en el caché.
 //?  GATEAWAY_TIMEOUT = 504; 
 //* Esta respuesta de error es dada cuando el servidor está actuando como una puerta de enlace y no puede obtener una respuesta a tiempo.
 //?  HTTP_VER_UNSUPORTED = 505; 
 //* La versión de HTTP usada en la petición no está soportada por el servidor.
 //?  VARIANT_ALSO_NEGOTIATES = 506; 
 //* El servidor tiene un error de configuración interna: negociación de contenido transparente para la petición resulta en una referencia circular.
 //?  INSUFFICIENT_STORAGE = 507; 
 //* El servidor tiene un error de configuración interna: la variable de recurso escogida está configurada para acoplar la negociación de contenido transparente misma, y no es por lo tanto un punto final adecuado para el proceso de negociación.
 //?  LOOP_DETECTED = 508; 
 //* El servidor detectó un ciclo infinito mientras procesaba la solicitud.
 //?  NOT_EXTENDED = 510; 
 //* Extensiones adicionales para la solicitud son requeridas para que el servidor las cumpla.
 //?  NETW_AUTH_REQUIRED = 511; 
 //* El código de estado 511 indica que el cliente necesita autenticar para obtener acceso a la red.
 
 module.exports = HTTP_STATUS