-- BANCO DA BIBLIOTECA
-- CRIAR O BANCO 
CREATE DATABASE db_biblioteca;

-- UTILIZAR O BANCO
USE db_biblioteca;

-- CRIAR AS TABELAS

-- TABELA LEITOR
CREATE TABLE tb_leitores(
	id_leitor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(15),
    telefone VARCHAR(15),
    email VARCHAR(100)
);


-- TABELA LIVRO
CREATE TABLE tb_livros(
	id_livro INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(100),
    ano_publicacao DATE,
	genero VARCHAR(100),
    esta_disponivel TINYINT
);


-- TABELA EMPRÉSTIMO 
CREATE TABLE tb_emprestimos(
	id_emprestimo INT PRIMARY KEY AUTO_INCREMENT,
    dt_emprestimo DATE,
	dt_previsao_devolucao DATE,      
	dt_devolucao DATE, 
    leitor INT,
    livro INT,
    -- CHAVES ESTRANGEIRAS
    FOREIGN KEY (leitor) REFERENCES tb_leitores(id_leitor),
    FOREIGN KEY (livro)  REFERENCES tb_livros(id_livro)
);


-- INSERIR INFORMAÇÕES
-- leitores
INSERT INTO 
	tb_leitores(nome, cpf, telefone, email)
VALUES 
	("Cristiano", "777", "7777", "cris@gmail.com"),
	("Ronaldo", "777", "7777", "ronaldo@gmail.com"),
	("Larissa", "5234", "123456789", "larissa@gmail.com");

-- livros
INSERT INTO 
	tb_livros(titulo, autor, ano_publicacao, genero, esta_disponivel)
VALUES
	("Nárnia", "Aslan", "1900-08-25", "Fantasia", 1),	
	("50 cores", "Fic", "2010-08-25", "Emoção", 1),	
  	("Dicionário", "Aurélio", "1500-08-25", "Saber", 0);  
    
-- emprestimos
INSERT INTO 
	tb_emprestimos(dt_emprestimo,dt_previsao_devolucao,dt_devolucao,leitor,livro)
VALUES
	(CURRENT_DATE(), "2026-12-12", "2026-12-13", 1,2),
	(CURRENT_DATE(), "2026-12-12", "2026-12-13", 2,3),
	(CURRENT_DATE(), "2026-12-12", "2026-12-13", 3,1);
    
    
-- EXCLUIR TABELAS
DROP TABLE tb_usuarios;

-- BUSCAR INFORMAÇÕES
SELECT * FROM tb_leitores;
SELECT * FROM tb_livros;
SELECT * FROM tb_emprestimos;

-- JOINS - JUNTAR TABELAS 
SELECT *
	FROM tb_emprestimos AS emp
JOIN 
	tb_leitores AS le
ON 
	emp.leitor = le.id_leitor -- iguala o campo pelo nome das colunas
JOIN
	tb_livros AS li
ON
	emp.livro = li.id_livro; -- aqui também



    
    

