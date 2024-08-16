mkdir "$1" &&
cd "$1" &&
mkdir src &&
cd src &&
touch index.ts &&
cd .. &&
touch package.json &&
echo "{
  \"name\": \""$1"\",
  \"version\": \"1.0.0\",
  \"description\": \"\",
  \"main\": \"index.js\",
  \"scripts\": {
    \"dev\": \"ts-node src/index.ts\",
    \"test\": \"echo 'Error: no test specified' && exit 1\"
  },
  \"keywords\": [],
  \"author\": \"\",
  \"license\": \"ISC\",
  \"devDependencies\": {
    \"@types/node\": \"^22.3.0\",
    \"typescript\": \"^5.5.4\"
  },
  \"dependencies\": {
    \"ts-node\": \"^10.9.2\"
  }
}" > package.json &&
touch tsconfig.json &&
echo "{
  \"compilerOptions\": {
    \"target\": \"es2016\",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    \"module\": \"commonjs\",                                /* Specify what module code is generated. */
    \"rootDir\": \"./src\",                                  /* Specify the root folder within your source files. */
    \"resolveJsonModule\": true,                        /* Enable importing .json files. */
    \"allowJs\": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
    \"esModuleInterop\": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    \"forceConsistentCasingInFileNames\": true,            /* Ensure that casing is correct in imports. */
    \"strict\": true,                                      /* Enable all strict type-checking options. */
    \"skipLibCheck\": true                                 /* Skip type checking all .d.ts files. */
  }
}" > tsconfig.json &&
pnpm install &&
cd ..

