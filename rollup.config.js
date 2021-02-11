import typescript from 'rollup-plugin-typescript'
import pkg from './package.json'

export default [
    // CommonJS for Node and ES module for bundlers build
    {
        input: 'src/index.ts',
        external: ['ms'],
        plugins: [
            typescript()
        ],
        output: [
            {  file: pkg.main, format: 'cjs' },
            {  file: pkg.module, format: 'es' }
        ]
    }
]

