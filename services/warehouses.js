const db = require("../models");
const Warehouse = db.warehouse;
const WarehouseDescription = db.warehouse_description;

// Retrieve all Tutorials from the database.

class WarehousesService {
  constructor() {
    this.colletion;
  }
  // Retrieve all warehouse from the database.
  async getWarehouses(req, res, next) {
    try {
      const warehouses = await Warehouse.findAll({
        include: [WarehouseDescription],
      });

      return res.status(200).json({
        data: warehouses || {},
        message: "Warehouses listed",
      });
    } catch (error) {
      return next(error);
    }
  }
  // Retrieve one warehouse from the database.
  async getWarehouse(req, res, next) {
    const warehouseId = req.params.warehouseId;

    try {
      const warehouse = await Warehouse.findByPk(warehouseId, {
        include: [WarehouseDescription],
      });
      if (warehouse != null) {
        return res.status(200).json({
          data: warehouse,
          message: "Warehouse retrieved",
        });
      } else if (warehouse == null) {
        return res.status(404).json({
          data: warehouse,
          message: "Warehouse not found",
        });
      }
    } catch (error) {
      return next(error);
    }
  }
  // Create one warehouse and descriptions in the database.
  async createWarehouse(req, res, next) {
    const { body: warehouse } = req;

    const warehouseData = {
      name: warehouse.name,
      headquarters_number: warehouse.headquartersNumber,
    };

    try {
      const createdWarehouse = await Warehouse.create(warehouseData);

      warehouse.description.map(function (data) {
        const warehouseDescriptionData = {
          phone: data.phone,
          city: data.city,
          address: data.address,
          warehouseId: createdWarehouse.id,
        };
        WarehouseDescription.create(warehouseDescriptionData);
      });

      res.status(201).json({
        data: createdWarehouse,
        message: "Warehouse created",
      });
    } catch (error) {
      return next(error);
    }
  }
  // Update one warehouse in the database.
  async updateWarehouse(req, res, next) {
    const warehouseId = req.params.warehouseId;
    const { body: warehouse } = req;

    const warehouseData = {
      name: warehouse.name,
      headquarters_number: warehouse.headquartersNumber,
    };

    try {
      const updatedWarehouse = await Warehouse.update(warehouseData, {
        where: { id: warehouseId },
      });

      if (updatedWarehouse == 1) {
        res.send({
          message: "Warehouse was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Warehouse with id=${warehouseId}. Maybe Warehouse was not found.`,
        });
      }
    } catch (error) {
      return next(error);
    }
  }
  // Delete one warehouse in the database.
  async deleteWarehouse(req, res, next) {
    const warehouseId = req.params.warehouseId;

    try {
      const deletedWarehouse = await Warehouse.destroy({
        where: { id: warehouseId },
      });

      if (deletedWarehouse == 1) {
        res.send({
          message: "Warehouse was deleted successfully.",
        });
      } else {
        res.send({
          message: `Cannot deleted Warehouse with id=${warehouseId}. Maybe Warehouse was not found.`,
        });
      }
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = WarehousesService;
