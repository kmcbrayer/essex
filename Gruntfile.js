module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {
                            loose: "all"
                        }]
                    ]
                },
                files: {
                    "./app/dist/module.js": ["./app/modules/**/*.jsx", "./app/modules/**/*.js", "./app/vendor/**/*.js"]
                }
            }
        },
        watch: {
            scripts: {
                files: ["./app/modules/**/*.jsx", "./app/modules/**/*.js"],
                tasks: ["browserify"]
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: {
                        path: "app",
                        options: {
                            index: "index.html",
                            maxAge: 300000
                        }
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask("default", ["browserify","connect","watch"]);
};
