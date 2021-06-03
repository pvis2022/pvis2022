const PREV_EVENTS =
`2021	Tianjin	Apr 19 - Apr 21	http://vis.tju.edu.cn/pvis2021/
2020	Tianjin	Jun 3 - Jun 5	http://vis.tju.edu.cn/pvis2021/
2019	Bangkok	Apr 23 - Apr 26	http://pvis2019.cbs.chula.ac.th/home.aspx
2018	Kobe	Apr 10 - Apr 13	http://itolab.is.ocha.ac.jp/pvis2018/
2017	Seoul	Apr 18 - Apr 21	http://pacificvis.snu.ac.kr/
2016	Taipei	Apr 19 - Apr 22	http://graphics.csie.ntust.edu.tw/graphics/Vis_2016/index.html
2015	Hangzhou	Apr 14 - Apr 17	http://www.cad.zju.edu.cn/home/pvis2015/
2014	Yokohama	Mar 04 - Mar 07	http://www.fj.ics.keio.ac.jp/pvis2014/guideline_v.html
2013	Sydney	Feb 26 - Mar 01	http://sydney.edu.au/engineering/it/groups/visual/pvis2013/welcome/index.php
2012	Songdo	Feb 28 - Mar 02	http://hcil.snu.ac.kr/PacificVis2012
2011	Hong Kong	Mar 01 - Mar 04	http://i.cs.hku.hk/~pvis2011/
2010	Taipei	Mar 02 - Mar 05	http://graphics.csie.ntu.edu.tw/pvis2010/
2009	Beijing	Apr 20 - Apr 23	http://vis.pku.edu.cn/pvs2009/
2008	Kyoto	Mar 04 - Mar 07	http://www.viz.media.kyoto-u.ac.jp/conf/pvis2008/`.split('\n').map(line => line.split('\t'));

// Missing pages: 2009, 2013, 2014, 2016

// console.log(PREV_EVENTS);

new Vue({
  el: '#prevevents',
  data: { prev_events: PREV_EVENTS, },
  template: `
    <div>
      <h2>Previous Events</h2>
      <table>
        <thead><td>Year</td><td>City</td><td>Date</td><td>URL</td>
        </thead>
        <tbody>
          <tr v-for="ev in prev_events" :key="ev[0]">
            <td>{{ev[0]}}</td><td>{{ev[1]}}</td><td>{{ev[2]}}</td><td><a :href="ev[3]">Website</a></td>
          </tr>
        </tbody>
      </table>
    </div>`
});
