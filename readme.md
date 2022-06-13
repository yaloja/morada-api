## API Morada App

# Modules
- Usuarios
- Propiedades

# API reference

### Usuarios

Method | Endpoint | Data |Auth required
------ | -------- | ---- | ------------
`POST` | /user/login | body: { email, password }| No
`POST`  | /user | body: { identificacion, nombre,... }| Si

### Propiedades

Method  | Endpoint      | Data                              | Auth required\Comments
------- | ---------     | ----- | ------------
`GET`   | /property     | query: type, businessType         | No |getProperties
`GET`   | /property/:id | url: id                           | No |getPropertyDetails
`POST`  | /property     | body: { title, description... }   | Si |addProperty
`DELETE`| /property/:id | url: id                           | Si |Eliminar propiedad
`PUT`   | /property/:id | body: { title, description... }   | Si |Actualizar propiedad
`POST`  | /property/:id | body: { comentario }              | Si |Notificar interes