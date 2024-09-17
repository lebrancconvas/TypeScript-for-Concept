enum Permission {
  NONE = 0b0000,
  EXECUTE = 0b0001,
  WRITE = 0b0010,
  READ = 0b0100
};

enum User {
  OWNER = Permission.READ | Permission.WRITE | Permission.EXECUTE,
  GROUP = Permission.READ | Permission.WRITE,
  OTHER = Permission.READ
};




