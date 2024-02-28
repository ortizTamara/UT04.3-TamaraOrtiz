/* eslint-disable max-classes-per-file */
class BaseException extends Error {
  constructor(message = "", fileName, lineNumber) {
    super(message, fileName, lineNumber);
    this.name = "BaseException";
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BaseException);
    }
  }
}

// Excepción acceso inválido a constructor
class InvalidAccessConstructorException extends BaseException {
  constructor(fileName, lineNumber) {
    super("Constructor can’t be called as a function.", fileName, lineNumber);
    this.name = "InvalidAccessConstructorException";
  }
}

// Excepción personalizada para indicar valores vacios.
class EmptyValueException extends BaseException {
  constructor(param, fileName, lineNumber) {
    super(
      `Error: The parameter ${param} can't be empty.`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "EmptyValueException";
  }
}

// Excepción de valor inválido
class InvalidValueException extends BaseException {
  constructor(param, value, fileName, lineNumber) {
    super(
      `Error: The paramenter ${param} has an invalid value. (${param}: ${value})`,
      fileName,
      lineNumber
    );
    this.param = param;
    this.name = "InvalidValueException";
  }
}

// Excepción personalizada para clases abstractas.
class AbstractClassException extends BaseException {
  constructor(className, fileName, lineNumber) {
    super(`Error: The class  ${className} is abstract.`, fileName, lineNumber);
    this.className = className;
    this.name = "AbstractClassException";
  }
}

// Excepción para nombre obligatorio
class NameException extends BaseException {
  constructor(className, fileName, lineNumber) {
    super(`Error: El ${className} es obligatorio.`, fileName, lineNumber);
    this.name = "NameException";
  }
}

// Excepción para coordenadas de latitud
class LatitudeException extends BaseException {
  constructor(className, fileName, lineNumber) {
    super(
      `La latitud de la ubicación de ${className} es obligatorio.`,
      fileName,
      lineNumber
    );
    this.name = "LatitudeException";
  }
}

// Excepción para coordenadas de longitud
class LongitudeException extends BaseException {
  constructor(className, fileName, lineNumber) {
    super(
      `El longitud de la ubicación de ${className} es obligatorio.`,
      fileName,
      lineNumber
    );
    this.name = "LongitudeException";
  }
}

// Excepción genérica para problemas del manager
class ManagerException extends BaseException {
  constructor(message = "Error: Manager Exception.", fileName, lineNumber) {
    super(message, fileName, lineNumber);
    this.name = "ManagerException";
  }
}

// Excepción para categoría ya existente
class CategoryExistsException extends ManagerException {
  constructor(category, fileName, lineNumber) {
    super(
      `Error: ${category.name} ya existe en el manager`,
      fileName,
      lineNumber
    );
    this.category = category;
    this.name = "CategoryExistsException";
  }
}

// Excepción para categoría nula o no registrada
class CategoryIsNull extends BaseException {
  constructor(category, fileName, lineNumber) {
    super(
      `Error: La categoría ${category.name} no puede ser null o no es un objeto Category.`,
      fileName,
      lineNumber
    );
    this.category = category;
    this.name = "CategoryIsNull";
  }
}

// Excepción para categoría no registrada
class CategoryNotRegistred extends BaseException {
  constructor(category, fileName, lineNumber) {
    super(
      `Error: La categoría ${category.name} no esta registrada.`,
      fileName,
      lineNumber
    );
    this.category = category;
    this.name = "CategoryNotRegistred";
  }
}

// Excepción para menú ya existente
class MenuExistsException extends ManagerException {
  constructor(menu, fileName, lineNumber) {
    super(`Error:  ${menu.name} ya existe en el manager`, fileName, lineNumber);
    this.menu = menu;
    this.name = "MenuExistsException";
  }
}

// Excepción para menú nulo o no registrado
class MenuIsNull extends BaseException {
  constructor(menu, fileName, lineNumber) {
    super(
      `Error: La categoría ${menu.name} no puede ser null o no es un objeto Menu.`,
      fileName,
      lineNumber
    );
    this.name = "MenuIsNull";
  }
}

// Excepción para menú no registrado
class MenuNotRegistred extends BaseException {
  constructor(menu, fileName, lineNumber) {
    super(`Error: ${menu.name} no esta registrada.`, fileName, lineNumber);
    this.menu = menu;
    this.name = "MenuNotRegistred";
  }
}

// Excepción para alérgeno ya existente
class AllergenExistsException extends ManagerException {
  constructor(allergen, fileName, lineNumber) {
    super(
      `Error: ${allergen.name} ya existe en el manager`,
      fileName,
      lineNumber
    );
    this.allergen = allergen;
    this.name = "AllergenExistsException";
  }
}

// Excepción para alérgeno nulo o no registrado
class AllergenIsNull extends BaseException {
  constructor(allergen, fileName, lineNumber) {
    super(
      `Error: ${allergen.name} no puede ser null o no es un objeto Allergen.`,
      fileName,
      lineNumber
    );
    this.allergen = allergen;
    this.name = "AllergenIsNull";
  }
}

// Excepción para alérgeno no registrado
class AllergenNotRegistred extends BaseException {
  constructor(allergen, fileName, lineNumber) {
    super(`Error: ${allergen.name} no esta registrada.`, fileName, lineNumber);
    this.allergen = allergen;
    this.name = "AllergenNotRegistred";
  }
}
class DishIsNull extends BaseException {}

export {
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
};
