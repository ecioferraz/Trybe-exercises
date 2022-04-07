import App from "./app"

const app = new App().express;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listeing at port ${PORT}`));
