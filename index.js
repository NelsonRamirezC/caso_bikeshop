import sequelize from "./database/database.js";
import app from "./server.js";
import initModels from "./models/init-models.js";

const main = async () => {
    await sequelize.authenticate();
    let modelos = initModels(sequelize);
    await sequelize.sync({ force: false, alter: true });
    //console.log(modelos);
    app.listen(3000, () => console.log("Servidor escuchando en puerto: 3000."));
    
}

main();