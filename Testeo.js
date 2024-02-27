import {
  BaseException,
  InvalidAccessConstructorException,
  EmptyValueException,
  InvalidValueException,
  AbstractClassException,
  NameException,
  LatitudeException,
  LongitudeException,
} from "./exceptions.js";

import { Dish } from "./dish.js";

//TESTEO DISH
function testeoDish() {
  // Dish correcto
  const dish1 = new Dish(
    "Pizza",
    "La mejor pizza del mundo",
    ["Tomate", "Queso", "Peperoni", "Oregano"],
    "pizza1.jpg"
  );

  // Prueba 1: Aseguramos que el nombre sea correcto
  console.log("Test 1:");
  console.log("Esperado: Pizza");
  console.log("Resultado:", dish1.name);

  // Prueba 2: Aseguramos que la descripción sea correcta
  console.log("Test 2:");
  console.log("Esperado: La mejor pizza del mundo");
  console.log("Resultado:", dish1.description);

  // Prueba 3: Aseguramos que los ingredientes sean correctos
  console.log("Test 3:");
  console.log("Esperado: ['Tomate', 'Queso', 'Peperoni', 'Oregano']");
  console.log("Resultado:", dish1.ingredients);

  // Prueba 4: Aseguramos que la imagen sea correcta
  console.log("Test 4:");
  console.log("Esperado: pizza1.jpg");
  console.log("Resultado:", dish1.image);
  console.log("");

  // Prueba 5: Aseguramos que toString devuelve el formato esperado
  console.log("Test 5:");
  console.log(
    "Esperado: Pizza La mejor pizza del mundo Tomate,Queso,Peperoni,Oregano pizza1.jpg"
  );
  console.log("Resultado:", dish1.toString());

  //Con error en name
  try {
    const dish2 = new Dish(
      null,
      "La mejor carbonara de Italia"[
        ("espaguetis", "beicon", "Yema de huevo", "Queso")
      ],
      "pizza2.jpg"
    );

    console.log("Test 1:");
    console.log("Esperado: Pizza");
    console.log("Resultado:", dish2.name);
  } catch (error) {
    console.error(error);
  }
}

testeoDish();
