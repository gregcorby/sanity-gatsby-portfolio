export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce6c12be09aaec6b1211224',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ahoh7d1t',
                  apiId: 'ab0051d9-3453-4493-9ba8-5a57f266663e'
                },
                {
                  buildHookId: '5ce6c12b3906f146184b1010',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-8ky91uhn',
                  apiId: '23a3c516-9673-494c-92dc-ada2eb224eb3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gregcorby/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-8ky91uhn.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
