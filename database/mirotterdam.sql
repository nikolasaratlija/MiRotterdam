SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE `locations` (
  `id` int(11) NOT NULL,
  `location` varchar(90) NOT NULL,
  `image` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `locations` (`id`, `location`, `image`) VALUES
(5, 'Beijerlandselaand', 'L-5.png'),
(7, 'Retiefstraat', 'L-6.png'),
(16, 'Beurs', NULL);


ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;