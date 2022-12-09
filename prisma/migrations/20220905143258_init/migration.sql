-- CreateTable
CREATE TABLE "TB_Cliente" (
    "ID_Cliente" SERIAL NOT NULL,
    "Nome_Cliente" TEXT NOT NULL,
    "CPF_Cliente" TEXT NOT NULL,
    "Endereco_Cliente" TEXT NOT NULL,
    "Telefone_Cliente" TEXT NOT NULL,

    CONSTRAINT "TB_Cliente_pkey" PRIMARY KEY ("ID_Cliente")
);

-- CreateTable
CREATE TABLE "TB_Produto" (
    "ID_Produto" SERIAL NOT NULL,
    "Nome_Produto" TEXT NOT NULL,
    "Tam_Produto" TEXT NOT NULL,
    "Cor_Produto" INTEGER NOT NULL,
    "Valor_Produto" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "TB_Produto_pkey" PRIMARY KEY ("ID_Produto")
);

-- CreateTable
CREATE TABLE "TB_Pedido" (
    "ID_Pedido" SERIAL NOT NULL,
    "Data_Pedido" TIMESTAMP(3) NOT NULL,
    "Forma_Pagto" INTEGER NOT NULL,
    "Data_Entr_Prog" TIMESTAMP(3) NOT NULL,
    "Data_Entr_Efet" TIMESTAMP(3) NOT NULL,
    "ID_Cliente" INTEGER NOT NULL,

    CONSTRAINT "TB_Pedido_pkey" PRIMARY KEY ("ID_Pedido")
);

-- CreateTable
CREATE TABLE "REL_Itens" (
    "ID_RelItens" SERIAL NOT NULL,
    "ID_Produto" INTEGER NOT NULL,
    "ID_Pedido" INTEGER NOT NULL,

    CONSTRAINT "REL_Itens_pkey" PRIMARY KEY ("ID_RelItens")
);

-- CreateIndex
CREATE UNIQUE INDEX "TB_Cliente_CPF_Cliente_key" ON "TB_Cliente"("CPF_Cliente");

-- CreateIndex
CREATE UNIQUE INDEX "TB_Cliente_Telefone_Cliente_key" ON "TB_Cliente"("Telefone_Cliente");

-- AddForeignKey
ALTER TABLE "TB_Pedido" ADD CONSTRAINT "TB_Pedido_ID_Cliente_fkey" FOREIGN KEY ("ID_Cliente") REFERENCES "TB_Cliente"("ID_Cliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "REL_Itens" ADD CONSTRAINT "REL_Itens_ID_Produto_fkey" FOREIGN KEY ("ID_Produto") REFERENCES "TB_Produto"("ID_Produto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "REL_Itens" ADD CONSTRAINT "REL_Itens_ID_Pedido_fkey" FOREIGN KEY ("ID_Pedido") REFERENCES "TB_Pedido"("ID_Pedido") ON DELETE RESTRICT ON UPDATE CASCADE;
