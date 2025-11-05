#!/bin/sh
# Wait for the database to be ready, then run migrations and start dev server

echo "Waiting for database to be ready..."
until npx prisma migrate deploy; do
  echo "Database not ready yet. Retrying in 3s..."
  sleep 3
done

echo "Database ready. Starting backend..."
npm run dev
