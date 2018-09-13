// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/producto/',
    	url: 'producto.html',
    	name: 'producto',
  		},
		{
		path: '/infoproducto/',
    	url: 'infoproducto.html',
    	name: 'infoproducto',
  		},
		{
		path: '/productos-cate/',
    	url: 'productos-cate.html',
    	name: 'productos-cate',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

