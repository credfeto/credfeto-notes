---
title: "Taking MSSQL DB offline"
date: 2022-12-05T08:47:11+01:00
description: MSSQL notes
draft: false
categories:
  - SQL
tags:
  - MSSQL
  - Security
---
# Take DB offline

```sql
USE [master]
GO
ALTER DATABASE [MyDatabase] SET OFFLINE
GO
```
