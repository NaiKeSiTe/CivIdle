const fs = require("fs-extra");

module.exports = {
   packagerConfig: {
      icon: "./icons/icon",
      ignore: [
         /src\/*/,
         /save\/*/,
         /\.ts/,
         /steam_appid\.txt/,
         /\.git(ignore|modules)/,
         /forge\.config\.js/,
         /package-lock\.json/,
         /tsconfig\.json/,
         /clean\.js/,
      ],
      asar: {
         unpack: "*.{node,dll,dylib,so,lib}",
      },
   },
   rebuildConfig: {},
   makers: [
      {
         name: "@electron-forge/maker-zip",
         platforms: ["win32", "linux", "darwin"],
      },
   ],
   hooks: {
      generateAssets: () => {
         fs.copySync("../dist", "./dist");
      },
   },
};
