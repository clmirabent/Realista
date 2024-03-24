# Realista

Realista is a web application exclusively for individuals and without traditional real estate portals ads. Realistic prices and market transparency are the main features of our site. 

Users can publish and search for properties, contact directly with the owner through our chat, without intermediaries. Browse properties by location, view them on the map and dive into their details with photos and detailed descriptions. 


 # User Interface 

**_Home Page:_** This page allows the user to search, log in and register to the application.      

<img width="585" alt="Screenshot 2024-02-27 at 8 45 56 PM" src="https://github.com/nds-fsd/idealista/assets/70909932/6716b6f7-148e-489c-b329-16688083b779">

**_Login:_** The user can log in to start saving their favorite properties, chat with an owner and/or publish their ads. If the user does not have a Realista account, he can create an account by clicking here.

<img width="585" alt="Screenshot 2024-02-27 at 8 46 43 PM" src="https://github.com/nds-fsd/idealista/assets/70909932/26379e23-0078-4365-b548-442b6ae43ae3">

**_Registro:_** The user can create an account by filling in the required fields, if the user does not accept the privacy policies, he/she will not be able to create an account, which can be accessed directly from the link. 

<img width="585" alt="Screenshot 2024-02-27 at 8 50 13 PM" src="https://github.com/nds-fsd/idealista/assets/70909932/8a46f5b7-d33e-4b29-99dc-11b6e5b0b496">

**_Publicar Anuncios:_** Once the user is logged in, he/she can publish ads with a specific description and include photos of the property, and can also consult his/her published ads on the "My Ads" page.

<img width="585" alt="Screenshot 2024-02-27 at 9 42 39 PM" src="https://github.com/nds-fsd/idealista/assets/70909932/8e6e1f0e-73bc-4f07-932b-7081965ba078">

**_Anuncios Publicados:_** All published ads are displayed and the user can search through the filters. 

<img width="585" alt="Screenshot 2024-02-28 at 7 01 33 PM" src="https://github.com/nds-fsd/idealista/assets/70909932/3c5fd82d-244c-43ec-95dc-2b5c046f9f33">

**_Mis Anuncios:_** The user can see the ads he/she has posted.

<img width="585" alt="Screenshot 2024-02-28 at 7 03 58 PM" src="https://github.com/nds-fsd/idealista/assets/70909932/845043ac-bf64-4d74-96fc-554da29741ba">


# Demo 
You can take a small tour of the application and visit our demo video on our Youtube channel.

https://youtu.be/ZoCQC8MAHoA


# 🛠️ Built with

**Frontend:** 

- React
- React hook forms
- React router dom
- JWT decode
- Cloudinary React 
- Claudinary url-gen
- Socket.io Client 
- React micro-animations library
- React icons
- Mui
- @googlemaps/js-api-loader 
- @googlemaps/react-wrapper"
- Bcrypt

**Backend:** 

- Node
- Express
- Socket.io
- Mongoose
- Mailgun
- Bcrypt
- JsonWebToken


 # ⌗ Entities diagrams
![Realista-DataModel](https://github.com/nds-fsd/idealista/assets/146576217/57cea54e-6a4f-4edb-bc03-dfb33f0eb314)


# 🚀 How to start the project?

### Requisitos previos

To run Realista on your local machine, you must have the following installed:
- Node.Js
- MongoDB (if you want to use a local database)

### Settings 
Clone the project:

   ```js
    git clone https://github.com/nds-fsd/idealista.git
```

2. Go to the root of the project and install npm:

Desde carpeta idealista: cd frontend

``` js
npm install
```

3. Set the following variables in the .env file

`MONGO_URL`
`GOOGLE_APIKEY`
`JWT_SECRET`
`JWT_EXPIRES_IN`
`REACT_APP_BACKEND_URL`
`MAILGUN_API_KEY`
`MAILGUN_DOMAIN`


4. Start the project in the terminal:
```js
npm run dev
```

7. If you want to start the project separeted in frontend and backend:

 **Frontend:**  
 ```js
 npm run start:frontend
 ```
 **Backend:**  
 ```js
 npm run start:backend
```

6. Go to your browser and naviagte  `http://localhost:3000` to see the app


# Authors

- Carla León [https://github.com/clmirabent]
- Filip Galetic [https://github.com/fgaletic]
- Harold Pozo [https://github.com/haroldtpozo]
- Xavi López  [ https://github.com/xlopezmin]
