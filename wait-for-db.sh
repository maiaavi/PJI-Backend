#!/bin/sh

# Configura as variáveis de ambiente do MySQL
HOST="$MYSQL_HOST"
USER="$MYSQL_USER"
PASSWORD="$MYSQL_PASSWORD"
DB="$MYSQL_DATABASE"

# Função para verificar se o banco de dados está acessível
until mysql -h"$HOST" -u"$USER" -p"$PASSWORD" -e "USE $DB"; do
  >&2 echo "MySQL está indisponível - aguardando..."
  sleep 1
done

>&2 echo "MySQL está disponível - iniciando o servidor..."
exec "$@"
