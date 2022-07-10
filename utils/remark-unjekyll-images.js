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
    return function transformer(tree) {
        visit(tree, 'element', visitor)
    }

    function visitor(node, index, parent) {
        // @ts-ignore
        const props = node.properties// as any);
        const src = props.src;

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

export default function unJekyllImages() {
    return function transformer(ast, file) {
        visit(ast, null, (node) => {
            console.log(node)
            return
            const rendered = liquidEngine.parseAndRenderSync(
                // @ts-ignore
                node.value, {site: {baseurl: ''}}
            )

            // @ts-ignore
            node.value = unifiedEngine.processSync(rendered).toString();
        })
    }
}
