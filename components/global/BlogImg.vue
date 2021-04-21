<template>
  <img :srcset="source.srcSet" :alt="alt" :title="title" />
</template>

<script>
//https://codesandbox.io/s/nuxt-content-image-9pb11?file=/components/global/ContentImg.vue:0-3581
const path = require("path");

const requireFromAssets = (assetsPath) => {
  let result;
  const ext = path.extname(assetsPath);
  const name = path.basename(assetsPath, ext);
  const dir = path.dirname(assetsPath);
  // IMPORTANT
  // Every fixed string parts of the following require calls, like folder name, path separators
  // and file extensions, are crucial for narrowing down the required module path before the
  // variable part of the string is determined, see here:
  // https://webpack.js.org/guides/dependency-management/#require-with-expression
  switch (ext) {
    case ".svg":
      result = require(`~/assets/blog/${path.join(dir, name)}.svg`);
      break;
    case ".png":
      result = require(`~/assets/blog/${path.join(dir, name)}.png`);
      break;
    case ".jpg":
      result = require(`~/assets/blog/${path.join(dir, name)}.jpg`);
      break;
    case ".jpeg":
      result = require(`~/assets/blog/${path.join(dir, name)}.jpeg`);
      break;
    case ".gif":
      result = require(`~/assets/blog/${path.join(dir, name)}.gif`);
      break;
    default:
      result = null;
  }
  return result;
};

export default {
  name: "BlogImg",
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: undefined },
    title: { type: String, default: undefined },
  },
  computed: {
    source() {
      // './' is meant be used in '.md' files to reference image files located in same the
      // folder with the '.md' file.

      if (this.src.startsWith("./")) {
        // document.dir is available if inside nuxt-contet: <nuxt-content :document="document"></nuxt-content>
        // console.log(this.$parent.document)
        if (this.$parent.document && this.$parent.document.dir) {
          let dir = this.$parent.document.dir;
          if (dir.startsWith(path.sep)) dir = dir.replace(path.sep, "");
          return requireFromContent(path.join(dir, this.src));
        } else {
          throw new Error(`'./' should be used only in '.md' files!`);
        }
      } else if (
          this.src.startsWith("~/content/") ||
          this.src.startsWith("@/content/")
      ) {
        return requireFromContent(this.src.slice(10));
      } else if (
          this.src.startsWith("~/assets/") ||
          this.src.startsWith("@/assets/")
      ) {
        return requireFromAssets(this.src.slice(9));
      } else {
        return this.src;
      }
    },
  },
};
</script>
