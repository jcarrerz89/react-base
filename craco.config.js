const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            "@enum": path.resolve(__dirname, "src/enum"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@components": path.resolve(__dirname, "src/components"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@server": path.resolve(__dirname, "src/server"),
            "@context": path.resolve(__dirname, "src/context"),
        },
    },
};