import {Node} from "unist-util-visit";
import {visit} from "unist-util-visit";
import liquid from "liquidjs";
import unified from "unified";
import parse from "rehype-parse";
import stringify from "rehype-stringify";
const is = require('hast-util-is-element')

const liquidEngine = new liquid.Liquid();
const unifiedEngine = unified()
    .use(parse, {fragment: true})
    .use(replaceImages)
    .use(stringify)

function replaceImages() {
    return function transformer(tree: Node) {
        visit(tree, 'element', visitor)
    }

    function visitor(node: Node, index: number | null, parent: Node | null) {
        const src: string = (node.properties as any).src;

        if (!parent || !is(node, 'img') || !src) {
            return
        }
        /** const loaded = require('./' + src.slice(1))
        console.log(loaded); */
    }
}

export default function unJekyllImages() {
    return function transformer(ast: Node, file: any) {
        visit(ast, 'html', visitor)

        function visitor(node: Node) {
            const rendered = liquidEngine.parseAndRenderSync(
                (node.value as string),
                {site: {baseurl: ''}}
            )

            node.value = unifiedEngine.processSync(rendered);
        }
    }
}
