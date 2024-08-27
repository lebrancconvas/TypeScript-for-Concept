import { Component } from './libs';

const Gate = Component.Gate;

const Mathematic = Component.Arithmatic;

console.log(Mathematic.halfAdder(Gate.Custom.condition(0, 1), Gate.and(1, 1)));
