## vue设置了@路径，vscode 如何跳转？
1. 配置`jsconfig.json`，有效，但是@/components/xx 无法跳转，不清楚原因。
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "target": "ES6",
    "allowSyntheticDefaultImports": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```
2. 安装vue-helpher插件，然后在setting.json中添加如下配置
```json
    "vue-helper.alias": {
        "@": "src"
      },
      "vue-helper.componentPrefix": {
        "alias": "@",
        "path": "src"
      }
```

