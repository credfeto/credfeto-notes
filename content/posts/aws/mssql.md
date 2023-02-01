---
title: "AWS RDS SQL"
date: 2019-03-26T08:47:11+01:00
description: MSSQL in AWS
draft: false
categories:
  - AWS
  - SQL
  - MSSQL
tags:
  - RDS
---

# AWS RDS SQL



## Backup RDS to S3

* [backup and restore documentation](https://aws.amazon.com/premiumsupport/knowledge-center/native-backup-rds-sql-server/)

```sql
exec msdb.dbo.rds_backup_database 
        @source_db_name='database_name', @s3_arn_to_backup_to='arn:aws:s3:::bucket_name/file_name_and_extension', 
        @overwrite_S3_backup_file=1;
```

## Restore from S3

```sql
exec msdb.dbo.rds_restore_database 
          @restore_db_name='database_name', 
          @s3_arn_to_restore_from='arn:aws:s3:::bucket_name/file_name_and_extension';
```

## Check RDS Status

```sql
exec msdb.dbo.rds_task_status @db_name='database_name'
```
