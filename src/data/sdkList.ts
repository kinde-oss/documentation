type SDK = {
  name: string;
  link: string;
  icon: string;
  iconWidth: string;
  type: "Back end" | "Front end" | "Native" | "All";
  isCommunity?: boolean;
};

const sdkList: SDK[] = [
  {
    name: "JavaScript",
    link: "/developer-tools/sdks/frontend/javascript-sdk/",
    icon: "js",
    iconWidth: "18",
    type: "Front end"
  },
  {
    name: "React",
    link: "/developer-tools/sdks/frontend/react-sdk/",
    icon: "react",
    iconWidth: "26",
    type: "Front end"
  },
  {
    name: "NextJS",
    link: "/developer-tools/sdks/backend/nextjs-sdk/",
    icon: "nextjs",
    iconWidth: "36",
    type: "Back end"
  },
  {
    name: "Remix",
    link: "/developer-tools/sdks/backend/remix-sdk/",
    icon: "remix",
    iconWidth: "36",
    type: "Back end"
  },
  {
    name: "Nuxt",
    link: "/developer-tools/sdks/backend/nuxt-module/",
    icon: "nuxt",
    iconWidth: "36",
    type: "Back end"
  },
  {
    name: "SvelteKit",
    link: "/developer-tools/sdks/backend/sveltekit-sdk/",
    icon: "svelte",
    iconWidth: "36",
    type: "Back end"
  },
  {
    name: "PHP",
    link: "/developer-tools/sdks/backend/php-sdk/",
    icon: "php",
    iconWidth: "26",
    type: "Back end"
  },
  {
    name: "Express",
    link: "/developer-tools/sdks/backend/express-sdk/",
    icon: "js",
    iconWidth: "26",
    type: "Back end"
  },
  {
    name: "Expo",
    link: "/developer-tools/sdks/native/expo-react-native/",
    icon: "expo",
    iconWidth: "26",
    type: "Native"
  },
  {
    name: "Node.js",
    link: "/developer-tools/sdks/backend/nodejs-sdk/",
    icon: "nodejs",
    iconWidth: "28",
    type: "Back end"
  },
  {
    name: ".NET",
    link: "/developer-tools/sdks/backend/dotnet-sdk/",
    icon: "dotnet",
    iconWidth: "28",
    type: "Back end"
  },
  {
    name: "Python",
    link: "/developer-tools/sdks/backend/python-sdk/",
    icon: "python",
    iconWidth: "28",
    type: "Back end"
  },
  {
    name: "Ruby",
    link: "/developer-tools/sdks/backend/ruby-sdk/",
    icon: "ruby",
    iconWidth: "28",
    type: "Back end"
  },
  {
    name: "Elixir",
    link: "/developer-tools/sdks/backend/elixir-sdk/",
    icon: "elixir",
    iconWidth: "28",
    type: "Back end"
  },
  {
    name: "TypeScript",
    link: "/developer-tools/sdks/backend/typescript-sdk/",
    icon: "ts",
    iconWidth: "28",
    type: "Back end"
  },
  {
    name: "Apollo GraphQL",
    link: "/developer-tools/sdks/backend/apollo-graphql/",
    icon: "graphql",
    iconWidth: "26",
    type: "Back end"
  },
  {
    name: "Express GraphQL",
    link: "/developer-tools/sdks/backend/node-express-graphql/",
    icon: "graphql",
    iconWidth: "26",
    type: "Back end"
  },

  {
    name: "Android",
    link: "/developer-tools/sdks/native/android-sdk/",
    icon: "android",
    iconWidth: "35",
    type: "Native"
  },
  {
    name: "iOS",
    link: "/developer-tools/sdks/native/ios-sdk/",
    icon: "ios",
    iconWidth: "28",
    type: "Native"
  },
  {
    name: "React Native",
    link: "/developer-tools/sdks/native/react-native-sdk/",
    icon: "react",
    iconWidth: "28",
    type: "Native"
  },
  {
    name: "Flutter",
    link: "/developer-tools/sdks/native/flutter-sdk/",
    icon: "flutter",
    iconWidth: "22",
    type: "Native"
  },
  {
    name: "Java",
    link: "/developer-tools/sdks/backend/java-sdk/",
    icon: "java",
    iconWidth: "22",
    type: "Back end"
  },
  {
    name: "Angular",
    link: "https://github.com/luukhaijes/kinde-angular",
    icon: "angular",
    iconWidth: "24",
    type: "Front end",
    isCommunity: true
  }
];

export default sdkList;
