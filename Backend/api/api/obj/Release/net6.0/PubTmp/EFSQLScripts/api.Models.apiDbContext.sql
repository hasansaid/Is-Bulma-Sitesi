IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221111055931_apiMigration')
BEGIN
    CREATE TABLE [Jobs] (
        [Id] int NOT NULL IDENTITY,
        [Name] nvarchar(max) NOT NULL,
        [Location] nvarchar(max) NOT NULL,
        [Contract] nvarchar(max) NOT NULL,
        [Remote] bit NOT NULL,
        [Immediate] bit NOT NULL,
        [Level] nvarchar(max) NOT NULL,
        [SendDate] nvarchar(max) NOT NULL,
        CONSTRAINT [PK_Jobs] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221111055931_apiMigration')
BEGIN
    CREATE TABLE [Users] (
        [Id] int NOT NULL IDENTITY,
        [FullName] nvarchar(max) NOT NULL,
        [Position] nvarchar(max) NOT NULL,
        [Email] nvarchar(max) NOT NULL,
        [Password] nvarchar(max) NOT NULL,
        CONSTRAINT [PK_Users] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221111055931_apiMigration')
BEGIN
    CREATE TABLE [Techs] (
        [Id] int NOT NULL IDENTITY,
        [JobId] int NOT NULL,
        [Name] nvarchar(max) NOT NULL,
        CONSTRAINT [PK_Techs] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_Techs_Jobs_JobId] FOREIGN KEY ([JobId]) REFERENCES [Jobs] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221111055931_apiMigration')
BEGIN
    CREATE TABLE [UserJobs] (
        [UserId] int NOT NULL,
        [JobId] int NOT NULL,
        [IsApplied] bit NOT NULL,
        [IsSaved] bit NOT NULL,
        [Status] nvarchar(max) NOT NULL,
        CONSTRAINT [PK_UserJobs] PRIMARY KEY ([UserId], [JobId]),
        CONSTRAINT [FK_UserJobs_Jobs_JobId] FOREIGN KEY ([JobId]) REFERENCES [Jobs] ([Id]) ON DELETE CASCADE,
        CONSTRAINT [FK_UserJobs_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [Users] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221111055931_apiMigration')
BEGIN
    CREATE INDEX [IX_Techs_JobId] ON [Techs] ([JobId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221111055931_apiMigration')
BEGIN
    CREATE INDEX [IX_UserJobs_JobId] ON [UserJobs] ([JobId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221111055931_apiMigration')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20221111055931_apiMigration', N'7.0.0');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221111200337_apiMigrations')
BEGIN
    ALTER TABLE [Users] ADD [Token] nvarchar(max) NULL DEFAULT N'';
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221111200337_apiMigrations')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20221111200337_apiMigrations', N'7.0.0');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221111204747_apiMigrations3')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20221111204747_apiMigrations3', N'7.0.0');
END;
GO

COMMIT;
GO

