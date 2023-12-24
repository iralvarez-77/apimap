import express from "express"
import routerV1 from "./v1/routes/pointRouters.js";

const app = express()

app.disable("x-powered-by")

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use("/api/v1/points", routerV1)


app.listen( PORT, () => {
  console.log(`server is running on ${PORT}`);
})