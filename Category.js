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

class Category {
  #name; //Nombre de la categoría
  #description; //Descripción de la categoría

  constructor(name, description) {
    //Validación de parámetro obligatorio
    if (!name) throw new NameException("name");

    this.#name = name;
    this.#description = description;

    // Método Getter - Devuelve un iterador que permite recorrer las categorías del sistema
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
  }

  toString() {
    return `${this.#name} - ${this.#description}`;
  }
}

export { Category };
