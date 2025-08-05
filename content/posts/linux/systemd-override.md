---
title: "Overriding a systemd service parameters"
date: 2025-08-05T07:56:01+00:00
description: Overriding a systemd service parameters
draft: false
categories:
  - Linux
  - systemd
tags:
  - systemd
---
# Overriding a systemd service parameters


To override systemd configuration, the primary method is using drop-in unit files, which allow you to modify specific settings without altering the original upstream unit file. This approach preserves the ability to receive updates to the original service configuration.

## Overriding a single service's configuration

To extend a service's configuration, create a directory named service_name.service.d under `/etc/systemd/system/` (e.g., `/etc/systemd/system/sshd.service.d/`).
Within this directory, create a configuration file, typically named override.conf, or use a descriptive name like `10_RestartSec_50.conf` to manage multiple overrides.
The file should contain the desired settings in the appropriate section, such as `[Service]`, and follow the same syntax as a standard unit file.
For example, to change the restart delay for the sshd service, add the following to the file:

```ini
[Service]
RestartSec=50
```

After creating the file, reload the systemd manager configuration to apply the changes using systemctl daemon-reload.
Then, restart the service with systemctl restart service_name to ensure the new settings are active.

The systemctl edit service_name command automates this process by creating the necessary directory and file, opening an editor for you to make changes, and ensuring the correct structure is used.
This command is particularly useful as it handles the creation of the override directory and file, and the generated file includes comments to guide the user on where to place their configuration.

## Overriding global systemd settings

For overriding global systemd settings defined in `/etc/systemd/system.conf`, a similar mechanism exists using the `/etc/systemd/system.conf.d/` directory.
Configuration files placed in this directory, such as `10-suppress-ctraltdel.conf`, will override settings in the main system.conf file.
The files in this directory are processed in lexicographic order, with higher-numbered files taking precedence if the same setting is defined multiple times.
The configuration must be placed within the `[Manager]` section of the file.

This method of using drop-in files is the standard and recommended practice for customizing systemd units, as it allows for targeted changes while maintaining compatibility with package updates.
