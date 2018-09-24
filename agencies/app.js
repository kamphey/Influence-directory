 'use strict';
var search = instantsearch({
  appId: 'H8E6MXIT0F',
  apiKey: '33e2dbbf7185d01577c881ed68a8c891',
  indexName: 'dev_influence',
  urlSync: true
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#q',
    placeholder: 'Search for a brand you want to work with'
  })
);
search.addWidget(
  instantsearch.widgets.stats({
    container: '#stats'
  })
);


var hitTemplate =
  '<article class="hit">' +

        ' <a target="_blank" href="{{cta_url}}"><i class="fa fa-link" aria-hidden="true"></i></a>'
      +  
        '<div class="product-image"><a href="https://www.{{url}}" target="_blank"><img src="{{logo_url}}"></a></div>' 
      +
        '<div class="product-title"><a class="product-title" href=https://www.{{url}} target="_blank">{{name}}</a></div>' 
      +
        '<div class="product-country">{{country}}</a></div>'
      +
        '<div class="product-logline">{{logline}}</div>' 
      +
        '<div class="brands"><b>Worked with </b>{{brands}}</div>'    
      +
        '<div class="submit"><a class="button" href={{submit}} target="_blank">Write a Review of {{name}}</a></div>'
      + '</article>';

var noResultsTemplate =
  '<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>'
  +
  '<div class="text-center"><a href="mailto:andrew@kampheyapproved.com?subject=ISO on Influence Directory&body=Hi,I was looking on Influence Directory but could not find any results.">Submit a request</a> and our team will look into it</div>';

var menuTemplate =
  '<a href="javascript:void(0);" class="facet-item {{#isRefined}}active{{/isRefined}}"><span class="facet-name"><i class="fa fa-angle-right"></i>{{chef}}</span class="facet-name"></a>';

var facetTemplateCheckbox =
  '<a href="javascript:void(0);" class="facet-item">' +
    '<input type="checkbox" class="{{cssClasses.checkbox}}" value="{{name}}" {{#isRefined}}checked{{/isRefined}} />{{name}}' +
    '<span class="facet-count">({{count}})</span>' +
  '</a>';

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 9,
    templates: {
      empty: noResultsTemplate,
      item: hitTemplate
    }
    
  })
);
search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    maxPages: 20,
    // default is to scroll to 'body', here we enable this behavior
    scrollTo: true
  })
);



search.addWidget(
  instantsearch.widgets.clearAll({
    container: '#clear-all',
    templates: {
      link: 'Clear All'
    },
    autoHideContainer: false
  })
);
search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#country',
    attributeName: 'country',
    operator: 'or',
    templates: {
      item: facetTemplateCheckbox 
    }
  })
);


search.start();
