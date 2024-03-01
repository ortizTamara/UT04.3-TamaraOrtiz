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
} from "./Exceptions.js";

import { Dish } from "./dish.js";
import { Category } from "./category.js";
import { Allergen } from "./allergen.js";
import { Menu, Restaurant, Coordinate } from "./Restaurante.js";

// const RestaurantsManager = function () {
class RestaurantsManager {
  #categories = [];
  #menus = [];
  #allergens = [];
  #dishes = [];
  #restaurants = [];

  // Ordenamos las categorías de forma alfabética
  #sortCategoriesFunc = (catA, catB) =>
    catA.category.name.toLocaleLowerCase() <
    catB.category.name.toLocaleLowerCase()
      ? -1
      : 1;

  // Ordenamos los menús de forma alfabética
  #sortMenusFunc = (menuA, menuB) =>
    menuA.menu.name.toLocaleLowerCase() < menuB.menu.name.toLocaleLowerCase()
      ? -1
      : 1;

  // Ordenamos los Alergenos de forma alfabética
  #sortAllergensFunc = (allergenA, allergenB) =>
    allergenA.name.toLocaleLowerCase() < allergenB.name.toLocaleLowerCase()
      ? -1
      : 1;

  #sortDishFunc = (dishA, dishB) =>
    dishA.dish.name.toLocaleLowerCase() < dishB.dish.name.toLocaleLowerCase()
      ? -1
      : 1;

  #sortRestaurantFunc = (restaurantA, restaurantB) =>
    restaurantA.restaurant.name.toLocaleLowerCase() <
    restaurantB.restaurant.name.toLocaleLowerCase()
      ? -1
      : 1;

  constructor() {
    // GETTER CATEGORIES
    Object.defineProperty(this, "categories", {
      enumerable: true,
      get() {
        const array = this.#categories;
        return {
          *[Symbol.iterator]() {
            for (const arrayCat of array) {
              yield arrayCat.category;
            }
          },
        };
      },
    });

    //   GETTER MENUS
    Object.defineProperty(this, "menus", {
      enumerable: true,
      get() {
        const array = this.#menus;
        return {
          *[Symbol.iterator]() {
            for (const arrayMenu of array) {
              yield arrayMenu.menu;
            }
          },
        };
      },
    });

    //   GETTER ALLERGENS
    Object.defineProperty(this, "allergens", {
      enumerable: true,
      get() {
        const array = this.#allergens;
        return {
          *[Symbol.iterator]() {
            for (const allergen of array) {
              yield allergen;
            }
          },
        };
      },
    });

    //   GETTERS RESTAURANTS
    Object.defineProperty(this, "restaurants", {
      enumerable: true,
      get() {
        const array = this.#restaurants;
        return {
          *[Symbol.iterator]() {
            //Lo hacemos así porque los alergenos se añaden directamente a su colección.
            for (const arrayRest of array) {
              yield arrayRest.restaurant;
            }
          },
        };
      },
    });
  }

  // Añade una nueva categoría.
  addCategory(...categories) {
    for (const category of categories) {
      if (category === null || !(category instanceof Category)) {
        throw new CategoryIsNull(category);
      }
      const position = this.#getCategoryPosition(category);
      if (position === undefined || position === -1) {
        this.#categories.push({
          category,
          dishes: [],
        });
        this.#categories.sort(this.#sortCategoriesFunc);
      } else {
        console.log("Category ya existe:", category);
        throw new CategoryExistsException(category);
      }
    }
    return this;
  }

  // Encuentra la posición del category en el array #categories por su nombre.
  #getCategoryPosition(category) {
    return this.#categories.findIndex((x) => x.category.name === category.name);
  }

  // Elimina una categoría. Los platos quedarán desasignados de la categoría.
  removeCategory(...categories) {
    for (const category of categories) {
      if (category === null || !(category instanceof Category)) {
        throw new CategoryIsNull(category);
      }
      const position = this.#getCategoryPosition(category);
      if (position === undefined || position !== -1) {
        this.#categories.splice(position, 1);
      } else {
        throw new CategoryNotRegistred(category);
      }
    }
    return this;
  }

  // Añade un nuevo menú
  addMenu(...menus) {
    for (const menu of menus) {
      if (!menu || !(menu instanceof Menu)) {
        throw new MenuIsNull(menu);
      }
      const position = this.#getMenuPosition(menu);
      if (position === -1) {
        this.#menus.push({
          menu,
          dish: [],
        });
        this.#menus.sort(this.#sortMenusFunc);
      } else {
        console.log("Menú ya existe:", menu);
        throw new MenuExistsException(menu);
      }
    }
    return this;
  }

  // Encuentra la posición del menú en el array #menus por su nombre.
  #getMenuPosition(menu) {
    return this.#menus.findIndex((x) => x.menu.name === menu.name);
  }

  // Elimina un menú
  removeMenu(...menus) {
    for (const menu of menus) {
      if (!menu || !(menu instanceof Menu)) {
        throw new MenuIsNull(menu);
      }
      const position = this.#getMenuPosition(menu);
      if (position !== -1) {
        this.#menus.splice(position, 1);
      } else {
        throw new MenuNotRegistred(menu);
      }
    }
    return this;
  }

  addAllergen(...allergens) {
    for (const allergen of allergens) {
      if (!allergen || !(allergen instanceof Allergen)) {
        throw new AllergenIsNull(allergen);
      }
      const position = this.#getAllergenPosition(allergen);
      if (position === -1) {
        this.#allergens.push(allergen);
        this.#allergens.sort(this.#sortAllergensFunc);
      } else {
        console.log("Menú ya existe:", allergen);
        throw new AllergenExistsException(allergen);
      }
    }
    return this;
  }

  #getAllergenPosition(allergen) {
    return this.#allergens.findIndex((x) => x.name === allergen.name);
  }

  removeAllergen(...allergens) {
    for (const allergen of allergens) {
      if (!allergen || !(allergen instanceof Allergen)) {
        throw new AllergenIsNull(allergen);
      }
      const position = this.#getAllergenPosition(allergen);
      if (position !== -1) {
        this.#allergens.splice(position, 1);
      } else {
        throw new AllergenNotRegistred(allergen);
      }
    }
    return this;
  }

  addDish(...dishes) {
    for (const dish of dishes) {
      if (!dish || !(dish instanceof Dish)) {
        throw new DishIsNull(dish);
      }
      const position = this.#getDishPosition(dish);
      if (position === -1) {
        this.#dishes.push({
          dish,
          allergens: [],
        });
        this.#dishes.sort(this.#sortDishFunc);
      } else {
        console.log("Plato ya existe:", dish);
        throw new DishExistsException(dish);
      }
    }
    return this;
  }

  #getDishPosition(dish) {
    return this.#dishes.findIndex((x) => x.dish.name === dish.name);
  }

  removeDish(...dishes) {
    for (const dish of dishes) {
      if (!dish || !(dish instanceof Dish)) {
        throw new DishIsNull(dish);
      }
      const position = this.#getDishPosition(dish);
      if (position !== -1) {
        this.#dishes.splice(position, 1);
      } else {
        throw new DishNotRegistred(dish);
      }
    }
    return this;
  }

  addRestaurant(...restaurants) {
    for (const restaurant of restaurants) {
      if (!restaurant || !(restaurant instanceof Restaurant)) {
        throw new RestaurantIsNull(restaurant);
      }
      const position = this.#getRestaurantPosition(restaurant);
      if (position === -1) {
        this.#restaurants.push({
          restaurant,
          products: [],
        });
        this.#restaurants.sort(this.#sortRestaurantFunc);
      } else {
        console.log("Plato ya existe:", restaurant);
        throw new RestaurantExistsException(restaurant);
      }
    }
    return this;
  }
  #getRestaurantPosition(restaurant) {
    return this.#restaurants.findIndex(
      (x) => x.restaurant.name === restaurant.name
    );
  }

  removeRestaurant(...restaurants) {
    for (const restaurant of restaurants) {
      if (!restaurant || !(restaurant instanceof Restaurant)) {
        throw new RestaurantIsNull(restaurants);
      }
      const position = this.#getRestaurantPosition(restaurant);
      if (position !== -1) {
        this.#restaurants.splice(position, 1);
      } else {
        throw new RestaurantNotRegistred(restaurant);
      }
    }
    return this;
  }

  assignCategoryToDish(category, ...dishes) {
    // Verificamos si Category existe
    // Obtenemos la posición de la categoría
    let catPosition = this.#getCategoryPosition(category);
    // Verificamos si la categoría es nula para no seguir avanzando
    if (!(category instanceof Category)) {
      throw new CategoryIsNull(category);
    }
    //Y no existe, lo añadimos
    if (catPosition === -1) {
      this.addCategory(category);
      catPosition = this.#getCategoryPosition(category);
    }

    const storedCategory = this.#categories[catPosition];

    // Verificamos si Dish existe
    // Recorremos los platos en la lista
    for (const dish of dishes) {
      // Comprobamos si es nulo
      if (!(dish instanceof Dish)) {
        throw new DishIsNull(dishes);
      }
      // Obtenemos la posición de platos
      let dishPosition = this.#getDishPosition(dish);

      // Y si no existe, lo añadimos
      if (dishPosition === -1) {
        this.addDish(dish);
        dishPosition = this.#getDishPosition(dish);
      }

      const storedDish = this.#dishes[dishPosition];

      // Verificamos si el plato ya está asignado a la categoría
      const dishInCategoryPosition = this.#getDishPositionInCategory(
        storedCategory.dishes,
        storedDish.dish
      );

      // Si esta asignado, saltamos una excepción
      if (dishInCategoryPosition !== -1) {
        throw new CategoryAssignDishException(dishes, category);
      }

      // Si no esta asignado, se le asigna a la categoría
      storedCategory.dishes.push(storedDish.dish);
    }
    return this;
  }

  #getDishPositionInCategory(dishes, dish) {
    return dishes.findIndex((x) => x.name === dish.name);
  }

  deassignCategoryToDish(category, ...dishes) {
    // Verificamos si la categoría es nula para no seguir avanzando
    if (!(category instanceof Category)) {
      throw new CategoryIsNull(category);
    }

    // Buscamos la categoría en la lista de categorías registradas para obtener su posición.
    let catPosition = this.#getCategoryPosition(category);
    // Si la categoría no está registrada, lanza una excepción.
    if (catPosition === -1) {
      throw new CategoryNotRegistred(category);
    }

    // Obtenemos la categoría almacenada usando la posición encontrada.
    const storedCategory = this.#categories[catPosition];

    // Recorremos los platos en la lista
    for (const dish of dishes) {
      // Verificamos si plato es nula para no seguir avanzando
      if (!(dish instanceof Dish)) {
        throw new DishIsNull(dish);
      }

      // Encontramos la posición del plato en la lista de platos de la categoría.
      let dishPosition = this.#getDishPositionInCategory(
        storedCategory.dishes,
        dish
      );
      // console.log(dishPosition);
      // Si el plato está en categoría, lo eliminamos de la lista de platos de esa categoría
      if (dishPosition !== -1) {
        storedCategory.dishes.splice(dishPosition, 1);
      } else {
        // Si el plato no está en la categoría, lanza una excepción
        throw new DishNotRegistred(dish);
      }
    }
  }

  // getCategories() {
  //   return this.#categories;
  // }

  assignAllergenToDish(dish, ...allergens) {
    let dishPosition = this.#getDishPosition(dish);

    if (!(dish instanceof Dish)) {
      throw new DishIsNull(dish);
    }

    if (dishPosition === -1) {
      this.addDish(dish);
      dishPosition = this.#getDishPosition(dish);
    }

    const storedDish = this.#dishes[dishPosition];

    // Recorremos cada alérgeno en la lista
    for (const allergen of allergens) {
      // Comprobamos si el alérgeno es nulo
      if (!(allergen instanceof Allergen)) {
        throw new AllergenIsNull(allergen);
      }

      //Obtenemos la posición de los alergenos
      let allergenPosition = this.#getAllergenPosition(allergen);

      // Y si no existe, lo añadimos
      if (allergenPosition === -1) {
        this.addAllergen(allergen);
        allergenPosition = this.#getAllergenPosition(allergen);
      }

      const storedAllergen = this.#allergens[allergenPosition];

      // Verificamos si el alérgeno ya está asignado al plato
      const allergenInDishPosition = this.#getAllergenPositionInDish(
        storedDish.allergens,
        storedAllergen.allergen
      );

      console.log(allergenInDishPosition);

      if (allergenInDishPosition !== -1) {
        throw new DishAssignAllergenException(allergens, dish);
      }

      // Si no esta asignado, se le asigna a la categoría
      storedDish.allergens.push(storedAllergen);
    }
    return this;
  }

  #getAllergenPositionInDish(allergens, allergen) {
    return allergens.findIndex((x) => x.name === allergen.name);
  }

  getDish() {
    return this.#dishes;
  }
}

export { RestaurantsManager };

/*
Tenemos categoría:
- Categoría5 Entrante -> Que tiene plato5 (Croquetas)
- Categoría6 Comida -> Que tiene plato 6(tortilla) y 7 (Paella)
- Categoría7 Postre -> Que tiene plato8(Flan)
- Categoría8 Cena -> Que tiene plato9 (Pisto)
Categoría 5 añadida
Plato5 y plato6 añadido
category6 añadido al sistema
plato 7 añadido al sistema
Categoría7 Añadido al sistema

Tenemos plato:
plato10 pizza -> Que tiene alergeno1(gluten)
plato11 pollo cacahuete -> Que tiene alergeno2(cacahuete)
plato12 Pad Thai -> Que tiene alergeno2(cacahuete) y alergeno3(pimiento);

*/
