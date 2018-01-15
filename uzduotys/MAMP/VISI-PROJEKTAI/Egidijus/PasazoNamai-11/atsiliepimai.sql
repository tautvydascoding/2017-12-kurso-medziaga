-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 15, 2018 at 12:50 AM
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
(1, '2018-01-15 02:06:44.000000', 'Petras', 'Porcijos', 'Petras'),
(2, '2018-01-15 02:41:16.000000', 'Antonijus', 'Noriu šašlykų', 'Ka bus šašlykų? Ka bus šašlykų? Ka bus šašlykų? Ka bus šašlykų?Ka bus šašlykų? Ka bus šašlykų?Ka bus šašlykų? Ka bus šašlykų?'),
(3, '2018-01-15 02:46:24.000000', 'Margarita', 'Labai Labai skanūs desertai', 'Labai Labai skanūs desertai. Bijau sustorėt.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `atsiliepimai`
--
ALTER TABLE `atsiliepimai`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `atsiliepimai`
--
ALTER TABLE `atsiliepimai`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
