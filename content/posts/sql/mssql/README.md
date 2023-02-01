---
title: "MSSQL Notes"
date: 2019-03-26T08:47:11+01:00
description: MSSQL notes
draft: false
categories:
  - SQL
tags:
  - MSSQL
  - Security
---
# SQL Server notes

## Take DB offline

```sql
USE [master]
GO
ALTER DATABASE [MyDatabase] SET OFFLINE
GO
```
## Create Login to SQL Server

```sql
CREATE LOGIN reports WITH PASSWORD = 'somethingsecure', CHECK_EXPIRATION = ON
```

## Change SQL Server password

```sql
alter login reports with password = 'secure password'
```

## Grant rights to a user in db

```sql
use [Database-name]
GO

-- add DB user
CREATE USER [Reports-User] FROM LOGIN [reports]
GO

-- map that user to a role in the db
EXEC sp_addrolemember 'reports', 'Reports-User';
GO
```
