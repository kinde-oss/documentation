# Descripción general de las claves API

Kinde ofrece un sistema integral de gestión de claves API que le permite emitir y administrar claves API para sus propias API.

Este sistema admite la gestión de claves tanto a nivel de organización como de usuario, lo que lo hace adecuado para modelos de negocio B2B, B2C y B2B2C.

> **Nota:** Esta función está disponible en los [planes de pago de Kinde](https://kinde.com/pricing/).

## ¿Qué son las claves API?

Las claves API son credenciales de larga duración que permiten a los usuarios finales autenticarse con sus API.

Ofrecen una forma sencilla de acceder a sus servicios sin pasar por flujos OAuth y permiten realizar solicitudes fuera del navegador, por ejemplo con CLIs, cURL, etc.

### Características principales

- **Con ámbito limitado**: cada clave está restringida a una API específica
- **Permisos**: a cada clave se le pueden otorgar ámbitos/permisos específicos
- **Seguras**: las claves se almacenan como hashes seguros y nunca se exponen después de la creación
- **Administrables**: las claves se pueden crear, rotar y revocar según sea necesario
- **De larga duración**: las claves API no caducan a menos que establezca una fecha de vencimiento (próximamente)

## Modelos de gestión de claves

### Claves a nivel de organización

- Administradas por administradores de la organización
- Adecuadas para escenarios B2B en los que los clientes necesitan acceso a sus API
- Las claves están asociadas a organizaciones específicas
- Los administradores pueden gestionar claves en nombre de sus usuarios

### Claves a nivel de usuario

- Administradas por usuarios individuales
- Adecuadas para escenarios B2C en los que los usuarios finales necesitan acceso a la API
- Los usuarios crean y administran sus propias claves
- Las claves están asociadas a cuentas de usuario específicas

## Cómo funcionan las claves API

### 1. Registrar una API

Antes de poder emitir claves API, debe registrar sus API en Kinde:

- Proporcionar un nombre y una descripción
- Definir los ámbitos disponibles
- Obtener un `api_id` único para cada API

Lea más sobre el [registro de API](/developer-tools/your-apis/register-manage-apis/).

### 2. Crear claves

Al crear una clave API:

- Asóciela a una API registrada
- Asigne ámbitos específicos para el control de acceso
- Genere un secreto seguro (se muestra solo una vez)
- Cree un `key_id` estable para su administración

### 3. Usar claves

Los usuarios finales incluyen la clave API en sus solicitudes a su API:

- Normalmente se envía en un encabezado `Authorization`
- Su API extrae la clave y la verifica con Kinde
- Kinde devuelve los resultados de la validación, incluidos ámbitos y metadatos

Lea más sobre la [verificación de claves API](/manage-your-apis/add-manage-api-keys/verify-api-keys-in-your-api/).

### 4. Administrar claves

Las claves se pueden administrar a lo largo de su ciclo de vida:

- **Rotar**: generar nuevos secretos manteniendo el mismo ID de clave
- **Revocar**: marcar claves como inactivas
- **Actualizar**: modificar las API o ámbitos asociados (requiere una clave nueva)

## Para qué puede usar las claves API

### IA y automatización

- Permitir que los agentes de IA accedan a sus API
- Admitir flujos de trabajo e integraciones automatizadas
- Proporcionar acceso seguro para aplicaciones de aprendizaje automático

### Integraciones con terceros

- Permitir que los clientes se integren con su plataforma
- Ofrecer distintos niveles de acceso según el plan del cliente
- Hacer seguimiento del uso y aplicar límites de tasa

### Automatización interna

- Habilitar scripts y herramientas automatizadas
- Proporcionar acceso seguro para pipelines de CI/CD
- Admitir el desarrollo y las pruebas internas

### Acceso para socios

- Conceder a los socios acceso a API específicas
- Controlar a qué datos y funciones pueden acceder los socios
- Mantener registros de auditoría para cumplimiento normativo

### Herramientas para desarrolladores

- Proporcionar acceso a la API para herramientas de desarrollo y SDK
- Habilitar la exploración de API en autoservicio
- Admitir pruebas y desarrollo de API

## Funciones de seguridad de las claves API

### Almacenamiento seguro

- Los secretos de las claves API nunca se almacenan en texto plano
- Todos los secretos se hashean con algoritmos seguros
- No hay forma de recuperar el secreto original después de la creación

### Control de acceso

- Las claves están vinculadas a una sola API
- A las claves se les pueden otorgar ámbitos/permisos específicos
- El aislamiento a nivel de organización evita el acceso entre inquilinos
