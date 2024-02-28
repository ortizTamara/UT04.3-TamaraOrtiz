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

// const RestaurantsManager = function () {
class RestaurantsManager {
  #categories = [];
  #menus = [];
  #allergens = [];
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

  // OTRA FORMA DE HACERLO:
  //   #sortMenusFunc = (menuA, menuB) => {
  //     const titleA = menuA.menu.name.toLowerCase();
  //     const titleB = menuB.menu.name.toLowerCase();

  //     if (titleA < titleB) {
  //       return -1;
  //     }
  //     if (titleA > titleB) {
  //       return 1;
  //     }
  //     return 0;
  //   };

  // Ordenamos los Alergenos de forma alfabética
  #sortAllergensFunc = (allergenA, allergenB) =>
    allergenA.allergen.name.toLocaleLowerCase() <
    allergenB.allergen.name.toLocaleLowerCase()
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
            for (const arrayAller of array) {
              yield arrayAller.allergen;
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
            for (const arrayRestau of array) {
              yield arrayRestau.Restaurant;
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
          products: [],
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
          products: [],
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
        this.#allergens.push({
          allergen,
          products: [],
        });
        this.#allergens.sort(this.#sortAllergensFunc);
      } else {
        console.log("Menú ya existe:", allergen);
        throw new AllergenExistsException(allergen);
      }
    }
    return this;
  }

  #getAllergenPosition(allergen) {
    return this.#allergens.findIndex((x) => x.allergen.name === allergen.name);
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

  addDish(...Dish) {}
}

export { RestaurantsManager };
