[ 'configure', 'on', 'off', 'addEventListener', 'removeEventListener', 'registerPlugin' ].forEach( method => {
	Reveal[method] = ( ...args ) => {
		enqueuedAPICalls.push( deck => deck[method].call( null, ...args ) );
	}
} );


// Creates an ES module bundle
gulp.task('js-es6', () => {
    return rollup({
        cache: cache.esm,
        input: 'js/index.js',
        plugins: [
            resolve(),
            commonjs(),
            babel( babelConfigESM ),
            terser()
        ]}}
