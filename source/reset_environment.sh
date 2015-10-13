#! /usr/bin/bash

rm database/db.sqlite3
python manage.py migrate
python manage.py loaddata database/seed/users.json
python manage.py loaddata database/seed/user_profiles.json
