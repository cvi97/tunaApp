-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: bsu5ekft4qhzb6cxmzm1-mysql.services.clever-cloud.com    Database: bsu5ekft4qhzb6cxmzm1
-- ------------------------------------------------------
-- Server version	8.0.22-13


--
-- GTID state at the beginning of the backup 
--

--
-- Table structure for table `Events`
--

DROP TABLE IF EXISTS `Events`;

CREATE TABLE `Events` (
  `EventID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Description` varchar(200) DEFAULT NULL,
  `Creator` int DEFAULT NULL,
  `Tuna` int NOT NULL,
  `Date` date DEFAULT NULL,
  PRIMARY KEY (`EventID`),
  KEY `fk_creator_idx` (`Creator`),
  KEY `fk_event_tuna_idx` (`Tuna`),
  CONSTRAINT `fk_creator` FOREIGN KEY (`Creator`) REFERENCES `Users` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_event_tuna` FOREIGN KEY (`Tuna`) REFERENCES `Tunas` (`TunaID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;



--
-- Table structure for table `Song`
--

DROP TABLE IF EXISTS `Song`;

CREATE TABLE `Song` (
  `SongID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Tuna` int NOT NULL,
  `LastEditor` int DEFAULT NULL,
  `Author` varchar(45) DEFAULT NULL,
  `Lyrics` text,
  PRIMARY KEY (`SongID`),
  KEY `fk_tuna_idx` (`Tuna`),
  KEY `fk_editor_idx` (`LastEditor`),
  CONSTRAINT `fk_editor` FOREIGN KEY (`LastEditor`) REFERENCES `Users` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_tuna` FOREIGN KEY (`Tuna`) REFERENCES `Tunas` (`TunaID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;



--
-- Table structure for table `Task`
--

DROP TABLE IF EXISTS `Task`;

CREATE TABLE `Task` (
  `idTask` int NOT NULL AUTO_INCREMENT,
  `Creator` int NOT NULL,
  `Description` varchar(450) DEFAULT '"Tarea"',
  `Novato` int NOT NULL,
  `Completed` tinyint DEFAULT '0',
  PRIMARY KEY (`idTask`),
  KEY `fk_creator_idx` (`Creator`),
  KEY `fk_task_novato_idx` (`Novato`),
  CONSTRAINT `fk_task_creator` FOREIGN KEY (`Creator`) REFERENCES `Users` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_task_novato` FOREIGN KEY (`Novato`) REFERENCES `Users` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



--
-- Table structure for table `Tunas`
--

DROP TABLE IF EXISTS `Tunas`;

CREATE TABLE `Tunas` (
  `TunaID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `ShortName` varchar(45) NOT NULL,
  PRIMARY KEY (`TunaID`,`Name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--
-- Table structure for table `UserEvent`
--

DROP TABLE IF EXISTS `UserEvent`;

CREATE TABLE `UserEvent` (
  `User` int NOT NULL,
  `Event` int NOT NULL,
  `Paid` tinyint DEFAULT '0',
  PRIMARY KEY (`User`,`Event`),
  KEY `fk_event_idx` (`Event`),
  CONSTRAINT `fk_event` FOREIGN KEY (`Event`) REFERENCES `Events` (`EventID`),
  CONSTRAINT `fk_user` FOREIGN KEY (`User`) REFERENCES `Users` (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `UserID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Mote` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Tuna` int DEFAULT NULL,
  `isAdmin` tinyint DEFAULT '0',
  `isConfirmed` tinyint DEFAULT '0',
  `Role` varchar(45) DEFAULT 'tuno',
  `Password` blob,
  PRIMARY KEY (`UserID`),
  KEY `fk_user_tuna_idx` (`Tuna`),
  CONSTRAINT `fk_user_tuna` FOREIGN KEY (`Tuna`) REFERENCES `Tunas` (`TunaID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;


-- Dump completed on 2022-06-22 11:08:45
