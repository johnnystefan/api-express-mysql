# App Warehouse


## Installation
To run the project move to in
```bash
cd express-app-warehouse
```

the next step is to run
```bash
sudo docker-compose build

sudo docker-compose up
```
with the above we will be dockerizing our app

if you are running docker-compose set as "db_hostname" to "db" (service_of_the_database). the following command line is to up the migrations
```bash
npx sequelize-cli db:migrate --url 'mysql://name_user_db:db_password@db_hostname/db_name'
```

To down the app use
```bash
sudo docker-compose down
```

to down migrations use
```bash
npx sequelize-cli db:migrate:undo:all --url 'mysql://name_user_db:db_password@db_hostname/db_name'
```