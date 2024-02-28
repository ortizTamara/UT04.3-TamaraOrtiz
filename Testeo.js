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
} from "./exceptions.js";

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

  const location2 = new Coordinate(38.9861, -3.927);
  const restaurant1 = new Restaurant(
    "Restaurante Pepa",
    "Restaurante del pueblo",
    location2
  );
  console.log("");
  console.log("---------- TESTEO CATEGORÍA ----------");
  const category1 = new Category("Entrante", "Categoría entrantes");
  const category2 = new Category("Postre", "Categoría de postres");

  // AÑADIMOS CAGETORÍA - Problema: no puedo añadir dos categorías a la vez
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
    const menu3 = new Menu("Menú 3", "Menú de Navidad");

    manager.addCategory(menu3);
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
    const category4 = new Category("Sushi", "Categoría de sushi");

    manager.addMenu(category4);
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
    console.log("Categoría eliminada con éxito");
  } catch (error) {
    console.log("Error al eliminar categoría:");
    console.error(error);
  }

  console.log("");
  console.log("---------- TESTEO ALLERGEN ----------");
  const allergen1 = new Allergen("Gluten", "Contiene gluten");
  const allergen2 = new Allergen("Lactosa", "Contiene lactosa");
  // AÑADIMOS MENÚ
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
    const category4 = new Category("Sushi", "Categoría de sushi");

    manager.addAllergen(category4);
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

  // AQUÍ HACEMOS AHORA PRUEBAS DE ERROR

  console.log("");
  console.log("---------- TESTEO RESTAURANT ----------");
  // AQUÍ HACEMOS AHORA PRUEBAS DE ERROR
}

testeoDish();
testeoCategory();
testeoAllergen();
testeoRestaurante();
testeoRestaurantsManager();
