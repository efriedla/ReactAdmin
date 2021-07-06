# ReactAdmin
* json-server { npm i json-server }, `npm run server`
* material UI
* React-App { npx create-react-app }, ` npm run client `
* Conncurrently { npm i concurrently } `npm run dev`
    - package.json 
        - `"scripts": {
      "server": "json-server --watch db.json --port 5000",
      - "client": "npm start --prefix client",
      - "dev": "concurrently \"npm run server\" \" npm run client\""
      }`
    *  allows both scripts to be ran at the same time in one terminal

