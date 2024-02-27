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
} from "../exceptions.js";

class Menu {
  #name; //Nombre del menú
  #description; //Descripción del menú
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

class Restaurant {
  #name; //Nombre del restaurante
  #description; //Descripción del restaurante
  #location; //Ubicación del restaurante en forma de coordenadas
  constructor(name, description, location) {
    //Validación de parámetro obligatorio
    if (!name) throw new NameException("name");

    this.#name = name;
    this.#description = description;
    this.#location = location;

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

    Object.defineProperty(this, "location", {
      enumerable: true,
      get() {
        return this.#location;
      },
      set(value) {
        this.#location = value;
      },
    });
  }
  toString() {
    return `${this.#name} - ${this.#description} - ${this.#location}`;
  }
}

class Coordinate {
  #latitude; //Latitud de la ubicación
  #longitude; //longitud de la ubicación

  constructor(latitude, longitude) {
    //Validación de parámetros obligatorios
    if (!latitude) throw new LatitudeException("latitude");
    if (!longitude) throw new LongitudeException("longitude");

    this.#latitude = latitude;
    this.#longitude = longitude;

    Object.defineProperty(this, "latitude", {
      enumerable: true,
      get() {
        return this.#latitude;
      },
      set(value) {
        this.#latitude = value;
      },
    });

    Object.defineProperty(this, "longitude", {
      enumerable: true,
      get() {
        return this.#longitude;
      },
      set(value) {
        this.#longitude = value;
      },
    });
  }

  toString() {
    return `${this.#latitude} ${this.#longitude}`;
  }
}

export { Menu, Restaurant, Coordinate };
