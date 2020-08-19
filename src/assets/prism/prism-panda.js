import Prism from 'prismjs'

const keywords = /\b(?:main|type|late|self|open|loop|override|base|constructor|foreach|mut|nil|log|export|shared|internal|hidden|require|use|module|break|catch|class|const|continue|else|extends|for|if|implements|import|interface|module|native|new|null|open|opens|package|private|protected|provides|public|record|requires|return|short|static|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/
const className = /\b[A-Z](?:\w*[a-z]\w*)?\b/

Prism.languages.panda = Prism.languages.extend('clike', {
  'class-name': [
    className,

    // variables and parameters
    // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
    /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/
  ],
  keyword: keywords,
  function: [
    Prism.languages.clike.function,
    {
      pattern: /(\:\:)[a-z_]\w*/,
      lookbehind: true
    }
  ],
  number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
  operator: {
    pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
    lookbehind: true
  }
})

Prism.languages.insertBefore('panda', 'string', {
  'triple-quoted-string': {
    pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
    greedy: true,
    alias: 'string'
  }
})

Prism.languages.insertBefore('panda', 'class-name', {
  annotation: {
    alias: 'punctuation',
    pattern: /(^|[^.])@\w+/,
    lookbehind: true
  },
  namespace: {
    pattern: RegExp(
      /(\b(?:exports|import(?:\s+static)?|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(
        /<keyword>/g,
        function () {
          return keywords.source
        }
      )
    ),
    lookbehind: true,
    inside: {
      punctuation: /\./
    }
  },
  generics: {
    pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
    inside: {
      'class-name': className,
      keyword: keywords,
      punctuation: /[<>(),.:]/,
      operator: /[?&|]/
    }
  }
})
