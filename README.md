A REST API that can create, read, update and delete data (CRUD OPERATIONS) on MySQL.

## SQL Schema:
<img width="752" alt="Screenshot 2021-06-22 at 08 25 18" src="https://user-images.githubusercontent.com/25463174/122874790-b47fcf80-d333-11eb-9f0d-b3e1be4a6bcd.png">



## Installation:
1. Run SQL file (`dicegame_restapi.sql` which is located in `src > scripts` folder) locally. You can use MySQL Workbench for this purpose. This will create a database called "dicegame".
2. Add environment variables: edit or create and `.env` file in the root directory with the following data:

     ```
     DB_HOST= localhost
     DB_USER= <change for local user name, usually 'root'>
     DB_PASS= <change for password>
     DB_NAME= dicegame
     PORT= 3000
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
