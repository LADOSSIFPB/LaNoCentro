-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: localhost    Database: lanocentro
-- ------------------------------------------------------
-- Server version	5.7.29-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_cidade`
--

DROP TABLE IF EXISTS `tb_cidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_cidade` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=224 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_cidade`
--

LOCK TABLES `tb_cidade` WRITE;
/*!40000 ALTER TABLE `tb_cidade` DISABLE KEYS */;
INSERT INTO `tb_cidade` VALUES (1,'Água Branca'),(2,'Aguiar'),(3,'Alagoa Grande'),(4,'Alagoa Nova'),(5,'Alagoinha'),(6,'Alcantil'),(7,'Algodão de Jandaíra'),(8,'Alhandra'),(9,'Amparo'),(10,'Aparecida'),(11,'Araçagi'),(12,'Arara'),(13,'Araruna'),(14,'Areia'),(15,'Areia de Baraúnas'),(16,'Areial'),(17,'Aroeiras'),(18,'Assunção'),(19,'Baía da Traição'),(20,'Bananeiras'),(21,'Baraúna'),(22,'Barra de Santa Rosa'),(23,'Barra de Santana'),(24,'Barra de São Miguel'),(25,'Bayeux'),(26,'Belém'),(27,'Belém do Brejo do Cruz'),(28,'Bernardino Batista'),(29,'Boa Ventura'),(30,'Boa Vista'),(31,'Bom Jesus'),(32,'Bom Sucesso'),(33,'Bonito de Santa Fé'),(34,'Boqueirão'),(35,'Borborema'),(36,'Brejo do Cruz'),(37,'Brejo dos Santos'),(38,'Caaporã'),(39,'Cabaceiras'),(40,'Cabedelo'),(41,'Cachoeira dos Índios'),(42,'Cacimba de Areia'),(43,'Cacimba de Dentro'),(44,'Cacimbas'),(45,'Caiçara'),(46,'Cajazeiras'),(47,'Cajazeirinhas'),(48,'Caldas Brandão'),(49,'Camalaú'),(50,'Campina Grande'),(51,'Campo de Santana'),(52,'Capim'),(53,'Caraúbas'),(54,'Carrapateira'),(55,'Casserengue'),(56,'Catingueira'),(57,'Catolé do Rocha'),(58,'Caturité'),(59,'Conceição'),(60,'Condado'),(61,'Conde'),(62,'Congo'),(63,'Coremas'),(64,'Coxixola'),(65,'Cruz do Espírito Santo'),(66,'Cubati'),(67,'Cuité'),(68,'Cuité de Mamanguape'),(69,'Cuitegi'),(70,'Curral de Cima'),(71,'Curral Velho'),(72,'Damião'),(73,'Desterro'),(74,'Diamante'),(75,'Dona Inês'),(76,'Duas Estradas'),(77,'Emas'),(78,'Esperança'),(79,'Fagundes'),(80,'Frei Martinho'),(81,'Gado Bravo'),(82,'Guarabira'),(83,'Gurinhém'),(84,'Gurjão'),(85,'Ibiara'),(86,'Igaracy'),(87,'Imaculada'),(88,'Ingá'),(89,'Itabaiana'),(90,'Itaporanga'),(91,'Itapororoca'),(92,'Itatuba'),(93,'Jacaraú'),(94,'Jericó'),(95,'João Pessoa'),(96,'Juarez Távora'),(97,'Juazeirinho'),(98,'Junco do Seridó'),(99,'Juripiranga'),(100,'Juru'),(101,'Lagoa'),(102,'Lagoa de Dentro'),(103,'Lagoa Seca'),(104,'Lastro'),(105,'Livramento'),(106,'Logradouro'),(107,'Lucena'),(108,'Mãe d`Água'),(109,'Malta'),(110,'Mamanguape'),(111,'Manaíra'),(112,'Marcação'),(113,'Mari'),(114,'Marizópolis'),(115,'Massaranduba'),(116,'Mataraca'),(117,'Matinhas'),(118,'Mato Grosso'),(119,'Maturéia'),(120,'Mogeiro'),(121,'Montadas'),(122,'Monte Horebe'),(123,'Monteiro'),(124,'Mulungu'),(125,'Natuba'),(126,'Nazarezinho'),(127,'Nova Floresta'),(128,'Nova Olinda'),(129,'Nova Palmeira'),(130,'Olho d`Água'),(131,'Olivedos'),(132,'Ouro Velho'),(133,'Parari'),(134,'Passagem'),(135,'Patos'),(136,'Paulista'),(137,'Pedra Branca'),(138,'Pedra Lavrada'),(139,'Pedras de Fogo'),(140,'Pedro Régis'),(141,'Piancó'),(142,'Picuí'),(143,'Pilar'),(144,'Pilões'),(145,'Pilõezinhos'),(146,'Pirpirituba'),(147,'Pitimbu'),(148,'Pocinhos'),(149,'Poço Dantas'),(150,'Poço de José de Moura'),(151,'Pombal'),(152,'Prata'),(153,'Princesa Isabel'),(154,'Puxinanã'),(155,'Queimadas'),(156,'Quixabá'),(157,'Remígio'),(158,'Riachão'),(159,'Riachão do Bacamarte'),(160,'Riachão do Poço'),(161,'Riacho de Santo Antônio'),(162,'Riacho dos Cavalos'),(163,'Rio Tinto'),(164,'Salgadinho'),(165,'Salgado de São Félix'),(166,'Santa Cecília'),(167,'Santa Cruz'),(168,'Santa Helena'),(169,'Santa Inês'),(170,'Santa Luzia'),(171,'Santa Rita'),(172,'Santa Teresinha'),(173,'Santana de Mangueira'),(174,'Santana dos Garrotes'),(175,'Santarém'),(176,'Santo André'),(177,'São Bentinho'),(178,'São Bento'),(179,'São Domingos de Pombal'),(180,'São Domingos do Cariri'),(181,'São Francisco'),(182,'São João do Cariri'),(183,'São João do Rio do Peixe'),(184,'São João do Tigre'),(185,'São José da Lagoa Tapada'),(186,'São José de Caiana'),(187,'São José de Espinharas'),(188,'São José de Piranhas'),(189,'São José de Princesa'),(190,'São José do Bonfim'),(191,'São José do Brejo do Cruz'),(192,'São José do Sabugi'),(193,'São José dos Cordeiros'),(194,'São José dos Ramos'),(195,'São Mamede'),(196,'São Miguel de Taipu'),(197,'São Sebastião de Lagoa de Roça'),(198,'São Sebastião do Umbuzeiro'),(199,'Sapé'),(200,'Seridó'),(201,'Serra Branca'),(202,'Serra da Raiz'),(203,'Serra Grande'),(204,'Serra Redonda'),(205,'Serraria'),(206,'Sertãozinho'),(207,'Sobrado'),(208,'Solânea'),(209,'Soledade'),(210,'Sossêgo'),(211,'Sousa'),(212,'Sumé'),(213,'Taperoá'),(214,'Tavares'),(215,'Teixeira'),(216,'Tenório'),(217,'Triunfo'),(218,'Uiraúna'),(219,'Umbuzeiro'),(220,'Várzea'),(221,'Vieirópolis'),(222,'Vista Serrana'),(223,'Zabelê');
/*!40000 ALTER TABLE `tb_cidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_contato`
--

DROP TABLE IF EXISTS `tb_contato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_contato` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefone` varchar(13) NOT NULL,
  `descricao` text,
  `is_atendido` BOOLEAN DEFAULT 0,
  `dt_insercao` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_contato`
--

LOCK TABLES `tb_contato` WRITE;
/*!40000 ALTER TABLE `tb_contato` DISABLE KEYS */;

INSERT INTO `lanocentro`.`tb_contato` (`nome`, `email`, `telefone`, `descricao`, `is_atendido`) 
VALUES ('João da Fruta','jf@gmail.com','5583234567890','Comericiante autônomo.','0');

/*!40000 ALTER TABLE `tb_contato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_empresa`
--

DROP TABLE IF EXISTS `tb_empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_empresa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `fk_id_natureza` int(11) NOT NULL,
  `fk_id_endereco` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefone` varchar(13) NOT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `is_delivery` BOOLEAN DEFAULT 0,
  `is_deleted` BOOLEAN DEFAULT 0,
  `dt_insercao` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_id_endereco` (`fk_id_endereco`),
  KEY `fk_id_natureza` (`fk_id_natureza`),
  CONSTRAINT `tb_empresa_ibfk_1` FOREIGN KEY (`fk_id_endereco`) REFERENCES `tb_endereco` (`id`),
  CONSTRAINT `tb_empresa_ibfk_2` FOREIGN KEY (`fk_id_natureza`) REFERENCES `tb_natureza` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_empresa`
--

LOCK TABLES `tb_empresa` WRITE;
INSERT INTO `lanocentro`.`tb_empresa` 
  (`nome`, `fk_id_natureza`, `fk_id_endereco`, `email`, `telefone`, `instagram`, `facebook`, `is_delivery`, `is_deleted`) 
  VALUES  ('Quintanda da Verinha',1,1,'emp3@a.com','5583','emp3','emp3', '1','0'),
          ('Calças da moda',2,1,'emp4@a.com','5583','emp4','emp4', '1','0');
/*!40000 ALTER TABLE `tb_empresa` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_empresa` ENABLE KEYS */;
UNLOCK TABLES;

ALTER TABLE tb_empresa ADD fk_id_atividade int(11);
ALTER TABLE tb_empresa ADD FOREIGN KEY (fk_id_atividade) REFERENCES tb_atividade(id);

ALTER TABLE tb_empresa ADD is_prefeitura BOOLEAN DEFAULT 0;

ALTER TABLE tb_empresa ADD latitude DECIMAL(10, 8);
ALTER TABLE tb_empresa ADD longitude DECIMAL(11, 8);
 
CREATE TABLE `tb_historico_movimento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_id_empresa` int(11) NOT NULL,
  `atual` int(11) NOT NULL,
  `esperado` int(11) NOT NULL,
  `dt_insercao` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_id_empresa` (`fk_id_empresa`),
  CONSTRAINT `tb_movimento_empresa_ibfk_1` FOREIGN KEY (`fk_id_empresa`) REFERENCES `tb_empresa` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Table structure for table `tb_empresa_produto`
--

DROP TABLE IF EXISTS `tb_empresa_produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_empresa_produto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_id_empresa` int(11) NOT NULL,
  `fk_id_produto` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_empresa` (`fk_id_empresa`),
  KEY `fk_id_produto` (`fk_id_produto`),
  CONSTRAINT `tb_empresa_produto_ibfk_1` FOREIGN KEY (`fk_id_empresa`) REFERENCES `tb_empresa` (`id`),
  CONSTRAINT `tb_empresa_produto_ibfk_2` FOREIGN KEY (`fk_id_produto`) REFERENCES `tb_produto` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_empresa_produto`
--

LOCK TABLES `tb_empresa_produto` WRITE;
/*!40000 ALTER TABLE `tb_empresa_produto` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_empresa_produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_endereco`
--

DROP TABLE IF EXISTS `tb_endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_endereco` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `logradouro` varchar(65) NOT NULL,
  `numero` varchar(4) NOT NULL,
  `complemento` varchar(45) DEFAULT NULL,
  `fk_id_cidade` int(11) NOT NULL,
  `fk_id_estado` int(11) NOT NULL,
  `cep` varchar(8) NOT NULL,
  `ponto_referencia` varchar(65) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_cidade` (`fk_id_cidade`),
  KEY `fk_id_estado` (`fk_id_estado`),
  CONSTRAINT `tb_endereco_ibfk_1` FOREIGN KEY (`fk_id_cidade`) REFERENCES `tb_cidade` (`id`),
  CONSTRAINT `tb_endereco_ibfk_2` FOREIGN KEY (`fk_id_estado`) REFERENCES `tb_estado` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_endereco`
--

LOCK TABLES `tb_endereco` WRITE;
/*!40000 ALTER TABLE `tb_endereco` DISABLE KEYS */;
INSERT INTO `tb_endereco` VALUES (1,'Rua tal 6','123','Nada',82,1,'58000000','Nada');
/*!40000 ALTER TABLE `tb_endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_estado`
--

DROP TABLE IF EXISTS `tb_estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_estado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_estado`
--

LOCK TABLES `tb_estado` WRITE;
/*!40000 ALTER TABLE `tb_estado` DISABLE KEYS */;
INSERT INTO `tb_estado` VALUES (1,'Paraíba');
/*!40000 ALTER TABLE `tb_estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_natureza`
--

DROP TABLE IF EXISTS `tb_natureza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_natureza` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_natureza`
--

LOCK TABLES `tb_natureza` WRITE;
/*!40000 ALTER TABLE `tb_natureza` DISABLE KEYS */;
INSERT INTO `tb_natureza` VALUES (1,'Feirante'),(2,'Comerciante autônomo'), 
  (3, 'Micro empreendedor individual'), (4, 'Lojista');
/*!40000 ALTER TABLE `tb_natureza` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `tb_produto`
--

DROP TABLE IF EXISTS `tb_produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_produto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `descricao` varchar(45) NOT NULL,
  `preco` decimal(12,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_produto`
--

LOCK TABLES `tb_produto` WRITE;
/*!40000 ALTER TABLE `tb_produto` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_produto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

CREATE TABLE `tb_atividade` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NULL,
  `dt_insercao` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `lanocentro`.`tb_atividade` (`nome`) 
VALUES ('Beleza e cuidados pessoais');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-23 10:13:05
