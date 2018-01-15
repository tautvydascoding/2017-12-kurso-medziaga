-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 15, 2018 at 01:50 PM
-- Server version: 5.6.34-log
-- PHP Version: 7.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pasazas`
--

-- --------------------------------------------------------

--
-- Table structure for table `atsiliepimai`
--

CREATE TABLE `atsiliepimai` (
  `id` int(6) NOT NULL,
  `data` datetime(6) NOT NULL,
  `klientas` text COLLATE utf8_lithuanian_ci NOT NULL,
  `antraste` text COLLATE utf8_lithuanian_ci NOT NULL,
  `atsiliepimas` text COLLATE utf8_lithuanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `atsiliepimai`
--

INSERT INTO `atsiliepimai` (`id`, `data`, `klientas`, `antraste`, `atsiliepimas`) VALUES
(1, '2018-01-15 04:34:38.000000', 'Marytė', 'Noriu padėkoti', 'Sveiki,\r\nLabi noriu padėkoti už gražiai papuoštą šventę.'),
(2, '2018-01-15 04:35:27.000000', 'Petras', 'Dėl alaus', 'Nor patiekalai skanūs, norėčiau didesnės Vokiško alaus švairovės.\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `laiskai`
--

CREATE TABLE `laiskai` (
  `id` int(6) NOT NULL,
  `data` datetime(6) NOT NULL,
  `autorius` text COLLATE utf8_lithuanian_ci NOT NULL,
  `elpastas` text COLLATE utf8_lithuanian_ci NOT NULL,
  `laiskas` text COLLATE utf8_lithuanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `laiskai`
--

INSERT INTO `laiskai` (`id`, `data`, `autorius`, `elpastas`, `laiskas`) VALUES
(1, '2018-01-15 13:24:51.000000', 'Egidijus', 'testastestauskast@gmail.com', 'Sveiki, ar 2018-01-15 vakarui yra laisvų staliukų? ;-)'),
(2, '2018-01-15 13:34:50.000000', 'Marytė', 'matyte@asd.lt', 'Jus rekomendavo dėl vieno kasnio sumuštinių.\r\nPaskambinkit man 8-666-23332');

-- --------------------------------------------------------

--
-- Table structure for table `meniu`
--

CREATE TABLE `meniu` (
  `ID` int(6) NOT NULL,
  `data` date NOT NULL,
  `patpavadinimas` varchar(200) CHARACTER SET utf16 COLLATE utf16_lithuanian_ci NOT NULL,
  `pataprasymas` text COLLATE utf8_lithuanian_ci NOT NULL,
  `kaina` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `meniu`
--

INSERT INTO `meniu` (`ID`, `data`, `patpavadinimas`, `pataprasymas`, `kaina`) VALUES
(0, '2018-01-12', 'Omletas', 'Su kumpiu, sūriu ir salotomis.', 3.15),
(1, '2018-01-12', 'Kepsniukas', 'Su grybų padažu ir ketomis buvėmis su lupena.', 9.99),
(2, '2018-01-12', 'Pievagrybių sriuba', 'Su skrudinta duonele.', 2.95),
(3, '2018-01-12', 'Sveikuolių salotos', 'Su avokadais, alyvuogėmis ir medumi.', 4.65),
(4, '2018-01-12', 'Smaližių desertas', 'Pyragaitis su šilauogėmis ir belgišku šokoladu', 1.87),
(5, '2018-01-12', 'Granatų sultys', 'Neatšaldytos', 1.32),
(6, '2018-01-12', 'Grimbergen 0,5 l', 'Atšaldytas', 5.99),
(7, '2018-01-12', 'Grimbergen 0,5 l', 'At?aldytas', 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `atsiliepimai`
--
ALTER TABLE `atsiliepimai`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laiskai`
--
ALTER TABLE `laiskai`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meniu`
--
ALTER TABLE `meniu`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `atsiliepimai`
--
ALTER TABLE `atsiliepimai`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `laiskai`
--
ALTER TABLE `laiskai`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
