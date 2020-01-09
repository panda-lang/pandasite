<template>
  <Layout>
    <panda-hero>
      <div class="row reverse-sm reverse-xs">
        <div class="col">
          <pre><code class="panda">
<!--            TODO: Import code from netlify cms-->
          </code></pre>
        </div>
        <div class="col span-2 pl-37">
          <h1><strong class="pad-h-17 pad-v-7 bg-5 text-4">Panda</strong></h1>
          <h1><small class="pad-h17 pad-v-7 bg-5 text-4">lightweight and powerful programming language written in Java</small></h1>
          <div class="row">
            <g-link class="col button" to="/guide"><i class="fas fa-book-open"></i>Get started</g-link>
            <a href="https://github.com/panda-lang/panda/releases" class="col button"><i class="fas fa-download"></i>Download</a>
          </div>
        </div>
      </div>
    </panda-hero>
    <section class="bg-4">
      <div class="container">asdf</div>
    </section>
<!--

    &lt;!&ndash; Learn how to use images here: https://gridsome.org/docs/images &ndash;&gt;
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

-->
  </Layout>
</template>

<script>
  import PandaHero from "../components/PandaHero";

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    PandaHero
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
