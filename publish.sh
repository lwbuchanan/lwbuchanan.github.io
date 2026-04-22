#!/bin/bash

cd "$(dirname "$0")"
zola build
rsync -rtvzP public/ lbuch:/var/www/lbuch
