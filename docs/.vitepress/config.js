export default {
  title: 'Refactoriza ya ?',
  description: 'Vue Form.',
  base: '/refactor-now/', //  The default path during deployment / secondary address / base can be used/
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },      
      { text: 'Tutorial', link: '/tuto/refactor' },
      { text: 'CaribesTIC', link: 'https://caribestic.github.io/' },
      { text: 'GitHub', link: 'https://github.com/CaribesTIC/vue-forms' }      
    ],
    sidebar: [
      {
        //text: 'Comenzar',   // required
        path: '/tuto/',      // optional, link of the title, which should be an absolute path and must exist
        items: [
          { text: 'Strike One, Two & Out!', link: '/tuto/refactor' },
          { text: 'Variables mal implementadas', link: '/tuto/refactor-a' },
          { text: 'Métodos con parámetros', link: '/tuto/refactor-b' },
          { text: 'Expresiones extensas', link: '/tuto/refactor-c' },
          { text: 'Métodos extensos', link: '/tuto/refactor-d' },
          { text: 'Código duplicado (parte 1)', link: '/tuto/refactor-e' },
          { text: 'Código duplicado (parte 2)', link: '/tuto/refactor-f' },
          { text: 'Código duplicado (parte 3)', link: '/tuto/refactor-g' }        
          // https://desarrollowp.com/blog/tutoriales/como-refactorizar-el-anidamiento-masivo/    
        ]
        }        
    ]
  }
}

