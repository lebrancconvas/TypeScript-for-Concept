class Category<T> {
  initialObject: T;
  objects: T[];
  morphisms: ((object: T) => T)[];

  constructor(initialObject: T) {
    this.initialObject = initialObject;
    this.objects = [this.initialObject];
    this.morphisms = [];
  }

  morphism(object: T, func: (objectArg: T) => T): T {
    if(!this.objects.includes(object)) {
      throw new Error("Cannot morphism of this object, Because it doesn't exist in this category");
    }

    this.objects.push(func(object));
    this.morphisms.push(func);

    return func(object);
  }
};


function ob<T>(category: Category<T>) {
  return category.objects;
};

function hom<T>(category: Category<T>) {
  return category.morphisms;
}


const cat = new Category<number>(1);
const successor = (num: number) => num + 1;

cat.morphism(1, successor);
cat.morphism(2, successor);

console.log(cat);
console.log(ob(cat)); console.log(hom(cat));
