A REST API that can create, read, update and delete data (CRUD OPERATIONS) on MySQL.

## Installation:
1. Run SQL file (`dicegame_restapi.sql` which is located in `src > scripts` folder) locally. You can use MySQL Workbench for this purpose. This will create a database called "dicegame".
2. Add environment variables: edit or create and `.env` file in the root directory with the following data:

     ```
     DB_HOST= <change for local host name, usually 'localhost'>
     DB_USER= <change for local user name, usually 'root'>
     DB_PASS= <change for local password>
     DB_NAME= "dicegame"`
     PORT="3000"
     ``` 
     
     
## Run:
  
3. Run the program (type 'node app' in your terminal).

4. Test routes:

    - **POST /players**:
        adds a new player
    
    *Request Body for players with name*
    ```
    {
            "newData":{
                "name": "Laia",
                "email": "laia@gmail.com",
                "password": "uniquepassword"
            }
    }
    ```

    *Request Body for players without name*
    ```
    {
            "newData":{
                "email": "anonim@mail.com",
                "password": "uniquepassword"
            }
    }
    ```

    - **PUT /players**:
        updates player name 
    
    *Request Body for updating name*
    ```
    {
        "currentData": {
            "name": "currentName"
        },
        "newData":{
            "name": "newName"
        }
    }
    ```

    - **POST /players/:id/games**:
        adds a new game

    - **DELETE /players/:id/games**:
        removes games from player with requested ID

    - **GET /players/**:
        reads all players

    - **GET /players/:id**:
        reads player by id

    - **GET /players/ranking**:
        reads ranking and overall success rate

    - **GET /players/ranking/loser**:
        reads player with lowest success rate

     - **GET /players/ranking/winner**:
        reads player with highest success rate
