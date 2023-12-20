import express from 'express'
import routerV1 from './v1/routes/index.js';

const app = express()
const PORT = process.env.PORT || 3000

app.use("/api/v1", routerV1)

app.listen( PORT, () => {
  console.log(`server is running on ${PORT}`);
})