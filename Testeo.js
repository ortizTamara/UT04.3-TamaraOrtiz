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
  const manager = new RestaurantsManager();
  const category1 = new Category("Entrante", "Categoría entrantes");
  const category2 = new Category("Postre", "Categoría de postres");
  const menu1 = new Menu("Menú 1", "Menú especial del día");
  const location2 = new Coordinate(38.9861, -3.927);
  const restaurant1 = new Restaurant(
    "Restaurante Pepa",
    "Restaurante del pueblo",
    location2
  );

  // AÑADIMOS CAGETORÍA - Problema: no puedo añadir dos categorías a la vez
  console.log("Añadiendo categorías al manager...");
  console.log("category1:", category1);
  // console.log("category2:", category2);

  try {
    manager.addCategory(category1);
    console.log("Categorías añadidas con éxito");
  } catch (error) {
    console.error("Error al añadir categorías:", error);
  }

  // AÑADIMOS MENÚ
  console.log(menu1.toString());
  console.log("Añadiendo menú al manager...");
  console.log("menu1:", menu1);
  try {
    manager.addMenu(menu1);
    console.log("Menú añadido con éxito");
  } catch (error) {
    console.error("Error al añadir menú:", error);
  }

  // AÑADIMOS RESTAURANTE
  // console.log("Añadiendo restaurante al manager...");
  // console.log("restaurant1:", restaurant1);

  // try {
  //   manager.addRestaurant(restaurant1);
  //   console.log("Restaurante añadido con éxito");
  // } catch (error) {
  //   console.error("Error al añadir restaurante:", error);
  // }

  // Imprimimos las categorías usando el ITERADOR
  // console.log("Iterador de Categorías - Después de añadir");
  // for (const category of manager.categories) {
  //   console.log(category.toString());
  // }

  // Imprimimos los menús usando el ITERADOR
  console.log("Iterador de Menús - Después de añadir");
  for (const menu of manager.menus) {
    console.log(menu.toString());
  }

  // Imprimimos los restaurantes usando el ITERADOR
  // console.log("Iterador de Restaurantes - Después de añadir");
  // for (const restaurant of manager.restaurants) {
  //   console.log(restaurant.toString());
  // }
}

testeoDish();
testeoCategory();
testeoAllergen();
testeoRestaurante();
testeoRestaurantsManager();
