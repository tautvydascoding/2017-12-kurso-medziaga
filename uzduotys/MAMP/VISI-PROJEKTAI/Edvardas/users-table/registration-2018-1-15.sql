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
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `registration`
--
CREATE DATABASE IF NOT EXISTS `registration` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `registration`;

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
CREATE TABLE `members` (
  `memberID` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `active` varchar(255) NOT NULL,
  `resetToken` varchar(255) DEFAULT NULL,
  `resetComplete` varchar(3) DEFAULT 'No'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `comment` varchar(255) NOT NULL,
  `email` varchar(25) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`comment`, `email`, `name`) VALUES
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('dfsdf', 'Edvardas@gmail.com', ''),
('dfsdf', 'Edvardas@gmail.com', ''),
('dfsdf', 'Edvardas@gmail.com', ''),
('dfsdf', 'Edvardas@gmail.com', ''),
('dfsdf', 'Edvardas@gmail.com', ''),
('', '', ''),
('dasdasd', 'Edvardas@gmail.com', ''),
('', 'sudas@gmail.com', ''),
('zinute', 'asasdasd@sadasd.com', ''),
('', '', ''),
('wedwqd', '', ''),
('', '', ''),
('labas', 'ssyvisedvardas@gmail.com', 'Edvardas'),
('labas', 'ssyvisedvardas@gmail.com', 'Edvardas'),
('lsasdasdfasd adasfdsaf asfdasfasd adaskfhaskjdfh kajhdkahdkasd kahdkashdaks khasdkashdakjsd kajshdakshda kjhasdkjahsd kajhdaksjdh kjhasdkjashd kjahsd kjashmd', 'ssyvisedvardas@gmail.com', 'Edvardas'),
('lsasdasdfasd adasfdsaf asfdasfasd adaskfhaskjdfh kajhdkahdkasd kahdkashdaks khasdkashdakjsd kajshdakshda kjhasdkjahsd kajhdaksjdh kjhasdkjashd kjahsd kjashmd', 'ssyvisedvardas@gmail.com', 'Edvardas'),
('lsasdasdfasd adasfdsaf asfdasfasd adaskfhaskjdfh kajhdkahdkasd kahdkashdaks khasdkashdakjsd kajshdakshda kjhasdkjahsd kajhdaksjdh kjhasdkjashd kjahsd kjashmd', 'ssyvisedvardas@gmail.com', 'Edvardas'),
('lsasdasdfasd adasfdsaf asfdasfasd adaskfhaskjdfh kajhdkahdkasd kahdkashdaks khasdkashdakjsd kajshdakshda kjhasdkjahsd kajhdaksjdh kjhasdkjashd kjahsd kjashmd', 'ssyvisedvardas@gmail.com', 'Edvardas'),
('lsasdasdfasd adasfdsaf asfdasfasd adaskfhaskjdfh kajhdkahdkasd kahdkashdaks khasdkashdakjsd kajshdakshda kjhasdkjahsd kajhdaksjdh kjhasdkjashd kjahsd kjashmd', 'ssyvisedvardas@gmail.com', 'Edvardas'),
('', '', ''),
('', '', ''),
('', '', ''),
('', '', ''),
('dasdasd', 'ssyvisedvardas@gmail.com', 'fwefwe'),
('', '', ''),
('', '', ''),
('', '', ''),
('sdas', 'sudubacka01234@gmail.com', 'Edvardas'),
('sdfasdfa', 'sudubacka01234@gmail.com', 'Edvardas'),
('dsfsdfsdfsdf', 'ssyvisedvardas1@gmail.com', 'Edva'),
('sdasdasd', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('dsfsdf', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('', '', ''),
('ASFDASD', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('ASFDASD', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('katik atnaujinau', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('', '', ''),
('sadasdasd', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('', '', ''),
('', '', ''),
('asdasdasdasd', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('asdadasdasdasdasdasdasdasd', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('katik parasiau', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('katik parasiau', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('katik parasiau', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('eik nx', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('eik nx bleeet', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('gryztu', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('eik nx bleeet', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('eik nx bleeet', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('gryztu', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('gryztu', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('gryztu', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('gryztu', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('gryztu', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('sadasd', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('veikia', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('hreh', 'herhreh', 'hyerth'),
('hreh', 'herhreh', 'hyerth'),
('hreh', 'herhreh', 'hyerth'),
('ss', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('ss', 'ssyvisedvardas1@gmail.com', 'Edvardas'),
('sadfasd', 'ssyvisedvardas1@gmail.com', 'ss'),
('labas edai', 'ssyvisedvardas1@gmail.com', 'ss'),
('uzsakymas nr 1', 'ssyvisedvardas1@gmail.com', 'Edvardas');

-- --------------------------------------------------------

--
-- Table structure for table `zmones`
--

DROP TABLE IF EXISTS `zmones`;
CREATE TABLE `zmones` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `zmones`
--

INSERT INTO `zmones` (`id`, `username`, `password`, `created_at`) VALUES
(1, 'Edvardas1234', '$2y$10$NfU9U4zszFQUZ.JAS6RHRusHPMXjBsP0R4BEugrUgN2/9IL.p6IAa', '2018-01-14 00:54:07'),
(2, 'Sudubacka', '$2y$10$MKvhZteoXePZli8FeIyEcuUOf0eT8dhXtF0L/UQI4hYHfqX8Yamym', '2018-01-14 13:03:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`memberID`);

--
-- Indexes for table `zmones`
--
ALTER TABLE `zmones`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `memberID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `zmones`
--
ALTER TABLE `zmones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
