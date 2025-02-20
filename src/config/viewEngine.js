// viewEngine.js
import express from 'express'; // Import express here

export const viewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("views", "./src/view");
};
