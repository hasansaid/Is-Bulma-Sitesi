USE [master]
GO
/****** Object:  Database [isapi2]    Script Date: 12.12.2022 00:15:44 ******/
CREATE DATABASE [isapi2]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'isapi2', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS01\MSSQL\DATA\isapi2.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'isapi2_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS01\MSSQL\DATA\isapi2_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [isapi2] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [isapi2].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [isapi2] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [isapi2] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [isapi2] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [isapi2] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [isapi2] SET ARITHABORT OFF 
GO
ALTER DATABASE [isapi2] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [isapi2] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [isapi2] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [isapi2] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [isapi2] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [isapi2] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [isapi2] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [isapi2] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [isapi2] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [isapi2] SET  DISABLE_BROKER 
GO
ALTER DATABASE [isapi2] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [isapi2] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [isapi2] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [isapi2] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [isapi2] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [isapi2] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [isapi2] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [isapi2] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [isapi2] SET  MULTI_USER 
GO
ALTER DATABASE [isapi2] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [isapi2] SET DB_CHAINING OFF 
GO
ALTER DATABASE [isapi2] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [isapi2] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [isapi2] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [isapi2] SET QUERY_STORE = OFF
GO
USE [isapi2]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 12.12.2022 00:15:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Jobs]    Script Date: 12.12.2022 00:15:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Jobs](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Location] [nvarchar](max) NOT NULL,
	[Contract] [nvarchar](max) NOT NULL,
	[Remote] [bit] NOT NULL,
	[Immediate] [bit] NOT NULL,
	[Level] [nvarchar](max) NOT NULL,
	[SendDate] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Jobs] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Techs]    Script Date: 12.12.2022 00:15:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Techs](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[JobId] [int] NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Techs] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserJobs]    Script Date: 12.12.2022 00:15:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserJobs](
	[UserId] [int] NOT NULL,
	[JobId] [int] NOT NULL,
	[IsApplied] [bit] NOT NULL,
	[IsSaved] [bit] NOT NULL,
	[Status] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_UserJobs] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[JobId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 12.12.2022 00:15:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [nvarchar](max) NOT NULL,
	[Position] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Password] [nvarchar](max) NOT NULL,
	[Token] [nvarchar](max) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Index [IX_Techs_JobId]    Script Date: 12.12.2022 00:15:44 ******/
CREATE NONCLUSTERED INDEX [IX_Techs_JobId] ON [dbo].[Techs]
(
	[JobId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_UserJobs_JobId]    Script Date: 12.12.2022 00:15:44 ******/
CREATE NONCLUSTERED INDEX [IX_UserJobs_JobId] ON [dbo].[UserJobs]
(
	[JobId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [DF__Users__Token__2F10007B]  DEFAULT (N'') FOR [Token]
GO
ALTER TABLE [dbo].[Techs]  WITH CHECK ADD  CONSTRAINT [FK_Techs_Jobs_JobId] FOREIGN KEY([JobId])
REFERENCES [dbo].[Jobs] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Techs] CHECK CONSTRAINT [FK_Techs_Jobs_JobId]
GO
ALTER TABLE [dbo].[UserJobs]  WITH CHECK ADD  CONSTRAINT [FK_UserJobs_Jobs_JobId] FOREIGN KEY([JobId])
REFERENCES [dbo].[Jobs] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UserJobs] CHECK CONSTRAINT [FK_UserJobs_Jobs_JobId]
GO
ALTER TABLE [dbo].[UserJobs]  WITH CHECK ADD  CONSTRAINT [FK_UserJobs_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UserJobs] CHECK CONSTRAINT [FK_UserJobs_Users_UserId]
GO
USE [master]
GO
ALTER DATABASE [isapi2] SET  READ_WRITE 
GO
