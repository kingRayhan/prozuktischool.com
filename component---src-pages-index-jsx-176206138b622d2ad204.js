(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{Dtc0:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return f}));var r=n("q1tI"),o=n.n(r),a=n("TJpk"),p=n.n(a),i=n("Wbzz"),c=n("ntAx"),s=n("zOpi"),u=n("UARn"),l=n("IpnI"),d=n.n(l);var m=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props.data.allMarkdownRemark.edges;return o.a.createElement(c.a,null,o.a.createElement("div",{className:"index-container"},o.a.createElement(p.a,{title:d.a.siteTitle}),o.a.createElement(u.a,null),o.a.createElement("section",null,o.a.createElement(i.Link,{to:"/authors"},"All authors")),o.a.createElement(s.a,{postEdges:t})))},r}(o.a.Component);e.default=m;var f="560346883"},zOpi:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("Wbzz");var p=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var p=r.prototype;return p.getPostList=function(){var t=[];return this.props.postEdges.forEach((function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})})),t},p.render=function(){var t=this.getPostList();return o.a.createElement("div",null,t.map((function(t){return o.a.createElement("h2",{key:t.title},o.a.createElement(a.Link,{to:t.path},t.title))})))},r}(o.a.Component);e.a=p}}]);
//# sourceMappingURL=component---src-pages-index-jsx-176206138b622d2ad204.js.map