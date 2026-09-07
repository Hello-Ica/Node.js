const {writeFileSync} =  require ('fs')
writeFileSync (
  './content/try-file.txt',
  'Hello try lang po',
  { flag: 'a'}
)