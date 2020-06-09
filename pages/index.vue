<template>
    <div>
        <h1>
            Jsem Joe,
            <client-only>
                <vue-typer
                        :text="typerTexts"
                        :repeat="Infinity"
                        :shuffle="true"
                        initial-action="typing"
                        :pre-type-delay="70"
                        :type-delay="70"
                        :pre-erase-delay="2000"
                        :erase-delay="100"
                        erase-style="backspace"
                        caret-animation="smooth"
                />
            </client-only>
        </h1>

        <p class="author">
            Josef Kolář |
            {{ (new Date(compileTimestamp)).toLocaleDateString(undefined, { year: 'numeric', month: 'long' }) }}
        </p>

        <div class="abstract">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur cum cupiditate
            dolor dolorum eum expedita facilis nemo nulla odit pariatur, rem suscipit voluptatum? Aliquid asperiores
            eveniet
            hic placeat sapiente.
        </div>

        <figure>
            <img src="/jk.jpg" alt="Joe">
            <figcaption></figcaption>
        </figure>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At facilis fuga officia quibusdam rerum tempore
            totam
            voluptatum? Accusantium aliquam atque distinctio, doloribus iure laboriosam nostrum praesentium quisquam
            rerum
            sint voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, autem debitis dolor
            dolores
            eaque, illum incidunt ipsum minus perspiciatis possimus quae, quod sint sunt temporibus veniam! Assumenda
            debitis
            laudantium ullam.
        </p>

        <h3>Kdo jsem?</h3>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquid culpa deleniti dolore earum ex,
            illo
            ipsum iste magnam maiores maxime molestias necessitatibus odit provident quibusdam repudiandae tenetur
            vitae!
        </p>

        <h3>Co dělám?</h3>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquid culpa deleniti dolore earum ex,
            illo
            ipsum iste magnam maiores maxime molestias necessitatibus odit provident quibusdam repudiandae tenetur
            vitae!
        </p>

        <h3>Co mě baví?</h3>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquid culpa deleniti dolore earum ex,
            illo
            ipsum iste magnam maiores maxime molestias necessitatibus odit provident quibusdam repudiandae tenetur
            vitae!
        </p>

        <h3>Kde jsem?</h3>

        <ul>
            <li>položka 1</li>
            <li>položka 2</li>
            <li>položka 3</li>
            <li>položka 4</li>
            <li>položka 5</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        asyncData({env}) {
            return {
                compileTimestamp: env.compileTimestamp || new Date()
            }
        },
        data() {
            return {
                typerTexts: [
                    'vývojář',
                    'nadšený fotograf',
                    'organizátor',
                    'dobrovolník',
                    'student'
                ].map(v => `${v}.`)
            }
        }
    })
</script>

<style>
    img {
        max-width: 15em;
        margin-left: 1em;
        float: right;
        box-shadow: 0 0 3px #555;
    }

    .vue-typer .custom.char.typed {
        color: #4A148C;
    }

    .vue-typer .custom.char.selected {
        color: #E91E63;
    }

    .vue-typer .custom.caret.typing {
        background-color: #009688;
    }

    .vue-typer .custom.caret.selecting {
        display: inline-block;
        background-color: #E91E63;
    }

</style>
