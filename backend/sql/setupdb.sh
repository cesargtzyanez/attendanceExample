#!/bin/bash

echo "Configuring DB..."

dropdb -U node_user attendancedb
createdb -U node_user attendancedb

psql -U node_user attendancedb < ./sql/users.sql
psql -U node_user attendancedb < ./sql/events.sql

echo "DB configured"
