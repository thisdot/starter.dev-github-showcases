import { graphql } from 'msw';

export const mockRepoFileQuery = graphql.query('RepoFile', (req, res, ctx) => {
  const { expression, name, owner } = req.variables;

  const notFoundError = ctx.errors([
    {
      type: 'NOT_FOUND',
      path: ['repository'],
      locations: [
        {
          line: 3,
          column: 3,
        },
      ],
      message: `Could not resolve to a Repository with the name '${owner}/${name}'.`,
    },
  ]);

  if (name !== 'testrepo' && owner !== 'testowner') {
    return res(notFoundError);
  }

  switch (expression) {
    case 'main:package.json':
      return res(ctx.data(packageJsonResponse));
    case 'main:src/Navigator.js':
      return res(ctx.data(navigatorJsResponse));
    case 'main:.buckconfig':
      return res(ctx.data(buckConfigResponse));
    default:
      return res(notFoundError);
  }
});

//
// Mocked responses
//

const packageJsonResponse = {
  repository: {
    blob: {
      byteSize: 1122,
      text: '{\n  "name": "jsmarathon",\n  "version": "0.0.1",\n  "private": true,\n  "scripts": {\n    "android": "react-native run-android",\n    "ios": "react-native run-ios",\n    "start": "react-native start",\n    "test": "jest",\n    "lint": "eslint .",\n    "clean": "./scripts/clean.sh"\n  },\n  "dependencies": {\n    "@react-native-community/masked-view": "^0.1.11",\n    "@react-navigation/bottom-tabs": "^5.11.10",\n    "@react-navigation/native": "^5.9.4",\n    "@react-navigation/stack": "^5.14.4",\n    "immer": "^9.0.2",\n    "react": "17.0.1",\n    "react-native": "^0.64.0",\n    "react-native-gesture-handler": "^1.10.3",\n    "react-native-reanimated": "^2.1.0",\n    "react-native-safe-area-context": "^3.2.0",\n    "react-native-screens": "^3.1.1",\n    "use-immer": "^0.5.1"\n  },\n  "devDependencies": {\n    "@babel/core": "^7.12.9",\n    "@babel/runtime": "^7.12.5",\n    "@react-native-community/eslint-config": "^2.0.0",\n    "babel-jest": "^26.6.3",\n    "eslint": "7.14.0",\n    "jest": "^26.6.3",\n    "metro-react-native-babel-preset": "^0.64.0",\n    "react-test-renderer": "17.0.1"\n  },\n  "jest": {\n    "preset": "react-native"\n  }\n}\n',
    },
  },
};

const navigatorJsResponse = {
  repository: {
    blob: {
      byteSize: 902,
      text: "import React from 'react';\nimport { createStackNavigator } from '@react-navigation/stack';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { MenuScreen } from './screens/MenuScreen';\nimport { OrdersScreen } from './screens/OrdersScreen';\nimport { BuildScreen } from './screens/BuildScreen';\nimport { OptionScreen } from './screens/OptionScreen';\n\nconst Stack = createStackNavigator();\nconst Tab = createBottomTabNavigator();\n\nconst MenuNavigator = () => (\n  <Stack.Navigator>\n    <Stack.Screen name=\"Menu\" component={MenuScreen} />\n    <Stack.Screen name=\"Build\" component={BuildScreen} />\n    <Stack.Screen name=\"OptionScreen\" component={OptionScreen} />\n  </Stack.Navigator>\n);\n\nexport const Navigator = () => (\n  <Tab.Navigator>\n    <Tab.Screen name=\"Menu\" component={MenuNavigator} />\n    <Tab.Screen name=\"Orders\" component={OrdersScreen} />\n  </Tab.Navigator>\n);\n",
    },
  },
};

const buckConfigResponse = {
  repository: {
    blob: {
      byteSize: 114,
      text: '\n[android]\n  target = Google Inc.:Google APIs:23\n\n[maven_repositories]\n  central = https://repo1.maven.org/maven2\n',
    },
  },
};
