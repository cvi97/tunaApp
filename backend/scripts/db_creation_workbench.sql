CREATE TABLE `Tunas` (
  `TunaID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  PRIMARY KEY (`idTunas`,`Name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `Users` (
  `UserID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Mote` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Tuna` int DEFAULT NULL,
  `isAdmin` tinyint DEFAULT '0',
  `isConfirmed` tinyint DEFAULT '0',
  PRIMARY KEY (`UserID`),
  KEY `fk_user_tuna_idx` (`Tuna`),
  CONSTRAINT `fk_user_tuna` FOREIGN KEY (`Tuna`) REFERENCES `Tunas` (`TunaID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
