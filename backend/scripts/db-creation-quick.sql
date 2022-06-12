-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/cMo8Em
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE IF NOT EXISTS Users (
    UsersID int  NOT NULL AUTO_INCREMENT,
    Nombre varchar(30)  NOT NULL ,
    Mote varchar(30)  NOT NULL ,
    Email varchar(30)  NOT NULL ,
    Tuna int  NOT NULL ,
    Admin bool  NOT NULL ,
    Confirmed bool  NOT NULL ,
    PRIMARY KEY (
        UsersID
    )
);

CREATE TABLE IF NOT EXISTS Tunas (
    TunaID int  NOT NULL AUTO_INCREMENT,
    Nombre varchar(30)  NOT NULL ,
    LogoID varchar(30)  NOT NULL ,
    PRIMARY KEY (
        TunaID
    )
);

CREATE TABLE IF NOT EXISTS Songs (
    CancionID int  NOT NULL AUTO_INCREMENT,
    Nombre varchar(30)  NOT NULL ,
    Tuna int  NOT NULL ,
    UltimoEditor int  NULL ,
    PRIMARY KEY (
        CancionID
    )
);

CREATE TABLE IF NOT EXISTS Events (
    EventsID int  NOT NULL AUTO_INCREMENT,
    Creador int  NOT NULL ,
    Participante int  NOT NULL ,
    Fotos int  NOT NULL ,
    PRIMARY KEY (
        EventsID
    )
);

CREATE TABLE IF NOT EXISTS ParticipaEn (
    UsersID int  NOT NULL ,
    EventsID int  NOT NULL
);

ALTER TABLE Users ADD CONSTRAINT fk_Users_Tuna FOREIGN KEY(Tuna)
REFERENCES Tuna (TunaID);

ALTER TABLE Cancion ADD CONSTRAINT fk_Cancion_Tuna FOREIGN KEY(Tuna)
REFERENCES Tuna (TunaID);

ALTER TABLE Cancion ADD CONSTRAINT fk_Cancion_UltimoEditor FOREIGN KEY(UltimoEditor)
REFERENCES Users (UsersID);

ALTER TABLE Events ADD CONSTRAINT fk_Events_Creador FOREIGN KEY(Creador)
REFERENCES Users (UsersID);

ALTER TABLE ParticipaEn ADD CONSTRAINT fk_ParticipaEn_UsersID FOREIGN KEY(UsersID)
REFERENCES Users (UsersID);

ALTER TABLE ParticipaEn ADD CONSTRAINT fk_ParticipaEn_EventsID FOREIGN KEY(EventsID)
REFERENCES Events (EventsID);

