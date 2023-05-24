import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Refactorizar ya ?',
  description: 'Métodología Ágil',
  base: '/refactor-now/', //  The default path during deployment / secondary address / base can be used/
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/mylogo.png',  
    siteTitle: 'Refactorizar ya ?',
    nav: [
      { text: 'Inicio', link: '/' },           
      { text: 'Tutorial', link: '/tuto/refactor' },
      { text: 'ecanquiz', link: 'https://ecanquiz.github.io/' }, 
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
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/refactor-now' }
    ]
  }
})
