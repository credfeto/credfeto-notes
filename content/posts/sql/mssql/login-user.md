---
title: "MSSQL Granting access"
date: 2023-01-15T08:47:11+01:00
description: Access to DB and server
draft: false
categories:
  - SQL
tags:
  - MSSQL
  - Security
---
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
