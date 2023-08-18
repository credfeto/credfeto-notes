---
title: "Postgresql Granting access"
date: 2023-01-15T08:47:11+01:00
description: Access to DB and server
draft: false
categories:
  - SQL
tags:
  - Postgresql
  - Security
---

## Create Login to SQL Server

```sql
CREATE ROLE my_user LOGIN PASSWORD 'my_password';
```

## Grant access to database

```sql
GRANT CONNECT ON DATABASE my_db TO my_user;
```

### Granting basic read/write

```sql
GRANT pg_read_all_data TO my_user;
GRANT pg_write_all_data TO my_user;
```

## Granting access to a schema in a db

```sql
GRANT USAGE ON SCHEMA public TO my_user;
```
