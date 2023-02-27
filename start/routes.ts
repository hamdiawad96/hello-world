
import Route from '@ioc:Adonis/Core/Route'




  Route.group(() => {

    Route.group(() => {
      Route.post("/login", "UsersController.login");
      Route.post("/logout", "UsersController.logout");
      Route.post("/", "UsersController.create");
    }).prefix("/users");

    Route.get("/init", "CustomersController.getInit");

    Route.get("/", "CustomersController.getAll");
    Route.post("/", "CustomersController.create");
    Route.put("/", "CustomersController.update");
    Route.delete("/", "CustomersController.destroy");
  }).prefix("/customers");

  Route.group(() => {
    Route.get("/init", "EmployeesController.getInit");

    Route.get("/", "EmployeesController.getAll");
    Route.post("/", "EmployeesController.create");
    Route.put("/", "EmployeesController.update");
    Route.delete("/", "EmployeesController.destroy");
  }).prefix("/employes");

  Route.group(() => {
    Route.get("/init", "OfficesController.getInit");

    Route.get("/", "OfficesController.getAll");
    Route.post("/", "OfficesController.create");
    Route.put("/", "OfficesController.update");
    Route.delete("/", "OfficesController.destroy");
  }).prefix("/offices");

  Route.group(() => {
    Route.get("/init", "OrderdetailsController.getInit");

    Route.get("/", "OrderdetailsController.getAll");
    Route.post("/", "OrderdetailsController.create");
    Route.put("/", "OrderdetailsController.update");
    Route.delete("/", "OrderdetailsController.destroy");
  }).prefix("/orderdetails");
  
  Route.group(() => {
    Route.get("/init", "PaymentsController.getInit");

    Route.get("/", "PaymentsController.getAll");
    Route.post("/", "PaymentsController.create");
    Route.put("/", "PaymentsController.update");
    Route.delete("/", "PaymentsController.destroy");
 
  }).prefix("/payments");

  Route.group(() => {
    Route.get("/init", "ProductlinesController.getInit");

    Route.get("/", "ProductlinesController.getAll");
    Route.post("/", "ProductlinesController.create");
    Route.put("/", "ProductlinesController.update");
    Route.delete("/", "ProductlinesController.destroy");
  }).prefix("/productlines");

  Route.group(() => {
    Route.get("/init", "ProductsController.getInit");

    Route.get("/", "ProductsController.getAll");
    Route.post("/", "ProductsController.create");
    Route.put("/", "ProductsController.update");
    Route.delete("/", "ProductsController.destroy");
    Route.get('/products/most-requested', 'ProductController.getMostRequested');

  }).prefix("/products");


  





}).prefix("api");
