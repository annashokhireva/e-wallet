module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@import "@/sass/index.scss";`
			}
		}
	},

	publicPath: process.env.NODE_ENV === 'production'
    ? '/e-wallet/'
    : '/'
};