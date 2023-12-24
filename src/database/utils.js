import fs from "fs"

const saveToDb = (payload) => {
  fs.writeFileSync("./src/database/db.json", JSON.stringify(payload, null, 2), {encoding: "utf-8"})
}

export default saveToDb