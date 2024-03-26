{
  "compilerOptions": {
    "module": "esnext",
    "target": "es2020",
    "lib": ["dom", "esnext"],
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
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "skipLibCheck": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}
