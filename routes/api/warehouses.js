const express = require("express");
const WarehousesService = require("../../services/warehouses");

function warehouseApi(app) {
  const router = express.Router();
  app.use("/api/warehouses", router);

  const warehouseService = new WarehousesService();

  router.get("/", warehouseService.getWarehouses);

  router.get("/find/:warehouseId", warehouseService.getWarehouse);

  router.post("/new", warehouseService.createWarehouse);

  router.put("/update/:warehouseId", warehouseService.updateWarehouse);

  router.delete("/delete/:warehouseId", warehouseService.deleteWarehouse);

}
module.exports = warehouseApi;
