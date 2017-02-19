fis.config.set('pack', {
    'pkg/whv.js': [
    	'/modules/jquery/**.js',
    	'/modules/angular/**.js',
        '/modules/angular-route/**.js',
        '/modules/app/route/**.js',
        '/modules/app/controller/**.js'
    ],
    'pkg/whv.css': [
    	'/modules/css/pure-min.css',
    	'/modules/css/guide.less'
    ]
});

//静态资源域名，使用pure release命令时，添加--domains或-D参数即可生效
fis.config.set('roadmap.domain', 'http://www.wuyuying.com/whv');

//如果要兼容低版本ie显示透明png图片，请使用pngquant作为图片压缩器，
//否则png图片透明部分在ie下会显示灰色背景
//使用spmx release命令时，添加--optimize或-o参数即可生效
//fis.config.set('settings.optimzier.png-compressor.type', 'pngquant');

//设置jshint插件要排除检查的文件，默认不检查lib、jquery、angular等文件
//使用pure release命令时，添加--lint或-l参数即可生效
fis.config.set('settings.lint.jshint.ignored', [ 'lib/**', /jquery|angular/i ]);

//csssprite处理时图片之间的边距，默认是3px
// fis.config.set('settings.spriter.csssprites.margin', 5);
