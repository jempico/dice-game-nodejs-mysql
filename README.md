A REST API that can create, read, update and delete data (CRUD OPERATIONS) on MySQL.

## Installation:
1. Run SQL file (dicegame_restapi.sql which is located in 'src > scripts' folder) locally. You can use MySQL Workbench for this purpose. This will create a database called "dicegame".
2. Add environment variables: edit or create and .env file in the root directory with the following data:

    `DB_HOST= <change for local host name, usually 'localhost'>` 
    `DB_USER= <change for local user name, usually 'root'>`
    `DB_PASS= <change for local password>`
    `DB_NAME= "dicegame"`
    `PORT="3000"`
  
  
4. Run the program (type 'node app' in your terminal).

