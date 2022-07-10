import {Node, visit} from "unist-util-visit";
import {Liquid} from "liquidjs";
import unified from "unified";
import parse from "rehype-parse";
import stringify from "rehype-stringify";

const is = require('hast-util-is-element')

const liquidEngine = new Liquid();
const unifiedEngine = unified()
    .use(parse, {fragment: true})
    .use(replaceImages)
    .use(stringify)

function replaceImages() {
    return function transformer(tree: Node) {
        visit(tree, 'element', visitor)
    }

    function visitor(node: Node, index: number | null, parent: Node | null) {
        // @ts-ignore
        const props = (node.properties as any);
        const src: string = props.src;

        if (!parent || !is(node, 'img') || !src || !src.startsWith('/assets/img/')) {
            return
        }
        // OLD: <img> /assets/blog/img/2018-01-26-messenger.png
        // NEW: <blog-img> ~assets/2018-01-26-messenger.png

        props.src = '~/assets/' + src.slice(12);
        props.title = '~/assets/' + src.slice(12);
        // @ts-ignore
        node.tagName = 'blog-img';
    }
}

module.exports = function unJekyllImages() {
    return function transformer(ast: Node, file: any) {
        visit(ast, 'html', visitor)

        function visitor(node: Node) {
            const rendered = liquidEngine.parseAndRenderSync(
                // @ts-ignore
                (node.value as string),
                {site: {baseurl: ''}}
            )
            
            // @ts-ignore
            node.value = unifiedEngine.processSync(rendered).toString();
        }
    }
}
