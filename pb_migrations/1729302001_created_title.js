/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "x4m9iwryzlyrhka",
    "created": "2024-10-19 01:40:01.751Z",
    "updated": "2024-10-19 01:40:01.751Z",
    "name": "title",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xgdk6ipd",
        "name": "field",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("x4m9iwryzlyrhka");

  return dao.deleteCollection(collection);
})
