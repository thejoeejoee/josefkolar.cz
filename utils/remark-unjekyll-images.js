const visit = require('unist-util-visit')

const liquid = require('liquidjs');
const engine = new liquid.Liquid();

module.exports = function unjekyllImages() {
    return function transformer(ast, file) {
        visit.visit(ast, 'html', visitor)

        function visitor(node) {
            node.value = engine.parseAndRenderSync(
                node.value,
                {site: {baseurl: ''}}
            )
        }
    }
}
