# Elsys Infoscreen

Web application to be used for an infoscreen placed in Koopen at Elbygget, NTNU Gløshaugen. The web application displays the last blog posts currently published at the [Elsys Blog](http://elsys.blog) by cycling through them. 

Built in **Node.js** using the following libraries/frameworks:

* React
* Redux w/ thunk
* Express
* LESS
* Babel
* Webpack
* Axios

*This project is paid work financed by the Faculty of Information Technology and Electrical Engineering ([IES]((https://www.ntnu.edu/ies))) at NTNU. The project was assigned 15 work hours in total, and was finished in ~13 hours.*

**Source code has been made public with permission.**

---

## Installation
### Prerequisities
The following applications are considered required for building the application:

* **Node.js** >= v10.15.3 LTS
* **Yarn** package manager >= v1.15.2

First, **clone** the repository: 

```console
user@server:~$ git clone https://github.com/leiklier/elsys-infoscreen.git ~/elsys-infoscreen
```

Then, **install all dependencies**: 

```console
user@server:~$ cd ~/elsys-infoscreen && yarn install
```

### Build

You may build the application for **development** purposes by issuing the command in  a terminal:

```console
user@server:~/elsys-infoscreen$ yarn run dev
```
This will start a separate development server and serve the site on [http://localhost:8080](http://localhost:8080). If you make changes to the source code while this server is running, the application will automatically recompile, and refresh the websites currently being viewed.

When building for **production**, the following command should be used:

```console
user@server:~/elsys-infoscreen$ yarn build
```

This will create a new directory ~dist/ where all compiled files will reside.

## Usage

After building the application for production, the server should be started by issuing the following:

```console
user@server:~/elsys-infoscreen$ yarn start
```
The default port for production is PORT 3000.

Open a web browser, and the site is served at [http://localhost:3000](http://localhost:3000).