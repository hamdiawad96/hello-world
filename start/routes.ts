
import Route from '@ioc:Adonis/Core/Route'


// Route.group(() => {
//     // Route.get("/init","UserController.getInit");
//     // Route.get("/:variable","UserController.getById");

//     // Route.get("/","FilmsController.getAll");
//     // Route.post("/","UserController.create");
//     // Route.put("/","UserController.update");
//     // Route.delete("/","UserController.destroy");
    
//     Route.get("/", "FilmsController.getAll");
//   }).prefix("/films");

 Route.group(() => {
//   Route.group(() => {
//     Route.get("/init", "UsersController.getInit");
//     Route.get("/:variable/orders", "UsersController.getUserOrders");
//     Route.get("/:variable", "UsersController.getById");
//     Route.get("/", "UsersController.getAll");
//     Route.post("/", "UsersController.create");
//     Route.put("/", "UsersController.update");
//     Route.delete("/", "UsersController.destroy");
//   }).prefix("/users");


  // Route.group(() => {
  //   Route.get("/", "FilmsController.getAll");
  // }).prefix("/films");

  // Route.group(() => {
  //   Route.get("/:id", "CitiesController.getById");
  //   Route.get("/", "CitiesController.getAll");
  //   Route.post("/", "CitiesController.create");
  //   Route.put("/", "CitiesController.update");
  //   Route.delete("/:id", "CitiesController.destory");
  // }).prefix("/cities");


  Route.group(() => {

    Route.group(() => {
      Route.post("/login", "UsersController.login");
      Route.post("/logout", "UsersController.logout");
      Route.post("/", "UsersController.create");
    }).prefix("/users");

    Route.get("/init", "ActorsController.getInit");

    Route.get("/", "ActorsController.getAll");
    Route.post("/", "ActorsController.create");
    Route.put("/", "ActorsController.update");
    Route.delete("/", "ActorsController.destroy");
  }).prefix("/actors");

  Route.group(() => {
    Route.get("/init", "CategoriesController.getInit");

    Route.get("/", "CategoriesController.getAll");
    Route.post("/", "CategoriesController.create");
    Route.put("/", "CategoriesController.update");
    Route.delete("/", "CategoriesController.destroy");
  }).prefix("/categories");

  Route.group(() => {
    Route.get("/init", "CountriesController.getInit");

    Route.get("/", "CountriesController.getAll");
    Route.post("/", "CountriesController.create");
    Route.put("/", "CountriesController.update");
    Route.delete("/", "CountriesController.destroy");
  }).prefix("/countries");

  Route.group(() => {
    Route.get("/init", "StoresController.getInit");

    Route.get("/", "StoresController.getAll");
    Route.post("/", "StoresController.create");
    Route.put("/", "StoresController.update");
    Route.delete("/", "StoresController.destroy");
  }).prefix("/stores");
  
  Route.group(() => {
    Route.get("/init", "BrandsController.getInit");

    Route.get("/", "BrandsController.getAll");
 
  }).prefix("/brands");

  Route.group(() => {
    Route.get("/init", "AddressController.getInit");

    Route.get("/", "AddressController.getAll");
    Route.post("/", "AddressController.create");
    Route.put("/", "AddressController.update");
    Route.delete("/", "AddressController.destroy");
  }).prefix("/address");

  Route.group(() => {
    Route.get("/init", "CitiesController.getInit");

    Route.get("/", "CitiesController.getAll");
    Route.post("/", "CitiesController.create");
    Route.put("/", "CitiesController.update");
    Route.delete("/", "CitiesController.destroy");
  }).prefix("/cities");

  Route.group(() => {
    Route.get("/init", "CustomersController.getInit");

    Route.get("/", "CustomersController.getAll");
    Route.post("/", "CustomersController.create");
    Route.put("/", "CustomersController.update");
    Route.delete("/", "CustomersController.destroy");
  }).prefix("/customers");

  Route.group(() => {
    Route.get("/init", "FilmActorsController.getInit");

    Route.get("/", "FilmActorsController.getAll");
    Route.post("/", "FilmActorsController.create");
    Route.put("/", "FilmActorsController.update");
    Route.delete("/", "FilmActorsController.destroy");
  }).prefix("/filmActors");

  Route.group(() => {
    Route.get("/init", "FilmCategoriesController.getInit");

    Route.get("/", "FilmCategoriesController.getAll");
    Route.post("/", "FilmCategoriesController.create");
    Route.put("/", "FilmCategoriesController.update");
    Route.delete("/", "FilmCategoriesController.destroy");
  }).prefix("/filmCategories");

  Route.group(() => {
    Route.get("/init", "FilmsController.getInit");

    Route.get("/", "FilmsController.getAll");
    Route.post("/", "FilmsController.create");
    Route.put("/", "FilmsController.update");
    Route.delete("/", "FilmsController.destroy");
  }).prefix("/films");

  Route.group(() => {
    Route.get("/init", "FilmTextController.getInit");

    Route.get("/", "FilmTextController.getAll");
    Route.post("/", "FilmTextController.create");
    Route.put("/", "FilmTextController.update");
    Route.delete("/", "FilmTextController.destroy");
  }).prefix("/filmText");

  Route.group(() => {
    Route.get("/init", "InventoriesController.getInit");

    Route.get("/", "InventoriesController.getAll");
    Route.post("/", "InventoriesController.create");
    Route.put("/", "InventoriesController.update");
    Route.delete("/", "InventoriesController.destroy");
  }).prefix("/iventories");

  Route.group(() => {
    Route.get("/init", "LanguagesController.getInit");

    Route.get("/", "LanguagesController.getAll");
    Route.post("/", "LanguagesController.create");
    Route.put("/", "LanguagesController.update");
    Route.delete("/", "LanguagesController.destroy");
  }).prefix("/languages");

  Route.group(() => {
    Route.get("/init", "OrderItemsController.getInit");

    Route.get("/", "OrderItemsController.getAll");
    Route.post("/", "OrderItemsController.create");
    Route.put("/", "OrderItemsController.update");
    Route.delete("/", "OrderItemsController.destroy");
  }).prefix("/orderItems");

  Route.group(() => {
    Route.get("/init", "OrdersController.getInit");

    Route.get("/", "OrdersController.getAll");
    Route.post("/", "OrdersController.create");
    Route.put("/", "OrdersController.update");
    Route.delete("/", "OrdersController.destroy");
  }).prefix("/orders");

  Route.group(() => {
    Route.get("/init", "PaymentsController.getInit");

    Route.get("/", "PaymentsController.getAll");
    Route.post("/", "PaymentsController.create");
    Route.put("/", "PaymentsController.update");
    Route.delete("/", "PaymentsController.destroy");
  }).prefix("/payments");

  Route.group(() => {
    Route.get("/init", "ProductsController.getInit");

    Route.get("/", "ProductsController.getAll");
    Route.post("/", "ProductsController.create");
    Route.put("/", "ProductsController.update");
    Route.delete("/", "ProductsController.destroy");
  }).prefix("/products");

  Route.group(() => {
    Route.get("/init", "RentalsController.getInit");

    Route.get("/", "RentalsController.getAll");
    Route.post("/", "RentalsController.create");
    Route.put("/", "RentalsController.update");
    Route.delete("/", "RentalsController.destroy");
  }).prefix("/rentals");

  Route.group(() => {
    Route.get("/init", "StaffsController.getInit");

    Route.get("/", "StaffsController.getAll");
    Route.post("/", "StaffsController.create");
    Route.put("/", "StaffsController.update");
    Route.delete("/", "StaffsController.destroy");
  }).prefix("/staffs");

  
  Route.group(() => {
    Route.get("/init", "StocksController.getInit");

    Route.get("/", "StocksController.getAll");
    Route.post("/", "StocksController.create");
    Route.put("/", "StocksController.update");
    Route.delete("/", "StocksController.destroy");
  }).prefix("/stocks");

  





}).prefix("api");
