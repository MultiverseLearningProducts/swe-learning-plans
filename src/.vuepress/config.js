import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import taskLists from 'markdown-it-task-lists'

export default defineUserConfig({
  lang: 'en-US',
  title: 'SWE Learning Plans',
  description: 'A place to learn',
  head: [['link', { rel: 'stylesheet', href: '/style.css' }]],
  extendsMarkdown: md => {
    md.use(taskLists)
  },
  theme: defaultTheme({
    navbar: [
      {
        text: 'Languages',
        children: [
          { text: 'Apex', link: '/languages/apex' },
          { text: 'C#', link: '/languages/csharp' },
          { text: 'Go', link: '/languages/go' },
          { text: 'Java', link: '/languages/java' },
          { text: 'Python', link: '/languages/python' },
          { text: 'Typescript', link: '/languages/typescript' }
        ]
      },
      {
        text: 'Frontend',
        children: [
          { text: 'Angular', link: '/frontend/angular' },
          { text: 'React', link: '/frontend/react' }
        ]
      },
      {
        text: 'Frameworks',
        children: [
          { text: '.Net', link: '/frameworks/dotnet' },
          { text: 'Next.js', link: '/frameworks/nextjs' },
          { text: 'Spring Boot', link: '/frameworks/springboot' }
        ]
      },
      {
        text: 'Databases',
        children: [{ text: 'SQL', link: '/databases/sql' }]
      },
      {
        text: 'Tooling',
        children: [{ text: 'Git', link: '/tooling/git' }]
      },
      {
        text: 'Networking',
        children: [
          { text: 'DHCP', link: '/networking/dhcp' },
          { text: 'DNS', link: '/networking/dns' },
          { text: 'IP', link: '/networking/ip' },
          { text: 'UDP-TCP', link: '/networking/udp-tcp' }
        ]
      }
    ]
  })
})
