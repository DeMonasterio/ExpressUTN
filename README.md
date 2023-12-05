##ExpressUTN
Proyecto de Express para la entrega del proyecto final de la UTN. Este es el backend de una API de instrumentos que sigue los métodos CRUD y se conecta a nuestra base de datos.

Descripción Detallada Este proyecto ofrece una API RESTful que sigue los principios CRUD (Crear, Leer, Actualizar, Eliminar). Esto permite a los desarrolladores realizar operaciones fundamentales en la base de datos, como agregar nuevos instrumentos, recuperar información detallada sobre instrumentos existentes, actualizar datos y eliminar registros.

Conexión a la Base de Datos: La aplicación se conecta a una base de datos para almacenar y recuperar datos de manera persistente. Asegúrate de configurar adecuadamente las variables de entorno, incluida la URL de la base de datos, para una conexión fluida.

##Requisitos Previos
Asegúrate de tener instalados los siguientes elementos antes de comenzar:

Node.js npm MySql

##Clona este repositorio:
En la terminal: git clone https://github.com/DeMonasterio/ExpressUTN.git

##Instala las dependencias:
npm install O npm i

Crea un archivo .env en la raíz del proyecto y configura las variables de entorno necesarias.
DB_NAME = "nombredelaDB" PORT = 1111 (Por ejemplo) PASSWORD = "contraseñademysql"

##Ejecuta el proyecto localmente
npm run dev
