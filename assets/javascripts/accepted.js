const AbstractTemplate = `
<span class="abstract-heading">Abstract</span>&nbsp;
<button class="abstract-button" v-on:click="toggleAbstract">Click to {{this.message}}</button><br/>
<div class="abstract">{{this.abstract}}</div>
`;

const createPaperApp = (paper) => {
  let app = Vue.createApp({
  });

  app.component('abstract', {
    props: [ 'paper_id' ],
    methods: {
      toggleAbstract(ev) {
        console.log(paper);
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
        return (this.show_abstract ? 'close' : 'open');
      }
    },
    template: AbstractTemplate
  })

  app.mount(paper);
}

// Loop through array and mount all elements
let papers = Array.prototype.slice.call(document.getElementsByClassName('paper'));
papers.forEach(createPaperApp)
