const AbstractTemplate = `
<span class="abstract-heading">Abstract</span>&nbsp;
<!-- button class="abstract-button" v-on:click="toggleAbstract">{{this.message}}</button><br/ -->
<div class="abstract">
<img v-if="this.show_abstract" v-on:click="toggleAbstract"
     src="/pvis2022/assets/images/icons/expanded.png" width="18" height="18" />
<img v-else v-on:click="toggleAbstract"
     src="/pvis2022/assets/images/icons/collapsed.png" width="12" height="12" />&nbsp;
{{this.abstract}}</div>
`;

const createPaperApp = (paper) => {
  let app = Vue.createApp({
  });

  app.component('abstract', {
    props: [ 'paper_id' ],
    methods: {
      toggleAbstract(ev) {
        this.show_abstract = !this.show_abstract;
      }
    },
    data() {
      return {
        show_abstract: false,
      }
    },
    computed: {
      abstract: function(ev) {
        let content = talks.index[this.paper_id].Abstract;
        let p = 0;
        for (i = 0; i < 25; i++) p = content.indexOf(' ', p+1);
        return this.show_abstract ? content : content.slice(0, p) + ' ...';
      },
      message: function(ev) {
        return (this.show_abstract ? 'expand' : 'collapse');
      }
    },
    template: AbstractTemplate
  })

  app.component('preview', {
    props: [ 'paper_id' ],
    data() {
      return { 'preview': preview };
    },
    computed: {
      url: function (ev) { return this.preview[this.paper_id]; }
    },
    template: `<a :href="this.url" target="_blank">Open preview video</a>`,
  })

  app.mount(paper);
}

// Loop through array and mount all elements
let papers = Array.prototype.slice.call(document.getElementsByClassName('paper'));
papers.forEach(createPaperApp)
