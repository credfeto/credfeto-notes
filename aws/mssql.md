# AWS RDS SQL

## Backup RDS to S3

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
