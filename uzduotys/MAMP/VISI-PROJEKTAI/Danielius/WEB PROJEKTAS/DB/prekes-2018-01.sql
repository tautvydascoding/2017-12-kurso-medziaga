-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 15, 2018 at 07:45 AM
-- Server version: 5.6.34-log
-- PHP Version: 7.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES latin7 */;

--
-- Database: `prekes`
--
CREATE DATABASE IF NOT EXISTS `prekes` DEFAULT CHARACTER SET utf8 COLLATE utf8_lithuanian_ci;
USE `prekes`;

-- --------------------------------------------------------

--
-- Table structure for table `klausimai`
--

DROP TABLE IF EXISTS `klausimai`;
CREATE TABLE IF NOT EXISTS `klausimai` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `email` varchar(30) CHARACTER SET utf8 COLLATE utf8_lithuanian_ci DEFAULT NULL,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_lithuanian_ci DEFAULT NULL,
  `klausimas` varchar(255) CHARACTER SET utf8 COLLATE utf8_lithuanian_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf16 COLLATE=utf16_lithuanian_ci;

--
-- Dumping data for table `klausimai`
--

INSERT INTO `klausimai` (`id`, `email`, `name`, `klausimas`) VALUES
(1, 'mail@post.lt', 'Test', 'Test question?');

-- --------------------------------------------------------

--
-- Table structure for table `kontaktai`
--

DROP TABLE IF EXISTS `kontaktai`;
CREATE TABLE IF NOT EXISTS `kontaktai` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `adresas` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_lithuanian_ci DEFAULT NULL,
  `tel` varchar(30) COLLATE utf8_lithuanian_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_lithuanian_ci;

--
-- Dumping data for table `kontaktai`
--

INSERT INTO `kontaktai` (`id`, `adresas`, `tel`) VALUES
(1, 'K. Barðausko g. 65', '+37060782050');

-- --------------------------------------------------------

--
-- Table structure for table `progines`
--

DROP TABLE IF EXISTS `progines`;
CREATE TABLE IF NOT EXISTS `progines` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `foto` varchar(25) DEFAULT NULL,
  `kaina` int(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `progines`
--

INSERT INTO `progines` (`id`, `foto`, `kaina`) VALUES
(1, '1.jpg', 200),
(2, '2.jpg', 200),
(3, '3.jpg', 200),
(4, '4.jpg', 200),
(5, '5.jpg', 200),
(6, '6.jpg', 200),
(7, '7.jpg', 200),
(8, '8.jpg', 200),
(9, '9.jpg', 200),
(10, '10.jpg', 200),
(11, '11.jpg', 200),
(12, '12.jpg', 200),
(13, '13.jpg', 200),
(14, '14.jpg', 200);

-- --------------------------------------------------------

--
-- Table structure for table `vestuvines`
--

DROP TABLE IF EXISTS `vestuvines`;
CREATE TABLE IF NOT EXISTS `vestuvines` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `foto` varchar(25) DEFAULT NULL,
  `kaina` int(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vestuvines`
--

INSERT INTO `vestuvines` (`id`, `foto`, `kaina`) VALUES
(1, '1.jpg', 400),
(2, '2.jpg', 400),
(3, '3.jpg', 400),
(4, '4.jpg', 400),
(5, '5.jpg', 400),
(6, '6.jpg', 400),
(7, '7.jpg', 400),
(8, '8.jpg', 400),
(9, '9.jpg', 400),
(10, '10.jpg', 400),
(11, '11.jpg', 400),
(12, '12.jpg', 400),
(13, '13.jpg', 400),
(14, '14.jpg', 400),
(15, '15.jpg', 400);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
