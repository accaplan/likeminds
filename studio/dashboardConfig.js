export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f324d3850e44fc15b884f49',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pmunnpur',
                  apiId: '107d7279-4a80-4834-9bee-e29e21508e95'
                },
                {
                  buildHookId: '5f324d3850e44fc15b884f49',
                  title: 'Selling free time',
                  name: 'Idle Hours Co.',
                  apiId: '107d7279-4a80-4834-9bee-e29e21508e95'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/accaplan/likeminds',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://dispatch.idlehours.co', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
