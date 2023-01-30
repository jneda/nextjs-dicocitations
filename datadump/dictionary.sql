-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 30, 2023 at 05:53 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dictionary`
--

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
  `id` int NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `firstName` varchar(30) NOT NULL,
  `century` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`id`, `lastName`, `firstName`, `century`) VALUES
(1, 'Totovitch Totov', 'Toto', 19),
(2, 'Houlala', 'Anthony', 21),
(3, '', 'Socrate', -5),
(4, 'Socrate', 'Jean-Patrick', 21),
(5, 'Denard', 'Bob', 20),
(6, 'Camus', 'Serge-Henri', 20),
(7, 'Houlala', 'Jehan', 16),
(8, 'Random', '', 19),
(9, '', 'Gustave', 18),
(10, 'Raminagrobis', 'Herculéon', 12),
(11, 'Delagarde', 'Louison', 21),
(12, 'Camus', 'Serge-Henri', 20);

-- --------------------------------------------------------

--
-- Table structure for table `quote`
--

CREATE TABLE `quote` (
  `id` int NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `authorId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quote`
--

INSERT INTO `quote` (`id`, `text`, `authorId`) VALUES
(2, 'Bonjour tout le monde.', 2),
(3, 'Ne complique pas tout. Nom : Houlala !', 2),
(4, 'Heureusement qu\'y a pas la guerre !', 1),
(5, 'Wesh ou ?', 3),
(6, 'Force et rage valent plus que patience ni que longueur de temps.', 1),
(7, 'Rho l\'autre hé !', 3),
(8, 'Mais enfin, pourquoi tout le monde paraît-il tant surpris que je ne sois pas vêtu d\'une toge ?', 4),
(9, 'Tant va l\'eau à  la cruche qu\'à  la fin elle se répare.', 1),
(10, 'Ça gaze ? 8)', 5),
(11, 'Sapristi ! Quelle splendide tarte aux quetsches.', 6),
(12, 'Compère, voici qui est à  toi si tu veux tailler dans le fretin un bon coup.', 7),
(13, 'Au hasard : harengs pommes à  l\'huile !', 8),
(14, 'La peste soit des intolérants !', 9),
(15, 'Rien ne sert de partir à  point, il faut courir.', 1),
(16, 'Cet autocuiseur est de toute beauté.', 6),
(17, 'Je fot saver molt bons chopins,\nsi fot saver bon lecheri\ndont je fot molt a cort cheri.', 10),
(18, 'Fait chaud, non ?', 5),
(19, 'C\'est moi ou il fait froid dans le coin ?', 4),
(20, 'Franchement ça peut être relou d\'avoir un homonyme célèbre. Z\'avez rien de mieux à  faire que de noter tout ce que je dis ?', 4),
(21, 'En cest estat passa iusques à  vn an & dix moys : onquel temps par le conseil des medecins on commença le porter : & fut faicte vne belle charrette à  bœufs par l\'inuention de Iehan Denyau.', 7),
(24, 'Vous sers-je en riz ?', 6),
(25, 'Youpi banane !', 1),
(26, 'C\'est bien de se lancer des fleurs.', 11),
(27, 'Tout écouteur vit aux dépends de celui qui le flatte.', 1),
(28, 'Le couscous, c\'est très surfait.', 12),
(30, 'Ziva, tu t\'es cru chez mémé ou ?!', 3),
(31, 'Ami, vous noterez que par le monde y a beaucoup plus de couillons que d\'hommes, et de ce vous souvienne.', 7),
(32, 'Le tajine ça déchire.', 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_nom` (`lastName`) USING BTREE,
  ADD KEY `idx_siecle` (`century`) USING BTREE;

--
-- Indexes for table `quote`
--
ALTER TABLE `quote`
  ADD PRIMARY KEY (`id`),
  ADD KEY `authorIdIdx` (`authorId`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `quote`
--
ALTER TABLE `quote`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `quote`
--
ALTER TABLE `quote`
  ADD CONSTRAINT `quote_ibfk_1` FOREIGN KEY (`authorId`) REFERENCES `author` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
