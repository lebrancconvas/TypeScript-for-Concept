enum Permission {
  CREATE = 0b0001,
  READ = 0b0010,
  UPDATE = 0b0100,
  DELETE = 0b1000
};

enum User {
  ADMIN = Permission.CREATE | Permission.READ | Permission.UPDATE | Permission.DELETE,
  EDITOR = Permission.READ | Permission.UPDATE,
  VIEWER = Permission.READ
};
