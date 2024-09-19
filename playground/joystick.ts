enum Button {
  UP = 0b0000_0001,
  DOWN = 0b0000_0010,
  LEFT = 0b0000_0100,
  RIGHT = 0b0000_1000,
  A = 0b0001_0000,
  B = 0b0010_0000,
  X = 0b0100_0000,
  Y = 0b1000_0000,
  START = 0b0000_0000
};


enum JoyStickDirection {
  UP = Button.UP,
  DOWN = Button.DOWN,
  LEFT = Button.LEFT,
  RIGHT = Button.RIGHT
};

enum JoystickAction {
  A = Button.A,
  B = Button.B,
  X = Button.X,
  Y = Button.Y,
};


