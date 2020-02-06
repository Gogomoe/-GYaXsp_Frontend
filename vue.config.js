module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                @import "@/scss/base/variable.scss"; 
                @import "@/scss/base/mixin.scss";
                `
            }
        }
    }
};
