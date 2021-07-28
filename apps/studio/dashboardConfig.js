export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'littleblackbookco/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
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
                  buildHookId: '6100a50f9ab16900a149fbb3',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-nwrav6d2',
                  apiId: '0656fd7f-2103-4e32-8dfb-81d44da527b5'
                },
                {
                  buildHookId: '6100a50fa0e4df08c5020ea2',
                  title: 'Website',
                  name: 'sanity-angular-website-web-i7m2mnm1',
                  apiId: 'ff324e67-5e66-437a-84e9-29519b0e4ebc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/littleblackbookco/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-i7m2mnm1.netlify.app', category: 'apps'}
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
