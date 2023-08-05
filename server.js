import express from "express";
import cors from "cors";
import sequelize from "./database/database.js";
//MODELOS
import Brands from "./models/brands.js";
import Stores from "./models/stores.js";
import Products from "./models/products.js";

const app = express();

//middlewares generales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/brands", async (req, res) => {
    try {
        let marcas = await Brands.findAll({
            order: [["brand_id", "ASC"]],
            attributes: ["brand_id", "brand_name"],
        });
        let [results, metadata] = await sequelize.query(`
            SELECT B.brand_id, B.brand_NAME, COUNT(*) CANTIDAD FROM BRANDS B
            INNER JOIN PRODUCTS P
            ON P.BRAND_ID = B.BRAND_ID
            GROUP BY B.brand_id, B.brand_NAME
            ORDER BY CANTIDAD
        `);

        let categorias = results;

        res.json({ code: 200, message: "ok", marcas, categorias });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "Error al obtener las marcas.",
        });
    }
});

app.get("/api/inventario", async (req, res) => {
    try {
        let { tienda } = req.query;
        let filtros = {};
        console.log(tienda);
        if (tienda) {
            filtros.store_id = tienda;
        }
        
        let inventario = await Stores.findAll({
            attributes: ["store_id", "store_name"],
            include: [
                {
                    model: Products,
                    as: "productos",
                    attributes: ["product_id", "product_name"]
                },
            ],
            where: filtros
        });
        res.json({ code: 200, inventario });
    } catch (error) {
        console.log(error);
        res.status(500).json({ code: 500, message: "Error al obtener el inventario." });
    }
});

//ruta desconocidad
app.all("*", (req, res) => {
    res.send("Ruta desconocida.");
});

export default app;
