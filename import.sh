#!/bin/sh
MOCK="http://www.mockaroo.com/c123aa80"
COUNT=1000
DB=test-dev
COLLECTION=mails

echo "Importing $COUNT elements from $MOCK to MongoDB $DB/$COLLECTION"
curl "$MOCK/download?count=$COUNT&key=c0eea960" | mongoimport --jsonArray --drop --db $DB --collection $COLLECTION

