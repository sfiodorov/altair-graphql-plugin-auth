class AltairAuthPlugin {

    initialize(ctx) {
        console.log(JSON.stringify(ctx));
    }

    async destroy() {
        console.log('desctroy');
    }
}

// Add the class to the Altair plugins object
window.AltairGraphQL.plugins.AltairPluginName = AltairAuthPlugin;