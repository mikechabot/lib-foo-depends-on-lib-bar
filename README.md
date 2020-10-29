# MyTestOrg

1. `npx create-nx-workspace my-test-org`
2. `npm install --save-dev @nrwl/react`
3. `nx generate @nrwl/react:library --name=foo --buildable --pascalCaseFiles`
4. `nx generate @nrwl/react:library --name=bar --buildable --pascalCaseFiles`
5. Open `libs/foo/src/lib/Foo.tsx`
6. Import `<Bar />` component [See File](https://github.com/mikechabot/lib-foo-depends-on-lib-bar/blob/master/libs/foo/src/lib/Foo.tsx#L4)
7. `nx build foo --withDeps --skip-nx-cache`
  - `nx run build:bar` -> Success
  - `nx run build:foo` -> Fail
  
  ```
  Error during bundle: Error: C:/_workspaces/my-test-org/libs/foo/src/lib/Foo.tsx(4,19): semantic error TS6059: File 'C:/_workspaces/my-test-org/libs/bar/src/index.ts' is not    under 'rootDir' 'C:/_workspaces/my-test-org/libs/foo/src'. 'rootDir' is expected to contain all source files.
  
Bundle failed.
  ```
