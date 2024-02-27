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

//Excepción name, obligatorio
class NameException extends BaseException {
  constructor(className, fileName, lineNumber) {
    super(`Error: El ${className} es obligatorio.`, fileName, lineNumber);
    this.name = "NameException ";
  }
}

//Excepción coordenadas
class LatitudeException extends BaseException {
  constructor(className, fileName, lineNumber) {
    super(
      `La latitud de la ubicación de ${className} es obligatorio.`,
      fileName,
      lineNumber
    );
    this.name = "LatitudeException ";
  }
}

class LongitudeException extends BaseException {
  constructor(className, fileName, lineNumber) {
    super(
      `El longitud de la ubicación de ${className} es obligatorio.`,
      fileName,
      lineNumber
    );
    this.name = "LongitudeException ";
  }
}

class ManagerException extends BaseException {
  constructor(message = "Error: Manager Exception.", fileName, lineNumber) {
    super(message, fileName, lineNumber);
    this.name = "ManagerException";
  }
}

class CategoryExistsException extends ManagerException {
  constructor(category, fileName, lineNumber) {
    super(
      `Error: The ${category.title} already exists in the manager.`,
      fileName,
      lineNumber
    );
    this.category = category;
    this.name = "CategoryExistsException";
  }
}

class CategoryIsNull extends BaseException {
  constructor(category, fileName, lineNumber) {
    super(
      `Error: La categoría ${category.title} no puede ser null o no es un objeto Category.`,
      fileName,
      lineNumber
    );
    this.category = category;
    this.name = "CategoryIsNull";
  }
}

class CategoryNotRegistred extends BaseException {
  constructor(category, fileName, lineNumber) {
    super(
      `Error: La categoría ${category.title} no esta registrada.`,
      fileName,
      lineNumber
    );
    this.category = category;
    this.name = "CategoryNotRegistred";
  }
}

class MenuExistsException extends ManagerException {
  constructor(menu, fileName, lineNumber) {
    super(
      `Error: The menu ${menu.name} already exists in the manager.`,
      fileName,
      lineNumber
    );
    this.menu = menu;
    this.name = "MenuExistsException";
  }
}
class MenuIsNull extends BaseException {
  constructor(menu, fileName, lineNumber) {
    super(
      `Error: La categoría ${menu.name}  no puede ser null o no es un objeto Menu.`,
      fileName,
      lineNumber
    );
    this.name = "MenuIsNull";
  }
}

class MenuNotRegistred extends BaseException {
  constructor(menu, fileName, lineNumber) {
    super(
      `Error: The menu ${menu.name} is not registered.`,
      fileName,
      lineNumber
    );
    this.menu = menu;
    this.name = "MenuNotRegistred";
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
};
