#!/bin/bash

echo "Configuring DB..."

dropdb -U node_user attendancedb
createdb -U node_user attendancedb

psql -U node_user attendancedb < ./sql/users.sql

echo "DB configured"
