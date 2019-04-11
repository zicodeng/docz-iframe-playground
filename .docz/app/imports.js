export const imports = {
  'test/MyComponent.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "test-my-component" */ 'test/MyComponent.mdx'),
}
