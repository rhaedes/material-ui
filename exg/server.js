const appServer = require("./webpack-server");
const apiMockServer = require("./json-mock-server");

const PORT = process.env.PORT || 4000;

appServer(PORT);
apiMockServer(PORT - 1);
