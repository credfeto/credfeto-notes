---
title: "Script BASEDIR"
date: 2026-10-04T09:00:00+01:00
description: Record the project root once in the entry-point script instead of deriving it inside sourced libraries
draft: false
categories:
  - Linux
tags:
  - Bash
  - Shell
---

## The problem

A library that is sourced by another script should not work out the project root from its own path.
Code like this looks reasonable:

```bash
# lib/paths.sh - do not do this
LIB_DIR="$(dirname "${BASH_SOURCE[0]}")"
PROJECT_ROOT="$(dirname "$LIB_DIR")"
```

Inside a sourced file `${BASH_SOURCE[0]}` is exactly the string that was passed to `source`. After
`source lib/paths.sh` it is `lib/paths.sh`, so `LIB_DIR` is `lib` and `PROJECT_ROOT` is `.`, a path relative to
whatever the current directory happened to be at that moment. It only works when the library is sourced by
absolute path; otherwise it quietly resolves against the wrong directory and the script carries on with bad
paths. Using `$0` instead is worse still: inside a sourced file it is the name of the caller, not the library.

## Record BASEDIR once in the entry point

The entry-point script decides where the project lives, once, before it sources anything:

```bash
#!/bin/bash
set -euo pipefail

BASEDIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly BASEDIR

# shellcheck source=lib/paths.sh
source "$BASEDIR/lib/paths.sh"
```

Use `${BASH_SOURCE[0]}` rather than `$0`. When a test framework such as Bats sources the script to test its
functions, `$0` is the test runner, not the script, so a `$0`-based path points at the test framework's
directory. `${BASH_SOURCE[0]}` is always the file currently being read.

## Libraries build paths from BASEDIR

Libraries never guess. They use `$BASEDIR` and fail fast with a clear message if the caller did not set it:

```bash
# lib/paths.sh
: "${BASEDIR:?BASEDIR must be set by the entry-point script before sourcing lib/paths.sh}"

CONFIG_DIR="$BASEDIR/config"
TEMPLATE_DIR="$BASEDIR/templates"
```

The `${VAR:?message}` expansion stops the script with the message on stderr when `BASEDIR` is unset or empty.

## Benefits

- One place decides: the project root is worked out in exactly one spot, the entry-point script.
- Fails loudly and early: a library sourced without `BASEDIR` stops immediately with a message that says what
  is wrong, instead of carrying on with wrong paths.
- Obvious pattern: anyone reading a library can see where its paths come from, and every script in the project
  follows the same shape.
