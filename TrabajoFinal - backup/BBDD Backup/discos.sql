-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-12-2023 a las 02:12:16
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `discos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `discos`
--

CREATE TABLE `discos` (
  `id` int(11) NOT NULL,
  `artista` varchar(58) NOT NULL,
  `album` varchar(97) NOT NULL,
  `anio` int(4) NOT NULL,
  `genero` varchar(17) NOT NULL,
  `discogs` varchar(140) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `discos`
--

INSERT INTO `discos` (`id`, `artista`, `album`, `anio`, `genero`, `discogs`) VALUES
(1, 'ABBA', 'CD Album Box Set', 2022, 'Pop', 'https://www.discogs.com/es/master/2647886-ABBA-CD-Album-Box-Set'),
(2, 'A-HA', 'MTV Unplugged (Summer Solstice)', 2017, 'Pop', 'https://www.discogs.com/es/master/1249738-a-ha-MTV-Unplugged-Summer-Solstice'),
(5, 'Aerosmith', 'Permanent Vacation', 1987, 'Rock', 'https://www.discogs.com/es/master/37029-Aerosmith-Permanent-Vacation'),
(6, 'Aerosmith', 'Pump', 1989, 'Rock', 'https://www.discogs.com/es/master/37145-Aerosmith-Pump'),
(7, 'Aerosmith', 'Get a grip', 1993, 'Rock', 'https://www.discogs.com/es/master/37273-Aerosmith-Get-A-Grip'),
(8, 'The Alan Parsons Project', 'Pyramid', 1978, 'Progressive Rock', 'https://www.discogs.com/es/master/4398-The-Alan-Parsons-Project-Pyramid'),
(10, 'The Alan Parsons Project', 'Tales of mistery and imagination - Edgar Allan Poe', 1976, 'Progressive Rock', 'https://www.discogs.com/es/master/4322-The-Alan-Parsons-Project-Tales-Of-Mystery-And-Imagination-Edgar-Allan-Poe'),
(34, 'The Beatles', 'Please, please me', 1963, 'Pop', 'https://www.discogs.com/es/master/45362-The-Beatles-Please-Please-Me'),
(35, 'The Beatles', 'With The Beatles', 1963, 'Pop', 'https://www.discogs.com/es/master/45729-The-Beatles-With-The-Beatles'),
(36, 'The Beatles', 'A Hard Day\'s Night', 1964, 'Pop', 'https://www.discogs.com/es/master/24003-The-Beatles-A-Hard-Days-Night'),
(37, 'The Beatles', 'Beatles for sale', 1964, 'Pop', 'https://www.discogs.com/es/master/45799-The-Beatles-Beatles-For-Sale'),
(38, 'The Beatles', 'Rubber soul', 1965, 'Pop', 'https://www.discogs.com/es/master/45526-The-Beatles-Rubber-Soul'),
(39, 'The Beatles', 'Help!', 1965, 'Pop', 'https://www.discogs.com/es/master/45895-The-Beatles-Help'),
(40, 'The Beatles', 'Revolver', 1966, 'Pop', 'https://www.discogs.com/es/master/45284-Los-Beatles-Revolver'),
(42, 'The Beatles', 'Magical Mistery Tour', 1967, 'Pop', 'https://www.discogs.com/es/master/54463-The-Beatles-Magical-Mystery-Tour'),
(43, 'The Beatles', 'The Beatles (White Album)', 1968, 'Pop', 'https://www.discogs.com/es/release/10949698-The-Beatles-The-Beatles-White-Album'),
(44, 'The Beatles', 'Abbey Road', 1969, 'Pop', 'https://www.discogs.com/es/master/24047-The-Beatles-Abbey-Road'),
(45, 'The Beatles', 'Yellow submarine', 1969, 'Pop', 'https://www.discogs.com/es/master/54565-The-Beatles-Yellow-Submarine'),
(46, 'The Beatles', 'Let it be', 1970, 'Pop', 'https://www.discogs.com/es/release/377554-The-Beatles-Let-It-Be'),
(47, 'The Beatles', 'Let it be... Naked', 2003, 'Pop', 'https://www.discogs.com/es/master/59442-The-Beatles-Let-It-Be-Naked'),
(48, 'The Beatles', '1962-1966 // 1967-1970', 2010, 'Pop', 'https://www.discogs.com/es/release/2524626-The-Beatles-1962-1966-1967-1970'),
(49, 'Barry Gibb & Friends', 'Greenfields: The Gibb Brothers Songbook Vol.1', 2021, 'Pop', 'https://www.discogs.com/es/master/1912017-Barry-Gibb-Friends-Greenfields-The-Gibb-Brothers-Songbook-Vol-1'),
(51, 'Billy Joel', 'An innocent man', 1983, 'Pop', 'https://www.discogs.com/es/master/43553-Billy-Joel-An-Innocent-Man'),
(53, 'Billy Joel', 'Storm Front', 1989, 'Pop', 'https://www.discogs.com/es/master/75442-Billy-Joel-Storm-Front'),
(60, 'Blue Öyster Cult', 'Fire of unknown origin', 1981, 'Pop/Rock', 'https://www.discogs.com/es/master/68040-Blue-%C3%96yster-Cult-Fire-Of-Unknown-Origin'),
(65, 'Bruce Springsteen', 'Born in the U.S.A.', 1984, 'Rock', 'https://www.discogs.com/master/26701-Bruce-Springsteen-Born-In-The-USA'),
(66, 'Bruce Springsteen & The E-Street Band', 'Live / 1975-85', 1986, 'Rock', 'https://www.discogs.com/es/master/27684-Bruce-Springsteen-The-E-Street-Band-Live-1975-85'),
(67, 'Bruce Springsteen', 'Tunnel of love', 1987, 'Rock', 'https://www.discogs.com/master/27206-Bruce-Springsteen-Tunnel-Of-Love-'),
(71, 'The Cars', 'Heartbeat City', 1984, 'Pop/Rock', 'https://www.discogs.com/es/master/69630-The-Cars-Heartbeat-City'),
(73, 'The Cars', 'Original album series', 2010, 'Pop/Rock', 'https://www.discogs.com/es/master/472988-The-Cars-Original-Album-Series'),
(78, 'The Clash', 'The Story Of The Clash, Volume I', 1988, 'Punk Rock', 'https://www.discogs.com/es/master/24377-The-Clash-The-Story-Of-The-Clash-Volume-1'),
(91, 'Cutting Crew', 'Broadcast', 1986, 'Pop', 'https://www.discogs.com/es/master/65301-Cutting-Crew-Broadcast'),
(96, 'Daryl Hall & John Oates with David Ruffin & Eddie Kendrick', 'Live at the Apollo', 1985, 'Pop/Rock', 'https://www.discogs.com/es/master/27841-Daryl-Hall-John-Oates-With-David-Ruffin-Eddie-Kendrick-Live-At-The-Apollo'),
(105, 'Def Leppard', 'On through the night', 1980, 'Hard Rock', 'https://www.discogs.com/es/master/31089-Def-Leppard-On-Through-The-Night'),
(106, 'Def Leppard', 'High \'N\' Dry', 1981, 'Hard Rock', 'https://www.discogs.com/es/master/31060-Def-Leppard-High-N-Dry'),
(107, 'Def Leppard', 'Pyromania', 1983, 'Hard Rock', 'https://www.discogs.com/es/master/31037-Def-Leppard-Pyromania'),
(108, 'Def Leppard', 'Hysteria', 1987, 'Hard Rock', 'https://www.discogs.com/es/master/31048-Def-Leppard-Hysteria'),
(109, 'Def Leppard', 'Adrenalize', 1992, 'Hard Rock', 'https://www.discogs.com/es/master/31080-Def-Leppard-Adrenalize-Lets-Get-Rocked'),
(110, 'Def Leppard', 'Retro active', 1993, 'Hard Rock', 'https://www.discogs.com/es/master/56422-Def-Leppard-Retro-Active'),
(113, 'Def Leppard', 'Yeah!', 2005, 'Hard Rock', 'https://www.discogs.com/es/master/31180-Def-Leppard-Yeah'),
(114, 'Def Leppard', 'Songs From The Sparkle Lounge', 2008, 'Hard Rock', 'https://www.discogs.com/es/master/198490-Def-Leppard-Songs-From-The-Sparkle-Lounge'),
(115, 'Def Leppard', 'Viva! Hysteria - Live At The Joint, Las Vegas', 2013, 'Hard Rock', 'https://www.discogs.com/es/release/5072249-Def-Leppard-Viva-Hysteria-Live-At-The-Joint-Las-Vegas'),
(116, 'Def Leppard', 'Def Leppard', 2015, 'Hard Rock', 'https://www.discogs.com/es/master/905339-Def-Leppard-Def-Leppard'),
(117, 'Def Leppard', 'Diamond Star Halos', 2022, 'Hard Rock', 'https://www.discogs.com/es/master/2648444-Def-Leppard-Diamond-Star-Halos'),
(119, 'Depeche Mode', '101', 1999, 'Techno', 'https://www.discogs.com/es/master/2658-Depeche-Mode-101'),
(121, 'Dire Straits', 'Alchemy - Dire Straits Live', 1984, 'Pop/Rock', 'https://www.discogs.com/es/master/23669-Dire-Straits-Alchemy-Dire-Straits-Live'),
(122, 'Dire Straits', 'The Studio Albums - 1978-1991', 2013, 'Pop/Rock', 'https://www.discogs.com/es/master/636450-Dire-Straits-The-Studio-Albums-1978-1991'),
(133, 'Duran Duran', 'Greatest', 1998, 'Pop', 'https://www.discogs.com/es/master/121172-Duran-Duran-Greatest'),
(134, 'Eagles', 'Hell freezes over', 1994, 'Pop/Rock', 'https://www.discogs.com/es/master/59534-Eagles-Hell-Freezes-Over'),
(137, 'Extreme', 'Extreme II : Pornograffitti (A Funked Up Fairytale)', 1989, 'Heavy Metal', 'https://www.discogs.com/es/master/140552-Extreme-Extreme-Pornograffitti-ll'),
(138, 'Extreme', 'III sides to every story', 1990, 'Heavy Metal', 'https://www.discogs.com/es/master/140548-Extreme-III-Sides-To-Every-Story'),
(151, 'Fleetwood Mac', 'Fleetwood Mac', 1975, 'Pop', 'https://www.discogs.com/master/38776-Fleetwood-Mac-Fleetwood-Mac'),
(152, 'Fleetwood Mac', 'Rumors', 1977, 'Pop', 'https://www.discogs.com/master/38722-Fleetwood-Mac-Rumours'),
(153, 'Fleetwood Mac', 'Tusk', 1979, 'Pop', 'https://www.discogs.com/master/38741-Fleetwood-Mac-Tusk'),
(154, 'Fleetwood Mac', 'Mirage', 1982, 'Pop', 'https://www.discogs.com/master/38703-Fleetwood-Mac-Mirage'),
(155, 'Fleetwood Mac', 'Tango in the night', 1987, 'Pop', 'https://www.discogs.com/master/38735-Fleetwood-Mac-Tango-In-The-Night'),
(156, 'Fleetwood Mac', 'Behind the mask', 1990, 'Pop', 'https://www.discogs.com/master/38633-Fleetwood-Mac-Behind-The-Mask'),
(157, 'Fleetwood Mac', 'The chain', 1992, 'Pop', 'https://www.discogs.com/es/master/417050-Fleetwood-Mac-25-Years-The-Chain'),
(158, 'Fleetwood Mac', 'The dance', 1997, 'Pop', 'https://www.discogs.com/master/128600-Fleetwood-Mac-The-Dance'),
(163, 'Genesis', 'Wind & Wuthering', 1976, 'Progressive Rock', 'https://www.discogs.com/es/master/29409-Genesis-Wind-Wuthering'),
(164, 'Genesis', 'Seconds out', 1977, 'Progressive Rock', 'https://www.discogs.com/es/master/29190-Genesis-Seconds-Out'),
(165, 'Genesis', '...and then there were three...', 1978, 'Progressive Rock', 'https://www.discogs.com/es/master/28715-Genesis-And-Then-There-Were-Three'),
(166, 'Genesis', 'Duke', 1980, 'Progressive Rock', 'https://www.discogs.com/es/master/28832-Genesis-Duke'),
(167, 'Genesis', 'Genesis', 1983, 'Progressive Rock', 'https://www.discogs.com/es/master/28911-Genesis-Genesis'),
(168, 'Genesis', 'Invisible touch', 1986, 'Progressive Rock', 'https://www.discogs.com/es/master/29002-Genesis-Invisible-Touch'),
(169, 'Genesis', 'We can\'t dance', 1991, 'Progressive Rock', 'https://www.discogs.com/es/master/29423-Genesis-We-Cant-Dance'),
(170, 'Genesis', 'Live over Europe', 2007, 'Progressive Rock', 'https://www.discogs.com/es/master/550433-Genesis-Live-Over-Europe-2007'),
(171, 'George Harrison', 'All things must pass', 1970, 'Rock', 'https://www.discogs.com/es/master/56036-George-Harrison-All-Things-Must-Pass'),
(172, 'George Harrison', 'Cloud 9', 1987, 'Rock', 'https://www.discogs.com/es/master/74960-George-Harrison-Cloud-Nine'),
(173, 'George Michael', 'Faith', 1987, 'Pop', 'https://www.discogs.com/es/master/96689-George-Michael-Faith'),
(175, 'George Thorogood & The Destroyers', 'Live', 1986, 'Rock', 'https://www.discogs.com/es/master/67559-George-Thorogood-The-Destroyers-Live'),
(184, 'Hagar, Schon, Aaronson, Shrieve', 'Through the fire', 1984, 'Pop/Rock', 'https://www.discogs.com/es/release/2717316-Hagar-Schon-Aaronson-Shrieve-Through-The-Fire'),
(194, 'The Housemartins', 'The People Who Grinned Themselves To Death', 1987, 'Pop', 'https://www.discogs.com/es/master/29528-The-Housemartins-The-People-Who-Grinned-Themselves-To-Death'),
(207, 'Janet Jackson', 'Control', 1986, 'Pop', 'https://www.discogs.com/es/master/79648-Janet-Jackson-Control'),
(208, 'Janet Jackson', 'Rhythm Nation 1814', 1989, 'Pop', 'https://www.discogs.com/es/master/92699-Janet-Jackson-Janet-Jacksons-Rhythm-Nation-1814'),
(217, 'Journey', 'Captured', 1981, 'Pop/Rock', 'https://www.discogs.com/es/master/80535-Journey-Captured'),
(218, 'Journey', 'Escape', 0, 'Pop/Rock', 'https://www.discogs.com/es/master/80583-Journey-Escape'),
(219, 'Journey', 'Frontiers', 1983, 'Pop/Rock', 'https://www.discogs.com/es/master/80594-Journey-Frontiers'),
(220, 'Journey', 'Raised on radio', 1983, 'Pop/Rock', 'https://www.discogs.com/es/master/80600-Journey-Raised-On-Radio'),
(221, 'Kansas', 'Leftoverture: Live and beyond', 2017, 'Rock', 'https://www.discogs.com/es/master/1263561-Kansas-Leftoverture-Live-Beyond'),
(234, 'Meat Loaf', 'Bat out of hell', 1977, 'Pop/Rock', 'https://www.discogs.com/es/release/2785383-Meat-Loaf-Bat-Out-Of-Hell'),
(235, 'Meat Loaf', 'Bat out of hell II: Back Into Hell', 1993, 'Pop/Rock', 'https://www.discogs.com/es/release/2990522-Meat-Loaf-Bat-Out-Of-Hell-II-Back-Into-Hell'),
(238, 'Michael Jackson', 'Off the wall', 1979, 'Pop', 'https://www.discogs.com/es/master/435524-Michael-Jackson-Off-The-Wall'),
(239, 'Michael Jackson', 'Thriller', 1982, 'Pop', 'https://www.discogs.com/es/master/8883-Michael-Jackson-Thriller'),
(240, 'Michael Jackson', 'Bad', 1987, 'Pop', 'https://www.discogs.com/es/master/8517-Michael-Jackson-Bad'),
(241, 'Michael Jackson', 'Dangerous', 1991, 'Pop', 'https://www.discogs.com/es/master/14641-Michael-Jackson-Dangerous'),
(253, 'New Order', '(the best of) New Order', 1994, 'Techno', 'https://www.discogs.com/es/release/170313-NewOrder-The-Best-Of-NewOrder'),
(289, 'Paul and Linda McCartney', 'Ram', 1971, 'Pop/Folk', 'https://www.discogs.com/es/master/92517-Paul-And-Linda-McCartney-Ram'),
(290, 'Paul McCartney', 'Wingspan: hits and history', 2001, 'Pop/Rock', 'https://www.discogs.com/es/master/93731-Paul-McCartney-Wingspan-Hits-And-History'),
(299, 'Peter Gabriel', 'Secret World Live', 1994, 'Pop', 'https://www.discogs.com/es/master/113216-Peter-Gabriel-Secret-World-Live'),
(300, 'The Police', 'Every breath you take: The singles', 1986, 'Pop', 'https://www.discogs.com/es/master/60159-The-Police-Every-Breath-You-Take-The-Singles'),
(307, 'Queen', 'Greatest Hits I II & III (The Platinum Collection)', 2000, 'Rock', 'https://www.discogs.com/es/master/265699-Queen-Greatest-Hits-I-II-III-The-Platinum-Collection'),
(326, 'Rod Stewart', 'Some guys have all the luck', 2008, 'Pop', 'https://www.discogs.com/es/release/13307072-Rod-Stewart-Some-Guys-Have-All-The-Luck'),
(327, 'Rod Stewart With Special Guest Ronnie Wood', 'Unplugged... and seated', 1993, 'Pop/Rock', 'https://www.discogs.com/es/master/110817-Rod-Stewart-With-Special-Guest-Ronnie-Wood-Unplugged-And-Seated'),
(328, 'Roy Orbison', 'Mistery girl', 1989, 'Pop', 'https://www.discogs.com/es/release/12750669-Roy-Orbison-Mystery-Girl'),
(329, 'Roger Hodgson', 'In the eye of the storm', 1984, 'Pop', 'https://www.discogs.com/es/master/55511-Roger-Hodgson-In-The-Eye-Of-The-Storm'),
(330, 'Rush', 'Chronicles', 1990, 'Progressive Rock', 'https://www.discogs.com/es/master/7437-Rush-Chronicles'),
(332, 'Rush', 'Rush in Rio', 2003, 'Progressive Rock', 'https://www.discogs.com/es/master/33762-Rush-Rush-In-Rio'),
(337, 'Paul Simon', 'Graceland', 1986, 'Pop/Folk', 'https://www.discogs.com/es/master/55658-Paul-Simon-Graceland'),
(338, 'Simply Red', 'Greatest Hits', 1996, 'Pop', 'https://www.discogs.com/es/master/66812-Simply-Red-Greatest-Hits'),
(357, 'Sting', 'Bring on the night', 1986, 'Pop', 'https://www.discogs.com/es/master/33618-Sting-Bring-On-The-Night'),
(360, 'Stevie Nicks', 'The wild heart', 1983, 'Pop', 'https://www.discogs.com/es/master/106396-Stevie-Nicks-The-Wild-Heart'),
(367, 'Supertramp', 'Paris', 1980, 'Pop/Rock', 'https://www.discogs.com/es/master/25404-Supertramp-Paris'),
(368, 'Talking Heads', 'Stop making sense', 1984, 'Pop', 'https://www.discogs.com/es/master/39350-Talking-Heads-Stop-Making-Sense'),
(373, 'Tina Turner', 'Tina Live In Europe', 1988, 'Pop', 'https://www.discogs.com/es/master/91800-Tina-Turner-Tina-Live-In-Europe'),
(375, 'Tom Petty', 'Full moon fever', 1989, 'Rock', 'https://www.discogs.com/es/master/74304-Tom-Petty-Full-Moon-Fever'),
(376, 'Tom Petty', 'Wildflowers', 1994, 'Rock', 'https://www.discogs.com/es/master/74309-Tom-Petty-Wildflowers'),
(377, 'Tom Petty & The Heartbreakers', 'Into the great wide open', 1991, 'Rock', 'https://www.discogs.com/es/master/74341-Tom-Petty-And-The-Heartbreakers-Into-The-Great-Wide-Open'),
(388, 'U2', 'Boy', 1980, 'Pop/Rock', 'https://www.discogs.com/master/48750-U2-Boy'),
(389, 'U2', 'October', 1981, 'Pop/Rock', 'https://www.discogs.com/master/48796-U2-October'),
(390, 'U2', 'Live \"Under A Blood Red Sky\"', 1983, 'Pop/Rock', 'https://www.discogs.com/master/54302-U2-Live-Under-A-Blood-Red-Sky'),
(391, 'U2', 'War', 1983, 'Pop/Rock', 'https://www.discogs.com/master/48830-U2-War'),
(392, 'U2', 'The unforgettable fire', 1984, 'Pop/Rock', 'https://www.discogs.com/master/62831-U2-The-Unforgettable-Fire'),
(393, 'U2', 'The Joshua tree', 1987, 'Pop/Rock', 'https://www.discogs.com/master/64290-U2-The-Joshua-Tree'),
(394, 'U2', 'Rattle and hum', 1988, 'Pop/Rock', 'https://www.discogs.com/master/62619-U2-Rattle-And-Hum'),
(395, 'U2', 'Achtung baby', 1991, 'Pop/Rock', 'https://www.discogs.com/master/20774-U2-Achtung-Baby'),
(422, '10,000 Maniacs', 'Our time in Eden', 1992, 'Pop/Folk', 'https://www.discogs.com/es/master/74599-10000-Maniacs-Our-Time-In-Eden'),
(446, 'The Housemartins', 'London 0 Hull 4', 1986, 'Pop', 'https://www.discogs.com/es/master/29500-The-Housemartins-London-0-Hull-4'),
(447, 'Iggy Pop', 'Blah Blah Blah', 1986, 'Pop/Rock', 'https://www.discogs.com/es/master/38112-Iggy-Pop-Blah-Blah-Blah'),
(467, 'Queen', 'Jazz', 1978, 'Rock', 'https://www.discogs.com/es/master/7103-Queen-Jazz'),
(469, 'ABBA', 'More gold', 1993, 'Pop', 'data'),
(470, '10,000 Maniacs', 'MTV Unplugged', 1993, 'Pop/Folk', 'https://www.discogs.com/es/master/105502-10000-Maniacs-MTV-Unplugged'),
(471, '10,000 Maniacs', 'In my tribe', 1993, 'Pop', 'https://www.discogs.com/es/master/74588-10000-Maniacs-In-My-Tribe'),
(472, 'ABBA', 'Golden collection', 2000, 'Pop', 'https://www.discogs.com/es/master/5298-ABBA-ABBA');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `discos`
--
ALTER TABLE `discos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `discos`
--
ALTER TABLE `discos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=474;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
