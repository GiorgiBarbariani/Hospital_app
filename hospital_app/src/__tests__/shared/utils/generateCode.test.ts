import generateCode from '../../../shared/util/generateCode'

it('should generate a code with prefix A-', () => {
  const generatedCode = generateCode('A')
  expect(generatedCode).toMatch(/^A-/)
})
