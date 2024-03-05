import {
  BaseException,
  InvalidAccessConstructorException,
  EmptyValueException,
  InvalidValueException,
  AbstractClassException,
  NameException,
  LatitudeException,
  LongitudeException,
  ManagerException,
  CategoryExistsException,
  CategoryIsNull,
  CategoryNotRegistred,
  MenuExistsException,
  MenuIsNull,
  MenuNotRegistred,
  AllergenExistsException,
  AllergenIsNull,
  AllergenNotRegistred,
  DishExistsException,
  DishIsNull,
  DishNotRegistred,
  RestaurantExistsException,
  RestaurantIsNull,
  RestaurantNotRegistred,
  CategoryAssignDishException,
  CategoryNullException,
  DishNullException,
  DishAssignAllergenException,
  DishAssignMenuException,
} from "./Exceptions.js";

import { Dish } from "./dish.js";
import { Category } from "./category.js";
import { Allergen } from "./allergen.js";
import { Menu, Restaurant, Coordinate } from "./Restaurante.js";
import { RestaurantsManager } from "./RestaurantsManager.js";

//TESTEO DISH
function testeoDish() {
  console.log("---------- TESTEO DISH ----------");
  // Dish correcto
  const dish1 = new Dish(
    "Pizza",
    "La mejor pizza del mundo",
    ["Tomate", "Queso", "Peperoni", "Oregano"],
    "pizza1.jpg"
  );

  // Prueba 1: Mostramos el nombre
  console.log("Test 1: Nombre");
  console.log("Esperado: Pizza");
  console.log("Resultado:", dish1.name);

  // Prueba 2: Mostramos la descripción
  console.log("Test 2: Descripción");
  console.log("Esperado: La mejor pizza del mundo");
  console.log("Resultado:", dish1.description);

  // Prueba 3: Mostramos los ingredientes
  console.log("Test 3: Ingredientes");
  console.log("Esperado: ['Tomate', 'Queso', 'Peperoni', 'Oregano']");
  console.log("Resultado:", dish1.ingredients);

  // Prueba 4: Mostramos la "imagen"
  console.log("Test 4: Imagen");
  console.log("Esperado: pizza1.jpg");
  console.log("Resultado:", dish1.image);

  // Prueba 5: Mostramos el toString
  console.log("Test 5: ToString");
  console.log(
    "Esperado: Pizza - La mejor pizza del mundo - Tomate,Queso,Peperoni,Oregano - pizza1.jpg"
  );
  console.log("Resultado:", dish1.toString());

  //Error: Name es Null
  try {
    const dish2 = new Dish(
      null,
      "La mejor carbonara de Italia"[
        ("espaguetis", "beicon", "Yema de huevo", "Queso")
      ],
      "espaguetis1.jpg"
    );

    // Prueba 6: Mostramos la excepción
    console.log("Test 6: Nombre null");
    console.log("Esperado: Error, hay una excepción");
    console.log("Resultado:", dish2.name);
  } catch (error) {
    console.error(error);
  }
}

function testeoCategory() {
  console.log("");
  console.log("---------- TESTEO CATEGORY ----------");

  const category1 = new Category("Pizza", "Categoría de pizzas");

  // Prueba 1: Mostramos el nombre
  console.log("Test 1: Nombre");
  console.log("Esperado: Pizza");
  console.log("Resultado:", category1.name);

  //   Prueba 2: Mostramos la descripción
  console.log("Test 2: Descripción");
  console.log("Esperado: Categoría de pizzas");
  console.log("Resultado:", category1.description);

  //   Prueba 3: Mostramos el ToString
  console.log("Test 3: ToString");
  console.log("Esperado: Pizza - Categoría de pizzas");
  console.log("Resultado:", category1.toString());

  //Error: Name es Null
  try {
    const category2 = new Category(null, "Categoría de pasta");
    // Prueba 4: Mostramos la excepción
    console.log("Test 4: Nombre null");
    console.log("Esperado: Error, hay una excepción");
    console.log("Resultado:", category2.name);
  } catch (error) {
    console.error(error);
  }
}

function testeoAllergen() {
  console.log("");
  console.log("---------- TESTEO ALLERGEN ----------");

  const allergen1 = new Allergen("Gluten", "Contiene gluten");

  // Prueba 1: Mostramos el nombre
  console.log("Test 1: Nombre");
  console.log("Esperado: Gluten");
  console.log("Resultado:", allergen1.name);
  //   Prueba 2: Mostramos la descripción
  console.log("Test 2: Descripción");
  console.log("Esperado: Contiene gluten");
  console.log("Resultado::", allergen1.description);

  //   Prueba 3: Mostramos el ToString
  console.log("Test 3: ToString");
  console.log("Esperado: Gluten - Contiene gluten");
  console.log("Resultado:", allergen1.toString());

  //   DUDA PORQUE AQUÍ EN CONSOLA NO ME SALE EN ROJO
  //Error: Name es Null
  try {
    const allergen2 = new Allergen(null, "Contiene gluten");
    // Prueba 4: Mostramos la excepción
    console.log("Test 4: Nombre null");
    console.log("Esperado: Error, hay una excepción");
    console.log("Resultado:", allergen2.name);
  } catch (error) {
    console.log(error);
  }
}

function testeoRestaurante() {
  console.log("");
  console.log("---------- TESTEO RESTAURANTE - MENÚ  ----------");
  const menu1 = new Menu(
    "Especial de la Casa",
    "Descubre nuestro exclusivo menú con platos únicos y especiales."
  );

  // Prueba 1: Mostramos el nombre
  console.log("Test 1: Nombre");
  console.log("Esperado: Especial de la Casa");
  console.log("Resultado:", menu1.name);

  //   Prueba 2: Mostramos la descripción
  console.log("Test 2: Descripción");
  console.log(
    "Esperado: Descubre nuestro exclusivo menú con platos únicos y especiales"
  );
  console.log("Resultado:", menu1.description);

  //   Prueba 3: Mostramos el ToString
  console.log("Test 3: ToString");
  console.log(
    "Esperado: Especial de la Casa - Descubre nuestro exclusivo menú con platos únicos y especiales"
  );
  console.log("Resultado:", menu1.toString());

  //Error: Name es Null
  try {
    const menu2 = new Menu(
      null,
      "Deliciosas opciones para disfrutar en la hora del desayuno."
    );
    // Prueba 4: Mostramos la excepción
    console.log("Test 4: Nombre null");
    console.log("Esperado: Error, hay una excepción");
  } catch (error) {
    console.log(error);
  }

  console.log("");
  console.log("---------- TESTEO RESTAURANTE - RESTAURANTE  ----------");

  const location1 = new Coordinate(38.9861, -3.927);
  const restaurante1 = new Restaurant(
    "Guridi",
    "Restaurante famoso por su gastronomía",
    location1
  );

  // Prueba 1: Mostramos el nombre
  console.log("Test 1: Nombre");
  console.log("Esperado: Guridi");
  console.log("Resultado:", restaurante1.name);
  //   Prueba 2: Mostramos la descripción
  console.log("Test 2: Descripción");
  console.log("Esperado: Restaurante famoso por su gastronomia");
  console.log("Resultado:", restaurante1.description);
  //   Prueba 3: Mostramos la coordenadas
  console.log("Test 3: Coordenadas");
  console.log("Esperado: 38.9861, -3.927");
  console.log("Resultado:", restaurante1.location);
  //   Prueba 4: Mostramos el ToString
  console.log("Test 3: ToString");
  console.log(
    "Esperado: Guiridi - Restaurante famoso por su gastronomía - Ciudad Real"
  );
  console.log("Resultado:", restaurante1.toString());

  //Error: Name es Null
  try {
    const restaurante2 = new Restaurant(
      null,
      "Las mejores hamburguesas",
      "Madrid"
    );
    console.log("Test 5: Nombre null");
    console.log("Esperado: Error, excepción");
    console.log("Resultado:", restaurante2.name);
  } catch (error) {
    console.log(error);
  }

  console.log("");
  console.log("---------- TESTEO RESTAURANTE - Coordinate ----------");

  const coordinate1 = new Coordinate(40.4168, -3.7038);
  // Prueba 1: Mostramos la latitud
  console.log("Test 1: Latitud");
  console.log("Esperado: 38.9861");
  console.log("Resultado: ", coordinate1.latitude);
  // Prueba 2: Mostramos la longitud
  console.log("Test 2: Longitud");
  console.log("Esperado: -3.927");
  console.log("Resultado: ", coordinate1.longitude);
  // Prueba 3: Mostramos el ToString
  console.log("Test 3: ToString");
  console.log("Esperado: 40.4168, -3.7038");
  console.log("Resultado: ", coordinate1.toString());

  try {
  } catch (error) {
    console.log(error);
  }
}

function testeoRestaurantsManager() {
  console.log("");
  console.log("---------- TESTEO RESTAURANTS MANAGER ----------");
  const manager = new RestaurantsManager();

  console.log("");
  console.log("---------- TESTEO CATEGORÍA ----------");
  const category1 = new Category("Entrante", "Categoría entrantes");
  const category2 = new Category("Postre", "Categoría de postres");

  // AÑADIMOS CAGETORÍA
  console.log("TEST 1: Añadiendo Categoría");
  console.log("Añadiendo categorías al manager...");
  console.log("category1:", category1);
  console.log("category2:", category2);

  try {
    manager.addCategory(category1, category2);
    console.log("Categorías añadidas con éxito");
  } catch (error) {
    console.error("Error al añadir categorías:", error);
  }

  // Imprimimos las categorías usando el ITERADOR
  console.log("Iterador de Categorías - Después de añadir");
  for (const category of manager.categories) {
    console.log(category.toString());
  }

  console.log("");
  console.log("TEST 2: Eliminando Categoría");
  // ELIMINAMOS UNA CATEGORÍA
  console.log("Eliminando categoría...");
  try {
    manager.removeCategory(category1);
    console.log("Categoría eliminada con éxito");
  } catch (error) {
    console.error("Error al eliminar categoría:");
    console.log(error);
  }

  // Imprimimos las categorías usando el ITERADOR, después de eliminar
  console.log("Iterador de Categorías - Después de eliminar");
  for (const category of manager.categories) {
    console.log(category.toString());
  }

  console.log("");
  console.log("TEST 3: Name is Null");
  // AQUÍ HACEMOS AHORA PRUEBAS DE ERROR
  //ERROR: name es Null
  try {
    const category3 = new Category(null, "Categoría de pasta");

    manager.addCategory(category3);
    console.log("Categorías añadidas con éxito");
  } catch (error) {
    console.log("Error al añadir categorías:");
    console.error(error);
  }

  console.log("");
  console.log("TEST 4: No es un Objeto Category");
  // ERROR: no es un objeto Category
  try {
    const category4 = new Menu("Sushi", "Categoría de sushi");

    manager.addCategory(category4);
    console.log("Categorías añadidas con éxito");
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 5: Categoría ya existe");
  //ERROR: La categoría ya existe
  try {
    manager.addCategory(category2);
    console.log("Categorías añadidas con éxito");
  } catch (error) {
    console.log("Error al añadir categorías:");
    console.error(error);
  }

  console.log("");
  console.log("TEST 6: Categoría no esta registrada");
  //ERROR: La categoría no esta registrada
  try {
    const category4 = new Category("Boloñesa", "Categoría de pasta");
    manager.removeCategory(category4);
    console.log("Categoría eliminada con éxito");
  } catch (error) {
    console.log("Error al eliminar categoría:");
    console.error(error);
  }

  console.log("");
  console.log("---------- TESTEO MENÚ ----------");
  const menu1 = new Menu("Menú 1", "Menú especial del día");
  const menu2 = new Menu("Menú 2", "Menú de la abuela");

  // AÑADIMOS MENÚ
  console.log("TEST 1: Añadiendo Menú");
  console.log("Añadiendo menús al manager...");
  console.log("menu1:", menu1);
  console.log("menu2:", menu2);
  try {
    manager.addMenu(menu1, menu2);
    console.log("Menú añadido con éxito");
  } catch (error) {
    console.error("Error al añadir menú:", error);
  }

  // Imprimimos los menús usando el ITERADOR
  console.log("Iterador de Menús - Después de añadir");
  for (const menu of manager.menus) {
    console.log(menu.toString());
  }

  console.log("");
  console.log("TEST 2: Eliminando menú");
  // BORRAMOS UN MENÚ
  console.log("Eliminando menú...");
  try {
    manager.removeMenu(menu1);
    console.log("Menú eliminado con éxito");
  } catch (error) {
    console.error("Error al eliminar menú:");
    console.log(error);
  }

  // Imprimimos los menús usando el ITERADOR, después de eliminar
  console.log("Iterador de Menús - Después de eliminar");
  for (const menu of manager.menus) {
    console.log(menu.toString());
  }

  // AQUÍ HACEMOS AHORA PRUEBAS DE ERROR
  console.log("");
  console.log("TEST 3: Name is Null");
  //Error: Name es Null
  try {
    const menu4 = new Menu(null, "Menú especial navidad");

    manager.addMenu(menu4);
    console.log("Categorías añadidas con éxito");
  } catch (error) {
    console.log("Error al añadir menú:");
    console.error(error);
  }

  console.log("");
  console.log("TEST 4: No es un objeto Menú");
  // ERROR: no es un objeto Menu
  try {
    const menu4 = new Category("Primeros", "Categoria de primeros");

    manager.addMenu(menu4);
    console.log("Menú añadidas con éxito");
  } catch (error) {
    console.log("Error al añadir menú:");
    console.error(error);
  }

  console.log("");
  console.log("TEST 5: Menú ya existe");
  //Error: La menú ya existe
  try {
    manager.addMenu(menu2);
    console.log("Menu añadidas con éxito");
  } catch (error) {
    console.log("Error al añadir Menu:");
    console.error(error);
  }

  console.log("");
  console.log("TEST 6: Menú no esta registrado");
  //ERROR: La menú no esta registrada
  try {
    const menu5 = new Menu("Menú 5", "Menú especial fería");
    manager.removeMenu(menu5);
    console.log("Menu eliminada con éxito");
  } catch (error) {
    console.log("Error al eliminar Menu:");
    console.error(error);
  }

  console.log("");
  console.log("---------- TESTEO ALLERGEN ----------");
  const allergen1 = new Allergen("Gluten", "Contiene gluten");
  const allergen2 = new Allergen("Lactosa", "Contiene lactosa");
  // AÑADIMOS ALLERGEN
  console.log("TEST 1: Añadiendo Allergen");
  console.log("Añadiendo alergenos al manager...");
  console.log("allergen1:", allergen1);
  console.log("allergen2:", allergen2);
  try {
    manager.addAllergen(allergen1, allergen2);
    console.log("Allergen añadido con éxito");
  } catch (error) {
    console.error("Error al añadir Allergen:", error);
  }

  // Imprimimos los menús usando el ITERADOR
  console.log("Iterador de Allergen - Después de añadir: ");
  for (const allergen of manager.allergens) {
    console.log(allergen.toString());
  }

  console.log("");
  console.log("TEST 2: Eliminando Allergen");
  // BORRAMOS UN MENÚ
  console.log("Eliminando Allergen...");
  try {
    manager.removeAllergen(allergen2);
    console.log("Allergen eliminado con éxito");
  } catch (error) {
    console.error("Error al eliminar Allergen:");
    console.log(error);
  }

  // Imprimimos los menús usando el ITERADOR, después de eliminar
  console.log("Iterador de Allergen - Después de eliminar: ");
  for (const allergen of manager.allergens) {
    console.log(allergen.toString());
  }

  // AQUÍ HACEMOS AHORA PRUEBAS DE ERROR
  console.log("");
  console.log("TEST 3: Name is Null");
  //Error: Name es Null
  try {
    const allergen3 = new Allergen(null, "Contiene cacahuete");

    manager.addAllergen(allergen3);
    console.log("Allergen añadidas con éxito");
  } catch (error) {
    console.log("Error al añadir Allergen:");
    console.error(error);
  }

  console.log("");
  console.log("TEST 4: No es un objeto Allergen");
  // ERROR: no es un objeto Allergen
  try {
    const allergen4 = new Category("Primeros", "Categoria de primeros");
    manager.addAllergen(allergen4);
    console.log("Allergen añadidas con éxito");
  } catch (error) {
    console.log("Error al añadir Allergen:");
    console.error(error);
  }

  console.log("");
  console.log("TEST 5: Allergen ya existe");
  //Error: Allergen ya existe
  try {
    manager.addAllergen(allergen1);
    console.log("Allergen añadidas con éxito");
  } catch (error) {
    console.log("Error al añadir Allergen:");
    console.error(error);
  }

  console.log("");
  console.log("TEST 6: Allergen no esta registrado");
  //ERROR: Allergen no esta registrada
  try {
    const allergen4 = new Allergen("Maní", "Contiene cacahuete");
    manager.removeAllergen(allergen4);
    console.log("Allergen eliminado con éxito");
  } catch (error) {
    console.log("Error al eliminar Allergen:");
    console.log(error);
  }

  console.log("");
  console.log("---------- TESTEO DISH ----------");
  const dish1 = new Dish(
    "Pizza Peperoni",
    "La mejor pizza del mundo",
    ["Tomate", "Queso", "Peperoni", "Oregano"],
    "pizza1.jpg"
  );

  const dish2 = new Dish(
    "Pasta Carbonara",
    "La mejor carbonara de Italia"[
      ("espaguetis", "beicon", "Yema de huevo", "Queso")
    ],
    "espaguetis1.jpg"
  );

  // AÑADIMOS PLATO
  console.log("TEST 1: Añadiendo Plato");
  console.log("Añadiendo menús al manager...");
  console.log("plato1:", dish1);
  console.log("plato2:", dish2);

  try {
    manager.addDish(dish1, dish2);
    console.log(dish1.name, "y", dish2.name, "añadido con éxito");
  } catch (error) {
    console.error("Error al añadir Plato:", error);
  }

  console.log("");
  console.log("TEST 2: Borrando Plato");
  // BORRAMOS PLATO
  console.log("Eliminando plato...");
  try {
    manager.removeDish(dish1);
    console.log(dish1.name, "eliminado con éxito");
  } catch (error) {
    console.error("Error al eliminar plato:");
    console.log(error);
  }

  // AQUÍ HACEMOS AHORA PRUEBAS DE ERROR
  console.log("");
  console.log("TEST 3: Name is null");
  try {
    const dish3 = new Dish(
      null,
      "Los mejores macarrones estudiantil"[
        ("macarrones", "beicon", "salchichas", "Tomate", "Queso")
      ],
      "macarrones1.jpg"
    );

    manager.addDish(dish3);
    console.log("plato añadido con éxito");
  } catch (error) {
    console.log("Error al añadir plato:");
    console.error(error);
  }

  console.log("");
  console.log("TEST 4: No es un objeto Dish");
  try {
    const dish4 = new Allergen("Gluten", "Contiene gluten");
    manager.addDish(dish4);
    console.log("plato añadido con éxito");
  } catch (error) {
    console.log("Error al añadir plato:");
    console.error(error);
  }

  console.log("");
  console.log("TEST 5: Plato ya existe");
  try {
    manager.addDish(dish2);
    console.log("plato añadido con éxito");
  } catch (error) {
    console.log("Error al añadir plato:");
    console.error(error);
  }

  console.log("");
  console.log("TEST 6: plato no esta registrado");
  console.log("Eliminando plato...");
  try {
    const dish4 = new Dish(
      "macarrones",
      "Los mejores macarrones estudiantil"[
        ("macarrones", "beicon", "salchichas", "Tomate", "Queso")
      ],
      "macarrones1.jpg"
    );

    manager.removeDish(dish4);
    console.log(dish4.name, "eliminado con éxito");
  } catch (error) {
    console.error("Error al eliminar plato:");
    console.log(error);
  }

  console.log("");
  console.log("---------- TESTEO RESTAURANT ----------");

  const location1 = new Coordinate(38.9861, -3.927);
  const location2 = new Coordinate(39.4702, -0.3768);
  const restaurant1 = new Restaurant(
    "Guridi",
    "Restaurante famoso por su gastronomía",
    location1
  );

  const restaurant2 = new Restaurant(
    "La Pepica",
    "Famoso por su paella",
    location2
  );

  console.log("");
  console.log("TEST 1: añadiendo Restaurant");
  try {
    manager.addRestaurant(restaurant1, restaurant2);
    console.log("Restaurantes añadidos con éxito");
  } catch (error) {
    console.log("Error al añadir Allergen:");
    console.log(error);
  }

  // Imprimimos las Restaurants usando el ITERADOR
  console.log("Iterador de Restaurants - Después de añadir");
  for (const restaurant of manager.restaurants) {
    console.log(restaurant.toString());
  }

  console.log("");
  console.log("TEST 2: Eliminando Restaurant");
  // BORRAMOS UN RESTAURANTE
  console.log("Eliminando Restaurant...");
  try {
    manager.removeRestaurant(restaurant1);
    console.log("Restaurante eliminado con éxito");
  } catch (error) {
    console.error("Error al eliminar Restaurante:");
    console.log(error);
  }

  // Imprimimos las Restaurants usando el ITERADOR
  console.log("Iterador de Restaurants - Después de borrar");
  for (const restaurant of manager.restaurants) {
    console.log(restaurant.toString());
  }

  // AQUÍ HACEMOS AHORA PRUEBAS DE ERROR
  console.log("");
  console.log("TEST 3: Name is Null");

  //Error: Name es Null
  try {
    const restaurant3 = new Restaurant(null, "Famoso por su paella", location2);

    manager.addRestaurant(restaurant3);
    console.log("Restaurante añadido con éxito");
  } catch (error) {
    console.log("Error al añadir Restaurante:");
    console.error(error);
  }

  console.log("");
  console.log("TEST 4: No es un objeto Restaurant");
  // ERROR: no es un objeto Restaurant
  try {
    const restaurant4 = new Category("Primeros", "Categoria de primeros");
    manager.addRestaurant(restaurant4);
    console.log("Restaurante añadido con éxito");
  } catch (error) {
    console.log("Error al añadir Restaurante:");
    console.error(error);
  }

  console.log("");
  console.log("TEST 5: Restaurant ya existe");
  //Error: Restaurant ya existe
  try {
    manager.addRestaurant(restaurant2);
    console.log("Restaurante añadido con éxito");
  } catch (error) {
    console.log("Error al añadir Restaurante:");
    console.error(error);
  }

  console.log("");
  console.log("TEST 6: Restaurant no esta registrado");
  //ERROR: Restaurant no esta registrada
  try {
    const restaurant5 = new Restaurant(
      "Juanito",
      "Famoso por asado",
      location2
    );

    manager.removeRestaurant(restaurant5);
    console.log("Restaurante eliminado con éxito");
  } catch (error) {
    console.log("Error al eliminar Restaurante:");
    console.log(error);
  }
}

function testeoAssignAndDesign() {
  const manager = new RestaurantsManager();

  const category5 = new Category("Entrante", "Categoría de entrantes");
  const category6 = new Category("Comida", "Categoría de comida");
  const category7 = new Category("Postre", "Categoría para postres");
  const category8 = new Category("Cena", "Categoría para cena");
  const dish5 = new Dish(
    "Croquetas",
    "Croquetas caseras de jamón",
    ["jamón", "bechamel", "pan rallado"],
    "croquetas1.jpg"
  );
  const dish6 = new Dish(
    "Tortilla de Patatas",
    "Tortilla de Patatas autentica",
    ["patata", "huevo", "cebolla"],
    "tortilla1.jpg"
  );
  const dish7 = new Dish(
    "Paella Valenciana",
    "Plato tradicional de Valencia con arroz, pollo, y azafrán.",
    ["arroz", "pollo", "azafrán"],
    "paella_valenciana1.jpg"
  );

  const dish8 = new Dish(
    "Flan de huevo",
    "Un postre tradicional a base de huevo",
    ["huevo", "leche", "azúcar"],
    "flan1.jpg"
  );
  const dish9 = new Dish(
    "Pisto",
    "Un guiso tradicional de verduras",
    ["tomate", "pimiento", "calabacín", "cebolla", "ajo", "sal"],
    "pisto1.jpg"
  );
  console.log("");
  console.log("---------- TESTEO ASIGNACIÓN PLATO A CATEGORÍA  ----------");

  // Lo añadimos a Category
  console.log("Añadiendo categoría...");
  try {
    manager.addCategory(category5);
    console.log("Categorías añadidas con éxito");
  } catch (error) {
    console.error("Error al añadir categorías:", error);
  }

  console.log("Iterador de Categorías - Después de añadir:");
  for (const category of manager.categories) {
    console.log(category.toString());
  }

  // Lo añadimos a Dish
  console.log("Añadiendo platos...");
  try {
    manager.addDish(dish5, dish6);
    console.log("Añadido con éxito:", dish5.toString());
    console.log("Añadido con éxito:", dish6.toString());
  } catch (error) {
    console.error("Error al añadir Plato:", error);
  }

  console.log("");
  console.log("TEST 1: Asignando plato a categoría");
  try {
    // console.log(manager.getCategories());
    manager.assignCategoryToDish(category5, dish5);
    console.log("Asignación exitosa:", category5.name, "tiene", dish5.name);
  } catch (error) {
    console.error("Error en la asignación:", error);
  }

  // Objeto Category no existe, lo añadimos al sistema
  console.log("");
  console.log("TEST 2: Asignando plato a categoría - Categoría no existe");
  try {
    // console.log(manager.getCategories());
    manager.assignCategoryToDish(category6, dish6);
    console.log("Asignación exitosa:", category6.name, "tiene", dish6.name);
  } catch (error) {
    console.error("Error en la asignación:", error);
  }
  console.log("");
  console.log("Iterador de Categorías:");
  for (const category of manager.categories) {
    console.log(category.toString());
  }

  // Objeto Dish no existe, lo añadimos al sistema
  console.log("");
  console.log("TEST 3: Asignando plato a categoría - Plato no existe");
  try {
    // console.log(manager.getCategories());
    manager.assignCategoryToDish(category6, dish7);
    console.log("Asignación exitosa:", category6.name, "tiene", dish7.name);
  } catch (error) {
    console.error("Error en la asignación:", error);
  }

  // AQUÍ HACEMOS AHORA PRUEBAS DE ERROR
  console.log("");
  console.log("TEST 4: Category es null");
  // ERROR: Category es null
  try {
    manager.assignCategoryToDish(null, dish6);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 5: Dish es null");
  try {
    manager.assignCategoryToDish(category7, null);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("Iterador de Categorías - Comprobación de excepción:");
  for (const category of manager.categories) {
    console.log(category.toString());
  }

  console.log("");
  console.log("---------- TESTEO DESIGNACIÓN PLATO DE CATEGORÍA  ----------");
  console.log("TEST 5: Designar plato de categoría");
  console.log("Designando...");
  try {
    // console.log(manager.getCategories());
    manager.deassignCategoryToDish(category5, dish5);
    console.log(
      "Designación exitosa:",
      category5.name,
      "ya no tiene",
      dish5.name
    );
  } catch (error) {
    console.error("Error en la Designación:", error);
  }

  console.log("");
  console.log("TEST 6: Designar plato de categoría");
  console.log("Designando...");
  try {
    console.log(manager.getCategories());
    manager.deassignCategoryToDish(category6, dish6);
    console.log(
      "Designación exitosa:",
      category6.name,
      "ya no tiene",
      dish6.name
    );
  } catch (error) {
    console.error("Error en la Designación:", error);
  }

  // AQUÍ HACEMOS AHORA PRUEBAS DE ERROR
  console.log("");
  console.log("TEST 7: Categoría es null");
  try {
    manager.deassignCategoryToDish(null, dish6);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 8: Categoría no esta registrada");
  // ERROR: Categoría no registrada
  try {
    manager.deassignCategoryToDish(category8, dish7);
    console.log("Designación exitosa:", dish7.name, "->", category8.name);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 8: Plato no esta registrada");
  // ERROR: Plato no registrado
  try {
    manager.deassignCategoryToDish(category7, dish8);
    console.log("Designación exitosa:", dish8.name, "->", category7.name);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 9: Plato no esta asignado a esa categoría");
  // ERROR: Designación de plato erroneo, es decir, que no esta en esa categoría.
  try {
    manager.deassignCategoryToDish(category5, dish6);
    console.log(
      "Designación exitosa:",
      category5.name,
      "ya no tiene",
      dish6.name
    );
  } catch (error) {
    console.error(error);
  }

  // Comprobamos el Iterador de Categorías
  console.log("");
  console.log("Iterador de Categorías - Comprobación después de excepción:");
  for (const category of manager.categories) {
    console.log(category.toString());
  }

  console.log("");
  console.log("---------- TESTEO ASIGNACIÓN ALERGENO A PLATO  ----------");

  const allergen1 = new Allergen("Gluten", "Contiene gluten");
  const allergen2 = new Allergen("Cacahuete", "Contiene cacahuete");
  const allergen3 = new Allergen("Pimiento", "Contiene pimiento");
  const dish10 = new Dish(
    "Pizza",
    "La mejor pizza del mundo",
    ["Tomate", "Queso", "Peperoni", "Oregano"],
    "pizza1.jpg"
  );
  const dish11 = new Dish(
    "Pollo con Salsa de Cacahuate",
    "Delicioso pollo bañado en una salsa de cacahuate",
    ["Pollo", "Cacahuate", "Salsa de Soja", "Ajo", "Cebolla", "Pimiento"],
    "pollo_cacahuate.jpg"
  );

  // Lo añadimos a Dish
  console.log("Añadiendo platos...");
  try {
    manager.addDish(dish10);
    console.log("Añadido con éxito:", dish10.toString());
  } catch (error) {
    console.error("Error al añadir Plato:", error);
  }

  console.log("Añadiendo alergenos...");
  try {
    manager.addAllergen(allergen1, allergen2);
    console.log("Alergenos añadido con éxito");
  } catch (error) {
    console.error("Error al añadir alergeno:", error);
  }
  // Imprimimos los menús usando el ITERADOR
  console.log("Iterador de Allergen - Después de añadir: ");
  for (const allergen of manager.allergens) {
    console.log(allergen.toString());
  }

  console.log("");
  console.log("TEST 1: Asignando alergeno a plato");
  try {
    // console.log(manager.getDish());
    manager.assignAllergenToDish(dish10, allergen1);
    console.log("Asignación exitosa:", allergen1.name, "->", dish10.name);
  } catch (error) {
    console.error("Error en la asignación:", error);
  }

  // Objeto Category no existe, lo añadimos al sistema
  console.log("");
  console.log("TEST 2: Asignando alergeno a plato - plato no existe");
  try {
    // console.log(manager.getDish());
    manager.assignAllergenToDish(dish11, allergen2);
    console.log(
      "Asignación exitosa:",
      dish11.name,
      "contiene alergeno:",
      allergen2.name
    );
  } catch (error) {
    console.error("Error en la asignación:", error);
  }

  // Objeto Dish no existe, lo añadimos al sistema
  console.log("");
  console.log("TEST 3: Asignando alergeno a plato - alergeno no existe");
  try {
    // console.log(manager.getDish());
    manager.assignAllergenToDish(dish11, allergen3);
    console.log(
      "Asignación exitosa:",
      dish11.name,
      "contiene alergeno:",
      allergen3.name
    );
  } catch (error) {
    console.error("Error en la asignación:", error);
  }

  // AQUÍ HACEMOS AHORA PRUEBAS DE ERROR
  console.log("");
  console.log("TEST 4: alergeno es null");
  // ERROR: Category es null
  try {
    manager.assignAllergenToDish(dish11, null);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 5: plato es null");
  try {
    manager.assignAllergenToDish(null, allergen3);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("---------- TESTEO DESIGNACIÓN ALERGENO DE PLATO  ----------");
  console.log("TEST 6: Designar alergeno de plato");
  console.log("Designando...");
  try {
    console.log(manager.getDish());
    manager.deassignAllergenToDish(dish10, allergen1);
    console.log(
      "Designación exitosa:",
      dish10.name,
      "ya no tiene",
      allergen1.name
    );
  } catch (error) {
    console.error("Error en la Designación:", error);
  }

  console.log("");
  console.log("TEST 7: Designar alergeno de plato");
  console.log("Designando...");
  try {
    // console.log(manager.getCategories());
    manager.deassignAllergenToDish(dish11, allergen3);
    console.log(
      "Designación exitosa:",
      dish11.name,
      "ya no tiene",
      allergen3.name
    );
  } catch (error) {
    console.error("Error en la Designación:", error);
  }

  // AQUÍ HACEMOS AHORA PRUEBAS DE ERROR
  console.log("");
  console.log("TEST 8: plato es null");
  try {
    manager.deassignAllergenToDish(null, allergen2);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 9: Plato no esta registrada");
  // ERROR: plato no registrada
  try {
    manager.deassignAllergenToDish(dish9, allergen2);
    console.log(
      "Designación exitosa:",
      dish9.name,
      "ya no tiene",
      allergen2.name
    );
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 10: Alergeno es nulo");
  // ERROR: alergeno es null
  try {
    manager.deassignAllergenToDish(dish11, null);
    // console.log("Designación exitosa:", dish11.name, "ya no tiene", category7.name);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 11: Alergeno no esta registrada");
  // ERROR: alergeno no registrado
  try {
    manager.deassignAllergenToDish(dish11, allergen3);
    console.log(
      "Designación exitosa:",
      dish11.name,
      "ya no tiene",
      allergen3.name
    );
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 12: Alergeno no esta asignado a ese plato");
  // ERROR: Designación de alergeno erroneo, es decir, que no esta en esa categoría.
  try {
    manager.deassignAllergenToDish(dish10, allergen2);
    console.log(
      "Designación exitosa:",
      dish10.name,
      "ya no tiene",
      allergen2.name
    );
  } catch (error) {
    console.error(error);
  }

  // Comprobamos el Iterador de Alergenos
  console.log("");
  console.log("Iterador de Alergenos - Comprobación después de excepción:");
  for (const allergen of manager.allergens) {
    console.log(allergen.toString());
  }

  console.log("");
  console.log("---------- TESTEO ASIGNACIÓN PLATO A MENU  ----------");

  const menu1 = new Menu("Menú 1", "Menú especial del día");
  const menu2 = new Menu("Menú 2", "Menú de la abuela");
  const menu3 = new Menu("Menú 3", "Menú del finde");

  // AÑADIMOS MENÚ
  console.log("Añadiendo Menú");
  console.log("Añadiendo menús al manager...");
  console.log("menu1:", menu1);
  console.log("menu2:", menu2);
  try {
    manager.addMenu(menu2);
    console.log("Menú añadido con éxito");
  } catch (error) {
    console.error("Error al añadir menú:", error);
  }

  // Imprimimos los menús usando el ITERADOR
  console.log("Iterador de Menús - Después de añadir");
  for (const menu of manager.menus) {
    console.log(menu.toString());
  }

  console.log("");
  console.log("TEST 1: Asignando platos a menu");
  try {
    // console.log(manager.getMenu());
    manager.assignDishToMenu(menu2, dish5, dish6, dish8);
    console.log(
      "Asignación exitosa:",
      menu2.name,
      "tiene",
      dish5.name,
      ",",
      dish6.name,
      "y",
      dish8.name
    );
  } catch (error) {
    console.error("Error en la asignación:", error);
  }

  // Objeto Menu no existe, lo añadimos al sistema
  console.log("");
  console.log("TEST 2: Asignando plato a menu - menu no existe");
  try {
    manager.assignDishToMenu(menu1, dish7);
    console.log("Asignación exitosa:", menu1.name, "tiene", dish7.name);
  } catch (error) {
    console.error("Error en la asignación:", error);
  }

  // Objeto Category no existe, lo añadimos al sistema
  console.log("");
  console.log("TEST 3: Asignando plato a menu - plato no existe");
  try {
    manager.assignDishToMenu(menu1, dish8);
    console.log("Asignación exitosa:", menu1.name, "tiene", dish8.name);
  } catch (error) {
    console.error("Error en la asignación:", error);
  }

  // AQUÍ HACEMOS AHORA PRUEBAS DE ERROR
  console.log("");
  console.log("TEST 4: plato es null");
  // ERROR: Dish es null
  try {
    manager.assignDishToMenu(menu1, null);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 5: menu es null");
  // ERROR: Menu es null
  try {
    manager.assignDishToMenu(null, dish8);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("---------- TESTEO DESIGNACIÓN PLATO DE MENU  ----------");

  console.log("TEST 6: Designar plato de menu");
  console.log("Designando...");
  try {
    console.log(manager.getMenu());
    manager.deassignDishToMenu(menu2, dish5);
    console.log("Designación exitosa:", menu2.name, "ya no tiene", dish5.name);
  } catch (error) {
    console.error("Error en la Designación:", error);
  }

  console.log("");
  console.log("TEST 7: Designar plato de menu");
  console.log("Designando...");
  try {
    manager.deassignDishToMenu(menu1, dish8);
    console.log("Designación exitosa:", menu1.name, "ya no tiene", dish8.name);
  } catch (error) {
    console.error("Error en la Designación:", error);
  }

  // AQUÍ HACEMOS AHORA PRUEBAS DE ERROR
  console.log("");
  console.log("TEST 8: Menu no esta registrada");
  // ERROR: Menu no registrada
  try {
    manager.deassignDishToMenu(menu3, dish7);
    console.log("Designación exitosa:", menu3.name, "ya no tiene", dish7.name);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 9: Plato no esta registrada");
  // ERROR: Plato no registrado
  try {
    manager.deassignDishToMenu(menu1, dish8);
    console.log("Designación exitosa:", menu1.name, "ya no tiene", dish8.name);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 10: Menu es null");
  try {
    manager.deassignDishToMenu(null, dish6);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 11: plato es null");
  try {
    manager.deassignDishToMenu(menu1, null);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 12: Plato no esta asignado al menu");
  // ERROR: Designación de plato erroneo, es decir, que no esta en ese menu.
  try {
    manager.deassignDishToMenu(menu1, dish6);
    console.log("Designación exitosa:", menu1.name, "ya no tiene", dish6.name);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("---------- TESTEO INTERCAMBIO DE POSICIONES  ----------");
  console.log(manager.getMenu());

  console.log("");
  console.log(
    "TEST 1: Intercambio el primer plato(dish8) por el segundo plato(dish6)"
  );
  // Al principio mostramos dish8 y después dish6, para comprobar el cambio comentar el intercambio.
  // Intentar realizar el intercambio de posiciones entre dish6 y dish8 en menu2
  try {
    manager.changeDishesPositionsInMenu(menu2, dish6, dish8);
    console.log(
      "Interambio realizado con éxito entre",
      dish6.name,
      "y",
      dish8.name,
      "en",
      menu2.name
    );
  } catch (error) {
    console.error("Error al intentar intercambiar platos en 'menu2':", error);
  }

  // AQUÍ HACEMOS AHORA PRUEBAS DE ERROR
  console.log("");
  console.log("TEST 2: Menu es null");
  try {
    manager.changeDishesPositionsInMenu(null, dish6, dish8);
  } catch (error) {
    console.error(error);
  }
  console.log("");
  console.log("TEST 2: plato es null");
  try {
    manager.changeDishesPositionsInMenu(menu2, null, dish8);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 3: Menú no esta registrado");
  try {
    const menu10 = new Menu("Menú Postre", "Menu de los mejores postres.");
    manager.changeDishesPositionsInMenu(menu10, dish6, dish8);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 4: Plato no esta registrado");
  try {
    const dish20 = new Dish(
      "Migas",
      "Migas de la mancha.",
      ["pan", "chorizo", "panceta", "pimientos"],
      "migas1.jpg"
    );
    manager.changeDishesPositionsInMenu(menu2, dish20, dish8);
  } catch (error) {
    console.error(error);
  }

  const dish13 = new Dish(
    "Albondigas",
    "PLato de albondigas de la abuela",
    ["Carne picada", "Huevo", "Pan Rallado", "Perejil"],
    "albondigas1.jpg"
  );
  try {
    manager.addDish(dish13);
    console.log(dish13, "añadido con éxito");
  } catch (error) {
    console.error("Error al añadir Plato:", error);
  }

  console.log("");
  console.log("TEST 5: Plato no está asignado en el menú");
  try {
    manager.changeDishesPositionsInMenu(menu2, dish13, dish8);
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("---------- TESTEO ITERADOR PLATOS A UNA CATEGORÍA  ----------");

  console.log("");
  try {
    // console.log(manager.getCategories());
    manager.assignCategoryToDish(category6, dish6);
    console.log("Asignación exitosa:", category6.name, "tiene", dish6.name);
  } catch (error) {
    console.error("Error en la asignación:", error);
  }

  try {
    // console.log(manager.getCategories());
    manager.assignCategoryToDish(category5, dish5);
    console.log("Asignación exitosa:", category5.name, "tiene", dish5.name);
  } catch (error) {
    console.error("Error en la asignación:", error);
  }

  console.log("");
  console.log("TEST 1: Iterador con la relación de los platos a categoría5");
  try {
    for (const dish of manager.getDishesInCategory(category5)) {
      console.log(dish.toString());
    }
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 2: Iterador con la relación de los platos a categoría6");
  try {
    for (const dish of manager.getDishesInCategory(category6)) {
      console.log(dish.toString());
    }
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 3: Categoría no esta registrada");
  try {
    const category10 = new Category("Almuerzo", "Categoría para Almuerzo");
    for (const dish of manager.getDishesInCategory(category10)) {
      console.log(dish.toString());
    }
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 4: Categoría es nula");
  try {
    for (const dish of manager.getDishesInCategory(null)) {
      console.log(dish.toString());
    }
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("---------- TESTEO ITERADOR PLATOS CON UN ALÉRGENO ----------");
  console.log(manager.getDish());
  const dish12 = new Dish(
    "Pad Thai",
    "Plato de fideos tailandés salteados con camarones, tofu, cacahuetes y brotes de soja",
    [
      "Fideos de arroz",
      "Tofu",
      "Cacahuetes triturados",
      "Brotes de soja",
      "Huevo",
      "Lima",
      "Salsa de tamarindo",
    ],
    "pad-thai.jpg"
  );

  try {
    // console.log(manager.getDish());
    manager.assignAllergenToDish(dish12, allergen2);
    console.log(
      "Asignación exitosa:",
      dish12.name,
      "contiene alergeno:",
      allergen2.name
    );
  } catch (error) {
    console.error("Error en la asignación:", error);
  }

  try {
    // console.log(manager.getDish());
    manager.assignAllergenToDish(dish10, allergen1);
    console.log(
      "Asignación exitosa:",
      dish10.name,
      "contiene alergeno:",
      allergen1.name
    );
  } catch (error) {
    console.error("Error en la asignación:", error);
  }

  console.log("");
  console.log("TEST 1: Iterador con platos que contienen allergen1");
  try {
    for (const item of manager.getDishesWithAllergen(allergen3)) {
      console.log(item.dish.toString());
    }
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 2: Iterador con platos que contienen allergen2");
  try {
    for (const item of manager.getDishesWithAllergen(allergen2)) {
      console.log(item.dish.toString());
    }
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 3: Alergeno no esta registrada");
  try {
    const allergen3 = new Allergen("Frutos Secos", "Contiene frutos secos");
    for (const dish of manager.getDishesWithAllergen(allergen3)) {
      console.log(dish.toString());
    }
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 4: alergeno es nula");
  try {
    for (const dish of manager.getDishesWithAllergen(null)) {
      console.log(dish.toString());
    }
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("---------- TESTEO ITERADOR CALLBACK  ----------");
  // FALTA POR TESTEAR FINDDISHES

  console.log("");
  console.log("---------- TESTEO CREACIÓN DE PLATOS ----------");

  // Intentar crear un plato que ya existe
  console.log("");
  console.log("TEST 2: Intentar crear un plato que ya existe");
  try {
    const dish15 = manager.createDish(
      "Gazpacho",
      "Sopa fría de tomate",
      ["tomate", "pepino", "pimiento"],
      "gazpacho.jpg"
    );
    console.log("Manejo correcto de plato duplicado. Plato existente:");
    console.log(dish15.toString());
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("---------- TESTEO CREACIÓN DE MENUS ----------");
  console.log("TEST 1: Crear un menú nuevo");
  try {
    const menu5 = manager.createMenu(
      "Menú Primavera",
      "Una selección de platos ligeros para la primavera"
    );
    console.log(menu5.toString());
  } catch (error) {
    console.error("Error al crear el menú:", error);
  }

  console.log("");
  console.log("TEST 2: Intentar crear un menú que ya existe");
  try {
    const menu5 = manager.createMenu(
      "Menú Primavera",
      "Una selección de platos ligeros para la primavera"
    );
    console.log("Se ha devuelto el menú existente:");
    console.log(menu5.toString());
  } catch (error) {
    console.error(error);
  }
  console.log("");
  console.log("---------- TESTEO CREACIÓN DE ALERGENOS ----------");
  console.log("TEST 1: Crear un alérgeno nuevo");
  try {
    const allergen4 = manager.createAllergen(
      "Pescado",
      "Alergía a todos tipos de pescados"
    );
    console.log(allergen4.toString());
  } catch (error) {
    console.error("Error al crear el alérgeno:", error);
  }

  console.log("");
  console.log("TEST 2: Intentar crear un alérgeno que ya existe");
  try {
    const allergen4 = manager.createAllergen(
      "Pescado",
      "Alergía a todos tipos de pescados"
    );
    console.log("Se ha devuelto el alérgeno existente:");
    console.log(allergen4.toString());
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("---------- TESTEO CREACIÓN DE RESTAURANTE ----------");

  console.log("");
  console.log("TEST 1: Crear un restaurante nuevo");
  const location3 = new Coordinate(38.9861, -3.927);
  try {
    const restaurant5 = manager.createRestaurant(
      "Doña Croqueta",
      "Todo tipo de croquetas",
      location3
    );
    console.log(restaurant5.toString());
  } catch (error) {
    console.error(error);
  }

  console.log("");
  console.log("TEST 2: Intentar crear un restaurante que ya existe");
  try {
    const restaurant5 = manager.createRestaurant(
      "Doña Croqueta",
      "Todo tipo de croquetas",
      location3
    );
    console.log(
      "Se ha devuelto el restaurante existente:",
      restaurant5.toString()
    );
  } catch (error) {
    console.error(error);
  }
}

testeoDish();
testeoCategory();
testeoAllergen();
testeoRestaurante();
testeoRestaurantsManager();
testeoAssignAndDesign();

/*
Asignar platos directamente a categorías y menús, y asignar alérgenos directamente a platos. 
- Cada plato sabe exactamente en qué categoría o categorías se encuentra y que alérgenos tiene.  
- Cada menú conoce los platos que contiene.





*/
