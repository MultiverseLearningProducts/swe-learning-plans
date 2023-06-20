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
    logo: '/mv-symbol.png',
    logoDark: '/mv-symbol-dark.png',
    repo: 'MultiverseLearningProducts/swe-learning-plans',
    docsDir: '/src',
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
        text: 'Frameworks',
        children: [
          { text: 'Angular', link: '/frameworks/angular' },
          { text: '.Net', link: '/frameworks/dotnet' },
          { text: 'Next.js', link: '/frameworks/nextjs' },
          { text: 'React', link: '/frameworks/react' },
          { text: 'Spring Boot', link: '/frameworks/springboot' }
        ]
      },
      {
        text: 'Databases',
        children: [
          { text: 'SQL', link: '/databases/sql' },
          { text: 'Redis', link: '/databases/redis' },
          { text: 'Microsoft SQL Server', link: '/databases/microsoft-sql-server.md' }
        ]
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
      },
      {
        text: 'Cloud',
        children: [{ text: 'Terraform', link: '/cloud/terraform' }]
      },
      {
        text: 'Testing',
        children: [
          { text: 'Cucumber', link: '/testing/cucumber.md' },
          { text: 'Cypress', link: '/testing/cypress.md' },
          { text: 'Jest', link: '/testing/jest.md' },
          { text: 'Junit', link: '/testing/junit.md' },
          { text: 'REST Assured', link: '/testing/rest-assured.md' }
        ]
      },
      {
        text: 'Pub/Sub',
        children: [
          { text: 'Kafka', link: '/pub-sub/kafka.md' }
        ]
      },
      {
        text: 'Low code',
        children: [{ text: 'Power Platform', link: '/low-code/power-platform.md' }]
      }
    ]
  })
})
