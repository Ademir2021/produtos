# Prisma ORM
# Começando {Quickstart}
- Neste guia de início rápido, você aprenderá como começar a usar o Prisma do zero usando um projeto TypeScript simples e um arquivo de banco de dados SQLite local.  Abrange modelagem de dados, migrações e consulta de um banco de dados.
- Se você quiser usar o Prisma com seu próprio PostgreSQL, MySQL, MongoDB ou qualquer outro banco de dados suportado, acesse aqui: {Comece com o PRISMA do zero}(https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch)
# Pré requisitos
- Você precisa do Node.js v14.17.0 ou superior para este guia (saiba mais sobre)

# Crie um projeto TypeScript e configure o Prisma
1 - `mkdir hello-prisma`
2 - `cd hello-prisma`
# Em seguida, inicialize um projeto TypeScript usando npm:
1 - `npm init -y`
2 - `npm install typescript ts-node @types/node --save-dev`
- Isso cria um package.json com uma configuração inicial para seu aplicativo TypeScript.
3 - `touch tsconfig.json`
- Com o arquivo tsconfig.json no lugar, adicione a seguinte configuração a ele:
4 - `{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}`

# Em seguida, instale o Prisma CLI como uma dependência de desenvolvimento no projeto:
1 - `npm install prisma --save-dev`
# Por fim, configure o Prisma com o comando init da CLI do Prisma:
1 - `npx prisma init --datasource-provider sqlite`
- Isso cria um novo diretório prisma com seu arquivo de esquema Prisma e configura o SQLite como seu banco de dados.  Agora você está pronto para modelar seus dados e criar seu banco de dados com algumas tabelas.

# 2. Modele seus dados no esquema Prisma
1 - O esquema Prisma fornece uma maneira intuitiva de modelar dados.  Adicione os seguintes modelos ao seu arquivo schema.prisma:
- `model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}`
2 - Os modelos no esquema Prisma têm dois propósitos principais:
* Representar as tabelas no banco de dados subjacente
* Servir como base para a API Prisma Client gerada
Na próxima seção, você mapeará esses modelos para tabelas de banco de dados usando o Prisma Migrate.

3 - Execute uma migração para criar suas tabelas de banco de dados com o Prisma Migrate
- Neste ponto, você tem um esquema Prisma, mas nenhum banco de dados ainda.  Execute o seguinte comando em seu terminal para criar o banco de dados SQLite e as tabelas User e Post representadas por seus modelos:

- `npx prisma migrate dev --name init`
- Este comando fez duas coisas:
* Ele cria um novo arquivo de migração SQL para essa migração no diretório prisma/migrations.
* Ele executa o arquivo de migração SQL no banco de dados.

- Como o arquivo de banco de dados SQLite não existia antes, o comando também o criou dentro do diretório prisma com o nome dev.db conforme definido por meio da variável de ambiente no arquivo .env.

- Parabéns, agora você tem seu banco de dados e tabelas prontos.  Vamos aprender como você pode enviar algumas consultas para ler e gravar dados!


