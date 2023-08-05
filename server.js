import express from "express";
import cors from "cors";
import Brands from "./models/brands.js";



const app = express();

//middlewares generales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/brands", async (req, res) => {
    try {
        let marcas = await Brands.findAll();
        res.json({code: 200, message: "ok", marcas});
        res.send("ok");
    } catch (error) {
        console.log(error)
        res.status(500).json({
            code: 500,
            message: "Error al obtener las marcas.",
        });
    }
});

//ruta desconocidad
app.all("*", (req, res) => {
    res.send("Ruta desconocida.");
});

export default app;
