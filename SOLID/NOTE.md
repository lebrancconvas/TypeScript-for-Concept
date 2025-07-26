# SOLID Principle

## S: **Single-Responsibility** Principle

- *Motto*:
  - "A class should have only one reason to change."
  - "Gather together the things that change for the same reasons. Separate those things that change for different reasons."
- Single Reason for one module to develop.

## O: **Open-Closed** Principle

- *Motto*:
  - "Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification."
- Open for extension, Closed for modification.

## L: **Liskov Substitution** Principle

- *Motto*:
  - "Let Φ(x) be a property provable about objects x of type T. Then Φ(y)_should be true for objects_y of type S where S is a subtype of T."
  - "Subtypes must be substitutable for their base types."
- Sub class must be fully inherited for the main class (every main class functionality can be used sub class)

## I: **Interface Segregation** Principle

- *Motto*:
  - "Clients should not be forced to depend on methods they do not use."
- Module should not depend on method that they don't use.

## D: **Dependency-Inversion** Principle

- *Motto*:
  - "High level modules should not depend on low level modules; both should depend on abstractions. Abstractions should not depend on details. Details should depend upon abstractions."
