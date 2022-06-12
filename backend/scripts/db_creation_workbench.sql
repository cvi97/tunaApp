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


CREATE TABLE `bsu5ekft4qhzb6cxmzm1`.`Events` (
  `EventID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Description` VARCHAR(200) NULL,
  `Creator` INT NULL,
  PRIMARY KEY (`EventID`),
  INDEX `fk_creator_idx` (`Creator` ASC) VISIBLE,
  CONSTRAINT `fk_creator`
    FOREIGN KEY (`Creator`)
    REFERENCES `bsu5ekft4qhzb6cxmzm1`.`Users` (`UserID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


CREATE TABLE IF NOT EXISTS `bsu5ekft4qhzb6cxmzm1`.`Song` (
  `SongID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `Tuna` INT NOT NULL,
  `LastEditor` INT NULL,
  PRIMARY KEY (`SongID`),
  INDEX `fk_tuna_idx` (`Tuna` ASC) VISIBLE,
  INDEX `fk_editor_idx` (`LastEditor` ASC) VISIBLE,
  CONSTRAINT `fk_tuna`
    FOREIGN KEY (`Tuna`)
    REFERENCES `bsu5ekft4qhzb6cxmzm1`.`Tunas` (`TunaID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_editor`
    FOREIGN KEY (`LastEditor`)
    REFERENCES `bsu5ekft4qhzb6cxmzm1`.`Users` (`UserID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB

CREATE TABLE `bsu5ekft4qhzb6cxmzm1`.`UserEvent` (
  `User` INT NOT NULL,
  `Event` INT NOT NULL,
  PRIMARY KEY (`User`, `Event`),
  INDEX `fk_event_idx` (`Event` ASC) VISIBLE,
  CONSTRAINT `fk_user`
    FOREIGN KEY (`User`)
    REFERENCES `bsu5ekft4qhzb6cxmzm1`.`Users` (`UserID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_event`
    FOREIGN KEY (`Event`)
    REFERENCES `bsu5ekft4qhzb6cxmzm1`.`Events` (`EventID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);