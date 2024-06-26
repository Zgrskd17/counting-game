{
  "extends": [
    "tslint:latest",
    "tslint-react"
  ],
  "linterOptions": {
    "exclude": [
      "node_modules/**/*.ts",
      "src/**/*.{ts,tsx}"
    ]
  },
  
  "rules": {
    "object-literal-sort-keys": false,
    "jsx-no-lambda": false,
    "eofline": false,
    "no-consecutive-blank-lines": false,
    "no-var-requires": false,
    "quotemark": false,
    "space-within-parens": false,
    "no-submodule-imports": false,
    "no-implicit-dependencies": false,
    "ordered-imports": [ false ],
    "jsx-boolean-value": false,
    "no-trailing-whitespace": false,
    "semicolon": false,
    "trailing-comma": false,
    "space-in-parents": false,
    "typedef-whitespace": false,
    "whitespace": false,
    "interface-over-type-literal": true,
    "no-duplicate-imports": false,
    "no-namespace": true,
    "no-internal-module": true,
    "space-before-function-paren": ["ignore"],
    "no-console": ["error", { "allow": ["log", "error"] }],
    "no-string-literal": false,
    "max-line-length": false
  }
}
