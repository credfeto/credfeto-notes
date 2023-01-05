# SQL Server notes

## Take DB offline

```sql
USE [master]
GO
ALTER DATABASE [MyDatabase] SET OFFLINE
GO
```
## Grant rights to a user in db

```sql
exec sp_adduser @loginame = 'reports', @name_in_db = 'Reports-User', @grpname = 'reports'

GRANT CONNECT TO reports;


create user [Reports-User] from login [reports]

exec sp_addrolemember 'reports', 'Reports-User';

```
