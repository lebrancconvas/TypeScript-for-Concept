mkdir "$1" &&
cd "$1" &&
pnpm init &&
tsc -init &&
pnpm add -D typescript @types/node &&
pnpm add ts-node &&
mkdir src &&
cd src &&
touch index.ts &&
cd ../..
