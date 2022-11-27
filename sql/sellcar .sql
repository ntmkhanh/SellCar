-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2022 at 11:12 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sellcar`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `book_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `itemcar_quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`book_id`, `user_id`, `car_id`, `itemcar_quantity`) VALUES
(2, 3, 1, 2),
(1, 10, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `car`
--

CREATE TABLE `car` (
  `car_id` int(11) NOT NULL,
  `car_name` varchar(255) DEFAULT NULL,
  `car_price` varchar(255) DEFAULT NULL,
  `car_type` varchar(255) DEFAULT NULL,
  `car_src` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `car`
--

INSERT INTO `car` (`car_id`, `car_name`, `car_price`, `car_type`, `car_src`) VALUES
(1, 'EQS', '4.839.000.000', 'Sedans', './img/EQS.png'),
(2, 'A-Class', '2.429.000.000', 'Sedans', './img/aclass.png'),
(3, 'C-Class', '1.669.000.000', 'Sedans', './img/aclass.png'),
(4, 'E-Class', '2.050.000.000', 'Sedans', './img/eclass.png'),
(5, 'S-Class', '5.059.000.000', 'Sedans', './img/sclass.png'),
(6, 'Mercedes-Maybach Class', '8.199.000.000', 'Sedans', './img/machbachscalss.png'),
(7, 'GLA SUV', '3.430.000.000', 'SUV', './img/glasuv.png'),
(8, 'GLB', '2.069.000.000', 'SUV', './img/glb.png'),
(9, 'GLC', '1.859.000.000', 'SUV', './img/glc.png'),
(10, 'GLC Coupé', '3.099.000.000', 'SUV', './img/glccoupe.png'),
(11, 'GLE', '4.409.000.000', 'SUV', './img/gle.png'),
(12, 'GLE Coupé', '5.499.000.000', 'SUV', './img/glecoupe.png'),
(13, 'GLS', '5.139.000.000', 'SUV', './img/gls.png'),
(14, 'G-Class', '10.950.000.000', 'SUV', './img/gclass.png'),
(15, 'Mercedes-Maybach GLS', '8.399.000.000', 'SUV', './img/machbaygls.png'),
(16, 'Mercedes-AMG GT Coupé', '11.590.000.000', 'Coupés', './img/gtcou.png'),
(17, 'Mercedes-AMG Coupé', '6.719.000.000', 'Coupés', './img/gt4coupe.png'),
(18, 'V-Class', '2.828.000.000', 'MPV', './img/vclass.png');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_phone` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_birth` varchar(255) DEFAULT NULL,
  `user_gender` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_phone`, `user_password`, `user_birth`, `user_gender`) VALUES
(1, 'Nguyen Thi My Khanh', 'khanhb1910657@student.ctu.edu.vn', '0976038762', '123456', '01-01-2001', 'female'),
(2, 'Nguyen Hieu Nghia', 'nghia0976038762', NULL, '123456', '01-01-2001', 'male'),
(3, 'Nguyen Hieu Nghia', 'nghia0976038762', NULL, '123456', '01-01-2001', 'male'),
(4, 'Nguyen Hieu Nghia', 'nghia0976038762', NULL, '123456', '01-01-2001', 'male');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`user_id`,`car_id`);

--
-- Indexes for table `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`car_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `car`
--
ALTER TABLE `car`
  MODIFY `car_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
