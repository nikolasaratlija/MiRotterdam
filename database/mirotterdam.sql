-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 24 dec 2021 om 14:17
-- Serverversie: 10.6.5-MariaDB
-- PHP-versie: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mirotterdam`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `designs`
--

CREATE TABLE `designs` (
  `id` int(11) NOT NULL,
  `location_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `designs`
--

INSERT INTO `designs` (`id`, `location_id`) VALUES
(4, 5),
(8, 7),
(9, 7),
(12, 16),
(13, 16),
(14, 16),
(19, 16),
(10, 17),
(11, 17),
(15, 18);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `elements`
--

CREATE TABLE `elements` (
  `id` int(11) NOT NULL,
  `image` varchar(45) NOT NULL,
  `width` int(11) NOT NULL,
  `position_x` int(11) NOT NULL,
  `position_y` int(11) NOT NULL,
  `design_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `elements`
--

INSERT INTO `elements` (`id`, `image`, `width`, `position_x`, `position_y`, `design_id`) VALUES
(3, 'g-Bloem1.png', 100, 215, 255, 4),
(11, 'g-Bloem3.png', 100, 81, 460, 4),
(16, 'ss-Basketbal.png', 122, 34, 340, 8),
(17, 'o-Schommel.png', 135, 215, 401, 8),
(18, 'ss-Speeltoestel.png', 124, 41, 432, 9),
(19, 'ss-Speelkasteel.png', 146, 197, 586, 9),
(20, 'ss-Klimrek1.png', 100, 400, 400, 10),
(21, 'g-Boom4.png', 100, 200, 200, 10),
(22, 'o-Picknick.png', 100, 200, 200, 11),
(23, 'o-Schommel.png', 100, 400, 400, 11),
(24, 'g-Bloem1.png', 100, 215, 400, 15),
(25, 'g-Bloem1.png', 100, 215, 255, 15),
(27, 'o-Picknick.png', 154, 47, 478, 19);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `locations`
--

CREATE TABLE `locations` (
  `id` int(11) NOT NULL,
  `location` varchar(90) NOT NULL,
  `image` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `locations`
--

INSERT INTO `locations` (`id`, `location`, `image`) VALUES
(5, 'Beijerlandselaan', 'L-5'),
(7, 'Retiefstraat', 'L-6'),
(16, 'Coolsingel', NULL),
(17, 'Hofplein', NULL),
(18, 'Wilhelminaplein', NULL);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `login`
--

CREATE TABLE `login` (
  `Gebruikersnaam` varchar(30) NOT NULL,
  `Wachtwoord` varchar(30) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `login`
--

INSERT INTO `login` (`Gebruikersnaam`, `Wachtwoord`, `email`, `id`) VALUES
('Bram', '123', '1009906@hr.nl', 1),
('Elisa', '123456', 'test@gmail.com', 5);

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `designs`
--
ALTER TABLE `designs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `designs_ibfk_1` (`location_id`);

--
-- Indexen voor tabel `elements`
--
ALTER TABLE `elements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `location_elements_fk` (`design_id`);

--
-- Indexen voor tabel `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Gebruikersnaam` (`Gebruikersnaam`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `designs`
--
ALTER TABLE `designs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT voor een tabel `elements`
--
ALTER TABLE `elements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT voor een tabel `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT voor een tabel `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `designs`
--
ALTER TABLE `designs`
  ADD CONSTRAINT `designs_ibfk_1` FOREIGN KEY (`location_id`) REFERENCES `locations` (`id`);

--
-- Beperkingen voor tabel `elements`
--
ALTER TABLE `elements`
  ADD CONSTRAINT `element_design_fk` FOREIGN KEY (`design_id`) REFERENCES `designs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
