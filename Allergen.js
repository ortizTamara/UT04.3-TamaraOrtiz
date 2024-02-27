import {
  BaseException,
  InvalidAccessConstructorException,
  EmptyValueException,
  InvalidValueException,
  AbstractClassException,
  NameException,
  LatitudeException,
  LongitudeException,
} from "../exceptions.js";

class Allergen {
  #name; //Nombre del alérgeno
  #description; //Descripción del alérgeno
  constructor(name, description) {
    //Validación de parámetro obligatorio
    if (!name) throw new NameException("name");

    this.#name = name;
    this.#description = description;

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

export { Allergen };
