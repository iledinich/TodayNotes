# Today Notes
This web application was made to show a stack of technologies working togheter
as Dotnet Core framework, Angular, Entity Framework, WebAPI.

Developing from the start to production environment in the cloud.
It is an application to create simple notes, you can change the color and search notes using the search bar.

### Backend
It consist in a WebAPI that was developed using dotnet core framework, the database was created
using Entity Framework code first and managed by migrations.
The database used for develop enviroment is SQLLite and for production SQLServer hosted in Azure.

### Frotend
It was developed with Angular (+2) using an scalable structure with services, guards, small components and bootstrap with flexbox for the style.

### Security
The WebAPI methods are protected by Token Authentication. Also, JWT was used in the frontend to manage the tokens.

### Final touches and Publishing
The error handling is managed by an http interreceptor in the frontend and show in a friendly way using alertify.js

To fit the classes between the API and angular services. For the backend I used an AutoMapper and DTOs.

To publish the WebAPP I chose Azure, creating an SQL server and the own App there. Its connected to GitHub to make a continuous integration.

### Future features
*	Identity Core
*	Porting to android/iOS using Native Script
*	Google and Facebook login

**Running application: https://today-notes-app.azurewebsites.net**
