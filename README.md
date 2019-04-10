# Elsys Infoscreen

Web application to be used for an infoscreen placed in Koopen at Elbygget, NTNU Gløshaugen. The web application displays the last blog post currently published at the [Elsys Blog](http://elsys.blog).

---

## Installation
### Prerequisities
The following applications are considered required for building the application:

* **Node.js** >= v10.15.3 LTS
* **Yarn** package manager >= v1.15.2

### Build

You may build the application for **development** purposes by issuing the command in  a terminal:

```console
user@server:~/elsys-infoscreen/$ yarn run dev
```
This will start a separate development server and serve the site on [http://localhost:8080](http://localhost:8080). If you make changes to the source code while this server is running, the application will automatically recompile, and refresh the websites currently being viewed.

When building for **production**, the following command should be used:

```console
user@server:~/elsys-infoscreen/$ yarn build
```

This will create a new directory ~dist/ where all compiled files will reside.

## Usage

After building the application for production, the server should be started by issuing the following:

```console
user@server:~/elsys-infoscreen/$ yarn start
```
The default port for production is PORT 3000.

Open a web browser, and the site is served at [http://localhost:3000](http://localhost:3000).