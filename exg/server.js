const appServer = require("./webpack-server");
const apiMockServer = require("./json-mock-server");

const PORT = process.env.PORT || 4000;

console.log("Starting server - please have patience, as this might take up to 30 seconds.");

appServer(PORT);
apiMockServer(PORT - 1);