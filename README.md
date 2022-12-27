# Control Estudiantil

Este es el Frontend de un proyecto Full Stack creado y desarrollado en **Angular 15.0.3**.

Librerias Utilizadas:

- **Angular Material:** Para diseñar las vistas.
- **ngx-charts:** Para los graficos de las calificaciones.
- **SweetAlert2 :** Para las alertas/popup.

Para poder correr el proyecto es necesario instalar los módulos correspondientes con el comando`$ npm install`

## Interfaz gráfica del proyecto

![Inicio](https://user-images.githubusercontent.com/77473889/209693594-44d24743-042f-49eb-a443-66e544b76571.png)

> Inicio.

![Formulario Crear estudiante](https://user-images.githubusercontent.com/77473889/209693823-fc719b8c-9ce0-400e-af53-ae5ff05a9fc5.png)

> Formulario Crear estudiante.

![Formulario Editar estudiante](https://user-images.githubusercontent.com/77473889/209693926-632ac088-730b-4d18-8f18-f46f1ed64d3a.png)

> Formulario Editar estudiante.

![Alerta Elkiminar estudiante](https://user-images.githubusercontent.com/77473889/209694223-7e308298-3572-4f57-87b8-d15f05d3465d.png)

> Alerta Eliminar estudiante.

![Detalles estudiante](https://user-images.githubusercontent.com/77473889/209694383-c118f946-c8db-4ab9-9187-6e3007b7d930.png)

> Detalles estudiante.

![Detalles estudiante](https://user-images.githubusercontent.com/77473889/209694491-2c3859fe-0d58-492d-9657-c92e1709bdf4.png)

> Detalles estudiante.

![Calificaciones estudiantes](https://user-images.githubusercontent.com/77473889/209695438-b1bf585b-83a8-44a5-9501-a4b82841b06f.png)

> Calificaciones estudiantes.

![Calificar estudiante](https://user-images.githubusercontent.com/77473889/209694861-6452c0ca-33ed-4f13-8359-e4bb7156bb45.png)

> Calificar estudiante.

![Asistencias estudiantes](https://user-images.githubusercontent.com/77473889/209694925-5f064ef8-81c9-4054-ad87-da997dc618d7.png)

> Asistencias estudiantes.

## Planteamiento del problema

Pedro es un profesor que imparte las 4 materias básicas en un colegio. Actualmente lleva el control de sus estudiantes y sus calificaciones de manera manual con lápiz y papel lo cual hace su trabajo un poco complicado. ¿Cómo podemos ayudar a Pedro?

## Resolución del problema

- Se necesita realizar una aplicación web que permita a Pedro gestionar sus estudiantes y sus calificaciones.
- La aplicación debe permitir realizar las operaciones básicas CRUD de dichos estudiantes.
- El apartado de Estudiantes debe contar con un filtro.
- Debe contar con un apartado donde se les asignen las calificaciones a los estudiantes en las distintas materias y se calcule su literal. (A = 90 - 100 ; B = 80 - 89 ; C = 70 - 79 ; F = 0 - 69)

Las materias impartidas por el docente serán solo 4:

1. Lengua española
2. Matemáticas
3. Ciencias sociales
4. Ciencias naturales

Debe contar con un apartado donde se pueda realizar el pase de lista, en el mismo se debe ver un historial del pase de lista por día. (En proceso 👨‍💻)
