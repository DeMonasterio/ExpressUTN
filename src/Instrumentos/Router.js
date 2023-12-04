const Router = require("express");
const ModelMd = require("./InstrumentosMd");
const router = Router();  


router.get("/", ModelMd.getAll);
router.get("/:nombre_categoria", ModelMd.getAll);

module.exports = router;

