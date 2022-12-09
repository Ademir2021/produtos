## Inciar o projeto "produtos" com typescript e prisma
- 1 `npm init -y`
- 2 `npm install typescript -D`
- 3 `yarn add express`
- 4 `yarn add @types/express -D`
# Criar diretorio src
- 1 `mkdir src`
- 2 `cd src`
- 3 `touch server.ts`
- 4 `no server.ts crie o server com o express`
# Criar diretorio tsc
- 1 `mkdir dist/js`
# Iniciar um projeto typescript
1 - `npx tsc --init`
# Configurando o tsconfig.json
1 - `...`
# Compilando a configuração
1 - `npx tsc` ?
# Instalação do ts-node-dev para loud automatico
1 - `npx install ts-node-dev`
2 - `"scripts":{
    "dev":  "dev": "ts-node-dev --inspect --ignore-watch node_modules src/server.ts"
},`
# Subir o server
1 - `yarn run dev ou npm run dev`
# teste dos códigos
1 - `npx tsc` {testa os erros typscripts}
2 - `npx tsc -w` {load de testes automático}
# iniciando o PRISMA
1 - `npm i prisma -D`
2 - `npm i @prisma/client