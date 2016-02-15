(function(){ // start encapsulation

	// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
	window.log = function(){
		log.history = log.history || []; // store logs to an array for reference
		log.history.push(arguments);
		if(this.console) {
			arguments.callee = arguments.callee.caller;
			console.log( Array.prototype.slice.call(arguments) );
		}
	};

	// make it safe to use console.log always
	(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});

	// add html class
	if(navigator.appVersion.indexOf("Win") !== -1){
		$('html').addClass('os-win');
	}

	Modernizr.load([
		{
			load: [
				'http://takazudo.github.io/cdn-hamalog/js/libs/mbp.js',
				'http://takazudo.github.io/cdn-hamalog/js/libs/syntaxhilighter/shCore.js',
				'http://takazudo.github.io/cdn-hamalog/js/libs/syntaxhilighter/shBrushJScript.js',
				'http://takazudo.github.io/cdn-hamalog/js/libs/syntaxhilighter/shBrushCss.js',
				'http://takazudo.github.io/cdn-hamalog/js/libs/syntaxhilighter/shBrushXml.js',
				'http://takazudo.github.io/cdn-hamalog/js/libs/syntaxhilighter/shBrushBash.js',
				'http://takazudo.github.io/cdn-hamalog/js/libs/syntaxhilighter/shBrushPlain.js',
				'http://takazudo.github.io/cdn-hamalog/js/libs/syntaxhilighter/shBrushCoffeeScript.js',
				'http://takazudo.github.io/cdn-hamalog/js/libs/jquery.hotkeys.js',
				'http://takazudo.github.io/cdn-hamalog/js/libs/mbp.js',
				'http://takazudo.github.io/cdn-hamalog/js/mylibs/jquery.tinyscroller.js'
			],
			complete: commonDOMContentLoaded
		}
	]);

	function commonDOMContentLoaded(){

		// iOS scale bug fix
		MBP.scaleFix();

		jQuery(function($, undefined){

			// my smooth scroller
			$('a[href^=#]').tinyscrollable();

			// search box open
			$(document).bind('keydown', 'Alt+/', function(){
				window.scrollTo(0,0);
				var $s = $('#search');
				$s.slideDown(200, function(){
					$('input[type=search]',$s).focus().select();
				});
			});

			// syntax hilight
			(function(){
				var syn = SyntaxHighlighter;
				function check(){
					$('pre:not(.done)').each(function(i, el){
						syn.highlight(el);
						$(el).addClass('done');
					});
					setTimeout(check, 1000);
				}
				check();
			})();

		});

	} // end of commonDOMContentLoaded

})(); // end encapsulation
