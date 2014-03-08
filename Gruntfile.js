module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['assets/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    },
    
    bower: {
      app: {
        rjsConfig: 'assets/config.js',
        baseUrl: 'assets'
      },
      test: {
        rjsConfig: 'test/config.js',
        baseUrl: 'assets'
      }
    },
    requirejs: {
      prototype2: { // 모듈명임, 임의의 이름을 쓸수 있음
        options: {
          baseUrl: "assets/",
          name: "prototype2",
          mainConfigFile: "assets/config.js",
          out: "dist/assets/prototype2.js",
          optimize:'none'
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, src: ['*.html'], dest: 'dist/', filter: 'isFile'},
          {expand: true, src: ['bower_components/**'], dest: 'dist/',filter: 'isFile'},
        ]
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');


  //Optimize RequireJS projects using r.js.
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  //grunt.loadNpmTasks('grunt-bower-task');  //  grunt-bower-requirejs 와 충돌 함 

  //Automagically wire-up installed Bower components into your RequireJS config
  grunt.loadNpmTasks('grunt-bower-requirejs');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['bower', 'jshint', 'qunit', 'requirejs', 'copy']);

};