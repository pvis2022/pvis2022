const PreviewTemplate = '<iframe width="560" height="315" src="https://www.youtube.com/embed/{preview_id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

const PaperTemplate = `
<div @click="toggle_show_detail">
<span class="title">{{this.paper.Title}}
<span v-if="this.paper_type!='?'" :class="this.paper_type_class">{{this.paper_type}}</span></span>
<ul><li v-for="author in this.paper.authors" class="author">{{author}}</li></ul>
<p class="abstract"><span class="abstract-heading">Abstract:</span> {{this.abstract_content}}</p>
<div v-if="this.show_detail" v-html="this.preview_embed"></div>
<!-- p><a :href="this.preview_url" target="_blank">Open preview video</a></p -->
</div>
`;

const CreateApp = (paper) => {
  let app_data = {
    props: ['paper_id'],
    template: PaperTemplate,

    data() {
      return {
        index: talks.index,
        preview: preview,
        show_detail: false,
      }
    },

    methods: {
      toggle_show_detail(ev) {
        this.show_detail = !this.show_detail;
      }
    },

    computed: {
      paper: function (ev) { return this.index[this.paper_id]; },
      preview_url: function (ev) { return this.preview[this.paper_id]; },
      preview_embed: function (ev) {
        const url = this.preview_url;  // https://youtu.be/Ki8HUbiyALM
        if (!url) return '';
        const preview_id = url.slice(url.lastIndexOf('/') + 1);
        return PreviewTemplate.replace('{preview_id}', preview_id);
      },

      paper_type: function (ev) {
        const t = this.paper.type.toLowerCase();
        if (t == 'ppaper') return 'paper';
        return t;
      },
      paper_type_class: function (ev) {
        const t = this.paper.type;
        if (t == 'TVCG talk') return 'type type-tvcg';
        if (t == 'PPaper') return 'type type-paper type-premium';
        if (t == 'Paper') return 'type type-paper';
        if (t == 'Note') return 'type type-note';
        if (t == 'Poster') return 'type type-poster';
        return 'type';
      },

      abstract_content: function (ev) {
        let content = this.paper.Abstract;
        if (this.show_detail) return content;
        for (i = 0, p = 0; i < 25; i++) p = content.indexOf(' ', p+1);
        return content.slice(0, p) + ' ...';
      },
    }
  };

  Vue.createApp(app_data, { ...paper.dataset }).mount(paper);
};

// Loop through array and mount all elements
let papers = Array.prototype.slice.call(document.getElementsByTagName('paper'));
papers.forEach(CreateApp);
console.log(papers);
