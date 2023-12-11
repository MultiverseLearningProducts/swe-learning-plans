import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import taskLists from "markdown-it-task-lists";

export default defineUserConfig({
  lang: "en-US",
  title: "SWE Learning Plans",
  description: "A place to learn",
  head: [["link", { rel: "stylesheet", href: "/style.css" }]],
  extendsMarkdown: (md) => {
    md.use(taskLists);
  },
  theme: defaultTheme({
    logo: "/mv-symbol.png",
    logoDark: "/mv-symbol-dark.png",
    repo: "MultiverseLearningProducts/swe-learning-plans",
    docsDir: "/src",
    navbar: [
      {
        text: "Languages",
        children: [
          { text: "Apex", link: "/languages/apex" },
          { text: "C++", link: "/languages/cplusplus" },
          { text: "C#", link: "/languages/csharp" },
          { text: "Go", link: "/languages/go" },
          { text: "Java", link: "/languages/java" },
          { text: "Kotlin", link: "/languages/kotlin" },
          { text: "PHP", link: "/languages/php" },
          { text: "Python", link: "/languages/python" },
          { text: "Ruby", link: "/languages/ruby" },
          { text: "Swift", link: "/languages/swift" },
          { text: "Typescript", link: "/languages/typescript" },
        ],
      },
      {
        text: "Frameworks",
        children: [
          { text: "Angular", link: "/frameworks/angular" },
          { text: "Django", link: "/frameworks/django" },
          { text: ".Net", link: "/frameworks/dotnet" },
          { text: "Next.js", link: "/frameworks/nextjs" },
          { text: "React", link: "/frameworks/react" },
          { text: "Spring Boot", link: "/frameworks/springboot" },
          { text: "Vue", link: "/frameworks/vue" },
          { text: "Ruby on Rails", link: "/frameworks/ruby-on-rails" },
          { text: "Symfony", link: "/frameworks/symfony" },
          { text: "Power Platform", link: "/frameworks/power-platform.md" },
          { text: "SwiftUI", link: "/frameworks/swift-ui.md" },
          { text: "React Native", link: "/frameworks/react-native.md" },
        ],
      },
      {
        text: "Data",
        children: [
          { text: "Pandas", link: "/data/data-science" },
          { text: "SQL", link: "/data/sql" },
          { text: "PLSQL", link: "/data/plsql" },
          { text: "Redis", link: "/data/redis" },
          {
            text: "Microsoft SQL Server",
            link: "/data/microsoft-sql-server.md",
          },
          { text: "Google BigQuery", link: "/data/big-query.md" },
          { text: "Data Dog", link: "/data/datadog" },
        ],
      },
      {
        text: "Tooling",
        children: [
          { text: "Git", link: "/tooling/git" },
          { text: "Cucumber", link: "/tooling/cucumber.md" },
          { text: "Cypress", link: "/tooling/cypress.md" },
          { text: "Guice", link: "/tooling/guice" },
          { text: "Jest", link: "/tooling/jest.md" },
          { text: "Junit", link: "/tooling/junit.md" },
          { text: "Kafka", link: "/tooling/kafka.md" },
          { text: "Protobuf", link: "/tooling/protobuf" },
          { text: "REST Assured", link: "/tooling/rest-assured.md" },
          { text: "VS Code", link: "/ides/vscode" },
          { text: "Visual Studio", link: "/ides/visual-studio" }
        ],
      },
      {
        text: "Deployment",
        children: [
          { text: "Terraform", link: "/deployment/terraform" },
          { text: "Ansible", link: "/deployment/ansible" },
          { text: "DHCP", link: "/deployment/dhcp" },
          { text: "DNS", link: "/deployment/dns" },
          { text: "IP", link: "/deployment/ip" },
          { text: "UDP-TCP", link: "/deployment/udp-tcp" },
        ],
      },
    ],
  }),
});
