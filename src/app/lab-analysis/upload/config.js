window.config = {
    transpiler: 'ts',
    typescriptOptions: {
      module: 'system',
      emitDecoratorMetadata: true,
      experimentalDecorators: true,
    },
    meta: {
      'typescript': {
        'exports': 'ts',
      },
      'devextreme/localization.js': {
        'esModule': true,
      },
    },
    paths: {
      'npm:': 'https://unpkg.com/',
    },
    map: {
      'ts': 'npm:plugin-typescript@4.2.4/lib/plugin.js',
      'typescript': 'npm:typescript@4.2.4/lib/typescript.js',
      '@angular/core': 'npm:@angular/core@12.2.16',
      '@angular/platform-browser': 'npm:@angular/platform-browser@12.2.16',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@12.2.16',
      '@angular/forms': 'npm:@angular/forms@12.2.16',
      '@angular/common': 'npm:@angular/common@12.2.16',
      '@angular/compiler': 'npm:@angular/compiler@12.2.16',
      'tslib': 'npm:tslib@2.3.1/tslib.js',
      'rxjs': 'npm:rxjs@7.5.3/dist/bundles/rxjs.umd.js',
      'rxjs/operators': 'npm:rxjs@7.5.3/dist/cjs/operators/index.js',
      'rrule': 'npm:rrule@2.6.4/dist/es5/rrule.js',
      'luxon': 'npm:luxon@1.28.0/build/global/luxon.min.js',
      'es6-object-assign': 'npm:es6-object-assign@1.1.0',
      'devextreme': 'npm:devextreme@22.1.6/cjs',
      'devextreme/bundles/dx.all': 'npm:devextreme@22.1.6/bundles/dx.all.js',
      'jszip': 'npm:jszip@3.7.1/dist/jszip.min.js',
      'devextreme-quill': 'npm:devextreme-quill@1.5.18/dist/dx-quill.min.js',
      'devexpress-diagram': 'npm:devexpress-diagram@2.1.65',
      'devexpress-gantt': 'npm:devexpress-gantt@4.1.33',
      'devextreme-angular': 'npm:devextreme-angular@22.1.6',
      '@devextreme/runtime': 'npm:@devextreme/runtime@3.0.11',
      'inferno': 'npm:inferno@7.4.4/dist/inferno.min.js',
      'inferno-compat': 'npm:inferno-compat@7.4.11/dist/inferno-compat.min.js',
      'inferno-create-element': 'npm:inferno-create-element@7.4.11/dist/inferno-create-element.min.js',
      'inferno-dom': 'npm:inferno-dom/dist/inferno-dom.min.js',
      'inferno-hydrate': 'npm:inferno-hydrate@7.4.11/dist/inferno-hydrate.min.js',
      'inferno-clone-vnode': 'npm:inferno-clone-vnode@7.4.11/dist/inferno-clone-vnode.min.js',
      'inferno-create-class': 'npm:inferno-create-class@7.4.11/dist/inferno-create-class.min.js',
      'inferno-extras': 'npm:inferno-extras@7.4.11/dist/inferno-extras.min.js',
      // Prettier
      'prettier/standalone': 'npm:prettier@2.7.1/standalone.js',
      'prettier/parser-html': 'npm:prettier@2.7.1/parser-html.js',
    },
    packages: {
      'app': {
        main: './app.component.ts',
        defaultExtension: 'ts',
      },
      'devextreme': {
        defaultExtension: 'js',
      },
      'devextreme/events/utils': {
        main: 'index',
      },
      'devextreme/events': {
        main: 'index',
      },
      'es6-object-assign': {
        main: './index.js',
        defaultExtension: 'js',
      },
      'rxjs': {
        defaultExtension: 'js',
      },
      'rxjs/operators': {
        defaultExtension: 'js',
      },
    },
    packageConfigPaths: [
      'npm:@devextreme/*/package.json',
      'npm:@devextreme/runtime@3.0.11/inferno/package.json',
      'npm:@angular/*/package.json',
      'npm:@angular/common@12.2.16/*/package.json',
      'npm:rxjs@7.5.3/package.json',
      'npm:rxjs@7.5.3/operators/package.json',
      'npm:devextreme-angular@22.1.6/*/package.json',
      'npm:devextreme-angular@22.1.6/ui/*/package.json',
      'npm:devextreme-angular@22.1.6/package.json',
      'npm:devexpress-diagram@2.1.65/package.json',
      'npm:devexpress-gantt@4.1.33/package.json',
    ],
  };
  System.config(window.config);