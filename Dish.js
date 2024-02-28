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
} from "../exceptions.js";

class Dish {
  #name; //Nombre del plato obligatorio
  #description;
  #ingredients = []; //Array con los posibles ingredientes que componene el plato
  #image; //String con la ruta donde está ubicada la imagen del plato

  constructor(name, description, ingredients, image) {
    //Validación de parámetro obligatorio
    if (!name) throw new NameException("name");

    this.#name = name;
    this.#description = description;
    this.#ingredients = ingredients;
    this.#image = image;

    Object.defineProperty(this, "name", {
      enumerable: true,
      get() {
        return this.#name;
      },
      set(value) {
        if (value === null) throw new NameException("name");
        this.#name = value;
      },
    });

    Object.defineProperty(this, "description", {
      enumerable: true,
      get() {
        return this.#description;
      },
      set(value) {
        this.#description = value;
      },
    });

    Object.defineProperty(this, "ingredients", {
      enumerable: true,
      get() {
        return this.#ingredients;
      },
      set(value) {
        this.#ingredients = value;
      },
    });

    Object.defineProperty(this, "image", {
      enumerable: true,
      get() {
        return this.#image;
      },
      set(value) {
        this.#image = value;
      },
    });
  }

  toString() {
    return `${this.#name} - ${this.#description} - ${this.#ingredients} - ${
      this.#image
    }`;
  }
}

export { Dish };
