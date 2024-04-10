{
  "compilerOptions": {
    "module": "esnext",
    "target": "es2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": true,
    "jsx": "react",
    "moduleResolution": "node",
    "baseUrl": "./",
    "paths": {
      "*": ["src/types/*"]
    },
    "strict": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "incremental": true,
    "tsBuildInfoFile": "./.tsbuildinfo",
    "outDir": "./dist",
    "declaration": true,
    "sourceMap": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts",
    "**/*.test.ts"
  ]
}
