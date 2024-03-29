import {
  _extends,
  _objectWithoutPropertiesLoose
} from "./chunk-XUWKS7PL.js";
import {
  emotion_styled_browser_esm_default,
  logger,
  scope
} from "./chunk-5DYKT6FS.js";
import {
  require_react
} from "./chunk-7GZFQHKS.js";
import {
  require_memoizerific
} from "./chunk-YK4HUFJB.js";
import {
  __commonJS2 as __commonJS,
  __toESM,
  __toESM2
} from "./chunk-4GZVANWA.js";

// ../components/dist/chunk-F7LZE4YG.mjs
var require_markdown = __commonJS({
  "../../node_modules/refractor/lang/markdown.js"(exports, module) {
    module.exports = markdown;
    markdown.displayName = "markdown";
    markdown.aliases = ["md"];
    function markdown(Prism) {
      (function(Prism2) {
        var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
        function createInline(pattern) {
          pattern = pattern.replace(/<inner>/g, function() {
            return inner;
          });
          return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + pattern + ")");
        }
        var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
        var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
          /__/g,
          function() {
            return tableCell;
          }
        );
        var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
        Prism2.languages.markdown = Prism2.languages.extend("markup", {});
        Prism2.languages.insertBefore("markdown", "prolog", {
          "front-matter-block": {
            pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
            lookbehind: true,
            greedy: true,
            inside: {
              punctuation: /^---|---$/,
              "front-matter": {
                pattern: /\S+(?:\s+\S+)*/,
                alias: ["yaml", "language-yaml"],
                inside: Prism2.languages.yaml
              }
            }
          },
          blockquote: {
            // > ...
            pattern: /^>(?:[\t ]*>)*/m,
            alias: "punctuation"
          },
          table: {
            pattern: RegExp(
              "^" + tableRow + tableLine + "(?:" + tableRow + ")*",
              "m"
            ),
            inside: {
              "table-data-rows": {
                pattern: RegExp(
                  "^(" + tableRow + tableLine + ")(?:" + tableRow + ")*$"
                ),
                lookbehind: true,
                inside: {
                  "table-data": {
                    pattern: RegExp(tableCell),
                    inside: Prism2.languages.markdown
                  },
                  punctuation: /\|/
                }
              },
              "table-line": {
                pattern: RegExp("^(" + tableRow + ")" + tableLine + "$"),
                lookbehind: true,
                inside: {
                  punctuation: /\||:?-{3,}:?/
                }
              },
              "table-header-row": {
                pattern: RegExp("^" + tableRow + "$"),
                inside: {
                  "table-header": {
                    pattern: RegExp(tableCell),
                    alias: "important",
                    inside: Prism2.languages.markdown
                  },
                  punctuation: /\|/
                }
              }
            }
          },
          code: [
            {
              // Prefixed by 4 spaces or 1 tab and preceded by an empty line
              pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
              lookbehind: true,
              alias: "keyword"
            },
            {
              // ```optional language
              // code block
              // ```
              pattern: /^```[\s\S]*?^```$/m,
              greedy: true,
              inside: {
                "code-block": {
                  pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                  lookbehind: true
                },
                "code-language": {
                  pattern: /^(```).+/,
                  lookbehind: true
                },
                punctuation: /```/
              }
            }
          ],
          title: [
            {
              // title 1
              // =======
              // title 2
              // -------
              pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
              alias: "important",
              inside: {
                punctuation: /==+$|--+$/
              }
            },
            {
              // # title 1
              // ###### title 6
              pattern: /(^\s*)#.+/m,
              lookbehind: true,
              alias: "important",
              inside: {
                punctuation: /^#+|#+$/
              }
            }
          ],
          hr: {
            // ***
            // ---
            // * * *
            // -----------
            pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
            lookbehind: true,
            alias: "punctuation"
          },
          list: {
            // * item
            // + item
            // - item
            // 1. item
            pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
            lookbehind: true,
            alias: "punctuation"
          },
          "url-reference": {
            // [id]: http://example.com "Optional title"
            // [id]: http://example.com 'Optional title'
            // [id]: http://example.com (Optional title)
            // [id]: <http://example.com> "Optional title"
            pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
            inside: {
              variable: {
                pattern: /^(!?\[)[^\]]+/,
                lookbehind: true
              },
              string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
              punctuation: /^[\[\]!:]|[<>]/
            },
            alias: "url"
          },
          bold: {
            // **strong**
            // __strong__
            // allow one nested instance of italic text using the same delimiter
            pattern: createInline(
              /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source
            ),
            lookbehind: true,
            greedy: true,
            inside: {
              content: {
                pattern: /(^..)[\s\S]+(?=..$)/,
                lookbehind: true,
                inside: {}
                // see below
              },
              punctuation: /\*\*|__/
            }
          },
          italic: {
            // *em*
            // _em_
            // allow one nested instance of bold text using the same delimiter
            pattern: createInline(
              /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source
            ),
            lookbehind: true,
            greedy: true,
            inside: {
              content: {
                pattern: /(^.)[\s\S]+(?=.$)/,
                lookbehind: true,
                inside: {}
                // see below
              },
              punctuation: /[*_]/
            }
          },
          strike: {
            // ~~strike through~~
            // ~strike~
            // eslint-disable-next-line regexp/strict
            pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
            lookbehind: true,
            greedy: true,
            inside: {
              content: {
                pattern: /(^~~?)[\s\S]+(?=\1$)/,
                lookbehind: true,
                inside: {}
                // see below
              },
              punctuation: /~~?/
            }
          },
          "code-snippet": {
            // `code`
            // ``code``
            pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
            lookbehind: true,
            greedy: true,
            alias: ["code", "keyword"]
          },
          url: {
            // [example](http://example.com "Optional title")
            // [example][id]
            // [example] [id]
            pattern: createInline(
              /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source
            ),
            lookbehind: true,
            greedy: true,
            inside: {
              operator: /^!/,
              content: {
                pattern: /(^\[)[^\]]+(?=\])/,
                lookbehind: true,
                inside: {}
                // see below
              },
              variable: {
                pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                lookbehind: true
              },
              url: {
                pattern: /(^\]\()[^\s)]+/,
                lookbehind: true
              },
              string: {
                pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                lookbehind: true
              }
            }
          }
        });
        ["url", "bold", "italic", "strike"].forEach(function(token) {
          ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(inside) {
            if (token !== inside) {
              Prism2.languages.markdown[token].inside.content.inside[inside] = Prism2.languages.markdown[inside];
            }
          });
        });
        Prism2.hooks.add("after-tokenize", function(env) {
          if (env.language !== "markdown" && env.language !== "md") {
            return;
          }
          function walkTokens(tokens) {
            if (!tokens || typeof tokens === "string") {
              return;
            }
            for (var i = 0, l = tokens.length; i < l; i++) {
              var token = tokens[i];
              if (token.type !== "code") {
                walkTokens(token.content);
                continue;
              }
              var codeLang = token.content[1];
              var codeBlock = token.content[3];
              if (codeLang && codeBlock && codeLang.type === "code-language" && codeBlock.type === "code-block" && typeof codeLang.content === "string") {
                var lang = codeLang.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
                lang = (/[a-z][\w-]*/i.exec(lang) || [""])[0].toLowerCase();
                var alias = "language-" + lang;
                if (!codeBlock.alias) {
                  codeBlock.alias = [alias];
                } else if (typeof codeBlock.alias === "string") {
                  codeBlock.alias = [codeBlock.alias, alias];
                } else {
                  codeBlock.alias.push(alias);
                }
              }
            }
          }
          walkTokens(env.tokens);
        });
        Prism2.hooks.add("wrap", function(env) {
          if (env.type !== "code-block") {
            return;
          }
          var codeLang = "";
          for (var i = 0, l = env.classes.length; i < l; i++) {
            var cls = env.classes[i];
            var match = /language-(.+)/.exec(cls);
            if (match) {
              codeLang = match[1];
              break;
            }
          }
          var grammar = Prism2.languages[codeLang];
          if (!grammar) {
            if (codeLang && codeLang !== "none" && Prism2.plugins.autoloader) {
              var id = "md-" + new Date().valueOf() + "-" + Math.floor(Math.random() * 1e16);
              env.attributes["id"] = id;
              Prism2.plugins.autoloader.loadLanguages(codeLang, function() {
                var ele = document.getElementById(id);
                if (ele) {
                  ele.innerHTML = Prism2.highlight(
                    ele.textContent,
                    Prism2.languages[codeLang],
                    codeLang
                  );
                }
              });
            }
          } else {
            env.content = Prism2.highlight(
              textContent(env.content.value),
              grammar,
              codeLang
            );
          }
        });
        var tagPattern = RegExp(Prism2.languages.markup.tag.pattern.source, "gi");
        var KNOWN_ENTITY_NAMES = {
          amp: "&",
          lt: "<",
          gt: ">",
          quot: '"'
        };
        var fromCodePoint = String.fromCodePoint || String.fromCharCode;
        function textContent(html) {
          var text = html.replace(tagPattern, "");
          text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(m, code) {
            code = code.toLowerCase();
            if (code[0] === "#") {
              var value;
              if (code[1] === "x") {
                value = parseInt(code.slice(2), 16);
              } else {
                value = Number(code.slice(1));
              }
              return fromCodePoint(value);
            } else {
              var known = KNOWN_ENTITY_NAMES[code];
              if (known) {
                return known;
              }
              return m;
            }
          });
          return text;
        }
        Prism2.languages.md = Prism2.languages.markdown;
      })(Prism);
    }
  }
});

// ../components/dist/chunk-MCVKDQZP.mjs
var require_yaml = __commonJS({
  "../../node_modules/refractor/lang/yaml.js"(exports, module) {
    module.exports = yaml;
    yaml.displayName = "yaml";
    yaml.aliases = ["yml"];
    function yaml(Prism) {
      (function(Prism2) {
        var anchorOrAlias = /[*&][^\s[\]{},]+/;
        var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/;
        var properties = "(?:" + tag.source + "(?:[ 	]+" + anchorOrAlias.source + ")?|" + anchorOrAlias.source + "(?:[ 	]+" + tag.source + ")?)";
        var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
          /<PLAIN>/g,
          function() {
            return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
          }
        );
        var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
        function createValuePattern(value, flags) {
          flags = (flags || "").replace(/m/g, "") + "m";
          var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
            return properties;
          }).replace(/<<value>>/g, function() {
            return value;
          });
          return RegExp(pattern, flags);
        }
        Prism2.languages.yaml = {
          scalar: {
            pattern: RegExp(
              /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                /<<prop>>/g,
                function() {
                  return properties;
                }
              )
            ),
            lookbehind: true,
            alias: "string"
          },
          comment: /#.*/,
          key: {
            pattern: RegExp(
              /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
                return properties;
              }).replace(/<<key>>/g, function() {
                return "(?:" + plainKey + "|" + string + ")";
              })
            ),
            lookbehind: true,
            greedy: true,
            alias: "atrule"
          },
          directive: {
            pattern: /(^[ \t]*)%.+/m,
            lookbehind: true,
            alias: "important"
          },
          datetime: {
            pattern: createValuePattern(
              /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source
            ),
            lookbehind: true,
            alias: "number"
          },
          boolean: {
            pattern: createValuePattern(/false|true/.source, "i"),
            lookbehind: true,
            alias: "important"
          },
          null: {
            pattern: createValuePattern(/null|~/.source, "i"),
            lookbehind: true,
            alias: "important"
          },
          string: {
            pattern: createValuePattern(string),
            lookbehind: true,
            greedy: true
          },
          number: {
            pattern: createValuePattern(
              /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,
              "i"
            ),
            lookbehind: true
          },
          tag,
          important: anchorOrAlias,
          punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
        };
        Prism2.languages.yml = Prism2.languages.yaml;
      })(Prism);
    }
  }
});

// ../components/dist/chunk-EJLWA6BL.mjs
var require_typescript = __commonJS({
  "../../node_modules/refractor/lang/typescript.js"(exports, module) {
    module.exports = typescript;
    typescript.displayName = "typescript";
    typescript.aliases = ["ts"];
    function typescript(Prism) {
      (function(Prism2) {
        Prism2.languages.typescript = Prism2.languages.extend("javascript", {
          "class-name": {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
            lookbehind: true,
            greedy: true,
            inside: null
            // see below
          },
          builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
        });
        Prism2.languages.typescript.keyword.push(
          /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
          // keywords that have to be followed by an identifier
          /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
          // This is for `import type *, {}`
          /\btype\b(?=\s*(?:[\{*]|$))/
        );
        delete Prism2.languages.typescript["parameter"];
        delete Prism2.languages.typescript["literal-property"];
        var typeInside = Prism2.languages.extend("typescript", {});
        delete typeInside["class-name"];
        Prism2.languages.typescript["class-name"].inside = typeInside;
        Prism2.languages.insertBefore("typescript", "function", {
          decorator: {
            pattern: /@[$\w\xA0-\uFFFF]+/,
            inside: {
              at: {
                pattern: /^@/,
                alias: "operator"
              },
              function: /^[\s\S]+/
            }
          },
          "generic-function": {
            // e.g. foo<T extends "bar" | "baz">( ...
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
            greedy: true,
            inside: {
              function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
              generic: {
                pattern: /<[\s\S]+/,
                // everything after the first <
                alias: "class-name",
                inside: typeInside
              }
            }
          }
        });
        Prism2.languages.ts = Prism2.languages.typescript;
      })(Prism);
    }
  }
});

// ../components/dist/chunk-5JWMNYUI.mjs
var require_jsx = __commonJS({
  "../../node_modules/refractor/lang/jsx.js"(exports, module) {
    module.exports = jsx;
    jsx.displayName = "jsx";
    jsx.aliases = [];
    function jsx(Prism) {
      (function(Prism2) {
        var javascript = Prism2.util.clone(Prism2.languages.javascript);
        var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
        var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
        var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
        function re(source, flags) {
          source = source.replace(/<S>/g, function() {
            return space;
          }).replace(/<BRACES>/g, function() {
            return braces;
          }).replace(/<SPREAD>/g, function() {
            return spread;
          });
          return RegExp(source, flags);
        }
        spread = re(spread).source;
        Prism2.languages.jsx = Prism2.languages.extend("markup", javascript);
        Prism2.languages.jsx.tag.pattern = re(
          /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source
        );
        Prism2.languages.jsx.tag.inside["tag"].pattern = /^<\/?[^\s>\/]*/;
        Prism2.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
        Prism2.languages.jsx.tag.inside["tag"].inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
        Prism2.languages.jsx.tag.inside["comment"] = javascript["comment"];
        Prism2.languages.insertBefore(
          "inside",
          "attr-name",
          {
            spread: {
              pattern: re(/<SPREAD>/.source),
              inside: Prism2.languages.jsx
            }
          },
          Prism2.languages.jsx.tag
        );
        Prism2.languages.insertBefore(
          "inside",
          "special-attr",
          {
            script: {
              // Allow for two levels of nesting
              pattern: re(/=<BRACES>/.source),
              alias: "language-javascript",
              inside: {
                "script-punctuation": {
                  pattern: /^=(?=\{)/,
                  alias: "punctuation"
                },
                rest: Prism2.languages.jsx
              }
            }
          },
          Prism2.languages.jsx.tag
        );
        var stringifyToken = function(token) {
          if (!token) {
            return "";
          }
          if (typeof token === "string") {
            return token;
          }
          if (typeof token.content === "string") {
            return token.content;
          }
          return token.content.map(stringifyToken).join("");
        };
        var walkTokens = function(tokens) {
          var openedTags = [];
          for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            var notTagNorBrace = false;
            if (typeof token !== "string") {
              if (token.type === "tag" && token.content[0] && token.content[0].type === "tag") {
                if (token.content[0].content[0].content === "</") {
                  if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
                    openedTags.pop();
                  }
                } else {
                  if (token.content[token.content.length - 1].content === "/>")
                    ;
                  else {
                    openedTags.push({
                      tagName: stringifyToken(token.content[0].content[1]),
                      openedBraces: 0
                    });
                  }
                }
              } else if (openedTags.length > 0 && token.type === "punctuation" && token.content === "{") {
                openedTags[openedTags.length - 1].openedBraces++;
              } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === "punctuation" && token.content === "}") {
                openedTags[openedTags.length - 1].openedBraces--;
              } else {
                notTagNorBrace = true;
              }
            }
            if (notTagNorBrace || typeof token === "string") {
              if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
                var plainText = stringifyToken(token);
                if (i < tokens.length - 1 && (typeof tokens[i + 1] === "string" || tokens[i + 1].type === "plain-text")) {
                  plainText += stringifyToken(tokens[i + 1]);
                  tokens.splice(i + 1, 1);
                }
                if (i > 0 && (typeof tokens[i - 1] === "string" || tokens[i - 1].type === "plain-text")) {
                  plainText = stringifyToken(tokens[i - 1]) + plainText;
                  tokens.splice(i - 1, 1);
                  i--;
                }
                tokens[i] = new Prism2.Token(
                  "plain-text",
                  plainText,
                  null,
                  plainText
                );
              }
            }
            if (token.content && typeof token.content !== "string") {
              walkTokens(token.content);
            }
          }
        };
        Prism2.hooks.add("after-tokenize", function(env) {
          if (env.language !== "jsx" && env.language !== "tsx") {
            return;
          }
          walkTokens(env.tokens);
        });
      })(Prism);
    }
  }
});

// ../components/dist/chunk-E6PB6TJD.mjs
var require_tsx = __commonJS({
  "../../node_modules/refractor/lang/tsx.js"(exports, module) {
    var refractorJsx = require_jsx();
    var refractorTypescript = require_typescript();
    module.exports = tsx;
    tsx.displayName = "tsx";
    tsx.aliases = [];
    function tsx(Prism) {
      Prism.register(refractorJsx);
      Prism.register(refractorTypescript);
      (function(Prism2) {
        var typescript = Prism2.util.clone(Prism2.languages.typescript);
        Prism2.languages.tsx = Prism2.languages.extend("jsx", typescript);
        delete Prism2.languages.tsx["parameter"];
        delete Prism2.languages.tsx["literal-property"];
        var tag = Prism2.languages.tsx.tag;
        tag.pattern = RegExp(
          /(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")",
          tag.pattern.flags
        );
        tag.lookbehind = true;
      })(Prism);
    }
  }
});

// ../components/dist/chunk-FQNIOMDM.mjs
var require_clike = __commonJS({
  "../../node_modules/refractor/lang/clike.js"(exports, module) {
    module.exports = clike;
    clike.displayName = "clike";
    clike.aliases = [];
    function clike(Prism) {
      Prism.languages.clike = {
        comment: [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true
          },
          {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
          }
        ],
        string: {
          pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        "class-name": {
          pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
          lookbehind: true,
          inside: {
            punctuation: /[.\\]/
          }
        },
        keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        boolean: /\b(?:false|true)\b/,
        function: /\b\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        punctuation: /[{}[\];(),.:]/
      };
    }
  }
});

// ../components/dist/chunk-NCNAA3F5.mjs
var require_javascript = __commonJS({
  "../../node_modules/refractor/lang/javascript.js"(exports, module) {
    module.exports = javascript;
    javascript.displayName = "javascript";
    javascript.aliases = ["js"];
    function javascript(Prism) {
      Prism.languages.javascript = Prism.languages.extend("clike", {
        "class-name": [
          Prism.languages.clike["class-name"],
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: true
          }
        ],
        keyword: [
          {
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: true
          },
          {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: true
          }
        ],
        // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
        function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        number: {
          pattern: RegExp(
            /(^|[^\w$])/.source + "(?:" + // constant
            (/NaN|Infinity/.source + "|" + // binary integer
            /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
            /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
            /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
            /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
            /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
          ),
          lookbehind: true
        },
        operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
      });
      Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
      Prism.languages.insertBefore("javascript", "keyword", {
        regex: {
          // eslint-disable-next-line regexp/no-dupe-characters-character-class
          pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
          lookbehind: true,
          greedy: true,
          inside: {
            "regex-source": {
              pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
              lookbehind: true,
              alias: "language-regex",
              inside: Prism.languages.regex
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/
          }
        },
        // This must be declared before keyword because we use "function" inside the look-forward
        "function-variable": {
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
          alias: "function"
        },
        parameter: [
          {
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: true,
            inside: Prism.languages.javascript
          },
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: true,
            inside: Prism.languages.javascript
          },
          {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: true,
            inside: Prism.languages.javascript
          },
          {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: true,
            inside: Prism.languages.javascript
          }
        ],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
      });
      Prism.languages.insertBefore("javascript", "string", {
        hashbang: {
          pattern: /^#!.*/,
          greedy: true,
          alias: "comment"
        },
        "template-string": {
          pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
          greedy: true,
          inside: {
            "template-punctuation": {
              pattern: /^`|`$/,
              alias: "string"
            },
            interpolation: {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
              lookbehind: true,
              inside: {
                "interpolation-punctuation": {
                  pattern: /^\$\{|\}$/,
                  alias: "punctuation"
                },
                rest: Prism.languages.javascript
              }
            },
            string: /[\s\S]+/
          }
        },
        "string-property": {
          pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
          lookbehind: true,
          greedy: true,
          alias: "property"
        }
      });
      Prism.languages.insertBefore("javascript", "operator", {
        "literal-property": {
          pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
          lookbehind: true,
          alias: "property"
        }
      });
      if (Prism.languages.markup) {
        Prism.languages.markup.tag.addInlined("script", "javascript");
        Prism.languages.markup.tag.addAttribute(
          /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
          "javascript"
        );
      }
      Prism.languages.js = Prism.languages.javascript;
    }
  }
});

// ../components/dist/chunk-B6TH6ZYW.mjs
var require_css = __commonJS({
  "../../node_modules/refractor/lang/css.js"(exports, module) {
    module.exports = css;
    css.displayName = "css";
    css.aliases = [];
    function css(Prism) {
      (function(Prism2) {
        var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        Prism2.languages.css = {
          comment: /\/\*[\s\S]*?\*\//,
          atrule: {
            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
            inside: {
              rule: /^@[\w-]+/,
              "selector-function-argument": {
                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: true,
                alias: "selector"
              },
              keyword: {
                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                lookbehind: true
              }
              // See rest below
            }
          },
          url: {
            // https://drafts.csswg.org/css-values-3/#urls
            pattern: RegExp(
              "\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)",
              "i"
            ),
            greedy: true,
            inside: {
              function: /^url/i,
              punctuation: /^\(|\)$/,
              string: {
                pattern: RegExp("^" + string.source + "$"),
                alias: "url"
              }
            }
          },
          selector: {
            pattern: RegExp(
              `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"
            ),
            lookbehind: true
          },
          string: {
            pattern: string,
            greedy: true
          },
          property: {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: true
          },
          important: /!important\b/i,
          function: {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: true
          },
          punctuation: /[(){};:,]/
        };
        Prism2.languages.css["atrule"].inside.rest = Prism2.languages.css;
        var markup = Prism2.languages.markup;
        if (markup) {
          markup.tag.addInlined("style", "css");
          markup.tag.addAttribute("style", "css");
        }
      })(Prism);
    }
  }
});

// ../components/dist/chunk-4VY3JSZO.mjs
var require_markup = __commonJS({
  "../../node_modules/refractor/lang/markup.js"(exports, module) {
    module.exports = markup;
    markup.displayName = "markup";
    markup.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"];
    function markup(Prism) {
      Prism.languages.markup = {
        comment: {
          pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
          greedy: true
        },
        prolog: {
          pattern: /<\?[\s\S]+?\?>/,
          greedy: true
        },
        doctype: {
          // https://www.w3.org/TR/xml/#NT-doctypedecl
          pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: true,
          inside: {
            "internal-subset": {
              pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
              lookbehind: true,
              greedy: true,
              inside: null
              // see below
            },
            string: {
              pattern: /"[^"]*"|'[^']*'/,
              greedy: true
            },
            punctuation: /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            name: /[^\s<>'"]+/
          }
        },
        cdata: {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          greedy: true
        },
        tag: {
          pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: true,
          inside: {
            tag: {
              pattern: /^<\/?[^\s>\/]+/,
              inside: {
                punctuation: /^<\/?/,
                namespace: /^[^\s>\/:]+:/
              }
            },
            "special-attr": [],
            "attr-value": {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                punctuation: [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  /"|'/
                ]
              }
            },
            punctuation: /\/?>/,
            "attr-name": {
              pattern: /[^\s>\/]+/,
              inside: {
                namespace: /^[^\s>\/:]+:/
              }
            }
          }
        },
        entity: [
          {
            pattern: /&[\da-z]{1,8};/i,
            alias: "named-entity"
          },
          /&#x?[\da-f]{1,8};/i
        ]
      };
      Prism.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism.languages.markup["entity"];
      Prism.languages.markup["doctype"].inside["internal-subset"].inside = Prism.languages.markup;
      Prism.hooks.add("wrap", function(env) {
        if (env.type === "entity") {
          env.attributes["title"] = env.content.value.replace(/&amp;/, "&");
        }
      });
      Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
        /**
         * Adds an inlined language to markup.
         *
         * An example of an inlined language is CSS with `<style>` tags.
         *
         * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
         * case insensitive.
         * @param {string} lang The language key.
         * @example
         * addInlined('style', 'css');
         */
        value: function addInlined(tagName, lang) {
          var includedCdataInside = {};
          includedCdataInside["language-" + lang] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: true,
            inside: Prism.languages[lang]
          };
          includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
          var inside = {
            "included-cdata": {
              pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
              inside: includedCdataInside
            }
          };
          inside["language-" + lang] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[lang]
          };
          var def = {};
          def[tagName] = {
            pattern: RegExp(
              /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                /__/g,
                function() {
                  return tagName;
                }
              ),
              "i"
            ),
            lookbehind: true,
            greedy: true,
            inside
          };
          Prism.languages.insertBefore("markup", "cdata", def);
        }
      });
      Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
        /**
         * Adds an pattern to highlight languages embedded in HTML attributes.
         *
         * An example of an inlined language is CSS with `style` attributes.
         *
         * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
         * case insensitive.
         * @param {string} lang The language key.
         * @example
         * addAttribute('style', 'css');
         */
        value: function(attrName, lang) {
          Prism.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp(
              /(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
              "i"
            ),
            lookbehind: true,
            inside: {
              "attr-name": /^[^\s=]+/,
              "attr-value": {
                pattern: /=[\s\S]+/,
                inside: {
                  value: {
                    pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                    lookbehind: true,
                    alias: [lang, "language-" + lang],
                    inside: Prism.languages[lang]
                  },
                  punctuation: [
                    {
                      pattern: /^=/,
                      alias: "attr-equals"
                    },
                    /"|'/
                  ]
                }
              }
            }
          });
        }
      });
      Prism.languages.html = Prism.languages.markup;
      Prism.languages.mathml = Prism.languages.markup;
      Prism.languages.svg = Prism.languages.markup;
      Prism.languages.xml = Prism.languages.extend("markup", {});
      Prism.languages.ssml = Prism.languages.xml;
      Prism.languages.atom = Prism.languages.xml;
      Prism.languages.rss = Prism.languages.xml;
    }
  }
});

// ../components/dist/chunk-R5LRSZWY.mjs
var require_immutable = __commonJS({
  "../../node_modules/xtend/immutable.js"(exports, module) {
    module.exports = extend;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function extend() {
      var target = {};
      for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
  }
});
var require_schema = __commonJS({
  "../../node_modules/property-information/lib/util/schema.js"(exports, module) {
    module.exports = Schema;
    var proto = Schema.prototype;
    proto.space = null;
    proto.normal = {};
    proto.property = {};
    function Schema(property, normal, space) {
      this.property = property;
      this.normal = normal;
      if (space) {
        this.space = space;
      }
    }
  }
});
var require_merge = __commonJS({
  "../../node_modules/property-information/lib/util/merge.js"(exports, module) {
    var xtend = require_immutable();
    var Schema = require_schema();
    module.exports = merge;
    function merge(definitions) {
      var length = definitions.length;
      var property = [];
      var normal = [];
      var index = -1;
      var info;
      var space;
      while (++index < length) {
        info = definitions[index];
        property.push(info.property);
        normal.push(info.normal);
        space = info.space;
      }
      return new Schema(
        xtend.apply(null, property),
        xtend.apply(null, normal),
        space
      );
    }
  }
});
var require_normalize = __commonJS({
  "../../node_modules/property-information/normalize.js"(exports, module) {
    module.exports = normalize;
    function normalize(value) {
      return value.toLowerCase();
    }
  }
});
var require_info = __commonJS({
  "../../node_modules/property-information/lib/util/info.js"(exports, module) {
    module.exports = Info;
    var proto = Info.prototype;
    proto.space = null;
    proto.attribute = null;
    proto.property = null;
    proto.boolean = false;
    proto.booleanish = false;
    proto.overloadedBoolean = false;
    proto.number = false;
    proto.commaSeparated = false;
    proto.spaceSeparated = false;
    proto.commaOrSpaceSeparated = false;
    proto.mustUseProperty = false;
    proto.defined = false;
    function Info(property, attribute) {
      this.property = property;
      this.attribute = attribute;
    }
  }
});
var require_types = __commonJS({
  "../../node_modules/property-information/lib/util/types.js"(exports) {
    var powers = 0;
    exports.boolean = increment();
    exports.booleanish = increment();
    exports.overloadedBoolean = increment();
    exports.number = increment();
    exports.spaceSeparated = increment();
    exports.commaSeparated = increment();
    exports.commaOrSpaceSeparated = increment();
    function increment() {
      return Math.pow(2, ++powers);
    }
  }
});
var require_defined_info = __commonJS({
  "../../node_modules/property-information/lib/util/defined-info.js"(exports, module) {
    var Info = require_info();
    var types = require_types();
    module.exports = DefinedInfo;
    DefinedInfo.prototype = new Info();
    DefinedInfo.prototype.defined = true;
    var checks = [
      "boolean",
      "booleanish",
      "overloadedBoolean",
      "number",
      "commaSeparated",
      "spaceSeparated",
      "commaOrSpaceSeparated"
    ];
    var checksLength = checks.length;
    function DefinedInfo(property, attribute, mask, space) {
      var index = -1;
      var check;
      mark(this, "space", space);
      Info.call(this, property, attribute);
      while (++index < checksLength) {
        check = checks[index];
        mark(this, check, (mask & types[check]) === types[check]);
      }
    }
    function mark(values, key, value) {
      if (value) {
        values[key] = value;
      }
    }
  }
});
var require_create = __commonJS({
  "../../node_modules/property-information/lib/util/create.js"(exports, module) {
    var normalize = require_normalize();
    var Schema = require_schema();
    var DefinedInfo = require_defined_info();
    module.exports = create;
    function create(definition) {
      var space = definition.space;
      var mustUseProperty = definition.mustUseProperty || [];
      var attributes = definition.attributes || {};
      var props = definition.properties;
      var transform = definition.transform;
      var property = {};
      var normal = {};
      var prop;
      var info;
      for (prop in props) {
        info = new DefinedInfo(
          prop,
          transform(attributes, prop),
          props[prop],
          space
        );
        if (mustUseProperty.indexOf(prop) !== -1) {
          info.mustUseProperty = true;
        }
        property[prop] = info;
        normal[normalize(prop)] = prop;
        normal[normalize(info.attribute)] = prop;
      }
      return new Schema(property, normal, space);
    }
  }
});
var require_xlink = __commonJS({
  "../../node_modules/property-information/lib/xlink.js"(exports, module) {
    var create = require_create();
    module.exports = create({
      space: "xlink",
      transform: xlinkTransform,
      properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null
      }
    });
    function xlinkTransform(_, prop) {
      return "xlink:" + prop.slice(5).toLowerCase();
    }
  }
});
var require_xml = __commonJS({
  "../../node_modules/property-information/lib/xml.js"(exports, module) {
    var create = require_create();
    module.exports = create({
      space: "xml",
      transform: xmlTransform,
      properties: {
        xmlLang: null,
        xmlBase: null,
        xmlSpace: null
      }
    });
    function xmlTransform(_, prop) {
      return "xml:" + prop.slice(3).toLowerCase();
    }
  }
});
var require_case_sensitive_transform = __commonJS({
  "../../node_modules/property-information/lib/util/case-sensitive-transform.js"(exports, module) {
    module.exports = caseSensitiveTransform;
    function caseSensitiveTransform(attributes, attribute) {
      return attribute in attributes ? attributes[attribute] : attribute;
    }
  }
});
var require_case_insensitive_transform = __commonJS({
  "../../node_modules/property-information/lib/util/case-insensitive-transform.js"(exports, module) {
    var caseSensitiveTransform = require_case_sensitive_transform();
    module.exports = caseInsensitiveTransform;
    function caseInsensitiveTransform(attributes, property) {
      return caseSensitiveTransform(attributes, property.toLowerCase());
    }
  }
});
var require_xmlns = __commonJS({
  "../../node_modules/property-information/lib/xmlns.js"(exports, module) {
    var create = require_create();
    var caseInsensitiveTransform = require_case_insensitive_transform();
    module.exports = create({
      space: "xmlns",
      attributes: {
        xmlnsxlink: "xmlns:xlink"
      },
      transform: caseInsensitiveTransform,
      properties: {
        xmlns: null,
        xmlnsXLink: null
      }
    });
  }
});
var require_aria = __commonJS({
  "../../node_modules/property-information/lib/aria.js"(exports, module) {
    var types = require_types();
    var create = require_create();
    var booleanish = types.booleanish;
    var number = types.number;
    var spaceSeparated = types.spaceSeparated;
    module.exports = create({
      transform: ariaTransform,
      properties: {
        ariaActiveDescendant: null,
        ariaAtomic: booleanish,
        ariaAutoComplete: null,
        ariaBusy: booleanish,
        ariaChecked: booleanish,
        ariaColCount: number,
        ariaColIndex: number,
        ariaColSpan: number,
        ariaControls: spaceSeparated,
        ariaCurrent: null,
        ariaDescribedBy: spaceSeparated,
        ariaDetails: null,
        ariaDisabled: booleanish,
        ariaDropEffect: spaceSeparated,
        ariaErrorMessage: null,
        ariaExpanded: booleanish,
        ariaFlowTo: spaceSeparated,
        ariaGrabbed: booleanish,
        ariaHasPopup: null,
        ariaHidden: booleanish,
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: spaceSeparated,
        ariaLevel: number,
        ariaLive: null,
        ariaModal: booleanish,
        ariaMultiLine: booleanish,
        ariaMultiSelectable: booleanish,
        ariaOrientation: null,
        ariaOwns: spaceSeparated,
        ariaPlaceholder: null,
        ariaPosInSet: number,
        ariaPressed: booleanish,
        ariaReadOnly: booleanish,
        ariaRelevant: null,
        ariaRequired: booleanish,
        ariaRoleDescription: spaceSeparated,
        ariaRowCount: number,
        ariaRowIndex: number,
        ariaRowSpan: number,
        ariaSelected: booleanish,
        ariaSetSize: number,
        ariaSort: null,
        ariaValueMax: number,
        ariaValueMin: number,
        ariaValueNow: number,
        ariaValueText: null,
        role: null
      }
    });
    function ariaTransform(_, prop) {
      return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
    }
  }
});
var require_html = __commonJS({
  "../../node_modules/property-information/lib/html.js"(exports, module) {
    var types = require_types();
    var create = require_create();
    var caseInsensitiveTransform = require_case_insensitive_transform();
    var boolean = types.boolean;
    var overloadedBoolean = types.overloadedBoolean;
    var booleanish = types.booleanish;
    var number = types.number;
    var spaceSeparated = types.spaceSeparated;
    var commaSeparated = types.commaSeparated;
    module.exports = create({
      space: "html",
      attributes: {
        acceptcharset: "accept-charset",
        classname: "class",
        htmlfor: "for",
        httpequiv: "http-equiv"
      },
      transform: caseInsensitiveTransform,
      mustUseProperty: ["checked", "multiple", "muted", "selected"],
      properties: {
        // Standard Properties.
        abbr: null,
        accept: commaSeparated,
        acceptCharset: spaceSeparated,
        accessKey: spaceSeparated,
        action: null,
        allow: null,
        allowFullScreen: boolean,
        allowPaymentRequest: boolean,
        allowUserMedia: boolean,
        alt: null,
        as: null,
        async: boolean,
        autoCapitalize: null,
        autoComplete: spaceSeparated,
        autoFocus: boolean,
        autoPlay: boolean,
        capture: boolean,
        charSet: null,
        checked: boolean,
        cite: null,
        className: spaceSeparated,
        cols: number,
        colSpan: null,
        content: null,
        contentEditable: booleanish,
        controls: boolean,
        controlsList: spaceSeparated,
        coords: number | commaSeparated,
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: boolean,
        defer: boolean,
        dir: null,
        dirName: null,
        disabled: boolean,
        download: overloadedBoolean,
        draggable: booleanish,
        encType: null,
        enterKeyHint: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: boolean,
        formTarget: null,
        headers: spaceSeparated,
        height: number,
        hidden: boolean,
        high: number,
        href: null,
        hrefLang: null,
        htmlFor: spaceSeparated,
        httpEquiv: spaceSeparated,
        id: null,
        imageSizes: null,
        imageSrcSet: commaSeparated,
        inputMode: null,
        integrity: null,
        is: null,
        isMap: boolean,
        itemId: null,
        itemProp: spaceSeparated,
        itemRef: spaceSeparated,
        itemScope: boolean,
        itemType: spaceSeparated,
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: boolean,
        low: number,
        manifest: null,
        max: null,
        maxLength: number,
        media: null,
        method: null,
        min: null,
        minLength: number,
        multiple: boolean,
        muted: boolean,
        name: null,
        nonce: null,
        noModule: boolean,
        noValidate: boolean,
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforePrint: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextMenu: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: boolean,
        optimum: number,
        pattern: null,
        ping: spaceSeparated,
        placeholder: null,
        playsInline: boolean,
        poster: null,
        preload: null,
        readOnly: boolean,
        referrerPolicy: null,
        rel: spaceSeparated,
        required: boolean,
        reversed: boolean,
        rows: number,
        rowSpan: number,
        sandbox: spaceSeparated,
        scope: null,
        scoped: boolean,
        seamless: boolean,
        selected: boolean,
        shape: null,
        size: number,
        sizes: null,
        slot: null,
        span: number,
        spellCheck: booleanish,
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: commaSeparated,
        start: number,
        step: null,
        style: null,
        tabIndex: number,
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: boolean,
        useMap: null,
        value: booleanish,
        width: number,
        wrap: null,
        // Legacy.
        // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
        align: null,
        // Several. Use CSS `text-align` instead,
        aLink: null,
        // `<body>`. Use CSS `a:active {color}` instead
        archive: spaceSeparated,
        // `<object>`. List of URIs to archives
        axis: null,
        // `<td>` and `<th>`. Use `scope` on `<th>`
        background: null,
        // `<body>`. Use CSS `background-image` instead
        bgColor: null,
        // `<body>` and table elements. Use CSS `background-color` instead
        border: number,
        // `<table>`. Use CSS `border-width` instead,
        borderColor: null,
        // `<table>`. Use CSS `border-color` instead,
        bottomMargin: number,
        // `<body>`
        cellPadding: null,
        // `<table>`
        cellSpacing: null,
        // `<table>`
        char: null,
        // Several table elements. When `align=char`, sets the character to align on
        charOff: null,
        // Several table elements. When `char`, offsets the alignment
        classId: null,
        // `<object>`
        clear: null,
        // `<br>`. Use CSS `clear` instead
        code: null,
        // `<object>`
        codeBase: null,
        // `<object>`
        codeType: null,
        // `<object>`
        color: null,
        // `<font>` and `<hr>`. Use CSS instead
        compact: boolean,
        // Lists. Use CSS to reduce space between items instead
        declare: boolean,
        // `<object>`
        event: null,
        // `<script>`
        face: null,
        // `<font>`. Use CSS instead
        frame: null,
        // `<table>`
        frameBorder: null,
        // `<iframe>`. Use CSS `border` instead
        hSpace: number,
        // `<img>` and `<object>`
        leftMargin: number,
        // `<body>`
        link: null,
        // `<body>`. Use CSS `a:link {color: *}` instead
        longDesc: null,
        // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
        lowSrc: null,
        // `<img>`. Use a `<picture>`
        marginHeight: number,
        // `<body>`
        marginWidth: number,
        // `<body>`
        noResize: boolean,
        // `<frame>`
        noHref: boolean,
        // `<area>`. Use no href instead of an explicit `nohref`
        noShade: boolean,
        // `<hr>`. Use background-color and height instead of borders
        noWrap: boolean,
        // `<td>` and `<th>`
        object: null,
        // `<applet>`
        profile: null,
        // `<head>`
        prompt: null,
        // `<isindex>`
        rev: null,
        // `<link>`
        rightMargin: number,
        // `<body>`
        rules: null,
        // `<table>`
        scheme: null,
        // `<meta>`
        scrolling: booleanish,
        // `<frame>`. Use overflow in the child context
        standby: null,
        // `<object>`
        summary: null,
        // `<table>`
        text: null,
        // `<body>`. Use CSS `color` instead
        topMargin: number,
        // `<body>`
        valueType: null,
        // `<param>`
        version: null,
        // `<html>`. Use a doctype.
        vAlign: null,
        // Several. Use CSS `vertical-align` instead
        vLink: null,
        // `<body>`. Use CSS `a:visited {color}` instead
        vSpace: number,
        // `<img>` and `<object>`
        // Non-standard Properties.
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: boolean,
        disableRemotePlayback: boolean,
        prefix: null,
        property: null,
        results: number,
        security: null,
        unselectable: null
      }
    });
  }
});
var require_html2 = __commonJS({
  "../../node_modules/property-information/html.js"(exports, module) {
    var merge = require_merge();
    var xlink = require_xlink();
    var xml = require_xml();
    var xmlns = require_xmlns();
    var aria = require_aria();
    var html = require_html();
    module.exports = merge([xml, xlink, xmlns, aria, html]);
  }
});
var require_find = __commonJS({
  "../../node_modules/property-information/find.js"(exports, module) {
    var normalize = require_normalize();
    var DefinedInfo = require_defined_info();
    var Info = require_info();
    var data = "data";
    module.exports = find;
    var valid = /^data[-\w.:]+$/i;
    var dash = /-[a-z]/g;
    var cap = /[A-Z]/g;
    function find(schema, value) {
      var normal = normalize(value);
      var prop = value;
      var Type = Info;
      if (normal in schema.normal) {
        return schema.property[schema.normal[normal]];
      }
      if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
        if (value.charAt(4) === "-") {
          prop = datasetToProperty(value);
        } else {
          value = datasetToAttribute(value);
        }
        Type = DefinedInfo;
      }
      return new Type(prop, value);
    }
    function datasetToProperty(attribute) {
      var value = attribute.slice(5).replace(dash, camelcase);
      return data + value.charAt(0).toUpperCase() + value.slice(1);
    }
    function datasetToAttribute(property) {
      var value = property.slice(4);
      if (dash.test(value)) {
        return property;
      }
      value = value.replace(cap, kebab);
      if (value.charAt(0) !== "-") {
        value = "-" + value;
      }
      return data + value;
    }
    function kebab($0) {
      return "-" + $0.toLowerCase();
    }
    function camelcase($0) {
      return $0.charAt(1).toUpperCase();
    }
  }
});
var require_hast_util_parse_selector = __commonJS({
  "../../node_modules/hast-util-parse-selector/index.js"(exports, module) {
    module.exports = parse;
    var search = /[#.]/g;
    function parse(selector, defaultTagName) {
      var value = selector || "";
      var name = defaultTagName || "div";
      var props = {};
      var start = 0;
      var subvalue;
      var previous;
      var match;
      while (start < value.length) {
        search.lastIndex = start;
        match = search.exec(value);
        subvalue = value.slice(start, match ? match.index : value.length);
        if (subvalue) {
          if (!previous) {
            name = subvalue;
          } else if (previous === "#") {
            props.id = subvalue;
          } else if (props.className) {
            props.className.push(subvalue);
          } else {
            props.className = [subvalue];
          }
          start += subvalue.length;
        }
        if (match) {
          previous = match[0];
          start++;
        }
      }
      return { type: "element", tagName: name, properties: props, children: [] };
    }
  }
});
var require_space_separated_tokens = __commonJS({
  "../../node_modules/space-separated-tokens/index.js"(exports) {
    exports.parse = parse;
    exports.stringify = stringify;
    var empty = "";
    var space = " ";
    var whiteSpace = /[ \t\n\r\f]+/g;
    function parse(value) {
      var input = String(value || empty).trim();
      return input === empty ? [] : input.split(whiteSpace);
    }
    function stringify(values) {
      return values.join(space).trim();
    }
  }
});
var require_comma_separated_tokens = __commonJS({
  "../../node_modules/comma-separated-tokens/index.js"(exports) {
    exports.parse = parse;
    exports.stringify = stringify;
    var comma = ",";
    var space = " ";
    var empty = "";
    function parse(value) {
      var values = [];
      var input = String(value || empty);
      var index = input.indexOf(comma);
      var lastIndex = 0;
      var end = false;
      var val;
      while (!end) {
        if (index === -1) {
          index = input.length;
          end = true;
        }
        val = input.slice(lastIndex, index).trim();
        if (val || !end) {
          values.push(val);
        }
        lastIndex = index + 1;
        index = input.indexOf(comma, lastIndex);
      }
      return values;
    }
    function stringify(values, options) {
      var settings = options || {};
      var left = settings.padLeft === false ? empty : space;
      var right = settings.padRight ? space : empty;
      if (values[values.length - 1] === empty) {
        values = values.concat(empty);
      }
      return values.join(right + comma + left).trim();
    }
  }
});
var require_factory = __commonJS({
  "../../node_modules/hastscript/factory.js"(exports, module) {
    var find = require_find();
    var normalize = require_normalize();
    var parseSelector = require_hast_util_parse_selector();
    var spaces = require_space_separated_tokens().parse;
    var commas = require_comma_separated_tokens().parse;
    module.exports = factory;
    var own = {}.hasOwnProperty;
    function factory(schema, defaultTagName, caseSensitive) {
      var adjust = caseSensitive ? createAdjustMap(caseSensitive) : null;
      return h;
      function h(selector, properties) {
        var node = parseSelector(selector, defaultTagName);
        var children = Array.prototype.slice.call(arguments, 2);
        var name = node.tagName.toLowerCase();
        var property;
        node.tagName = adjust && own.call(adjust, name) ? adjust[name] : name;
        if (properties && isChildren(properties, node)) {
          children.unshift(properties);
          properties = null;
        }
        if (properties) {
          for (property in properties) {
            addProperty(node.properties, property, properties[property]);
          }
        }
        addChild(node.children, children);
        if (node.tagName === "template") {
          node.content = { type: "root", children: node.children };
          node.children = [];
        }
        return node;
      }
      function addProperty(properties, key, value) {
        var info;
        var property;
        var result;
        if (value === null || value === void 0 || value !== value) {
          return;
        }
        info = find(schema, key);
        property = info.property;
        result = value;
        if (typeof result === "string") {
          if (info.spaceSeparated) {
            result = spaces(result);
          } else if (info.commaSeparated) {
            result = commas(result);
          } else if (info.commaOrSpaceSeparated) {
            result = spaces(commas(result).join(" "));
          }
        }
        if (property === "style" && typeof value !== "string") {
          result = style(result);
        }
        if (property === "className" && properties.className) {
          result = properties.className.concat(result);
        }
        properties[property] = parsePrimitives(info, property, result);
      }
    }
    function isChildren(value, node) {
      return typeof value === "string" || "length" in value || isNode(node.tagName, value);
    }
    function isNode(tagName, value) {
      var type = value.type;
      if (tagName === "input" || !type || typeof type !== "string") {
        return false;
      }
      if (typeof value.children === "object" && "length" in value.children) {
        return true;
      }
      type = type.toLowerCase();
      if (tagName === "button") {
        return type !== "menu" && type !== "submit" && type !== "reset" && type !== "button";
      }
      return "value" in value;
    }
    function addChild(nodes, value) {
      var index;
      var length;
      if (typeof value === "string" || typeof value === "number") {
        nodes.push({ type: "text", value: String(value) });
        return;
      }
      if (typeof value === "object" && "length" in value) {
        index = -1;
        length = value.length;
        while (++index < length) {
          addChild(nodes, value[index]);
        }
        return;
      }
      if (typeof value !== "object" || !("type" in value)) {
        throw new Error("Expected node, nodes, or string, got `" + value + "`");
      }
      nodes.push(value);
    }
    function parsePrimitives(info, name, value) {
      var index;
      var length;
      var result;
      if (typeof value !== "object" || !("length" in value)) {
        return parsePrimitive(info, name, value);
      }
      length = value.length;
      index = -1;
      result = [];
      while (++index < length) {
        result[index] = parsePrimitive(info, name, value[index]);
      }
      return result;
    }
    function parsePrimitive(info, name, value) {
      var result = value;
      if (info.number || info.positiveNumber) {
        if (!isNaN(result) && result !== "") {
          result = Number(result);
        }
      } else if (info.boolean || info.overloadedBoolean) {
        if (typeof result === "string" && (result === "" || normalize(value) === normalize(name))) {
          result = true;
        }
      }
      return result;
    }
    function style(value) {
      var result = [];
      var key;
      for (key in value) {
        result.push([key, value[key]].join(": "));
      }
      return result.join("; ");
    }
    function createAdjustMap(values) {
      var length = values.length;
      var index = -1;
      var result = {};
      var value;
      while (++index < length) {
        value = values[index];
        result[value.toLowerCase()] = value;
      }
      return result;
    }
  }
});
var require_html3 = __commonJS({
  "../../node_modules/hastscript/html.js"(exports, module) {
    var schema = require_html2();
    var factory = require_factory();
    var html = factory(schema, "div");
    html.displayName = "html";
    module.exports = html;
  }
});
var require_hastscript = __commonJS({
  "../../node_modules/hastscript/index.js"(exports, module) {
    module.exports = require_html3();
  }
});
var require_character_entities_legacy = __commonJS({
  "../../node_modules/parse-entities/node_modules/character-entities-legacy/index.json"(exports, module) {
    module.exports = {
      AElig: "\xC6",
      AMP: "&",
      Aacute: "\xC1",
      Acirc: "\xC2",
      Agrave: "\xC0",
      Aring: "\xC5",
      Atilde: "\xC3",
      Auml: "\xC4",
      COPY: "\xA9",
      Ccedil: "\xC7",
      ETH: "\xD0",
      Eacute: "\xC9",
      Ecirc: "\xCA",
      Egrave: "\xC8",
      Euml: "\xCB",
      GT: ">",
      Iacute: "\xCD",
      Icirc: "\xCE",
      Igrave: "\xCC",
      Iuml: "\xCF",
      LT: "<",
      Ntilde: "\xD1",
      Oacute: "\xD3",
      Ocirc: "\xD4",
      Ograve: "\xD2",
      Oslash: "\xD8",
      Otilde: "\xD5",
      Ouml: "\xD6",
      QUOT: '"',
      REG: "\xAE",
      THORN: "\xDE",
      Uacute: "\xDA",
      Ucirc: "\xDB",
      Ugrave: "\xD9",
      Uuml: "\xDC",
      Yacute: "\xDD",
      aacute: "\xE1",
      acirc: "\xE2",
      acute: "\xB4",
      aelig: "\xE6",
      agrave: "\xE0",
      amp: "&",
      aring: "\xE5",
      atilde: "\xE3",
      auml: "\xE4",
      brvbar: "\xA6",
      ccedil: "\xE7",
      cedil: "\xB8",
      cent: "\xA2",
      copy: "\xA9",
      curren: "\xA4",
      deg: "\xB0",
      divide: "\xF7",
      eacute: "\xE9",
      ecirc: "\xEA",
      egrave: "\xE8",
      eth: "\xF0",
      euml: "\xEB",
      frac12: "\xBD",
      frac14: "\xBC",
      frac34: "\xBE",
      gt: ">",
      iacute: "\xED",
      icirc: "\xEE",
      iexcl: "\xA1",
      igrave: "\xEC",
      iquest: "\xBF",
      iuml: "\xEF",
      laquo: "\xAB",
      lt: "<",
      macr: "\xAF",
      micro: "\xB5",
      middot: "\xB7",
      nbsp: "\xA0",
      not: "\xAC",
      ntilde: "\xF1",
      oacute: "\xF3",
      ocirc: "\xF4",
      ograve: "\xF2",
      ordf: "\xAA",
      ordm: "\xBA",
      oslash: "\xF8",
      otilde: "\xF5",
      ouml: "\xF6",
      para: "\xB6",
      plusmn: "\xB1",
      pound: "\xA3",
      quot: '"',
      raquo: "\xBB",
      reg: "\xAE",
      sect: "\xA7",
      shy: "\xAD",
      sup1: "\xB9",
      sup2: "\xB2",
      sup3: "\xB3",
      szlig: "\xDF",
      thorn: "\xFE",
      times: "\xD7",
      uacute: "\xFA",
      ucirc: "\xFB",
      ugrave: "\xF9",
      uml: "\xA8",
      uuml: "\xFC",
      yacute: "\xFD",
      yen: "\xA5",
      yuml: "\xFF"
    };
  }
});
var require_character_reference_invalid = __commonJS({
  "../../node_modules/character-reference-invalid/index.json"(exports, module) {
    module.exports = {
      "0": "\uFFFD",
      "128": "\u20AC",
      "130": "\u201A",
      "131": "\u0192",
      "132": "\u201E",
      "133": "\u2026",
      "134": "\u2020",
      "135": "\u2021",
      "136": "\u02C6",
      "137": "\u2030",
      "138": "\u0160",
      "139": "\u2039",
      "140": "\u0152",
      "142": "\u017D",
      "145": "\u2018",
      "146": "\u2019",
      "147": "\u201C",
      "148": "\u201D",
      "149": "\u2022",
      "150": "\u2013",
      "151": "\u2014",
      "152": "\u02DC",
      "153": "\u2122",
      "154": "\u0161",
      "155": "\u203A",
      "156": "\u0153",
      "158": "\u017E",
      "159": "\u0178"
    };
  }
});
var require_is_decimal = __commonJS({
  "../../node_modules/is-decimal/index.js"(exports, module) {
    module.exports = decimal;
    function decimal(character) {
      var code = typeof character === "string" ? character.charCodeAt(0) : character;
      return code >= 48 && code <= 57;
    }
  }
});
var require_is_hexadecimal = __commonJS({
  "../../node_modules/is-hexadecimal/index.js"(exports, module) {
    module.exports = hexadecimal;
    function hexadecimal(character) {
      var code = typeof character === "string" ? character.charCodeAt(0) : character;
      return code >= 97 && code <= 102 || code >= 65 && code <= 70 || code >= 48 && code <= 57;
    }
  }
});
var require_is_alphabetical = __commonJS({
  "../../node_modules/is-alphabetical/index.js"(exports, module) {
    module.exports = alphabetical;
    function alphabetical(character) {
      var code = typeof character === "string" ? character.charCodeAt(0) : character;
      return code >= 97 && code <= 122 || code >= 65 && code <= 90;
    }
  }
});
var require_is_alphanumerical = __commonJS({
  "../../node_modules/is-alphanumerical/index.js"(exports, module) {
    var alphabetical = require_is_alphabetical();
    var decimal = require_is_decimal();
    module.exports = alphanumerical;
    function alphanumerical(character) {
      return alphabetical(character) || decimal(character);
    }
  }
});
var require_character_entities = __commonJS({
  "../../node_modules/parse-entities/node_modules/character-entities/index.json"(exports, module) {
    module.exports = {
      AEli: "\xC6",
      AElig: "\xC6",
      AM: "&",
      AMP: "&",
      Aacut: "\xC1",
      Aacute: "\xC1",
      Abreve: "\u0102",
      Acir: "\xC2",
      Acirc: "\xC2",
      Acy: "\u0410",
      Afr: "\u{1D504}",
      Agrav: "\xC0",
      Agrave: "\xC0",
      Alpha: "\u0391",
      Amacr: "\u0100",
      And: "\u2A53",
      Aogon: "\u0104",
      Aopf: "\u{1D538}",
      ApplyFunction: "\u2061",
      Arin: "\xC5",
      Aring: "\xC5",
      Ascr: "\u{1D49C}",
      Assign: "\u2254",
      Atild: "\xC3",
      Atilde: "\xC3",
      Aum: "\xC4",
      Auml: "\xC4",
      Backslash: "\u2216",
      Barv: "\u2AE7",
      Barwed: "\u2306",
      Bcy: "\u0411",
      Because: "\u2235",
      Bernoullis: "\u212C",
      Beta: "\u0392",
      Bfr: "\u{1D505}",
      Bopf: "\u{1D539}",
      Breve: "\u02D8",
      Bscr: "\u212C",
      Bumpeq: "\u224E",
      CHcy: "\u0427",
      COP: "\xA9",
      COPY: "\xA9",
      Cacute: "\u0106",
      Cap: "\u22D2",
      CapitalDifferentialD: "\u2145",
      Cayleys: "\u212D",
      Ccaron: "\u010C",
      Ccedi: "\xC7",
      Ccedil: "\xC7",
      Ccirc: "\u0108",
      Cconint: "\u2230",
      Cdot: "\u010A",
      Cedilla: "\xB8",
      CenterDot: "\xB7",
      Cfr: "\u212D",
      Chi: "\u03A7",
      CircleDot: "\u2299",
      CircleMinus: "\u2296",
      CirclePlus: "\u2295",
      CircleTimes: "\u2297",
      ClockwiseContourIntegral: "\u2232",
      CloseCurlyDoubleQuote: "\u201D",
      CloseCurlyQuote: "\u2019",
      Colon: "\u2237",
      Colone: "\u2A74",
      Congruent: "\u2261",
      Conint: "\u222F",
      ContourIntegral: "\u222E",
      Copf: "\u2102",
      Coproduct: "\u2210",
      CounterClockwiseContourIntegral: "\u2233",
      Cross: "\u2A2F",
      Cscr: "\u{1D49E}",
      Cup: "\u22D3",
      CupCap: "\u224D",
      DD: "\u2145",
      DDotrahd: "\u2911",
      DJcy: "\u0402",
      DScy: "\u0405",
      DZcy: "\u040F",
      Dagger: "\u2021",
      Darr: "\u21A1",
      Dashv: "\u2AE4",
      Dcaron: "\u010E",
      Dcy: "\u0414",
      Del: "\u2207",
      Delta: "\u0394",
      Dfr: "\u{1D507}",
      DiacriticalAcute: "\xB4",
      DiacriticalDot: "\u02D9",
      DiacriticalDoubleAcute: "\u02DD",
      DiacriticalGrave: "`",
      DiacriticalTilde: "\u02DC",
      Diamond: "\u22C4",
      DifferentialD: "\u2146",
      Dopf: "\u{1D53B}",
      Dot: "\xA8",
      DotDot: "\u20DC",
      DotEqual: "\u2250",
      DoubleContourIntegral: "\u222F",
      DoubleDot: "\xA8",
      DoubleDownArrow: "\u21D3",
      DoubleLeftArrow: "\u21D0",
      DoubleLeftRightArrow: "\u21D4",
      DoubleLeftTee: "\u2AE4",
      DoubleLongLeftArrow: "\u27F8",
      DoubleLongLeftRightArrow: "\u27FA",
      DoubleLongRightArrow: "\u27F9",
      DoubleRightArrow: "\u21D2",
      DoubleRightTee: "\u22A8",
      DoubleUpArrow: "\u21D1",
      DoubleUpDownArrow: "\u21D5",
      DoubleVerticalBar: "\u2225",
      DownArrow: "\u2193",
      DownArrowBar: "\u2913",
      DownArrowUpArrow: "\u21F5",
      DownBreve: "\u0311",
      DownLeftRightVector: "\u2950",
      DownLeftTeeVector: "\u295E",
      DownLeftVector: "\u21BD",
      DownLeftVectorBar: "\u2956",
      DownRightTeeVector: "\u295F",
      DownRightVector: "\u21C1",
      DownRightVectorBar: "\u2957",
      DownTee: "\u22A4",
      DownTeeArrow: "\u21A7",
      Downarrow: "\u21D3",
      Dscr: "\u{1D49F}",
      Dstrok: "\u0110",
      ENG: "\u014A",
      ET: "\xD0",
      ETH: "\xD0",
      Eacut: "\xC9",
      Eacute: "\xC9",
      Ecaron: "\u011A",
      Ecir: "\xCA",
      Ecirc: "\xCA",
      Ecy: "\u042D",
      Edot: "\u0116",
      Efr: "\u{1D508}",
      Egrav: "\xC8",
      Egrave: "\xC8",
      Element: "\u2208",
      Emacr: "\u0112",
      EmptySmallSquare: "\u25FB",
      EmptyVerySmallSquare: "\u25AB",
      Eogon: "\u0118",
      Eopf: "\u{1D53C}",
      Epsilon: "\u0395",
      Equal: "\u2A75",
      EqualTilde: "\u2242",
      Equilibrium: "\u21CC",
      Escr: "\u2130",
      Esim: "\u2A73",
      Eta: "\u0397",
      Eum: "\xCB",
      Euml: "\xCB",
      Exists: "\u2203",
      ExponentialE: "\u2147",
      Fcy: "\u0424",
      Ffr: "\u{1D509}",
      FilledSmallSquare: "\u25FC",
      FilledVerySmallSquare: "\u25AA",
      Fopf: "\u{1D53D}",
      ForAll: "\u2200",
      Fouriertrf: "\u2131",
      Fscr: "\u2131",
      GJcy: "\u0403",
      G: ">",
      GT: ">",
      Gamma: "\u0393",
      Gammad: "\u03DC",
      Gbreve: "\u011E",
      Gcedil: "\u0122",
      Gcirc: "\u011C",
      Gcy: "\u0413",
      Gdot: "\u0120",
      Gfr: "\u{1D50A}",
      Gg: "\u22D9",
      Gopf: "\u{1D53E}",
      GreaterEqual: "\u2265",
      GreaterEqualLess: "\u22DB",
      GreaterFullEqual: "\u2267",
      GreaterGreater: "\u2AA2",
      GreaterLess: "\u2277",
      GreaterSlantEqual: "\u2A7E",
      GreaterTilde: "\u2273",
      Gscr: "\u{1D4A2}",
      Gt: "\u226B",
      HARDcy: "\u042A",
      Hacek: "\u02C7",
      Hat: "^",
      Hcirc: "\u0124",
      Hfr: "\u210C",
      HilbertSpace: "\u210B",
      Hopf: "\u210D",
      HorizontalLine: "\u2500",
      Hscr: "\u210B",
      Hstrok: "\u0126",
      HumpDownHump: "\u224E",
      HumpEqual: "\u224F",
      IEcy: "\u0415",
      IJlig: "\u0132",
      IOcy: "\u0401",
      Iacut: "\xCD",
      Iacute: "\xCD",
      Icir: "\xCE",
      Icirc: "\xCE",
      Icy: "\u0418",
      Idot: "\u0130",
      Ifr: "\u2111",
      Igrav: "\xCC",
      Igrave: "\xCC",
      Im: "\u2111",
      Imacr: "\u012A",
      ImaginaryI: "\u2148",
      Implies: "\u21D2",
      Int: "\u222C",
      Integral: "\u222B",
      Intersection: "\u22C2",
      InvisibleComma: "\u2063",
      InvisibleTimes: "\u2062",
      Iogon: "\u012E",
      Iopf: "\u{1D540}",
      Iota: "\u0399",
      Iscr: "\u2110",
      Itilde: "\u0128",
      Iukcy: "\u0406",
      Ium: "\xCF",
      Iuml: "\xCF",
      Jcirc: "\u0134",
      Jcy: "\u0419",
      Jfr: "\u{1D50D}",
      Jopf: "\u{1D541}",
      Jscr: "\u{1D4A5}",
      Jsercy: "\u0408",
      Jukcy: "\u0404",
      KHcy: "\u0425",
      KJcy: "\u040C",
      Kappa: "\u039A",
      Kcedil: "\u0136",
      Kcy: "\u041A",
      Kfr: "\u{1D50E}",
      Kopf: "\u{1D542}",
      Kscr: "\u{1D4A6}",
      LJcy: "\u0409",
      L: "<",
      LT: "<",
      Lacute: "\u0139",
      Lambda: "\u039B",
      Lang: "\u27EA",
      Laplacetrf: "\u2112",
      Larr: "\u219E",
      Lcaron: "\u013D",
      Lcedil: "\u013B",
      Lcy: "\u041B",
      LeftAngleBracket: "\u27E8",
      LeftArrow: "\u2190",
      LeftArrowBar: "\u21E4",
      LeftArrowRightArrow: "\u21C6",
      LeftCeiling: "\u2308",
      LeftDoubleBracket: "\u27E6",
      LeftDownTeeVector: "\u2961",
      LeftDownVector: "\u21C3",
      LeftDownVectorBar: "\u2959",
      LeftFloor: "\u230A",
      LeftRightArrow: "\u2194",
      LeftRightVector: "\u294E",
      LeftTee: "\u22A3",
      LeftTeeArrow: "\u21A4",
      LeftTeeVector: "\u295A",
      LeftTriangle: "\u22B2",
      LeftTriangleBar: "\u29CF",
      LeftTriangleEqual: "\u22B4",
      LeftUpDownVector: "\u2951",
      LeftUpTeeVector: "\u2960",
      LeftUpVector: "\u21BF",
      LeftUpVectorBar: "\u2958",
      LeftVector: "\u21BC",
      LeftVectorBar: "\u2952",
      Leftarrow: "\u21D0",
      Leftrightarrow: "\u21D4",
      LessEqualGreater: "\u22DA",
      LessFullEqual: "\u2266",
      LessGreater: "\u2276",
      LessLess: "\u2AA1",
      LessSlantEqual: "\u2A7D",
      LessTilde: "\u2272",
      Lfr: "\u{1D50F}",
      Ll: "\u22D8",
      Lleftarrow: "\u21DA",
      Lmidot: "\u013F",
      LongLeftArrow: "\u27F5",
      LongLeftRightArrow: "\u27F7",
      LongRightArrow: "\u27F6",
      Longleftarrow: "\u27F8",
      Longleftrightarrow: "\u27FA",
      Longrightarrow: "\u27F9",
      Lopf: "\u{1D543}",
      LowerLeftArrow: "\u2199",
      LowerRightArrow: "\u2198",
      Lscr: "\u2112",
      Lsh: "\u21B0",
      Lstrok: "\u0141",
      Lt: "\u226A",
      Map: "\u2905",
      Mcy: "\u041C",
      MediumSpace: "\u205F",
      Mellintrf: "\u2133",
      Mfr: "\u{1D510}",
      MinusPlus: "\u2213",
      Mopf: "\u{1D544}",
      Mscr: "\u2133",
      Mu: "\u039C",
      NJcy: "\u040A",
      Nacute: "\u0143",
      Ncaron: "\u0147",
      Ncedil: "\u0145",
      Ncy: "\u041D",
      NegativeMediumSpace: "\u200B",
      NegativeThickSpace: "\u200B",
      NegativeThinSpace: "\u200B",
      NegativeVeryThinSpace: "\u200B",
      NestedGreaterGreater: "\u226B",
      NestedLessLess: "\u226A",
      NewLine: "\n",
      Nfr: "\u{1D511}",
      NoBreak: "\u2060",
      NonBreakingSpace: "\xA0",
      Nopf: "\u2115",
      Not: "\u2AEC",
      NotCongruent: "\u2262",
      NotCupCap: "\u226D",
      NotDoubleVerticalBar: "\u2226",
      NotElement: "\u2209",
      NotEqual: "\u2260",
      NotEqualTilde: "\u2242\u0338",
      NotExists: "\u2204",
      NotGreater: "\u226F",
      NotGreaterEqual: "\u2271",
      NotGreaterFullEqual: "\u2267\u0338",
      NotGreaterGreater: "\u226B\u0338",
      NotGreaterLess: "\u2279",
      NotGreaterSlantEqual: "\u2A7E\u0338",
      NotGreaterTilde: "\u2275",
      NotHumpDownHump: "\u224E\u0338",
      NotHumpEqual: "\u224F\u0338",
      NotLeftTriangle: "\u22EA",
      NotLeftTriangleBar: "\u29CF\u0338",
      NotLeftTriangleEqual: "\u22EC",
      NotLess: "\u226E",
      NotLessEqual: "\u2270",
      NotLessGreater: "\u2278",
      NotLessLess: "\u226A\u0338",
      NotLessSlantEqual: "\u2A7D\u0338",
      NotLessTilde: "\u2274",
      NotNestedGreaterGreater: "\u2AA2\u0338",
      NotNestedLessLess: "\u2AA1\u0338",
      NotPrecedes: "\u2280",
      NotPrecedesEqual: "\u2AAF\u0338",
      NotPrecedesSlantEqual: "\u22E0",
      NotReverseElement: "\u220C",
      NotRightTriangle: "\u22EB",
      NotRightTriangleBar: "\u29D0\u0338",
      NotRightTriangleEqual: "\u22ED",
      NotSquareSubset: "\u228F\u0338",
      NotSquareSubsetEqual: "\u22E2",
      NotSquareSuperset: "\u2290\u0338",
      NotSquareSupersetEqual: "\u22E3",
      NotSubset: "\u2282\u20D2",
      NotSubsetEqual: "\u2288",
      NotSucceeds: "\u2281",
      NotSucceedsEqual: "\u2AB0\u0338",
      NotSucceedsSlantEqual: "\u22E1",
      NotSucceedsTilde: "\u227F\u0338",
      NotSuperset: "\u2283\u20D2",
      NotSupersetEqual: "\u2289",
      NotTilde: "\u2241",
      NotTildeEqual: "\u2244",
      NotTildeFullEqual: "\u2247",
      NotTildeTilde: "\u2249",
      NotVerticalBar: "\u2224",
      Nscr: "\u{1D4A9}",
      Ntild: "\xD1",
      Ntilde: "\xD1",
      Nu: "\u039D",
      OElig: "\u0152",
      Oacut: "\xD3",
      Oacute: "\xD3",
      Ocir: "\xD4",
      Ocirc: "\xD4",
      Ocy: "\u041E",
      Odblac: "\u0150",
      Ofr: "\u{1D512}",
      Ograv: "\xD2",
      Ograve: "\xD2",
      Omacr: "\u014C",
      Omega: "\u03A9",
      Omicron: "\u039F",
      Oopf: "\u{1D546}",
      OpenCurlyDoubleQuote: "\u201C",
      OpenCurlyQuote: "\u2018",
      Or: "\u2A54",
      Oscr: "\u{1D4AA}",
      Oslas: "\xD8",
      Oslash: "\xD8",
      Otild: "\xD5",
      Otilde: "\xD5",
      Otimes: "\u2A37",
      Oum: "\xD6",
      Ouml: "\xD6",
      OverBar: "\u203E",
      OverBrace: "\u23DE",
      OverBracket: "\u23B4",
      OverParenthesis: "\u23DC",
      PartialD: "\u2202",
      Pcy: "\u041F",
      Pfr: "\u{1D513}",
      Phi: "\u03A6",
      Pi: "\u03A0",
      PlusMinus: "\xB1",
      Poincareplane: "\u210C",
      Popf: "\u2119",
      Pr: "\u2ABB",
      Precedes: "\u227A",
      PrecedesEqual: "\u2AAF",
      PrecedesSlantEqual: "\u227C",
      PrecedesTilde: "\u227E",
      Prime: "\u2033",
      Product: "\u220F",
      Proportion: "\u2237",
      Proportional: "\u221D",
      Pscr: "\u{1D4AB}",
      Psi: "\u03A8",
      QUO: '"',
      QUOT: '"',
      Qfr: "\u{1D514}",
      Qopf: "\u211A",
      Qscr: "\u{1D4AC}",
      RBarr: "\u2910",
      RE: "\xAE",
      REG: "\xAE",
      Racute: "\u0154",
      Rang: "\u27EB",
      Rarr: "\u21A0",
      Rarrtl: "\u2916",
      Rcaron: "\u0158",
      Rcedil: "\u0156",
      Rcy: "\u0420",
      Re: "\u211C",
      ReverseElement: "\u220B",
      ReverseEquilibrium: "\u21CB",
      ReverseUpEquilibrium: "\u296F",
      Rfr: "\u211C",
      Rho: "\u03A1",
      RightAngleBracket: "\u27E9",
      RightArrow: "\u2192",
      RightArrowBar: "\u21E5",
      RightArrowLeftArrow: "\u21C4",
      RightCeiling: "\u2309",
      RightDoubleBracket: "\u27E7",
      RightDownTeeVector: "\u295D",
      RightDownVector: "\u21C2",
      RightDownVectorBar: "\u2955",
      RightFloor: "\u230B",
      RightTee: "\u22A2",
      RightTeeArrow: "\u21A6",
      RightTeeVector: "\u295B",
      RightTriangle: "\u22B3",
      RightTriangleBar: "\u29D0",
      RightTriangleEqual: "\u22B5",
      RightUpDownVector: "\u294F",
      RightUpTeeVector: "\u295C",
      RightUpVector: "\u21BE",
      RightUpVectorBar: "\u2954",
      RightVector: "\u21C0",
      RightVectorBar: "\u2953",
      Rightarrow: "\u21D2",
      Ropf: "\u211D",
      RoundImplies: "\u2970",
      Rrightarrow: "\u21DB",
      Rscr: "\u211B",
      Rsh: "\u21B1",
      RuleDelayed: "\u29F4",
      SHCHcy: "\u0429",
      SHcy: "\u0428",
      SOFTcy: "\u042C",
      Sacute: "\u015A",
      Sc: "\u2ABC",
      Scaron: "\u0160",
      Scedil: "\u015E",
      Scirc: "\u015C",
      Scy: "\u0421",
      Sfr: "\u{1D516}",
      ShortDownArrow: "\u2193",
      ShortLeftArrow: "\u2190",
      ShortRightArrow: "\u2192",
      ShortUpArrow: "\u2191",
      Sigma: "\u03A3",
      SmallCircle: "\u2218",
      Sopf: "\u{1D54A}",
      Sqrt: "\u221A",
      Square: "\u25A1",
      SquareIntersection: "\u2293",
      SquareSubset: "\u228F",
      SquareSubsetEqual: "\u2291",
      SquareSuperset: "\u2290",
      SquareSupersetEqual: "\u2292",
      SquareUnion: "\u2294",
      Sscr: "\u{1D4AE}",
      Star: "\u22C6",
      Sub: "\u22D0",
      Subset: "\u22D0",
      SubsetEqual: "\u2286",
      Succeeds: "\u227B",
      SucceedsEqual: "\u2AB0",
      SucceedsSlantEqual: "\u227D",
      SucceedsTilde: "\u227F",
      SuchThat: "\u220B",
      Sum: "\u2211",
      Sup: "\u22D1",
      Superset: "\u2283",
      SupersetEqual: "\u2287",
      Supset: "\u22D1",
      THOR: "\xDE",
      THORN: "\xDE",
      TRADE: "\u2122",
      TSHcy: "\u040B",
      TScy: "\u0426",
      Tab: "	",
      Tau: "\u03A4",
      Tcaron: "\u0164",
      Tcedil: "\u0162",
      Tcy: "\u0422",
      Tfr: "\u{1D517}",
      Therefore: "\u2234",
      Theta: "\u0398",
      ThickSpace: "\u205F\u200A",
      ThinSpace: "\u2009",
      Tilde: "\u223C",
      TildeEqual: "\u2243",
      TildeFullEqual: "\u2245",
      TildeTilde: "\u2248",
      Topf: "\u{1D54B}",
      TripleDot: "\u20DB",
      Tscr: "\u{1D4AF}",
      Tstrok: "\u0166",
      Uacut: "\xDA",
      Uacute: "\xDA",
      Uarr: "\u219F",
      Uarrocir: "\u2949",
      Ubrcy: "\u040E",
      Ubreve: "\u016C",
      Ucir: "\xDB",
      Ucirc: "\xDB",
      Ucy: "\u0423",
      Udblac: "\u0170",
      Ufr: "\u{1D518}",
      Ugrav: "\xD9",
      Ugrave: "\xD9",
      Umacr: "\u016A",
      UnderBar: "_",
      UnderBrace: "\u23DF",
      UnderBracket: "\u23B5",
      UnderParenthesis: "\u23DD",
      Union: "\u22C3",
      UnionPlus: "\u228E",
      Uogon: "\u0172",
      Uopf: "\u{1D54C}",
      UpArrow: "\u2191",
      UpArrowBar: "\u2912",
      UpArrowDownArrow: "\u21C5",
      UpDownArrow: "\u2195",
      UpEquilibrium: "\u296E",
      UpTee: "\u22A5",
      UpTeeArrow: "\u21A5",
      Uparrow: "\u21D1",
      Updownarrow: "\u21D5",
      UpperLeftArrow: "\u2196",
      UpperRightArrow: "\u2197",
      Upsi: "\u03D2",
      Upsilon: "\u03A5",
      Uring: "\u016E",
      Uscr: "\u{1D4B0}",
      Utilde: "\u0168",
      Uum: "\xDC",
      Uuml: "\xDC",
      VDash: "\u22AB",
      Vbar: "\u2AEB",
      Vcy: "\u0412",
      Vdash: "\u22A9",
      Vdashl: "\u2AE6",
      Vee: "\u22C1",
      Verbar: "\u2016",
      Vert: "\u2016",
      VerticalBar: "\u2223",
      VerticalLine: "|",
      VerticalSeparator: "\u2758",
      VerticalTilde: "\u2240",
      VeryThinSpace: "\u200A",
      Vfr: "\u{1D519}",
      Vopf: "\u{1D54D}",
      Vscr: "\u{1D4B1}",
      Vvdash: "\u22AA",
      Wcirc: "\u0174",
      Wedge: "\u22C0",
      Wfr: "\u{1D51A}",
      Wopf: "\u{1D54E}",
      Wscr: "\u{1D4B2}",
      Xfr: "\u{1D51B}",
      Xi: "\u039E",
      Xopf: "\u{1D54F}",
      Xscr: "\u{1D4B3}",
      YAcy: "\u042F",
      YIcy: "\u0407",
      YUcy: "\u042E",
      Yacut: "\xDD",
      Yacute: "\xDD",
      Ycirc: "\u0176",
      Ycy: "\u042B",
      Yfr: "\u{1D51C}",
      Yopf: "\u{1D550}",
      Yscr: "\u{1D4B4}",
      Yuml: "\u0178",
      ZHcy: "\u0416",
      Zacute: "\u0179",
      Zcaron: "\u017D",
      Zcy: "\u0417",
      Zdot: "\u017B",
      ZeroWidthSpace: "\u200B",
      Zeta: "\u0396",
      Zfr: "\u2128",
      Zopf: "\u2124",
      Zscr: "\u{1D4B5}",
      aacut: "\xE1",
      aacute: "\xE1",
      abreve: "\u0103",
      ac: "\u223E",
      acE: "\u223E\u0333",
      acd: "\u223F",
      acir: "\xE2",
      acirc: "\xE2",
      acut: "\xB4",
      acute: "\xB4",
      acy: "\u0430",
      aeli: "\xE6",
      aelig: "\xE6",
      af: "\u2061",
      afr: "\u{1D51E}",
      agrav: "\xE0",
      agrave: "\xE0",
      alefsym: "\u2135",
      aleph: "\u2135",
      alpha: "\u03B1",
      amacr: "\u0101",
      amalg: "\u2A3F",
      am: "&",
      amp: "&",
      and: "\u2227",
      andand: "\u2A55",
      andd: "\u2A5C",
      andslope: "\u2A58",
      andv: "\u2A5A",
      ang: "\u2220",
      ange: "\u29A4",
      angle: "\u2220",
      angmsd: "\u2221",
      angmsdaa: "\u29A8",
      angmsdab: "\u29A9",
      angmsdac: "\u29AA",
      angmsdad: "\u29AB",
      angmsdae: "\u29AC",
      angmsdaf: "\u29AD",
      angmsdag: "\u29AE",
      angmsdah: "\u29AF",
      angrt: "\u221F",
      angrtvb: "\u22BE",
      angrtvbd: "\u299D",
      angsph: "\u2222",
      angst: "\xC5",
      angzarr: "\u237C",
      aogon: "\u0105",
      aopf: "\u{1D552}",
      ap: "\u2248",
      apE: "\u2A70",
      apacir: "\u2A6F",
      ape: "\u224A",
      apid: "\u224B",
      apos: "'",
      approx: "\u2248",
      approxeq: "\u224A",
      arin: "\xE5",
      aring: "\xE5",
      ascr: "\u{1D4B6}",
      ast: "*",
      asymp: "\u2248",
      asympeq: "\u224D",
      atild: "\xE3",
      atilde: "\xE3",
      aum: "\xE4",
      auml: "\xE4",
      awconint: "\u2233",
      awint: "\u2A11",
      bNot: "\u2AED",
      backcong: "\u224C",
      backepsilon: "\u03F6",
      backprime: "\u2035",
      backsim: "\u223D",
      backsimeq: "\u22CD",
      barvee: "\u22BD",
      barwed: "\u2305",
      barwedge: "\u2305",
      bbrk: "\u23B5",
      bbrktbrk: "\u23B6",
      bcong: "\u224C",
      bcy: "\u0431",
      bdquo: "\u201E",
      becaus: "\u2235",
      because: "\u2235",
      bemptyv: "\u29B0",
      bepsi: "\u03F6",
      bernou: "\u212C",
      beta: "\u03B2",
      beth: "\u2136",
      between: "\u226C",
      bfr: "\u{1D51F}",
      bigcap: "\u22C2",
      bigcirc: "\u25EF",
      bigcup: "\u22C3",
      bigodot: "\u2A00",
      bigoplus: "\u2A01",
      bigotimes: "\u2A02",
      bigsqcup: "\u2A06",
      bigstar: "\u2605",
      bigtriangledown: "\u25BD",
      bigtriangleup: "\u25B3",
      biguplus: "\u2A04",
      bigvee: "\u22C1",
      bigwedge: "\u22C0",
      bkarow: "\u290D",
      blacklozenge: "\u29EB",
      blacksquare: "\u25AA",
      blacktriangle: "\u25B4",
      blacktriangledown: "\u25BE",
      blacktriangleleft: "\u25C2",
      blacktriangleright: "\u25B8",
      blank: "\u2423",
      blk12: "\u2592",
      blk14: "\u2591",
      blk34: "\u2593",
      block: "\u2588",
      bne: "=\u20E5",
      bnequiv: "\u2261\u20E5",
      bnot: "\u2310",
      bopf: "\u{1D553}",
      bot: "\u22A5",
      bottom: "\u22A5",
      bowtie: "\u22C8",
      boxDL: "\u2557",
      boxDR: "\u2554",
      boxDl: "\u2556",
      boxDr: "\u2553",
      boxH: "\u2550",
      boxHD: "\u2566",
      boxHU: "\u2569",
      boxHd: "\u2564",
      boxHu: "\u2567",
      boxUL: "\u255D",
      boxUR: "\u255A",
      boxUl: "\u255C",
      boxUr: "\u2559",
      boxV: "\u2551",
      boxVH: "\u256C",
      boxVL: "\u2563",
      boxVR: "\u2560",
      boxVh: "\u256B",
      boxVl: "\u2562",
      boxVr: "\u255F",
      boxbox: "\u29C9",
      boxdL: "\u2555",
      boxdR: "\u2552",
      boxdl: "\u2510",
      boxdr: "\u250C",
      boxh: "\u2500",
      boxhD: "\u2565",
      boxhU: "\u2568",
      boxhd: "\u252C",
      boxhu: "\u2534",
      boxminus: "\u229F",
      boxplus: "\u229E",
      boxtimes: "\u22A0",
      boxuL: "\u255B",
      boxuR: "\u2558",
      boxul: "\u2518",
      boxur: "\u2514",
      boxv: "\u2502",
      boxvH: "\u256A",
      boxvL: "\u2561",
      boxvR: "\u255E",
      boxvh: "\u253C",
      boxvl: "\u2524",
      boxvr: "\u251C",
      bprime: "\u2035",
      breve: "\u02D8",
      brvba: "\xA6",
      brvbar: "\xA6",
      bscr: "\u{1D4B7}",
      bsemi: "\u204F",
      bsim: "\u223D",
      bsime: "\u22CD",
      bsol: "\\",
      bsolb: "\u29C5",
      bsolhsub: "\u27C8",
      bull: "\u2022",
      bullet: "\u2022",
      bump: "\u224E",
      bumpE: "\u2AAE",
      bumpe: "\u224F",
      bumpeq: "\u224F",
      cacute: "\u0107",
      cap: "\u2229",
      capand: "\u2A44",
      capbrcup: "\u2A49",
      capcap: "\u2A4B",
      capcup: "\u2A47",
      capdot: "\u2A40",
      caps: "\u2229\uFE00",
      caret: "\u2041",
      caron: "\u02C7",
      ccaps: "\u2A4D",
      ccaron: "\u010D",
      ccedi: "\xE7",
      ccedil: "\xE7",
      ccirc: "\u0109",
      ccups: "\u2A4C",
      ccupssm: "\u2A50",
      cdot: "\u010B",
      cedi: "\xB8",
      cedil: "\xB8",
      cemptyv: "\u29B2",
      cen: "\xA2",
      cent: "\xA2",
      centerdot: "\xB7",
      cfr: "\u{1D520}",
      chcy: "\u0447",
      check: "\u2713",
      checkmark: "\u2713",
      chi: "\u03C7",
      cir: "\u25CB",
      cirE: "\u29C3",
      circ: "\u02C6",
      circeq: "\u2257",
      circlearrowleft: "\u21BA",
      circlearrowright: "\u21BB",
      circledR: "\xAE",
      circledS: "\u24C8",
      circledast: "\u229B",
      circledcirc: "\u229A",
      circleddash: "\u229D",
      cire: "\u2257",
      cirfnint: "\u2A10",
      cirmid: "\u2AEF",
      cirscir: "\u29C2",
      clubs: "\u2663",
      clubsuit: "\u2663",
      colon: ":",
      colone: "\u2254",
      coloneq: "\u2254",
      comma: ",",
      commat: "@",
      comp: "\u2201",
      compfn: "\u2218",
      complement: "\u2201",
      complexes: "\u2102",
      cong: "\u2245",
      congdot: "\u2A6D",
      conint: "\u222E",
      copf: "\u{1D554}",
      coprod: "\u2210",
      cop: "\xA9",
      copy: "\xA9",
      copysr: "\u2117",
      crarr: "\u21B5",
      cross: "\u2717",
      cscr: "\u{1D4B8}",
      csub: "\u2ACF",
      csube: "\u2AD1",
      csup: "\u2AD0",
      csupe: "\u2AD2",
      ctdot: "\u22EF",
      cudarrl: "\u2938",
      cudarrr: "\u2935",
      cuepr: "\u22DE",
      cuesc: "\u22DF",
      cularr: "\u21B6",
      cularrp: "\u293D",
      cup: "\u222A",
      cupbrcap: "\u2A48",
      cupcap: "\u2A46",
      cupcup: "\u2A4A",
      cupdot: "\u228D",
      cupor: "\u2A45",
      cups: "\u222A\uFE00",
      curarr: "\u21B7",
      curarrm: "\u293C",
      curlyeqprec: "\u22DE",
      curlyeqsucc: "\u22DF",
      curlyvee: "\u22CE",
      curlywedge: "\u22CF",
      curre: "\xA4",
      curren: "\xA4",
      curvearrowleft: "\u21B6",
      curvearrowright: "\u21B7",
      cuvee: "\u22CE",
      cuwed: "\u22CF",
      cwconint: "\u2232",
      cwint: "\u2231",
      cylcty: "\u232D",
      dArr: "\u21D3",
      dHar: "\u2965",
      dagger: "\u2020",
      daleth: "\u2138",
      darr: "\u2193",
      dash: "\u2010",
      dashv: "\u22A3",
      dbkarow: "\u290F",
      dblac: "\u02DD",
      dcaron: "\u010F",
      dcy: "\u0434",
      dd: "\u2146",
      ddagger: "\u2021",
      ddarr: "\u21CA",
      ddotseq: "\u2A77",
      de: "\xB0",
      deg: "\xB0",
      delta: "\u03B4",
      demptyv: "\u29B1",
      dfisht: "\u297F",
      dfr: "\u{1D521}",
      dharl: "\u21C3",
      dharr: "\u21C2",
      diam: "\u22C4",
      diamond: "\u22C4",
      diamondsuit: "\u2666",
      diams: "\u2666",
      die: "\xA8",
      digamma: "\u03DD",
      disin: "\u22F2",
      div: "\xF7",
      divid: "\xF7",
      divide: "\xF7",
      divideontimes: "\u22C7",
      divonx: "\u22C7",
      djcy: "\u0452",
      dlcorn: "\u231E",
      dlcrop: "\u230D",
      dollar: "$",
      dopf: "\u{1D555}",
      dot: "\u02D9",
      doteq: "\u2250",
      doteqdot: "\u2251",
      dotminus: "\u2238",
      dotplus: "\u2214",
      dotsquare: "\u22A1",
      doublebarwedge: "\u2306",
      downarrow: "\u2193",
      downdownarrows: "\u21CA",
      downharpoonleft: "\u21C3",
      downharpoonright: "\u21C2",
      drbkarow: "\u2910",
      drcorn: "\u231F",
      drcrop: "\u230C",
      dscr: "\u{1D4B9}",
      dscy: "\u0455",
      dsol: "\u29F6",
      dstrok: "\u0111",
      dtdot: "\u22F1",
      dtri: "\u25BF",
      dtrif: "\u25BE",
      duarr: "\u21F5",
      duhar: "\u296F",
      dwangle: "\u29A6",
      dzcy: "\u045F",
      dzigrarr: "\u27FF",
      eDDot: "\u2A77",
      eDot: "\u2251",
      eacut: "\xE9",
      eacute: "\xE9",
      easter: "\u2A6E",
      ecaron: "\u011B",
      ecir: "\xEA",
      ecirc: "\xEA",
      ecolon: "\u2255",
      ecy: "\u044D",
      edot: "\u0117",
      ee: "\u2147",
      efDot: "\u2252",
      efr: "\u{1D522}",
      eg: "\u2A9A",
      egrav: "\xE8",
      egrave: "\xE8",
      egs: "\u2A96",
      egsdot: "\u2A98",
      el: "\u2A99",
      elinters: "\u23E7",
      ell: "\u2113",
      els: "\u2A95",
      elsdot: "\u2A97",
      emacr: "\u0113",
      empty: "\u2205",
      emptyset: "\u2205",
      emptyv: "\u2205",
      emsp13: "\u2004",
      emsp14: "\u2005",
      emsp: "\u2003",
      eng: "\u014B",
      ensp: "\u2002",
      eogon: "\u0119",
      eopf: "\u{1D556}",
      epar: "\u22D5",
      eparsl: "\u29E3",
      eplus: "\u2A71",
      epsi: "\u03B5",
      epsilon: "\u03B5",
      epsiv: "\u03F5",
      eqcirc: "\u2256",
      eqcolon: "\u2255",
      eqsim: "\u2242",
      eqslantgtr: "\u2A96",
      eqslantless: "\u2A95",
      equals: "=",
      equest: "\u225F",
      equiv: "\u2261",
      equivDD: "\u2A78",
      eqvparsl: "\u29E5",
      erDot: "\u2253",
      erarr: "\u2971",
      escr: "\u212F",
      esdot: "\u2250",
      esim: "\u2242",
      eta: "\u03B7",
      et: "\xF0",
      eth: "\xF0",
      eum: "\xEB",
      euml: "\xEB",
      euro: "\u20AC",
      excl: "!",
      exist: "\u2203",
      expectation: "\u2130",
      exponentiale: "\u2147",
      fallingdotseq: "\u2252",
      fcy: "\u0444",
      female: "\u2640",
      ffilig: "\uFB03",
      fflig: "\uFB00",
      ffllig: "\uFB04",
      ffr: "\u{1D523}",
      filig: "\uFB01",
      fjlig: "fj",
      flat: "\u266D",
      fllig: "\uFB02",
      fltns: "\u25B1",
      fnof: "\u0192",
      fopf: "\u{1D557}",
      forall: "\u2200",
      fork: "\u22D4",
      forkv: "\u2AD9",
      fpartint: "\u2A0D",
      frac1: "\xBC",
      frac12: "\xBD",
      frac13: "\u2153",
      frac14: "\xBC",
      frac15: "\u2155",
      frac16: "\u2159",
      frac18: "\u215B",
      frac23: "\u2154",
      frac25: "\u2156",
      frac3: "\xBE",
      frac34: "\xBE",
      frac35: "\u2157",
      frac38: "\u215C",
      frac45: "\u2158",
      frac56: "\u215A",
      frac58: "\u215D",
      frac78: "\u215E",
      frasl: "\u2044",
      frown: "\u2322",
      fscr: "\u{1D4BB}",
      gE: "\u2267",
      gEl: "\u2A8C",
      gacute: "\u01F5",
      gamma: "\u03B3",
      gammad: "\u03DD",
      gap: "\u2A86",
      gbreve: "\u011F",
      gcirc: "\u011D",
      gcy: "\u0433",
      gdot: "\u0121",
      ge: "\u2265",
      gel: "\u22DB",
      geq: "\u2265",
      geqq: "\u2267",
      geqslant: "\u2A7E",
      ges: "\u2A7E",
      gescc: "\u2AA9",
      gesdot: "\u2A80",
      gesdoto: "\u2A82",
      gesdotol: "\u2A84",
      gesl: "\u22DB\uFE00",
      gesles: "\u2A94",
      gfr: "\u{1D524}",
      gg: "\u226B",
      ggg: "\u22D9",
      gimel: "\u2137",
      gjcy: "\u0453",
      gl: "\u2277",
      glE: "\u2A92",
      gla: "\u2AA5",
      glj: "\u2AA4",
      gnE: "\u2269",
      gnap: "\u2A8A",
      gnapprox: "\u2A8A",
      gne: "\u2A88",
      gneq: "\u2A88",
      gneqq: "\u2269",
      gnsim: "\u22E7",
      gopf: "\u{1D558}",
      grave: "`",
      gscr: "\u210A",
      gsim: "\u2273",
      gsime: "\u2A8E",
      gsiml: "\u2A90",
      g: ">",
      gt: ">",
      gtcc: "\u2AA7",
      gtcir: "\u2A7A",
      gtdot: "\u22D7",
      gtlPar: "\u2995",
      gtquest: "\u2A7C",
      gtrapprox: "\u2A86",
      gtrarr: "\u2978",
      gtrdot: "\u22D7",
      gtreqless: "\u22DB",
      gtreqqless: "\u2A8C",
      gtrless: "\u2277",
      gtrsim: "\u2273",
      gvertneqq: "\u2269\uFE00",
      gvnE: "\u2269\uFE00",
      hArr: "\u21D4",
      hairsp: "\u200A",
      half: "\xBD",
      hamilt: "\u210B",
      hardcy: "\u044A",
      harr: "\u2194",
      harrcir: "\u2948",
      harrw: "\u21AD",
      hbar: "\u210F",
      hcirc: "\u0125",
      hearts: "\u2665",
      heartsuit: "\u2665",
      hellip: "\u2026",
      hercon: "\u22B9",
      hfr: "\u{1D525}",
      hksearow: "\u2925",
      hkswarow: "\u2926",
      hoarr: "\u21FF",
      homtht: "\u223B",
      hookleftarrow: "\u21A9",
      hookrightarrow: "\u21AA",
      hopf: "\u{1D559}",
      horbar: "\u2015",
      hscr: "\u{1D4BD}",
      hslash: "\u210F",
      hstrok: "\u0127",
      hybull: "\u2043",
      hyphen: "\u2010",
      iacut: "\xED",
      iacute: "\xED",
      ic: "\u2063",
      icir: "\xEE",
      icirc: "\xEE",
      icy: "\u0438",
      iecy: "\u0435",
      iexc: "\xA1",
      iexcl: "\xA1",
      iff: "\u21D4",
      ifr: "\u{1D526}",
      igrav: "\xEC",
      igrave: "\xEC",
      ii: "\u2148",
      iiiint: "\u2A0C",
      iiint: "\u222D",
      iinfin: "\u29DC",
      iiota: "\u2129",
      ijlig: "\u0133",
      imacr: "\u012B",
      image: "\u2111",
      imagline: "\u2110",
      imagpart: "\u2111",
      imath: "\u0131",
      imof: "\u22B7",
      imped: "\u01B5",
      in: "\u2208",
      incare: "\u2105",
      infin: "\u221E",
      infintie: "\u29DD",
      inodot: "\u0131",
      int: "\u222B",
      intcal: "\u22BA",
      integers: "\u2124",
      intercal: "\u22BA",
      intlarhk: "\u2A17",
      intprod: "\u2A3C",
      iocy: "\u0451",
      iogon: "\u012F",
      iopf: "\u{1D55A}",
      iota: "\u03B9",
      iprod: "\u2A3C",
      iques: "\xBF",
      iquest: "\xBF",
      iscr: "\u{1D4BE}",
      isin: "\u2208",
      isinE: "\u22F9",
      isindot: "\u22F5",
      isins: "\u22F4",
      isinsv: "\u22F3",
      isinv: "\u2208",
      it: "\u2062",
      itilde: "\u0129",
      iukcy: "\u0456",
      ium: "\xEF",
      iuml: "\xEF",
      jcirc: "\u0135",
      jcy: "\u0439",
      jfr: "\u{1D527}",
      jmath: "\u0237",
      jopf: "\u{1D55B}",
      jscr: "\u{1D4BF}",
      jsercy: "\u0458",
      jukcy: "\u0454",
      kappa: "\u03BA",
      kappav: "\u03F0",
      kcedil: "\u0137",
      kcy: "\u043A",
      kfr: "\u{1D528}",
      kgreen: "\u0138",
      khcy: "\u0445",
      kjcy: "\u045C",
      kopf: "\u{1D55C}",
      kscr: "\u{1D4C0}",
      lAarr: "\u21DA",
      lArr: "\u21D0",
      lAtail: "\u291B",
      lBarr: "\u290E",
      lE: "\u2266",
      lEg: "\u2A8B",
      lHar: "\u2962",
      lacute: "\u013A",
      laemptyv: "\u29B4",
      lagran: "\u2112",
      lambda: "\u03BB",
      lang: "\u27E8",
      langd: "\u2991",
      langle: "\u27E8",
      lap: "\u2A85",
      laqu: "\xAB",
      laquo: "\xAB",
      larr: "\u2190",
      larrb: "\u21E4",
      larrbfs: "\u291F",
      larrfs: "\u291D",
      larrhk: "\u21A9",
      larrlp: "\u21AB",
      larrpl: "\u2939",
      larrsim: "\u2973",
      larrtl: "\u21A2",
      lat: "\u2AAB",
      latail: "\u2919",
      late: "\u2AAD",
      lates: "\u2AAD\uFE00",
      lbarr: "\u290C",
      lbbrk: "\u2772",
      lbrace: "{",
      lbrack: "[",
      lbrke: "\u298B",
      lbrksld: "\u298F",
      lbrkslu: "\u298D",
      lcaron: "\u013E",
      lcedil: "\u013C",
      lceil: "\u2308",
      lcub: "{",
      lcy: "\u043B",
      ldca: "\u2936",
      ldquo: "\u201C",
      ldquor: "\u201E",
      ldrdhar: "\u2967",
      ldrushar: "\u294B",
      ldsh: "\u21B2",
      le: "\u2264",
      leftarrow: "\u2190",
      leftarrowtail: "\u21A2",
      leftharpoondown: "\u21BD",
      leftharpoonup: "\u21BC",
      leftleftarrows: "\u21C7",
      leftrightarrow: "\u2194",
      leftrightarrows: "\u21C6",
      leftrightharpoons: "\u21CB",
      leftrightsquigarrow: "\u21AD",
      leftthreetimes: "\u22CB",
      leg: "\u22DA",
      leq: "\u2264",
      leqq: "\u2266",
      leqslant: "\u2A7D",
      les: "\u2A7D",
      lescc: "\u2AA8",
      lesdot: "\u2A7F",
      lesdoto: "\u2A81",
      lesdotor: "\u2A83",
      lesg: "\u22DA\uFE00",
      lesges: "\u2A93",
      lessapprox: "\u2A85",
      lessdot: "\u22D6",
      lesseqgtr: "\u22DA",
      lesseqqgtr: "\u2A8B",
      lessgtr: "\u2276",
      lesssim: "\u2272",
      lfisht: "\u297C",
      lfloor: "\u230A",
      lfr: "\u{1D529}",
      lg: "\u2276",
      lgE: "\u2A91",
      lhard: "\u21BD",
      lharu: "\u21BC",
      lharul: "\u296A",
      lhblk: "\u2584",
      ljcy: "\u0459",
      ll: "\u226A",
      llarr: "\u21C7",
      llcorner: "\u231E",
      llhard: "\u296B",
      lltri: "\u25FA",
      lmidot: "\u0140",
      lmoust: "\u23B0",
      lmoustache: "\u23B0",
      lnE: "\u2268",
      lnap: "\u2A89",
      lnapprox: "\u2A89",
      lne: "\u2A87",
      lneq: "\u2A87",
      lneqq: "\u2268",
      lnsim: "\u22E6",
      loang: "\u27EC",
      loarr: "\u21FD",
      lobrk: "\u27E6",
      longleftarrow: "\u27F5",
      longleftrightarrow: "\u27F7",
      longmapsto: "\u27FC",
      longrightarrow: "\u27F6",
      looparrowleft: "\u21AB",
      looparrowright: "\u21AC",
      lopar: "\u2985",
      lopf: "\u{1D55D}",
      loplus: "\u2A2D",
      lotimes: "\u2A34",
      lowast: "\u2217",
      lowbar: "_",
      loz: "\u25CA",
      lozenge: "\u25CA",
      lozf: "\u29EB",
      lpar: "(",
      lparlt: "\u2993",
      lrarr: "\u21C6",
      lrcorner: "\u231F",
      lrhar: "\u21CB",
      lrhard: "\u296D",
      lrm: "\u200E",
      lrtri: "\u22BF",
      lsaquo: "\u2039",
      lscr: "\u{1D4C1}",
      lsh: "\u21B0",
      lsim: "\u2272",
      lsime: "\u2A8D",
      lsimg: "\u2A8F",
      lsqb: "[",
      lsquo: "\u2018",
      lsquor: "\u201A",
      lstrok: "\u0142",
      l: "<",
      lt: "<",
      ltcc: "\u2AA6",
      ltcir: "\u2A79",
      ltdot: "\u22D6",
      lthree: "\u22CB",
      ltimes: "\u22C9",
      ltlarr: "\u2976",
      ltquest: "\u2A7B",
      ltrPar: "\u2996",
      ltri: "\u25C3",
      ltrie: "\u22B4",
      ltrif: "\u25C2",
      lurdshar: "\u294A",
      luruhar: "\u2966",
      lvertneqq: "\u2268\uFE00",
      lvnE: "\u2268\uFE00",
      mDDot: "\u223A",
      mac: "\xAF",
      macr: "\xAF",
      male: "\u2642",
      malt: "\u2720",
      maltese: "\u2720",
      map: "\u21A6",
      mapsto: "\u21A6",
      mapstodown: "\u21A7",
      mapstoleft: "\u21A4",
      mapstoup: "\u21A5",
      marker: "\u25AE",
      mcomma: "\u2A29",
      mcy: "\u043C",
      mdash: "\u2014",
      measuredangle: "\u2221",
      mfr: "\u{1D52A}",
      mho: "\u2127",
      micr: "\xB5",
      micro: "\xB5",
      mid: "\u2223",
      midast: "*",
      midcir: "\u2AF0",
      middo: "\xB7",
      middot: "\xB7",
      minus: "\u2212",
      minusb: "\u229F",
      minusd: "\u2238",
      minusdu: "\u2A2A",
      mlcp: "\u2ADB",
      mldr: "\u2026",
      mnplus: "\u2213",
      models: "\u22A7",
      mopf: "\u{1D55E}",
      mp: "\u2213",
      mscr: "\u{1D4C2}",
      mstpos: "\u223E",
      mu: "\u03BC",
      multimap: "\u22B8",
      mumap: "\u22B8",
      nGg: "\u22D9\u0338",
      nGt: "\u226B\u20D2",
      nGtv: "\u226B\u0338",
      nLeftarrow: "\u21CD",
      nLeftrightarrow: "\u21CE",
      nLl: "\u22D8\u0338",
      nLt: "\u226A\u20D2",
      nLtv: "\u226A\u0338",
      nRightarrow: "\u21CF",
      nVDash: "\u22AF",
      nVdash: "\u22AE",
      nabla: "\u2207",
      nacute: "\u0144",
      nang: "\u2220\u20D2",
      nap: "\u2249",
      napE: "\u2A70\u0338",
      napid: "\u224B\u0338",
      napos: "\u0149",
      napprox: "\u2249",
      natur: "\u266E",
      natural: "\u266E",
      naturals: "\u2115",
      nbs: "\xA0",
      nbsp: "\xA0",
      nbump: "\u224E\u0338",
      nbumpe: "\u224F\u0338",
      ncap: "\u2A43",
      ncaron: "\u0148",
      ncedil: "\u0146",
      ncong: "\u2247",
      ncongdot: "\u2A6D\u0338",
      ncup: "\u2A42",
      ncy: "\u043D",
      ndash: "\u2013",
      ne: "\u2260",
      neArr: "\u21D7",
      nearhk: "\u2924",
      nearr: "\u2197",
      nearrow: "\u2197",
      nedot: "\u2250\u0338",
      nequiv: "\u2262",
      nesear: "\u2928",
      nesim: "\u2242\u0338",
      nexist: "\u2204",
      nexists: "\u2204",
      nfr: "\u{1D52B}",
      ngE: "\u2267\u0338",
      nge: "\u2271",
      ngeq: "\u2271",
      ngeqq: "\u2267\u0338",
      ngeqslant: "\u2A7E\u0338",
      nges: "\u2A7E\u0338",
      ngsim: "\u2275",
      ngt: "\u226F",
      ngtr: "\u226F",
      nhArr: "\u21CE",
      nharr: "\u21AE",
      nhpar: "\u2AF2",
      ni: "\u220B",
      nis: "\u22FC",
      nisd: "\u22FA",
      niv: "\u220B",
      njcy: "\u045A",
      nlArr: "\u21CD",
      nlE: "\u2266\u0338",
      nlarr: "\u219A",
      nldr: "\u2025",
      nle: "\u2270",
      nleftarrow: "\u219A",
      nleftrightarrow: "\u21AE",
      nleq: "\u2270",
      nleqq: "\u2266\u0338",
      nleqslant: "\u2A7D\u0338",
      nles: "\u2A7D\u0338",
      nless: "\u226E",
      nlsim: "\u2274",
      nlt: "\u226E",
      nltri: "\u22EA",
      nltrie: "\u22EC",
      nmid: "\u2224",
      nopf: "\u{1D55F}",
      no: "\xAC",
      not: "\xAC",
      notin: "\u2209",
      notinE: "\u22F9\u0338",
      notindot: "\u22F5\u0338",
      notinva: "\u2209",
      notinvb: "\u22F7",
      notinvc: "\u22F6",
      notni: "\u220C",
      notniva: "\u220C",
      notnivb: "\u22FE",
      notnivc: "\u22FD",
      npar: "\u2226",
      nparallel: "\u2226",
      nparsl: "\u2AFD\u20E5",
      npart: "\u2202\u0338",
      npolint: "\u2A14",
      npr: "\u2280",
      nprcue: "\u22E0",
      npre: "\u2AAF\u0338",
      nprec: "\u2280",
      npreceq: "\u2AAF\u0338",
      nrArr: "\u21CF",
      nrarr: "\u219B",
      nrarrc: "\u2933\u0338",
      nrarrw: "\u219D\u0338",
      nrightarrow: "\u219B",
      nrtri: "\u22EB",
      nrtrie: "\u22ED",
      nsc: "\u2281",
      nsccue: "\u22E1",
      nsce: "\u2AB0\u0338",
      nscr: "\u{1D4C3}",
      nshortmid: "\u2224",
      nshortparallel: "\u2226",
      nsim: "\u2241",
      nsime: "\u2244",
      nsimeq: "\u2244",
      nsmid: "\u2224",
      nspar: "\u2226",
      nsqsube: "\u22E2",
      nsqsupe: "\u22E3",
      nsub: "\u2284",
      nsubE: "\u2AC5\u0338",
      nsube: "\u2288",
      nsubset: "\u2282\u20D2",
      nsubseteq: "\u2288",
      nsubseteqq: "\u2AC5\u0338",
      nsucc: "\u2281",
      nsucceq: "\u2AB0\u0338",
      nsup: "\u2285",
      nsupE: "\u2AC6\u0338",
      nsupe: "\u2289",
      nsupset: "\u2283\u20D2",
      nsupseteq: "\u2289",
      nsupseteqq: "\u2AC6\u0338",
      ntgl: "\u2279",
      ntild: "\xF1",
      ntilde: "\xF1",
      ntlg: "\u2278",
      ntriangleleft: "\u22EA",
      ntrianglelefteq: "\u22EC",
      ntriangleright: "\u22EB",
      ntrianglerighteq: "\u22ED",
      nu: "\u03BD",
      num: "#",
      numero: "\u2116",
      numsp: "\u2007",
      nvDash: "\u22AD",
      nvHarr: "\u2904",
      nvap: "\u224D\u20D2",
      nvdash: "\u22AC",
      nvge: "\u2265\u20D2",
      nvgt: ">\u20D2",
      nvinfin: "\u29DE",
      nvlArr: "\u2902",
      nvle: "\u2264\u20D2",
      nvlt: "<\u20D2",
      nvltrie: "\u22B4\u20D2",
      nvrArr: "\u2903",
      nvrtrie: "\u22B5\u20D2",
      nvsim: "\u223C\u20D2",
      nwArr: "\u21D6",
      nwarhk: "\u2923",
      nwarr: "\u2196",
      nwarrow: "\u2196",
      nwnear: "\u2927",
      oS: "\u24C8",
      oacut: "\xF3",
      oacute: "\xF3",
      oast: "\u229B",
      ocir: "\xF4",
      ocirc: "\xF4",
      ocy: "\u043E",
      odash: "\u229D",
      odblac: "\u0151",
      odiv: "\u2A38",
      odot: "\u2299",
      odsold: "\u29BC",
      oelig: "\u0153",
      ofcir: "\u29BF",
      ofr: "\u{1D52C}",
      ogon: "\u02DB",
      ograv: "\xF2",
      ograve: "\xF2",
      ogt: "\u29C1",
      ohbar: "\u29B5",
      ohm: "\u03A9",
      oint: "\u222E",
      olarr: "\u21BA",
      olcir: "\u29BE",
      olcross: "\u29BB",
      oline: "\u203E",
      olt: "\u29C0",
      omacr: "\u014D",
      omega: "\u03C9",
      omicron: "\u03BF",
      omid: "\u29B6",
      ominus: "\u2296",
      oopf: "\u{1D560}",
      opar: "\u29B7",
      operp: "\u29B9",
      oplus: "\u2295",
      or: "\u2228",
      orarr: "\u21BB",
      ord: "\xBA",
      order: "\u2134",
      orderof: "\u2134",
      ordf: "\xAA",
      ordm: "\xBA",
      origof: "\u22B6",
      oror: "\u2A56",
      orslope: "\u2A57",
      orv: "\u2A5B",
      oscr: "\u2134",
      oslas: "\xF8",
      oslash: "\xF8",
      osol: "\u2298",
      otild: "\xF5",
      otilde: "\xF5",
      otimes: "\u2297",
      otimesas: "\u2A36",
      oum: "\xF6",
      ouml: "\xF6",
      ovbar: "\u233D",
      par: "\xB6",
      para: "\xB6",
      parallel: "\u2225",
      parsim: "\u2AF3",
      parsl: "\u2AFD",
      part: "\u2202",
      pcy: "\u043F",
      percnt: "%",
      period: ".",
      permil: "\u2030",
      perp: "\u22A5",
      pertenk: "\u2031",
      pfr: "\u{1D52D}",
      phi: "\u03C6",
      phiv: "\u03D5",
      phmmat: "\u2133",
      phone: "\u260E",
      pi: "\u03C0",
      pitchfork: "\u22D4",
      piv: "\u03D6",
      planck: "\u210F",
      planckh: "\u210E",
      plankv: "\u210F",
      plus: "+",
      plusacir: "\u2A23",
      plusb: "\u229E",
      pluscir: "\u2A22",
      plusdo: "\u2214",
      plusdu: "\u2A25",
      pluse: "\u2A72",
      plusm: "\xB1",
      plusmn: "\xB1",
      plussim: "\u2A26",
      plustwo: "\u2A27",
      pm: "\xB1",
      pointint: "\u2A15",
      popf: "\u{1D561}",
      poun: "\xA3",
      pound: "\xA3",
      pr: "\u227A",
      prE: "\u2AB3",
      prap: "\u2AB7",
      prcue: "\u227C",
      pre: "\u2AAF",
      prec: "\u227A",
      precapprox: "\u2AB7",
      preccurlyeq: "\u227C",
      preceq: "\u2AAF",
      precnapprox: "\u2AB9",
      precneqq: "\u2AB5",
      precnsim: "\u22E8",
      precsim: "\u227E",
      prime: "\u2032",
      primes: "\u2119",
      prnE: "\u2AB5",
      prnap: "\u2AB9",
      prnsim: "\u22E8",
      prod: "\u220F",
      profalar: "\u232E",
      profline: "\u2312",
      profsurf: "\u2313",
      prop: "\u221D",
      propto: "\u221D",
      prsim: "\u227E",
      prurel: "\u22B0",
      pscr: "\u{1D4C5}",
      psi: "\u03C8",
      puncsp: "\u2008",
      qfr: "\u{1D52E}",
      qint: "\u2A0C",
      qopf: "\u{1D562}",
      qprime: "\u2057",
      qscr: "\u{1D4C6}",
      quaternions: "\u210D",
      quatint: "\u2A16",
      quest: "?",
      questeq: "\u225F",
      quo: '"',
      quot: '"',
      rAarr: "\u21DB",
      rArr: "\u21D2",
      rAtail: "\u291C",
      rBarr: "\u290F",
      rHar: "\u2964",
      race: "\u223D\u0331",
      racute: "\u0155",
      radic: "\u221A",
      raemptyv: "\u29B3",
      rang: "\u27E9",
      rangd: "\u2992",
      range: "\u29A5",
      rangle: "\u27E9",
      raqu: "\xBB",
      raquo: "\xBB",
      rarr: "\u2192",
      rarrap: "\u2975",
      rarrb: "\u21E5",
      rarrbfs: "\u2920",
      rarrc: "\u2933",
      rarrfs: "\u291E",
      rarrhk: "\u21AA",
      rarrlp: "\u21AC",
      rarrpl: "\u2945",
      rarrsim: "\u2974",
      rarrtl: "\u21A3",
      rarrw: "\u219D",
      ratail: "\u291A",
      ratio: "\u2236",
      rationals: "\u211A",
      rbarr: "\u290D",
      rbbrk: "\u2773",
      rbrace: "}",
      rbrack: "]",
      rbrke: "\u298C",
      rbrksld: "\u298E",
      rbrkslu: "\u2990",
      rcaron: "\u0159",
      rcedil: "\u0157",
      rceil: "\u2309",
      rcub: "}",
      rcy: "\u0440",
      rdca: "\u2937",
      rdldhar: "\u2969",
      rdquo: "\u201D",
      rdquor: "\u201D",
      rdsh: "\u21B3",
      real: "\u211C",
      realine: "\u211B",
      realpart: "\u211C",
      reals: "\u211D",
      rect: "\u25AD",
      re: "\xAE",
      reg: "\xAE",
      rfisht: "\u297D",
      rfloor: "\u230B",
      rfr: "\u{1D52F}",
      rhard: "\u21C1",
      rharu: "\u21C0",
      rharul: "\u296C",
      rho: "\u03C1",
      rhov: "\u03F1",
      rightarrow: "\u2192",
      rightarrowtail: "\u21A3",
      rightharpoondown: "\u21C1",
      rightharpoonup: "\u21C0",
      rightleftarrows: "\u21C4",
      rightleftharpoons: "\u21CC",
      rightrightarrows: "\u21C9",
      rightsquigarrow: "\u219D",
      rightthreetimes: "\u22CC",
      ring: "\u02DA",
      risingdotseq: "\u2253",
      rlarr: "\u21C4",
      rlhar: "\u21CC",
      rlm: "\u200F",
      rmoust: "\u23B1",
      rmoustache: "\u23B1",
      rnmid: "\u2AEE",
      roang: "\u27ED",
      roarr: "\u21FE",
      robrk: "\u27E7",
      ropar: "\u2986",
      ropf: "\u{1D563}",
      roplus: "\u2A2E",
      rotimes: "\u2A35",
      rpar: ")",
      rpargt: "\u2994",
      rppolint: "\u2A12",
      rrarr: "\u21C9",
      rsaquo: "\u203A",
      rscr: "\u{1D4C7}",
      rsh: "\u21B1",
      rsqb: "]",
      rsquo: "\u2019",
      rsquor: "\u2019",
      rthree: "\u22CC",
      rtimes: "\u22CA",
      rtri: "\u25B9",
      rtrie: "\u22B5",
      rtrif: "\u25B8",
      rtriltri: "\u29CE",
      ruluhar: "\u2968",
      rx: "\u211E",
      sacute: "\u015B",
      sbquo: "\u201A",
      sc: "\u227B",
      scE: "\u2AB4",
      scap: "\u2AB8",
      scaron: "\u0161",
      sccue: "\u227D",
      sce: "\u2AB0",
      scedil: "\u015F",
      scirc: "\u015D",
      scnE: "\u2AB6",
      scnap: "\u2ABA",
      scnsim: "\u22E9",
      scpolint: "\u2A13",
      scsim: "\u227F",
      scy: "\u0441",
      sdot: "\u22C5",
      sdotb: "\u22A1",
      sdote: "\u2A66",
      seArr: "\u21D8",
      searhk: "\u2925",
      searr: "\u2198",
      searrow: "\u2198",
      sec: "\xA7",
      sect: "\xA7",
      semi: ";",
      seswar: "\u2929",
      setminus: "\u2216",
      setmn: "\u2216",
      sext: "\u2736",
      sfr: "\u{1D530}",
      sfrown: "\u2322",
      sharp: "\u266F",
      shchcy: "\u0449",
      shcy: "\u0448",
      shortmid: "\u2223",
      shortparallel: "\u2225",
      sh: "\xAD",
      shy: "\xAD",
      sigma: "\u03C3",
      sigmaf: "\u03C2",
      sigmav: "\u03C2",
      sim: "\u223C",
      simdot: "\u2A6A",
      sime: "\u2243",
      simeq: "\u2243",
      simg: "\u2A9E",
      simgE: "\u2AA0",
      siml: "\u2A9D",
      simlE: "\u2A9F",
      simne: "\u2246",
      simplus: "\u2A24",
      simrarr: "\u2972",
      slarr: "\u2190",
      smallsetminus: "\u2216",
      smashp: "\u2A33",
      smeparsl: "\u29E4",
      smid: "\u2223",
      smile: "\u2323",
      smt: "\u2AAA",
      smte: "\u2AAC",
      smtes: "\u2AAC\uFE00",
      softcy: "\u044C",
      sol: "/",
      solb: "\u29C4",
      solbar: "\u233F",
      sopf: "\u{1D564}",
      spades: "\u2660",
      spadesuit: "\u2660",
      spar: "\u2225",
      sqcap: "\u2293",
      sqcaps: "\u2293\uFE00",
      sqcup: "\u2294",
      sqcups: "\u2294\uFE00",
      sqsub: "\u228F",
      sqsube: "\u2291",
      sqsubset: "\u228F",
      sqsubseteq: "\u2291",
      sqsup: "\u2290",
      sqsupe: "\u2292",
      sqsupset: "\u2290",
      sqsupseteq: "\u2292",
      squ: "\u25A1",
      square: "\u25A1",
      squarf: "\u25AA",
      squf: "\u25AA",
      srarr: "\u2192",
      sscr: "\u{1D4C8}",
      ssetmn: "\u2216",
      ssmile: "\u2323",
      sstarf: "\u22C6",
      star: "\u2606",
      starf: "\u2605",
      straightepsilon: "\u03F5",
      straightphi: "\u03D5",
      strns: "\xAF",
      sub: "\u2282",
      subE: "\u2AC5",
      subdot: "\u2ABD",
      sube: "\u2286",
      subedot: "\u2AC3",
      submult: "\u2AC1",
      subnE: "\u2ACB",
      subne: "\u228A",
      subplus: "\u2ABF",
      subrarr: "\u2979",
      subset: "\u2282",
      subseteq: "\u2286",
      subseteqq: "\u2AC5",
      subsetneq: "\u228A",
      subsetneqq: "\u2ACB",
      subsim: "\u2AC7",
      subsub: "\u2AD5",
      subsup: "\u2AD3",
      succ: "\u227B",
      succapprox: "\u2AB8",
      succcurlyeq: "\u227D",
      succeq: "\u2AB0",
      succnapprox: "\u2ABA",
      succneqq: "\u2AB6",
      succnsim: "\u22E9",
      succsim: "\u227F",
      sum: "\u2211",
      sung: "\u266A",
      sup: "\u2283",
      sup1: "\xB9",
      sup2: "\xB2",
      sup3: "\xB3",
      supE: "\u2AC6",
      supdot: "\u2ABE",
      supdsub: "\u2AD8",
      supe: "\u2287",
      supedot: "\u2AC4",
      suphsol: "\u27C9",
      suphsub: "\u2AD7",
      suplarr: "\u297B",
      supmult: "\u2AC2",
      supnE: "\u2ACC",
      supne: "\u228B",
      supplus: "\u2AC0",
      supset: "\u2283",
      supseteq: "\u2287",
      supseteqq: "\u2AC6",
      supsetneq: "\u228B",
      supsetneqq: "\u2ACC",
      supsim: "\u2AC8",
      supsub: "\u2AD4",
      supsup: "\u2AD6",
      swArr: "\u21D9",
      swarhk: "\u2926",
      swarr: "\u2199",
      swarrow: "\u2199",
      swnwar: "\u292A",
      szli: "\xDF",
      szlig: "\xDF",
      target: "\u2316",
      tau: "\u03C4",
      tbrk: "\u23B4",
      tcaron: "\u0165",
      tcedil: "\u0163",
      tcy: "\u0442",
      tdot: "\u20DB",
      telrec: "\u2315",
      tfr: "\u{1D531}",
      there4: "\u2234",
      therefore: "\u2234",
      theta: "\u03B8",
      thetasym: "\u03D1",
      thetav: "\u03D1",
      thickapprox: "\u2248",
      thicksim: "\u223C",
      thinsp: "\u2009",
      thkap: "\u2248",
      thksim: "\u223C",
      thor: "\xFE",
      thorn: "\xFE",
      tilde: "\u02DC",
      time: "\xD7",
      times: "\xD7",
      timesb: "\u22A0",
      timesbar: "\u2A31",
      timesd: "\u2A30",
      tint: "\u222D",
      toea: "\u2928",
      top: "\u22A4",
      topbot: "\u2336",
      topcir: "\u2AF1",
      topf: "\u{1D565}",
      topfork: "\u2ADA",
      tosa: "\u2929",
      tprime: "\u2034",
      trade: "\u2122",
      triangle: "\u25B5",
      triangledown: "\u25BF",
      triangleleft: "\u25C3",
      trianglelefteq: "\u22B4",
      triangleq: "\u225C",
      triangleright: "\u25B9",
      trianglerighteq: "\u22B5",
      tridot: "\u25EC",
      trie: "\u225C",
      triminus: "\u2A3A",
      triplus: "\u2A39",
      trisb: "\u29CD",
      tritime: "\u2A3B",
      trpezium: "\u23E2",
      tscr: "\u{1D4C9}",
      tscy: "\u0446",
      tshcy: "\u045B",
      tstrok: "\u0167",
      twixt: "\u226C",
      twoheadleftarrow: "\u219E",
      twoheadrightarrow: "\u21A0",
      uArr: "\u21D1",
      uHar: "\u2963",
      uacut: "\xFA",
      uacute: "\xFA",
      uarr: "\u2191",
      ubrcy: "\u045E",
      ubreve: "\u016D",
      ucir: "\xFB",
      ucirc: "\xFB",
      ucy: "\u0443",
      udarr: "\u21C5",
      udblac: "\u0171",
      udhar: "\u296E",
      ufisht: "\u297E",
      ufr: "\u{1D532}",
      ugrav: "\xF9",
      ugrave: "\xF9",
      uharl: "\u21BF",
      uharr: "\u21BE",
      uhblk: "\u2580",
      ulcorn: "\u231C",
      ulcorner: "\u231C",
      ulcrop: "\u230F",
      ultri: "\u25F8",
      umacr: "\u016B",
      um: "\xA8",
      uml: "\xA8",
      uogon: "\u0173",
      uopf: "\u{1D566}",
      uparrow: "\u2191",
      updownarrow: "\u2195",
      upharpoonleft: "\u21BF",
      upharpoonright: "\u21BE",
      uplus: "\u228E",
      upsi: "\u03C5",
      upsih: "\u03D2",
      upsilon: "\u03C5",
      upuparrows: "\u21C8",
      urcorn: "\u231D",
      urcorner: "\u231D",
      urcrop: "\u230E",
      uring: "\u016F",
      urtri: "\u25F9",
      uscr: "\u{1D4CA}",
      utdot: "\u22F0",
      utilde: "\u0169",
      utri: "\u25B5",
      utrif: "\u25B4",
      uuarr: "\u21C8",
      uum: "\xFC",
      uuml: "\xFC",
      uwangle: "\u29A7",
      vArr: "\u21D5",
      vBar: "\u2AE8",
      vBarv: "\u2AE9",
      vDash: "\u22A8",
      vangrt: "\u299C",
      varepsilon: "\u03F5",
      varkappa: "\u03F0",
      varnothing: "\u2205",
      varphi: "\u03D5",
      varpi: "\u03D6",
      varpropto: "\u221D",
      varr: "\u2195",
      varrho: "\u03F1",
      varsigma: "\u03C2",
      varsubsetneq: "\u228A\uFE00",
      varsubsetneqq: "\u2ACB\uFE00",
      varsupsetneq: "\u228B\uFE00",
      varsupsetneqq: "\u2ACC\uFE00",
      vartheta: "\u03D1",
      vartriangleleft: "\u22B2",
      vartriangleright: "\u22B3",
      vcy: "\u0432",
      vdash: "\u22A2",
      vee: "\u2228",
      veebar: "\u22BB",
      veeeq: "\u225A",
      vellip: "\u22EE",
      verbar: "|",
      vert: "|",
      vfr: "\u{1D533}",
      vltri: "\u22B2",
      vnsub: "\u2282\u20D2",
      vnsup: "\u2283\u20D2",
      vopf: "\u{1D567}",
      vprop: "\u221D",
      vrtri: "\u22B3",
      vscr: "\u{1D4CB}",
      vsubnE: "\u2ACB\uFE00",
      vsubne: "\u228A\uFE00",
      vsupnE: "\u2ACC\uFE00",
      vsupne: "\u228B\uFE00",
      vzigzag: "\u299A",
      wcirc: "\u0175",
      wedbar: "\u2A5F",
      wedge: "\u2227",
      wedgeq: "\u2259",
      weierp: "\u2118",
      wfr: "\u{1D534}",
      wopf: "\u{1D568}",
      wp: "\u2118",
      wr: "\u2240",
      wreath: "\u2240",
      wscr: "\u{1D4CC}",
      xcap: "\u22C2",
      xcirc: "\u25EF",
      xcup: "\u22C3",
      xdtri: "\u25BD",
      xfr: "\u{1D535}",
      xhArr: "\u27FA",
      xharr: "\u27F7",
      xi: "\u03BE",
      xlArr: "\u27F8",
      xlarr: "\u27F5",
      xmap: "\u27FC",
      xnis: "\u22FB",
      xodot: "\u2A00",
      xopf: "\u{1D569}",
      xoplus: "\u2A01",
      xotime: "\u2A02",
      xrArr: "\u27F9",
      xrarr: "\u27F6",
      xscr: "\u{1D4CD}",
      xsqcup: "\u2A06",
      xuplus: "\u2A04",
      xutri: "\u25B3",
      xvee: "\u22C1",
      xwedge: "\u22C0",
      yacut: "\xFD",
      yacute: "\xFD",
      yacy: "\u044F",
      ycirc: "\u0177",
      ycy: "\u044B",
      ye: "\xA5",
      yen: "\xA5",
      yfr: "\u{1D536}",
      yicy: "\u0457",
      yopf: "\u{1D56A}",
      yscr: "\u{1D4CE}",
      yucy: "\u044E",
      yum: "\xFF",
      yuml: "\xFF",
      zacute: "\u017A",
      zcaron: "\u017E",
      zcy: "\u0437",
      zdot: "\u017C",
      zeetrf: "\u2128",
      zeta: "\u03B6",
      zfr: "\u{1D537}",
      zhcy: "\u0436",
      zigrarr: "\u21DD",
      zopf: "\u{1D56B}",
      zscr: "\u{1D4CF}",
      zwj: "\u200D",
      zwnj: "\u200C"
    };
  }
});
var require_decode_entity = __commonJS({
  "../../node_modules/parse-entities/decode-entity.js"(exports, module) {
    var characterEntities = require_character_entities();
    module.exports = decodeEntity;
    var own = {}.hasOwnProperty;
    function decodeEntity(characters) {
      return own.call(characterEntities, characters) ? characterEntities[characters] : false;
    }
  }
});
var require_parse_entities = __commonJS({
  "../../node_modules/parse-entities/index.js"(exports, module) {
    var legacy = require_character_entities_legacy();
    var invalid = require_character_reference_invalid();
    var decimal = require_is_decimal();
    var hexadecimal = require_is_hexadecimal();
    var alphanumerical = require_is_alphanumerical();
    var decodeEntity = require_decode_entity();
    module.exports = parseEntities;
    var own = {}.hasOwnProperty;
    var fromCharCode = String.fromCharCode;
    var noop = Function.prototype;
    var defaults = {
      warning: null,
      reference: null,
      text: null,
      warningContext: null,
      referenceContext: null,
      textContext: null,
      position: {},
      additional: null,
      attribute: false,
      nonTerminated: true
    };
    var tab = 9;
    var lineFeed = 10;
    var formFeed = 12;
    var space = 32;
    var ampersand = 38;
    var semicolon = 59;
    var lessThan = 60;
    var equalsTo = 61;
    var numberSign = 35;
    var uppercaseX = 88;
    var lowercaseX = 120;
    var replacementCharacter = 65533;
    var name = "named";
    var hexa = "hexadecimal";
    var deci = "decimal";
    var bases = {};
    bases[hexa] = 16;
    bases[deci] = 10;
    var tests = {};
    tests[name] = alphanumerical;
    tests[deci] = decimal;
    tests[hexa] = hexadecimal;
    var namedNotTerminated = 1;
    var numericNotTerminated = 2;
    var namedEmpty = 3;
    var numericEmpty = 4;
    var namedUnknown = 5;
    var numericDisallowed = 6;
    var numericProhibited = 7;
    var messages = {};
    messages[namedNotTerminated] = "Named character references must be terminated by a semicolon";
    messages[numericNotTerminated] = "Numeric character references must be terminated by a semicolon";
    messages[namedEmpty] = "Named character references cannot be empty";
    messages[numericEmpty] = "Numeric character references cannot be empty";
    messages[namedUnknown] = "Named character references must be known";
    messages[numericDisallowed] = "Numeric character references cannot be disallowed";
    messages[numericProhibited] = "Numeric character references cannot be outside the permissible Unicode range";
    function parseEntities(value, options) {
      var settings = {};
      var option;
      var key;
      if (!options) {
        options = {};
      }
      for (key in defaults) {
        option = options[key];
        settings[key] = option === null || option === void 0 ? defaults[key] : option;
      }
      if (settings.position.indent || settings.position.start) {
        settings.indent = settings.position.indent || [];
        settings.position = settings.position.start;
      }
      return parse(value, settings);
    }
    function parse(value, settings) {
      var additional = settings.additional;
      var nonTerminated = settings.nonTerminated;
      var handleText = settings.text;
      var handleReference = settings.reference;
      var handleWarning = settings.warning;
      var textContext = settings.textContext;
      var referenceContext = settings.referenceContext;
      var warningContext = settings.warningContext;
      var pos = settings.position;
      var indent = settings.indent || [];
      var length = value.length;
      var index = 0;
      var lines = -1;
      var column = pos.column || 1;
      var line = pos.line || 1;
      var queue = "";
      var result = [];
      var entityCharacters;
      var namedEntity;
      var terminated;
      var characters;
      var character;
      var reference;
      var following;
      var warning;
      var reason;
      var output;
      var entity;
      var begin;
      var start;
      var type;
      var test;
      var prev;
      var next;
      var diff;
      var end;
      if (typeof additional === "string") {
        additional = additional.charCodeAt(0);
      }
      prev = now();
      warning = handleWarning ? parseError : noop;
      index--;
      length++;
      while (++index < length) {
        if (character === lineFeed) {
          column = indent[lines] || 1;
        }
        character = value.charCodeAt(index);
        if (character === ampersand) {
          following = value.charCodeAt(index + 1);
          if (following === tab || following === lineFeed || following === formFeed || following === space || following === ampersand || following === lessThan || following !== following || additional && following === additional) {
            queue += fromCharCode(character);
            column++;
            continue;
          }
          start = index + 1;
          begin = start;
          end = start;
          if (following === numberSign) {
            end = ++begin;
            following = value.charCodeAt(end);
            if (following === uppercaseX || following === lowercaseX) {
              type = hexa;
              end = ++begin;
            } else {
              type = deci;
            }
          } else {
            type = name;
          }
          entityCharacters = "";
          entity = "";
          characters = "";
          test = tests[type];
          end--;
          while (++end < length) {
            following = value.charCodeAt(end);
            if (!test(following)) {
              break;
            }
            characters += fromCharCode(following);
            if (type === name && own.call(legacy, characters)) {
              entityCharacters = characters;
              entity = legacy[characters];
            }
          }
          terminated = value.charCodeAt(end) === semicolon;
          if (terminated) {
            end++;
            namedEntity = type === name ? decodeEntity(characters) : false;
            if (namedEntity) {
              entityCharacters = characters;
              entity = namedEntity;
            }
          }
          diff = 1 + end - start;
          if (!terminated && !nonTerminated)
            ;
          else if (!characters) {
            if (type !== name) {
              warning(numericEmpty, diff);
            }
          } else if (type === name) {
            if (terminated && !entity) {
              warning(namedUnknown, 1);
            } else {
              if (entityCharacters !== characters) {
                end = begin + entityCharacters.length;
                diff = 1 + end - begin;
                terminated = false;
              }
              if (!terminated) {
                reason = entityCharacters ? namedNotTerminated : namedEmpty;
                if (settings.attribute) {
                  following = value.charCodeAt(end);
                  if (following === equalsTo) {
                    warning(reason, diff);
                    entity = null;
                  } else if (alphanumerical(following)) {
                    entity = null;
                  } else {
                    warning(reason, diff);
                  }
                } else {
                  warning(reason, diff);
                }
              }
            }
            reference = entity;
          } else {
            if (!terminated) {
              warning(numericNotTerminated, diff);
            }
            reference = parseInt(characters, bases[type]);
            if (prohibited(reference)) {
              warning(numericProhibited, diff);
              reference = fromCharCode(replacementCharacter);
            } else if (reference in invalid) {
              warning(numericDisallowed, diff);
              reference = invalid[reference];
            } else {
              output = "";
              if (disallowed(reference)) {
                warning(numericDisallowed, diff);
              }
              if (reference > 65535) {
                reference -= 65536;
                output += fromCharCode(reference >>> (10 & 1023) | 55296);
                reference = 56320 | reference & 1023;
              }
              reference = output + fromCharCode(reference);
            }
          }
          if (reference) {
            flush();
            prev = now();
            index = end - 1;
            column += end - start + 1;
            result.push(reference);
            next = now();
            next.offset++;
            if (handleReference) {
              handleReference.call(
                referenceContext,
                reference,
                { start: prev, end: next },
                value.slice(start - 1, end)
              );
            }
            prev = next;
          } else {
            characters = value.slice(start - 1, end);
            queue += characters;
            column += characters.length;
            index = end - 1;
          }
        } else {
          if (character === 10) {
            line++;
            lines++;
            column = 0;
          }
          if (character === character) {
            queue += fromCharCode(character);
            column++;
          } else {
            flush();
          }
        }
      }
      return result.join("");
      function now() {
        return {
          line,
          column,
          offset: index + (pos.offset || 0)
        };
      }
      function parseError(code, offset) {
        var position = now();
        position.column += offset;
        position.offset += offset;
        handleWarning.call(warningContext, messages[code], position, code);
      }
      function flush() {
        if (queue) {
          result.push(queue);
          if (handleText) {
            handleText.call(textContext, queue, { start: prev, end: now() });
          }
          queue = "";
        }
      }
    }
    function prohibited(code) {
      return code >= 55296 && code <= 57343 || code > 1114111;
    }
    function disallowed(code) {
      return code >= 1 && code <= 8 || code === 11 || code >= 13 && code <= 31 || code >= 127 && code <= 159 || code >= 64976 && code <= 65007 || (code & 65535) === 65535 || (code & 65535) === 65534;
    }
  }
});
var require_prism_core = __commonJS({
  "../../node_modules/refractor/node_modules/prismjs/components/prism-core.js"(exports, module) {
    var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
    var Prism = function(_self2) {
      var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
      var uniqueId = 0;
      var plainTextGrammar = {};
      var _ = {
        /**
         * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
         * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
         * additional languages or plugins yourself.
         *
         * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
         *
         * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.manual = true;
         * // add a new <script> to load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        manual: _self2.Prism && _self2.Prism.manual,
        /**
         * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
         * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
         * own worker, you don't want it to do this.
         *
         * By setting this value to `true`, Prism will not add its own listeners to the worker.
         *
         * You obviously have to change this value before Prism executes. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.disableWorkerMessageHandler = true;
         * // Load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
        /**
         * A namespace for utility methods.
         *
         * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
         * change or disappear at any time.
         *
         * @namespace
         * @memberof Prism
         */
        util: {
          encode: function encode(tokens) {
            if (tokens instanceof Token) {
              return new Token(tokens.type, encode(tokens.content), tokens.alias);
            } else if (Array.isArray(tokens)) {
              return tokens.map(encode);
            } else {
              return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
            }
          },
          /**
           * Returns the name of the type of the given value.
           *
           * @param {any} o
           * @returns {string}
           * @example
           * type(null)      === 'Null'
           * type(undefined) === 'Undefined'
           * type(123)       === 'Number'
           * type('foo')     === 'String'
           * type(true)      === 'Boolean'
           * type([1, 2])    === 'Array'
           * type({})        === 'Object'
           * type(String)    === 'Function'
           * type(/abc+/)    === 'RegExp'
           */
          type: function(o) {
            return Object.prototype.toString.call(o).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(obj) {
            if (!obj["__id"]) {
              Object.defineProperty(obj, "__id", { value: ++uniqueId });
            }
            return obj["__id"];
          },
          /**
           * Creates a deep clone of the given object.
           *
           * The main intended use of this function is to clone language definitions.
           *
           * @param {T} o
           * @param {Record<number, any>} [visited]
           * @returns {T}
           * @template T
           */
          clone: function deepClone(o, visited) {
            visited = visited || {};
            var clone;
            var id;
            switch (_.util.type(o)) {
              case "Object":
                id = _.util.objId(o);
                if (visited[id]) {
                  return visited[id];
                }
                clone = /** @type {Record<string, any>} */
                {};
                visited[id] = clone;
                for (var key in o) {
                  if (o.hasOwnProperty(key)) {
                    clone[key] = deepClone(o[key], visited);
                  }
                }
                return (
                  /** @type {any} */
                  clone
                );
              case "Array":
                id = _.util.objId(o);
                if (visited[id]) {
                  return visited[id];
                }
                clone = [];
                visited[id] = clone;
                o.forEach(function(v, i) {
                  clone[i] = deepClone(v, visited);
                });
                return (
                  /** @type {any} */
                  clone
                );
              default:
                return o;
            }
          },
          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function(element) {
            while (element) {
              var m = lang.exec(element.className);
              if (m) {
                return m[1].toLowerCase();
              }
              element = element.parentElement;
            }
            return "none";
          },
          /**
           * Sets the Prism `language-xxxx` class of the given element.
           *
           * @param {Element} element
           * @param {string} language
           * @returns {void}
           */
          setLanguage: function(element, language) {
            element.className = element.className.replace(RegExp(lang, "gi"), "");
            element.classList.add("language-" + language);
          },
          /**
           * Returns the script element that is currently executing.
           *
           * This does __not__ work for line script element.
           *
           * @returns {HTMLScriptElement | null}
           */
          currentScript: function() {
            if (typeof document === "undefined") {
              return null;
            }
            if ("currentScript" in document && 1 < 2) {
              return (
                /** @type {any} */
                document.currentScript
              );
            }
            try {
              throw new Error();
            } catch (err) {
              var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
              if (src) {
                var scripts = document.getElementsByTagName("script");
                for (var i in scripts) {
                  if (scripts[i].src == src) {
                    return scripts[i];
                  }
                }
              }
              return null;
            }
          },
          /**
           * Returns whether a given class is active for `element`.
           *
           * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
           * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
           * given class is just the given class with a `no-` prefix.
           *
           * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
           * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
           * ancestors have the given class or the negated version of it, then the default activation will be returned.
           *
           * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
           * version of it, the class is considered active.
           *
           * @param {Element} element
           * @param {string} className
           * @param {boolean} [defaultActivation=false]
           * @returns {boolean}
           */
          isActive: function(element, className, defaultActivation) {
            var no = "no-" + className;
            while (element) {
              var classList = element.classList;
              if (classList.contains(className)) {
                return true;
              }
              if (classList.contains(no)) {
                return false;
              }
              element = element.parentElement;
            }
            return !!defaultActivation;
          }
        },
        /**
         * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
         *
         * @namespace
         * @memberof Prism
         * @public
         */
        languages: {
          /**
           * The grammar for plain, unformatted text.
           */
          plain: plainTextGrammar,
          plaintext: plainTextGrammar,
          text: plainTextGrammar,
          txt: plainTextGrammar,
          /**
           * Creates a deep copy of the language with the given id and appends the given tokens.
           *
           * If a token in `redef` also appears in the copied language, then the existing token in the copied language
           * will be overwritten at its original position.
           *
           * ## Best practices
           *
           * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
           * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
           * understand the language definition because, normally, the order of tokens matters in Prism grammars.
           *
           * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
           * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
           *
           * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
           * @param {Grammar} redef The new tokens to append.
           * @returns {Grammar} The new language created.
           * @public
           * @example
           * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
           *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
           *     // at its original position
           *     'comment': { ... },
           *     // CSS doesn't have a 'color' token, so this token will be appended
           *     'color': /\b(?:red|green|blue)\b/
           * });
           */
          extend: function(id, redef) {
            var lang2 = _.util.clone(_.languages[id]);
            for (var key in redef) {
              lang2[key] = redef[key];
            }
            return lang2;
          },
          /**
           * Inserts tokens _before_ another token in a language definition or any other grammar.
           *
           * ## Usage
           *
           * This helper method makes it easy to modify existing languages. For example, the CSS language definition
           * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
           * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
           * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
           * this:
           *
           * ```js
           * Prism.languages.markup.style = {
           *     // token
           * };
           * ```
           *
           * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
           * before existing tokens. For the CSS example above, you would use it like this:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'cdata', {
           *     'style': {
           *         // token
           *     }
           * });
           * ```
           *
           * ## Special cases
           *
           * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
           * will be ignored.
           *
           * This behavior can be used to insert tokens after `before`:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'comment', {
           *     'comment': Prism.languages.markup.comment,
           *     // tokens after 'comment'
           * });
           * ```
           *
           * ## Limitations
           *
           * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
           * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
           * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
           * deleting properties which is necessary to insert at arbitrary positions.
           *
           * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
           * Instead, it will create a new object and replace all references to the target object with the new one. This
           * can be done without temporarily deleting properties, so the iteration order is well-defined.
           *
           * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
           * you hold the target object in a variable, then the value of the variable will not change.
           *
           * ```js
           * var oldMarkup = Prism.languages.markup;
           * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
           *
           * assert(oldMarkup !== Prism.languages.markup);
           * assert(newMarkup === Prism.languages.markup);
           * ```
           *
           * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
           * object to be modified.
           * @param {string} before The key to insert before.
           * @param {Grammar} insert An object containing the key-value pairs to be inserted.
           * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
           * object to be modified.
           *
           * Defaults to `Prism.languages`.
           * @returns {Grammar} The new grammar object.
           * @public
           */
          insertBefore: function(inside, before, insert, root) {
            root = root || /** @type {any} */
            _.languages;
            var grammar = root[inside];
            var ret = {};
            for (var token in grammar) {
              if (grammar.hasOwnProperty(token)) {
                if (token == before) {
                  for (var newToken in insert) {
                    if (insert.hasOwnProperty(newToken)) {
                      ret[newToken] = insert[newToken];
                    }
                  }
                }
                if (!insert.hasOwnProperty(token)) {
                  ret[token] = grammar[token];
                }
              }
            }
            var old = root[inside];
            root[inside] = ret;
            _.languages.DFS(_.languages, function(key, value) {
              if (value === old && key != inside) {
                this[key] = ret;
              }
            });
            return ret;
          },
          // Traverse a language definition with Depth First Search
          DFS: function DFS(o, callback, type, visited) {
            visited = visited || {};
            var objId = _.util.objId;
            for (var i in o) {
              if (o.hasOwnProperty(i)) {
                callback.call(o, i, o[i], type || i);
                var property = o[i];
                var propertyType = _.util.type(property);
                if (propertyType === "Object" && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, null, visited);
                } else if (propertyType === "Array" && !visited[objId(property)]) {
                  visited[objId(property)] = true;
                  DFS(property, callback, i, visited);
                }
              }
            }
          }
        },
        plugins: {},
        /**
         * This is the most high-level function in Prism’s API.
         * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
         * each one of them.
         *
         * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
         *
         * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
         * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
         * @memberof Prism
         * @public
         */
        highlightAll: function(async, callback) {
          _.highlightAllUnder(document, async, callback);
        },
        /**
         * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
         * {@link Prism.highlightElement} on each one of them.
         *
         * The following hooks will be run:
         * 1. `before-highlightall`
         * 2. `before-all-elements-highlight`
         * 3. All hooks of {@link Prism.highlightElement} for each element.
         *
         * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
         * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
         * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
         * @memberof Prism
         * @public
         */
        highlightAllUnder: function(container, async, callback) {
          var env = {
            callback,
            container,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          _.hooks.run("before-highlightall", env);
          env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
          _.hooks.run("before-all-elements-highlight", env);
          for (var i = 0, element; element = env.elements[i++]; ) {
            _.highlightElement(element, async === true, env.callback);
          }
        },
        /**
         * Highlights the code inside a single element.
         *
         * The following hooks will be run:
         * 1. `before-sanity-check`
         * 2. `before-highlight`
         * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
         * 4. `before-insert`
         * 5. `after-highlight`
         * 6. `complete`
         *
         * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
         * the element's language.
         *
         * @param {Element} element The element containing the code.
         * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
         * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
         * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
         * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
         *
         * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
         * asynchronous highlighting to work. You can build your own bundle on the
         * [Download page](https://prismjs.com/download.html).
         * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
         * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
         * @memberof Prism
         * @public
         */
        highlightElement: function(element, async, callback) {
          var language = _.util.getLanguage(element);
          var grammar = _.languages[language];
          _.util.setLanguage(element, language);
          var parent = element.parentElement;
          if (parent && parent.nodeName.toLowerCase() === "pre") {
            _.util.setLanguage(parent, language);
          }
          var code = element.textContent;
          var env = {
            element,
            language,
            grammar,
            code
          };
          function insertHighlightedCode(highlightedCode) {
            env.highlightedCode = highlightedCode;
            _.hooks.run("before-insert", env);
            env.element.innerHTML = env.highlightedCode;
            _.hooks.run("after-highlight", env);
            _.hooks.run("complete", env);
            callback && callback.call(env.element);
          }
          _.hooks.run("before-sanity-check", env);
          parent = env.element.parentElement;
          if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
            parent.setAttribute("tabindex", "0");
          }
          if (!env.code) {
            _.hooks.run("complete", env);
            callback && callback.call(env.element);
            return;
          }
          _.hooks.run("before-highlight", env);
          if (!env.grammar) {
            insertHighlightedCode(_.util.encode(env.code));
            return;
          }
          if (async && _self2.Worker) {
            var worker = new Worker(_.filename);
            worker.onmessage = function(evt) {
              insertHighlightedCode(evt.data);
            };
            worker.postMessage(JSON.stringify({
              language: env.language,
              code: env.code,
              immediateClose: true
            }));
          } else {
            insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
          }
        },
        /**
         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
         * and the language definitions to use, and returns a string with the HTML produced.
         *
         * The following hooks will be run:
         * 1. `before-tokenize`
         * 2. `after-tokenize`
         * 3. `wrap`: On each {@link Token}.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @param {string} language The name of the language definition passed to `grammar`.
         * @returns {string} The highlighted HTML.
         * @memberof Prism
         * @public
         * @example
         * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
         */
        highlight: function(text, grammar, language) {
          var env = {
            code: text,
            grammar,
            language
          };
          _.hooks.run("before-tokenize", env);
          if (!env.grammar) {
            throw new Error('The language "' + env.language + '" has no grammar.');
          }
          env.tokens = _.tokenize(env.code, env.grammar);
          _.hooks.run("after-tokenize", env);
          return Token.stringify(_.util.encode(env.tokens), env.language);
        },
        /**
         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
         * and the language definitions to use, and returns an array with the tokenized code.
         *
         * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
         *
         * This method could be useful in other contexts as well, as a very crude parser.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @returns {TokenStream} An array of strings and tokens, a token stream.
         * @memberof Prism
         * @public
         * @example
         * let code = `var foo = 0;`;
         * let tokens = Prism.tokenize(code, Prism.languages.javascript);
         * tokens.forEach(token => {
         *     if (token instanceof Prism.Token && token.type === 'number') {
         *         console.log(`Found numeric literal: ${token.content}`);
         *     }
         * });
         */
        tokenize: function(text, grammar) {
          var rest = grammar.rest;
          if (rest) {
            for (var token in rest) {
              grammar[token] = rest[token];
            }
            delete grammar.rest;
          }
          var tokenList = new LinkedList();
          addAfter(tokenList, tokenList.head, text);
          matchGrammar(text, tokenList, grammar, tokenList.head, 0);
          return toArray(tokenList);
        },
        /**
         * @namespace
         * @memberof Prism
         * @public
         */
        hooks: {
          all: {},
          /**
           * Adds the given callback to the list of callbacks for the given hook.
           *
           * The callback will be invoked when the hook it is registered for is run.
           * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
           *
           * One callback function can be registered to multiple hooks and the same hook multiple times.
           *
           * @param {string} name The name of the hook.
           * @param {HookCallback} callback The callback function which is given environment variables.
           * @public
           */
          add: function(name, callback) {
            var hooks = _.hooks.all;
            hooks[name] = hooks[name] || [];
            hooks[name].push(callback);
          },
          /**
           * Runs a hook invoking all registered callbacks with the given environment variables.
           *
           * Callbacks will be invoked synchronously and in the order in which they were registered.
           *
           * @param {string} name The name of the hook.
           * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
           * @public
           */
          run: function(name, env) {
            var callbacks = _.hooks.all[name];
            if (!callbacks || !callbacks.length) {
              return;
            }
            for (var i = 0, callback; callback = callbacks[i++]; ) {
              callback(env);
            }
          }
        },
        Token
      };
      _self2.Prism = _;
      function Token(type, content, alias, matchedStr) {
        this.type = type;
        this.content = content;
        this.alias = alias;
        this.length = (matchedStr || "").length | 0;
      }
      Token.stringify = function stringify(o, language) {
        if (typeof o == "string") {
          return o;
        }
        if (Array.isArray(o)) {
          var s = "";
          o.forEach(function(e) {
            s += stringify(e, language);
          });
          return s;
        }
        var env = {
          type: o.type,
          content: stringify(o.content, language),
          tag: "span",
          classes: ["token", o.type],
          attributes: {},
          language
        };
        var aliases = o.alias;
        if (aliases) {
          if (Array.isArray(aliases)) {
            Array.prototype.push.apply(env.classes, aliases);
          } else {
            env.classes.push(aliases);
          }
        }
        _.hooks.run("wrap", env);
        var attributes = "";
        for (var name in env.attributes) {
          attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
        }
        return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
      };
      function matchPattern(pattern, pos, text, lookbehind) {
        pattern.lastIndex = pos;
        var match = pattern.exec(text);
        if (match && lookbehind && match[1]) {
          var lookbehindLength = match[1].length;
          match.index += lookbehindLength;
          match[0] = match[0].slice(lookbehindLength);
        }
        return match;
      }
      function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
        for (var token in grammar) {
          if (!grammar.hasOwnProperty(token) || !grammar[token]) {
            continue;
          }
          var patterns = grammar[token];
          patterns = Array.isArray(patterns) ? patterns : [patterns];
          for (var j = 0; j < patterns.length; ++j) {
            if (rematch && rematch.cause == token + "," + j) {
              return;
            }
            var patternObj = patterns[j];
            var inside = patternObj.inside;
            var lookbehind = !!patternObj.lookbehind;
            var greedy = !!patternObj.greedy;
            var alias = patternObj.alias;
            if (greedy && !patternObj.pattern.global) {
              var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
              patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
            }
            var pattern = patternObj.pattern || patternObj;
            for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
              if (rematch && pos >= rematch.reach) {
                break;
              }
              var str = currentNode.value;
              if (tokenList.length > text.length) {
                return;
              }
              if (str instanceof Token) {
                continue;
              }
              var removeCount = 1;
              var match;
              if (greedy) {
                match = matchPattern(pattern, pos, text, lookbehind);
                if (!match || match.index >= text.length) {
                  break;
                }
                var from = match.index;
                var to = match.index + match[0].length;
                var p = pos;
                p += currentNode.value.length;
                while (from >= p) {
                  currentNode = currentNode.next;
                  p += currentNode.value.length;
                }
                p -= currentNode.value.length;
                pos = p;
                if (currentNode.value instanceof Token) {
                  continue;
                }
                for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                  removeCount++;
                  p += k.value.length;
                }
                removeCount--;
                str = text.slice(pos, p);
                match.index -= pos;
              } else {
                match = matchPattern(pattern, 0, str, lookbehind);
                if (!match) {
                  continue;
                }
              }
              var from = match.index;
              var matchStr = match[0];
              var before = str.slice(0, from);
              var after = str.slice(from + matchStr.length);
              var reach = pos + str.length;
              if (rematch && reach > rematch.reach) {
                rematch.reach = reach;
              }
              var removeFrom = currentNode.prev;
              if (before) {
                removeFrom = addAfter(tokenList, removeFrom, before);
                pos += before.length;
              }
              removeRange(tokenList, removeFrom, removeCount);
              var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
              currentNode = addAfter(tokenList, removeFrom, wrapped);
              if (after) {
                addAfter(tokenList, currentNode, after);
              }
              if (removeCount > 1) {
                var nestedRematch = {
                  cause: token + "," + j,
                  reach
                };
                matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                if (rematch && nestedRematch.reach > rematch.reach) {
                  rematch.reach = nestedRematch.reach;
                }
              }
            }
          }
        }
      }
      function LinkedList() {
        var head = { value: null, prev: null, next: null };
        var tail = { value: null, prev: head, next: null };
        head.next = tail;
        this.head = head;
        this.tail = tail;
        this.length = 0;
      }
      function addAfter(list, node, value) {
        var next = node.next;
        var newNode = { value, prev: node, next };
        node.next = newNode;
        next.prev = newNode;
        list.length++;
        return newNode;
      }
      function removeRange(list, node, count) {
        var next = node.next;
        for (var i = 0; i < count && next !== list.tail; i++) {
          next = next.next;
        }
        node.next = next;
        next.prev = node;
        list.length -= i;
      }
      function toArray(list) {
        var array = [];
        var node = list.head.next;
        while (node !== list.tail) {
          array.push(node.value);
          node = node.next;
        }
        return array;
      }
      if (!_self2.document) {
        if (!_self2.addEventListener) {
          return _;
        }
        if (!_.disableWorkerMessageHandler) {
          _self2.addEventListener("message", function(evt) {
            var message = JSON.parse(evt.data);
            var lang2 = message.language;
            var code = message.code;
            var immediateClose = message.immediateClose;
            _self2.postMessage(_.highlight(code, _.languages[lang2], lang2));
            if (immediateClose) {
              _self2.close();
            }
          }, false);
        }
        return _;
      }
      var script = _.util.currentScript();
      if (script) {
        _.filename = script.src;
        if (script.hasAttribute("data-manual")) {
          _.manual = true;
        }
      }
      function highlightAutomaticallyCallback() {
        if (!_.manual) {
          _.highlightAll();
        }
      }
      if (!_.manual) {
        var readyState = document.readyState;
        if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
          document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
        } else {
          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(highlightAutomaticallyCallback);
          } else {
            window.setTimeout(highlightAutomaticallyCallback, 16);
          }
        }
      }
      return _;
    }(_self);
    if (typeof module !== "undefined" && module.exports) {
      module.exports = Prism;
    }
    if (typeof global !== "undefined") {
      global.Prism = Prism;
    }
  }
});
var require_core = __commonJS({
  "../../node_modules/refractor/core.js"(exports, module) {
    var ctx = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof window === "object" ? window : typeof global === "object" ? global : {};
    var restore = capture();
    ctx.Prism = { manual: true, disableWorkerMessageHandler: true };
    var h = require_hastscript();
    var decode = require_parse_entities();
    var Prism = require_prism_core();
    var markup = require_markup();
    var css = require_css();
    var clike = require_clike();
    var js = require_javascript();
    restore();
    var own = {}.hasOwnProperty;
    function Refractor() {
    }
    Refractor.prototype = Prism;
    var refract = new Refractor();
    module.exports = refract;
    refract.highlight = highlight;
    refract.register = register;
    refract.alias = alias;
    refract.registered = registered;
    refract.listLanguages = listLanguages;
    register(markup);
    register(css);
    register(clike);
    register(js);
    refract.util.encode = encode;
    refract.Token.stringify = stringify;
    function register(grammar) {
      if (typeof grammar !== "function" || !grammar.displayName) {
        throw new Error("Expected `function` for `grammar`, got `" + grammar + "`");
      }
      if (refract.languages[grammar.displayName] === void 0) {
        grammar(refract);
      }
    }
    function alias(name, alias2) {
      var languages = refract.languages;
      var map = name;
      var key;
      var list;
      var length;
      var index;
      if (alias2) {
        map = {};
        map[name] = alias2;
      }
      for (key in map) {
        list = map[key];
        list = typeof list === "string" ? [list] : list;
        length = list.length;
        index = -1;
        while (++index < length) {
          languages[list[index]] = languages[key];
        }
      }
    }
    function highlight(value, name) {
      var sup = Prism.highlight;
      var grammar;
      if (typeof value !== "string") {
        throw new Error("Expected `string` for `value`, got `" + value + "`");
      }
      if (refract.util.type(name) === "Object") {
        grammar = name;
        name = null;
      } else {
        if (typeof name !== "string") {
          throw new Error("Expected `string` for `name`, got `" + name + "`");
        }
        if (own.call(refract.languages, name)) {
          grammar = refract.languages[name];
        } else {
          throw new Error("Unknown language: `" + name + "` is not registered");
        }
      }
      return sup.call(this, value, grammar, name);
    }
    function registered(language) {
      if (typeof language !== "string") {
        throw new Error("Expected `string` for `language`, got `" + language + "`");
      }
      return own.call(refract.languages, language);
    }
    function listLanguages() {
      var languages = refract.languages;
      var list = [];
      var language;
      for (language in languages) {
        if (own.call(languages, language) && typeof languages[language] === "object") {
          list.push(language);
        }
      }
      return list;
    }
    function stringify(value, language, parent) {
      var env;
      if (typeof value === "string") {
        return { type: "text", value };
      }
      if (refract.util.type(value) === "Array") {
        return stringifyAll(value, language);
      }
      env = {
        type: value.type,
        content: refract.Token.stringify(value.content, language, parent),
        tag: "span",
        classes: ["token", value.type],
        attributes: {},
        language,
        parent
      };
      if (value.alias) {
        env.classes = env.classes.concat(value.alias);
      }
      refract.hooks.run("wrap", env);
      return h(
        env.tag + "." + env.classes.join("."),
        attributes(env.attributes),
        env.content
      );
    }
    function stringifyAll(values, language) {
      var result = [];
      var length = values.length;
      var index = -1;
      var value;
      while (++index < length) {
        value = values[index];
        if (value !== "" && value !== null && value !== void 0) {
          result.push(value);
        }
      }
      index = -1;
      length = result.length;
      while (++index < length) {
        value = result[index];
        result[index] = refract.Token.stringify(value, language, result);
      }
      return result;
    }
    function encode(tokens) {
      return tokens;
    }
    function attributes(attrs) {
      var key;
      for (key in attrs) {
        attrs[key] = decode(attrs[key]);
      }
      return attrs;
    }
    function capture() {
      var defined = "Prism" in ctx;
      var current = defined ? ctx.Prism : void 0;
      return restore2;
      function restore2() {
        if (defined) {
          ctx.Prism = current;
        } else {
          delete ctx.Prism;
        }
        defined = void 0;
        current = void 0;
      }
    }
  }
});

// ../components/dist/chunk-BGH5QTV4.mjs
var require_bash = __commonJS({
  "../../node_modules/refractor/lang/bash.js"(exports, module) {
    module.exports = bash;
    bash.displayName = "bash";
    bash.aliases = ["shell"];
    function bash(Prism) {
      (function(Prism2) {
        var envVars = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b";
        var commandAfterHeredoc = {
          pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
          lookbehind: true,
          alias: "punctuation",
          // this looks reasonably well in all themes
          inside: null
          // see below
        };
        var insideString = {
          bash: commandAfterHeredoc,
          environment: {
            pattern: RegExp("\\$" + envVars),
            alias: "constant"
          },
          variable: [
            // [0]: Arithmetic Environment
            {
              pattern: /\$?\(\([\s\S]+?\)\)/,
              greedy: true,
              inside: {
                // If there is a $ sign at the beginning highlight $(( and )) as variable
                variable: [
                  {
                    pattern: /(^\$\(\([\s\S]+)\)\)/,
                    lookbehind: true
                  },
                  /^\$\(\(/
                ],
                number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
                operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                // If there is no $ sign at the beginning highlight (( and )) as punctuation
                punctuation: /\(\(?|\)\)?|,|;/
              }
            },
            // [1]: Command Substitution
            {
              pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
              greedy: true,
              inside: {
                variable: /^\$\(|^`|\)$|`$/
              }
            },
            // [2]: Brace expansion
            {
              pattern: /\$\{[^}]+\}/,
              greedy: true,
              inside: {
                operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                punctuation: /[\[\]]/,
                environment: {
                  pattern: RegExp("(\\{)" + envVars),
                  lookbehind: true,
                  alias: "constant"
                }
              }
            },
            /\$(?:\w+|[#?*!@$])/
          ],
          // Escape sequences from echo and printf's manuals, and escaped quotes.
          entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
        };
        Prism2.languages.bash = {
          shebang: {
            pattern: /^#!\s*\/.*/,
            alias: "important"
          },
          comment: {
            pattern: /(^|[^"{\\$])#.*/,
            lookbehind: true
          },
          "function-name": [
            // a) function foo {
            // b) foo() {
            // c) function foo() {
            // but not “foo {”
            {
              // a) and c)
              pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
              lookbehind: true,
              alias: "function"
            },
            {
              // b)
              pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
              alias: "function"
            }
          ],
          // Highlight variable names as variables in for and select beginnings.
          "for-or-select": {
            pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
            alias: "variable",
            lookbehind: true
          },
          // Highlight variable names as variables in the left-hand part
          // of assignments (“=” and “+=”).
          "assign-left": {
            pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
            inside: {
              environment: {
                pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
                lookbehind: true,
                alias: "constant"
              }
            },
            alias: "variable",
            lookbehind: true
          },
          string: [
            // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
            {
              pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
              lookbehind: true,
              greedy: true,
              inside: insideString
            },
            // Here-document with quotes around the tag
            // → No expansion (so no “inside”).
            {
              pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
              lookbehind: true,
              greedy: true,
              inside: {
                bash: commandAfterHeredoc
              }
            },
            // “Normal” string
            {
              // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
              pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
              lookbehind: true,
              greedy: true,
              inside: insideString
            },
            {
              // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
              pattern: /(^|[^$\\])'[^']*'/,
              lookbehind: true,
              greedy: true
            },
            {
              // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
              pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
              greedy: true,
              inside: {
                entity: insideString.entity
              }
            }
          ],
          environment: {
            pattern: RegExp("\\$?" + envVars),
            alias: "constant"
          },
          variable: insideString.variable,
          function: {
            pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
            lookbehind: true
          },
          keyword: {
            pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
            lookbehind: true
          },
          // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
          builtin: {
            pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
            lookbehind: true,
            // Alias added to make those easier to distinguish from strings.
            alias: "class-name"
          },
          boolean: {
            pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
            lookbehind: true
          },
          "file-descriptor": {
            pattern: /\B&\d\b/,
            alias: "important"
          },
          operator: {
            // Lots of redirections here, but not just that.
            pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
            inside: {
              "file-descriptor": {
                pattern: /^\d/,
                alias: "important"
              }
            }
          },
          punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
          number: {
            pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
            lookbehind: true
          }
        };
        commandAfterHeredoc.inside = Prism2.languages.bash;
        var toBeCopied = [
          "comment",
          "function-name",
          "for-or-select",
          "assign-left",
          "string",
          "environment",
          "function",
          "keyword",
          "builtin",
          "boolean",
          "file-descriptor",
          "operator",
          "punctuation",
          "number"
        ];
        var inside = insideString.variable[1].inside;
        for (var i = 0; i < toBeCopied.length; i++) {
          inside[toBeCopied[i]] = Prism2.languages.bash[toBeCopied[i]];
        }
        Prism2.languages.shell = Prism2.languages.bash;
      })(Prism);
    }
  }
});

// ../components/dist/chunk-NHPQMEZW.mjs
var require_js_extras = __commonJS({
  "../../node_modules/refractor/lang/js-extras.js"(exports, module) {
    module.exports = jsExtras;
    jsExtras.displayName = "jsExtras";
    jsExtras.aliases = [];
    function jsExtras(Prism) {
      (function(Prism2) {
        Prism2.languages.insertBefore("javascript", "function-variable", {
          "method-variable": {
            pattern: RegExp(
              "(\\.\\s*)" + Prism2.languages.javascript["function-variable"].pattern.source
            ),
            lookbehind: true,
            alias: ["function-variable", "method", "function", "property-access"]
          }
        });
        Prism2.languages.insertBefore("javascript", "function", {
          method: {
            pattern: RegExp(
              "(\\.\\s*)" + Prism2.languages.javascript["function"].source
            ),
            lookbehind: true,
            alias: ["function", "property-access"]
          }
        });
        Prism2.languages.insertBefore("javascript", "constant", {
          "known-class-name": [
            {
              // standard built-ins
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
              pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
              alias: "class-name"
            },
            {
              // errors
              pattern: /\b(?:[A-Z]\w*)Error\b/,
              alias: "class-name"
            }
          ]
        });
        function withId(source, flags) {
          return RegExp(
            source.replace(/<ID>/g, function() {
              return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
            }),
            flags
          );
        }
        Prism2.languages.insertBefore("javascript", "keyword", {
          imports: {
            // https://tc39.es/ecma262/#sec-imports
            pattern: withId(
              /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source
            ),
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          exports: {
            // https://tc39.es/ecma262/#sec-exports
            pattern: withId(
              /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source
            ),
            lookbehind: true,
            inside: Prism2.languages.javascript
          }
        });
        Prism2.languages.javascript["keyword"].unshift(
          {
            pattern: /\b(?:as|default|export|from|import)\b/,
            alias: "module"
          },
          {
            pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
            alias: "control-flow"
          },
          {
            pattern: /\bnull\b/,
            alias: ["null", "nil"]
          },
          {
            pattern: /\bundefined\b/,
            alias: "nil"
          }
        );
        Prism2.languages.insertBefore("javascript", "operator", {
          spread: {
            pattern: /\.{3}/,
            alias: "operator"
          },
          arrow: {
            pattern: /=>/,
            alias: "operator"
          }
        });
        Prism2.languages.insertBefore("javascript", "punctuation", {
          "property-access": {
            pattern: withId(/(\.\s*)#?<ID>/.source),
            lookbehind: true
          },
          "maybe-class-name": {
            pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
            lookbehind: true
          },
          dom: {
            // this contains only a few commonly used DOM variables
            pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
            alias: "variable"
          },
          console: {
            pattern: /\bconsole(?=\s*\.)/,
            alias: "class-name"
          }
        });
        var maybeClassNameTokens = [
          "function",
          "function-variable",
          "method",
          "method-variable",
          "property-access"
        ];
        for (var i = 0; i < maybeClassNameTokens.length; i++) {
          var token = maybeClassNameTokens[i];
          var value = Prism2.languages.javascript[token];
          if (Prism2.util.type(value) === "RegExp") {
            value = Prism2.languages.javascript[token] = {
              pattern: value
            };
          }
          var inside = value.inside || {};
          value.inside = inside;
          inside["maybe-class-name"] = /^[A-Z][\s\S]*/;
        }
      })(Prism);
    }
  }
});

// ../components/dist/chunk-LH6TNZSM.mjs
var require_json = __commonJS({
  "../../node_modules/refractor/lang/json.js"(exports, module) {
    module.exports = json;
    json.displayName = "json";
    json.aliases = ["webmanifest"];
    function json(Prism) {
      Prism.languages.json = {
        property: {
          pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
          lookbehind: true,
          greedy: true
        },
        string: {
          pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
          lookbehind: true,
          greedy: true
        },
        comment: {
          pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
          greedy: true
        },
        number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
        punctuation: /[{}[\],]/,
        operator: /:/,
        boolean: /\b(?:false|true)\b/,
        null: {
          pattern: /\bnull\b/,
          alias: "keyword"
        }
      };
      Prism.languages.webmanifest = Prism.languages.json;
    }
  }
});

// ../components/dist/chunk-5ZLMS45J.mjs
var require_graphql = __commonJS({
  "../../node_modules/refractor/lang/graphql.js"(exports, module) {
    module.exports = graphql;
    graphql.displayName = "graphql";
    graphql.aliases = [];
    function graphql(Prism) {
      Prism.languages.graphql = {
        comment: /#.*/,
        description: {
          pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
          greedy: true,
          alias: "string",
          inside: {
            "language-markdown": {
              pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
              lookbehind: true,
              inside: Prism.languages.markdown
            }
          }
        },
        string: {
          pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
          greedy: true
        },
        number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
        boolean: /\b(?:false|true)\b/,
        variable: /\$[a-z_]\w*/i,
        directive: {
          pattern: /@[a-z_]\w*/i,
          alias: "function"
        },
        "attr-name": {
          pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
          greedy: true
        },
        "atom-input": {
          pattern: /\b[A-Z]\w*Input\b/,
          alias: "class-name"
        },
        scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
        constant: /\b[A-Z][A-Z_\d]*\b/,
        "class-name": {
          pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
          lookbehind: true
        },
        fragment: {
          pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
          lookbehind: true,
          alias: "function"
        },
        "definition-mutation": {
          pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
          lookbehind: true,
          alias: "function"
        },
        "definition-query": {
          pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
          lookbehind: true,
          alias: "function"
        },
        keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
        operator: /[!=|&]|\.{3}/,
        "property-query": /\w+(?=\s*\()/,
        object: /\w+(?=\s*\{)/,
        punctuation: /[!(){}\[\]:=,]/,
        property: /\w+/
      };
      Prism.hooks.add("after-tokenize", function afterTokenizeGraphql(env) {
        if (env.language !== "graphql") {
          return;
        }
        var validTokens = env.tokens.filter(function(token) {
          return typeof token !== "string" && token.type !== "comment" && token.type !== "scalar";
        });
        var currentIndex = 0;
        function getToken(offset) {
          return validTokens[currentIndex + offset];
        }
        function isTokenType(types, offset) {
          offset = offset || 0;
          for (var i2 = 0; i2 < types.length; i2++) {
            var token = getToken(i2 + offset);
            if (!token || token.type !== types[i2]) {
              return false;
            }
          }
          return true;
        }
        function findClosingBracket(open, close) {
          var stackHeight = 1;
          for (var i2 = currentIndex; i2 < validTokens.length; i2++) {
            var token = validTokens[i2];
            var content = token.content;
            if (token.type === "punctuation" && typeof content === "string") {
              if (open.test(content)) {
                stackHeight++;
              } else if (close.test(content)) {
                stackHeight--;
                if (stackHeight === 0) {
                  return i2;
                }
              }
            }
          }
          return -1;
        }
        function addAlias(token, alias) {
          var aliases = token.alias;
          if (!aliases) {
            token.alias = aliases = [];
          } else if (!Array.isArray(aliases)) {
            token.alias = aliases = [aliases];
          }
          aliases.push(alias);
        }
        for (; currentIndex < validTokens.length; ) {
          var startToken = validTokens[currentIndex++];
          if (startToken.type === "keyword" && startToken.content === "mutation") {
            var inputVariables = [];
            if (isTokenType(["definition-mutation", "punctuation"]) && getToken(1).content === "(") {
              currentIndex += 2;
              var definitionEnd = findClosingBracket(/^\($/, /^\)$/);
              if (definitionEnd === -1) {
                continue;
              }
              for (; currentIndex < definitionEnd; currentIndex++) {
                var t = getToken(0);
                if (t.type === "variable") {
                  addAlias(t, "variable-input");
                  inputVariables.push(t.content);
                }
              }
              currentIndex = definitionEnd + 1;
            }
            if (isTokenType(["punctuation", "property-query"]) && getToken(0).content === "{") {
              currentIndex++;
              addAlias(getToken(0), "property-mutation");
              if (inputVariables.length > 0) {
                var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);
                if (mutationEnd === -1) {
                  continue;
                }
                for (var i = currentIndex; i < mutationEnd; i++) {
                  var varToken = validTokens[i];
                  if (varToken.type === "variable" && inputVariables.indexOf(varToken.content) >= 0) {
                    addAlias(varToken, "variable-input");
                  }
                }
              }
            }
          }
        }
      });
    }
  }
});

// ../components/dist/chunk-7ISYH4BR.mjs
var import_react = __toESM(require_react(), 1);
var import_memoizerific = __toESM(require_memoizerific(), 1);
var import_jsx = __toESM2(require_jsx());
var jsx_default = import_jsx.default;
var import_bash = __toESM2(require_bash());
var bash_default = import_bash.default;
var import_css = __toESM2(require_css());
var css_default = import_css.default;
var import_js_extras = __toESM2(require_js_extras());
var js_extras_default = import_js_extras.default;
var import_json = __toESM2(require_json());
var json_default = import_json.default;
var import_graphql = __toESM2(require_graphql());
var graphql_default = import_graphql.default;
var import_markup = __toESM2(require_markup());
var markup_default = import_markup.default;
var import_markdown = __toESM2(require_markdown());
var markdown_default = import_markdown.default;
var import_yaml = __toESM2(require_yaml());
var yaml_default = import_yaml.default;
var import_tsx = __toESM2(require_tsx());
var tsx_default = import_tsx.default;
var import_typescript = __toESM2(require_typescript());
var typescript_default = import_typescript.default;
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function powerSetPermutations(arr) {
  var arrLength = arr.length;
  if (arrLength === 0 || arrLength === 1)
    return arr;
  if (arrLength === 2) {
    return [arr[0], arr[1], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0])];
  }
  if (arrLength === 3) {
    return [arr[0], arr[1], arr[2], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }
  if (arrLength >= 4) {
    return [arr[0], arr[1], arr[2], arr[3], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3]), "".concat(arr[3], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }
}
var classNameCombinations = {};
function getClassNameCombinations(classNames) {
  if (classNames.length === 0 || classNames.length === 1)
    return classNames;
  var key = classNames.join(".");
  if (!classNameCombinations[key]) {
    classNameCombinations[key] = powerSetPermutations(classNames);
  }
  return classNameCombinations[key];
}
function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var stylesheet = arguments.length > 2 ? arguments[2] : void 0;
  var nonTokenClassNames = classNames.filter(function(className) {
    return className !== "token";
  });
  var classNamesCombinations = getClassNameCombinations(nonTokenClassNames);
  return classNamesCombinations.reduce(function(styleObject, className) {
    return _objectSpread(_objectSpread({}, styleObject), stylesheet[className]);
  }, elementStyle);
}
function createClassNameString(classNames) {
  return classNames.join(" ");
}
function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function(children) {
    childrenCount += 1;
    return children.map(function(child, i) {
      return createElement({
        node: child,
        stylesheet,
        useInlineStyles,
        key: "code-segment-".concat(childrenCount, "-").concat(i)
      });
    });
  };
}
function createElement(_ref) {
  var node = _ref.node, stylesheet = _ref.stylesheet, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, useInlineStyles = _ref.useInlineStyles, key = _ref.key;
  var properties = node.properties, type = node.type, TagName = node.tagName, value = node.value;
  if (type === "text") {
    return value;
  } else if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles);
    var props;
    if (!useInlineStyles) {
      props = _objectSpread(_objectSpread({}, properties), {}, {
        className: createClassNameString(properties.className)
      });
    } else {
      var allStylesheetSelectors = Object.keys(stylesheet).reduce(function(classes, selector) {
        selector.split(".").forEach(function(className2) {
          if (!classes.includes(className2))
            classes.push(className2);
        });
        return classes;
      }, []);
      var startingClassName = properties.className && properties.className.includes("token") ? ["token"] : [];
      var className = properties.className && startingClassName.concat(properties.className.filter(function(className2) {
        return !allStylesheetSelectors.includes(className2);
      }));
      props = _objectSpread(_objectSpread({}, properties), {}, {
        className: createClassNameString(className) || void 0,
        style: createStyleObject(properties.className, Object.assign({}, properties.style, style), stylesheet)
      });
    }
    var children = childrenCreator(node.children);
    return /* @__PURE__ */ import_react.default.createElement(TagName, _extends({
      key
    }, props), children);
  }
}
var checkForListedLanguage_default = function(astGenerator, language) {
  var langs = astGenerator.listLanguages();
  return langs.indexOf(language) !== -1;
};
var _excluded = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var newLineRegex = /\n/g;
function getNewLines(str) {
  return str.match(newLineRegex);
}
function getAllLineNumbers(_ref) {
  var lines = _ref.lines, startingLineNumber = _ref.startingLineNumber, style = _ref.style;
  return lines.map(function(_, i) {
    var number = i + startingLineNumber;
    return /* @__PURE__ */ import_react.default.createElement("span", {
      key: "line-".concat(i),
      className: "react-syntax-highlighter-line-number",
      style: typeof style === "function" ? style(number) : style
    }, "".concat(number, "\n"));
  });
}
function AllLineNumbers(_ref2) {
  var codeString = _ref2.codeString, codeStyle = _ref2.codeStyle, _ref2$containerStyle = _ref2.containerStyle, containerStyle = _ref2$containerStyle === void 0 ? {
    "float": "left",
    paddingRight: "10px"
  } : _ref2$containerStyle, _ref2$numberStyle = _ref2.numberStyle, numberStyle = _ref2$numberStyle === void 0 ? {} : _ref2$numberStyle, startingLineNumber = _ref2.startingLineNumber;
  return /* @__PURE__ */ import_react.default.createElement("code", {
    style: Object.assign({}, codeStyle, containerStyle)
  }, getAllLineNumbers({
    lines: codeString.replace(/\n$/, "").split("\n"),
    style: numberStyle,
    startingLineNumber
  }));
}
function getEmWidthOfNumber(num) {
  return "".concat(num.toString().length, ".25em");
}
function getInlineLineNumber(lineNumber, inlineLineNumberStyle) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      key: "line-number--".concat(lineNumber),
      className: ["comment", "linenumber", "react-syntax-highlighter-line-number"],
      style: inlineLineNumberStyle
    },
    children: [{
      type: "text",
      value: lineNumber
    }]
  };
}
function assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber) {
  var defaultLineNumberStyle = {
    display: "inline-block",
    minWidth: getEmWidthOfNumber(largestLineNumber),
    paddingRight: "1em",
    textAlign: "right",
    userSelect: "none"
  };
  var customLineNumberStyle = typeof lineNumberStyle === "function" ? lineNumberStyle(lineNumber) : lineNumberStyle;
  var assembledStyle = _objectSpread2(_objectSpread2({}, defaultLineNumberStyle), customLineNumberStyle);
  return assembledStyle;
}
function createLineElement(_ref3) {
  var children = _ref3.children, lineNumber = _ref3.lineNumber, lineNumberStyle = _ref3.lineNumberStyle, largestLineNumber = _ref3.largestLineNumber, showInlineLineNumbers = _ref3.showInlineLineNumbers, _ref3$lineProps = _ref3.lineProps, lineProps = _ref3$lineProps === void 0 ? {} : _ref3$lineProps, _ref3$className = _ref3.className, className = _ref3$className === void 0 ? [] : _ref3$className, showLineNumbers = _ref3.showLineNumbers, wrapLongLines = _ref3.wrapLongLines;
  var properties = typeof lineProps === "function" ? lineProps(lineNumber) : lineProps;
  properties["className"] = className;
  if (lineNumber && showInlineLineNumbers) {
    var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
    children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
  }
  if (wrapLongLines & showLineNumbers) {
    properties.style = _objectSpread2(_objectSpread2({}, properties.style), {}, {
      display: "flex"
    });
  }
  return {
    type: "element",
    tagName: "span",
    properties,
    children
  };
}
function flattenCodeTree(tree) {
  var className = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var newTree = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];
    if (node.type === "text") {
      newTree.push(createLineElement({
        children: [node],
        className: _toConsumableArray(new Set(className))
      }));
    } else if (node.children) {
      var classNames = className.concat(node.properties.className);
      flattenCodeTree(node.children, classNames).forEach(function(i2) {
        return newTree.push(i2);
      });
    }
  }
  return newTree;
}
function processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines) {
  var _ref4;
  var tree = flattenCodeTree(codeTree.value);
  var newTree = [];
  var lastLineBreakIndex = -1;
  var index = 0;
  function createWrappedLine(children2, lineNumber2) {
    var className = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return createLineElement({
      children: children2,
      lineNumber: lineNumber2,
      lineNumberStyle,
      largestLineNumber,
      showInlineLineNumbers,
      lineProps,
      className,
      showLineNumbers,
      wrapLongLines
    });
  }
  function createUnwrappedLine(children2, lineNumber2) {
    if (showLineNumbers && lineNumber2 && showInlineLineNumbers) {
      var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber2, largestLineNumber);
      children2.unshift(getInlineLineNumber(lineNumber2, inlineLineNumberStyle));
    }
    return children2;
  }
  function createLine(children2, lineNumber2) {
    var className = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return wrapLines || className.length > 0 ? createWrappedLine(children2, lineNumber2, className) : createUnwrappedLine(children2, lineNumber2);
  }
  var _loop = function _loop2() {
    var node = tree[index];
    var value = node.children[0].value;
    var newLines = getNewLines(value);
    if (newLines) {
      var splitValue = value.split("\n");
      splitValue.forEach(function(text, i) {
        var lineNumber2 = showLineNumbers && newTree.length + startingLineNumber;
        var newChild = {
          type: "text",
          value: "".concat(text, "\n")
        };
        if (i === 0) {
          var _children = tree.slice(lastLineBreakIndex + 1, index).concat(createLineElement({
            children: [newChild],
            className: node.properties.className
          }));
          var _line = createLine(_children, lineNumber2);
          newTree.push(_line);
        } else if (i === splitValue.length - 1) {
          var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];
          var lastLineInPreviousSpan = {
            type: "text",
            value: "".concat(text)
          };
          if (stringChild) {
            var newElem = createLineElement({
              children: [lastLineInPreviousSpan],
              className: node.properties.className
            });
            tree.splice(index + 1, 0, newElem);
          } else {
            var _children2 = [lastLineInPreviousSpan];
            var _line2 = createLine(_children2, lineNumber2, node.properties.className);
            newTree.push(_line2);
          }
        } else {
          var _children3 = [newChild];
          var _line3 = createLine(_children3, lineNumber2, node.properties.className);
          newTree.push(_line3);
        }
      });
      lastLineBreakIndex = index;
    }
    index++;
  };
  while (index < tree.length) {
    _loop();
  }
  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);
    if (children && children.length) {
      var lineNumber = showLineNumbers && newTree.length + startingLineNumber;
      var line = createLine(children, lineNumber);
      newTree.push(line);
    }
  }
  return wrapLines ? newTree : (_ref4 = []).concat.apply(_ref4, newTree);
}
function defaultRenderer(_ref5) {
  var rows = _ref5.rows, stylesheet = _ref5.stylesheet, useInlineStyles = _ref5.useInlineStyles;
  return rows.map(function(node, i) {
    return createElement({
      node,
      stylesheet,
      useInlineStyles,
      key: "code-segement".concat(i)
    });
  });
}
function isHighlightJs(astGenerator) {
  return astGenerator && typeof astGenerator.highlightAuto !== "undefined";
}
function getCodeTree(_ref6) {
  var astGenerator = _ref6.astGenerator, language = _ref6.language, code = _ref6.code, defaultCodeValue = _ref6.defaultCodeValue;
  if (isHighlightJs(astGenerator)) {
    var hasLanguage = checkForListedLanguage_default(astGenerator, language);
    if (language === "text") {
      return {
        value: defaultCodeValue,
        language: "text"
      };
    } else if (hasLanguage) {
      return astGenerator.highlight(language, code);
    } else {
      return astGenerator.highlightAuto(code);
    }
  }
  try {
    return language && language !== "text" ? {
      value: astGenerator.highlight(code, language)
    } : {
      value: defaultCodeValue
    };
  } catch (e) {
    return {
      value: defaultCodeValue
    };
  }
}
function highlight_default(defaultAstGenerator, defaultStyle) {
  return function SyntaxHighlighter3(_ref7) {
    var language = _ref7.language, children = _ref7.children, _ref7$style = _ref7.style, style = _ref7$style === void 0 ? defaultStyle : _ref7$style, _ref7$customStyle = _ref7.customStyle, customStyle = _ref7$customStyle === void 0 ? {} : _ref7$customStyle, _ref7$codeTagProps = _ref7.codeTagProps, codeTagProps = _ref7$codeTagProps === void 0 ? {
      className: language ? "language-".concat(language) : void 0,
      style: _objectSpread2(_objectSpread2({}, style['code[class*="language-"]']), style['code[class*="language-'.concat(language, '"]')])
    } : _ref7$codeTagProps, _ref7$useInlineStyles = _ref7.useInlineStyles, useInlineStyles = _ref7$useInlineStyles === void 0 ? true : _ref7$useInlineStyles, _ref7$showLineNumbers = _ref7.showLineNumbers, showLineNumbers = _ref7$showLineNumbers === void 0 ? false : _ref7$showLineNumbers, _ref7$showInlineLineN = _ref7.showInlineLineNumbers, showInlineLineNumbers = _ref7$showInlineLineN === void 0 ? true : _ref7$showInlineLineN, _ref7$startingLineNum = _ref7.startingLineNumber, startingLineNumber = _ref7$startingLineNum === void 0 ? 1 : _ref7$startingLineNum, lineNumberContainerStyle = _ref7.lineNumberContainerStyle, _ref7$lineNumberStyle = _ref7.lineNumberStyle, lineNumberStyle = _ref7$lineNumberStyle === void 0 ? {} : _ref7$lineNumberStyle, wrapLines = _ref7.wrapLines, _ref7$wrapLongLines = _ref7.wrapLongLines, wrapLongLines = _ref7$wrapLongLines === void 0 ? false : _ref7$wrapLongLines, _ref7$lineProps = _ref7.lineProps, lineProps = _ref7$lineProps === void 0 ? {} : _ref7$lineProps, renderer = _ref7.renderer, _ref7$PreTag = _ref7.PreTag, PreTag = _ref7$PreTag === void 0 ? "pre" : _ref7$PreTag, _ref7$CodeTag = _ref7.CodeTag, CodeTag = _ref7$CodeTag === void 0 ? "code" : _ref7$CodeTag, _ref7$code = _ref7.code, code = _ref7$code === void 0 ? (Array.isArray(children) ? children[0] : children) || "" : _ref7$code, astGenerator = _ref7.astGenerator, rest = _objectWithoutProperties(_ref7, _excluded);
    astGenerator = astGenerator || defaultAstGenerator;
    var allLineNumbers = showLineNumbers ? /* @__PURE__ */ import_react.default.createElement(AllLineNumbers, {
      containerStyle: lineNumberContainerStyle,
      codeStyle: codeTagProps.style || {},
      numberStyle: lineNumberStyle,
      startingLineNumber,
      codeString: code
    }) : null;
    var defaultPreStyle = style.hljs || style['pre[class*="language-"]'] || {
      backgroundColor: "#fff"
    };
    var generatorClassName = isHighlightJs(astGenerator) ? "hljs" : "prismjs";
    var preProps = useInlineStyles ? Object.assign({}, rest, {
      style: Object.assign({}, defaultPreStyle, customStyle)
    }) : Object.assign({}, rest, {
      className: rest.className ? "".concat(generatorClassName, " ").concat(rest.className) : generatorClassName,
      style: Object.assign({}, customStyle)
    });
    if (wrapLongLines) {
      codeTagProps.style = _objectSpread2(_objectSpread2({}, codeTagProps.style), {}, {
        whiteSpace: "pre-wrap"
      });
    } else {
      codeTagProps.style = _objectSpread2(_objectSpread2({}, codeTagProps.style), {}, {
        whiteSpace: "pre"
      });
    }
    if (!astGenerator) {
      return /* @__PURE__ */ import_react.default.createElement(PreTag, preProps, allLineNumbers, /* @__PURE__ */ import_react.default.createElement(CodeTag, codeTagProps, code));
    }
    if (wrapLines === void 0 && renderer || wrapLongLines)
      wrapLines = true;
    renderer = renderer || defaultRenderer;
    var defaultCodeValue = [{
      type: "text",
      value: code
    }];
    var codeTree = getCodeTree({
      astGenerator,
      language,
      code,
      defaultCodeValue
    });
    if (codeTree.language === null) {
      codeTree.value = defaultCodeValue;
    }
    var largestLineNumber = codeTree.value.length + startingLineNumber;
    var rows = processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines);
    return /* @__PURE__ */ import_react.default.createElement(PreTag, preProps, /* @__PURE__ */ import_react.default.createElement(CodeTag, codeTagProps, !showInlineLineNumbers && allLineNumbers, renderer({
      rows,
      stylesheet: style,
      useInlineStyles
    })));
  };
}
var import_core = __toESM2(require_core());
var SyntaxHighlighter = highlight_default(import_core.default, {});
SyntaxHighlighter.registerLanguage = function(_, language) {
  return import_core.default.register(language);
};
SyntaxHighlighter.alias = function(name, aliases) {
  return import_core.default.alias(name, aliases);
};
var prism_light_default = SyntaxHighlighter;
var Container = emotion_styled_browser_esm_default.div(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  right: 0,
  maxWidth: "100%",
  display: "flex",
  background: theme.background.content,
  zIndex: 1
}));
var ActionButton = emotion_styled_browser_esm_default.button(
  ({ theme }) => ({
    margin: 0,
    border: "0 none",
    padding: "4px 10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    color: theme.color.defaultText,
    background: theme.background.content,
    fontSize: 12,
    lineHeight: "16px",
    fontFamily: theme.typography.fonts.base,
    fontWeight: theme.typography.weight.bold,
    borderTop: `1px solid ${theme.appBorderColor}`,
    borderLeft: `1px solid ${theme.appBorderColor}`,
    marginLeft: -1,
    borderRadius: `4px 0 0 0`,
    "&:not(:last-child)": { borderRight: `1px solid ${theme.appBorderColor}` },
    "& + *": {
      borderLeft: `1px solid ${theme.appBorderColor}`,
      borderRadius: 0
    },
    "&:focus": {
      boxShadow: `${theme.color.secondary} 0 -3px 0 0 inset`,
      outline: "0 none"
    }
  }),
  ({ disabled }) => disabled && {
    cursor: "not-allowed",
    opacity: 0.5
  }
);
ActionButton.displayName = "ActionButton";
var ActionBar = ({ actionItems, ...props }) => /* @__PURE__ */ import_react.default.createElement(Container, { ...props }, actionItems.map(({ title, className, onClick, disabled }, index) => (
  // eslint-disable-next-line react/no-array-index-key
  /* @__PURE__ */ import_react.default.createElement(ActionButton, { key: index, className, onClick, disabled }, title)
)));
var GlobalScrollAreaStyles = (0, import_react.lazy)(() => import("./GlobalScrollAreaStyles-YFIFAIPR-3MLFHGJA.js"));
var OverlayScrollbars = (0, import_react.lazy)(() => import("./OverlayScrollbars-2JE4ZOJV-M6YO4FU6.js"));
var Scroller = ({ horizontal, vertical, ...props }) => /* @__PURE__ */ import_react.default.createElement(import_react.Suspense, { fallback: /* @__PURE__ */ import_react.default.createElement("div", { ...props }) }, /* @__PURE__ */ import_react.default.createElement(GlobalScrollAreaStyles, null), /* @__PURE__ */ import_react.default.createElement(OverlayScrollbars, { options: { scrollbars: { autoHide: "leave" } }, ...props }));
var ScrollArea = emotion_styled_browser_esm_default(Scroller)(
  ({ vertical }) => !vertical ? { overflowY: "hidden" } : { overflowY: "auto", height: "100%" },
  ({ horizontal }) => !horizontal ? { overflowX: "hidden" } : { overflowX: "auto", width: "100%" }
);
ScrollArea.defaultProps = {
  horizontal: false,
  vertical: false
};
var { navigator, document: document2, window: globalWindow } = scope;
prism_light_default.registerLanguage("jsextra", js_extras_default);
prism_light_default.registerLanguage("jsx", jsx_default);
prism_light_default.registerLanguage("json", json_default);
prism_light_default.registerLanguage("yml", yaml_default);
prism_light_default.registerLanguage("md", markdown_default);
prism_light_default.registerLanguage("bash", bash_default);
prism_light_default.registerLanguage("css", css_default);
prism_light_default.registerLanguage("html", markup_default);
prism_light_default.registerLanguage("tsx", tsx_default);
prism_light_default.registerLanguage("typescript", typescript_default);
prism_light_default.registerLanguage("graphql", graphql_default);
var themedSyntax = (0, import_memoizerific.default)(2)(
  (theme) => Object.entries(theme.code || {}).reduce((acc, [key, val]) => ({ ...acc, [`* .${key}`]: val }), {})
);
var copyToClipboard = createCopyToClipboardFunction();
function createCopyToClipboardFunction() {
  if (navigator?.clipboard) {
    return (text) => navigator.clipboard.writeText(text);
  }
  return async (text) => {
    const tmp = document2.createElement("TEXTAREA");
    const focus = document2.activeElement;
    tmp.value = text;
    document2.body.appendChild(tmp);
    tmp.select();
    document2.execCommand("copy");
    document2.body.removeChild(tmp);
    focus.focus();
  };
}
var Wrapper = emotion_styled_browser_esm_default.div(
  ({ theme }) => ({
    position: "relative",
    overflow: "hidden",
    color: theme.color.defaultText
  }),
  ({ theme, bordered }) => bordered ? {
    border: `1px solid ${theme.appBorderColor}`,
    borderRadius: theme.borderRadius,
    background: theme.background.content
  } : {},
  ({ showLineNumbers }) => showLineNumbers ? {
    // use the before pseudo element to display line numbers
    ".react-syntax-highlighter-line-number::before": {
      content: "attr(data-line-number)"
    }
  } : {}
);
var UnstyledScroller = ({
  children,
  className
}) => /* @__PURE__ */ import_react.default.createElement(ScrollArea, { horizontal: true, vertical: true, className }, children);
var Scroller2 = emotion_styled_browser_esm_default(UnstyledScroller)(
  {
    position: "relative"
  },
  ({ theme }) => themedSyntax(theme)
);
var Pre = emotion_styled_browser_esm_default.pre(({ theme, padded }) => ({
  display: "flex",
  justifyContent: "flex-start",
  margin: 0,
  padding: padded ? theme.layoutMargin : 0
}));
var Code = emotion_styled_browser_esm_default.div(({ theme }) => ({
  flex: 1,
  paddingLeft: 2,
  // TODO: To match theming/global.ts for now
  paddingRight: theme.layoutMargin,
  opacity: 1
}));
var processLineNumber = (row) => {
  const children = [...row.children];
  const lineNumberNode = children[0];
  const lineNumber = lineNumberNode.children[0].value;
  const processedLineNumberNode = {
    ...lineNumberNode,
    // empty the line-number element
    children: [],
    properties: {
      ...lineNumberNode.properties,
      // add a data-line-number attribute to line-number element, so we can access the line number with `content: attr(data-line-number)`
      "data-line-number": lineNumber,
      // remove the 'userSelect: none' style, which will produce extra empty lines when copy-pasting in firefox
      style: { ...lineNumberNode.properties.style, userSelect: "auto" }
    }
  };
  children[0] = processedLineNumberNode;
  return { ...row, children };
};
var defaultRenderer2 = ({ rows, stylesheet, useInlineStyles }) => {
  return rows.map((node, i) => {
    return createElement({
      node: processLineNumber(node),
      stylesheet,
      useInlineStyles,
      key: `code-segement${i}`
    });
  });
};
var wrapRenderer = (renderer, showLineNumbers) => {
  if (!showLineNumbers) {
    return renderer;
  }
  if (renderer) {
    return ({ rows, ...rest }) => renderer({ rows: rows.map((row) => processLineNumber(row)), ...rest });
  }
  return defaultRenderer2;
};
var SyntaxHighlighter2 = ({
  children,
  language = "jsx",
  copyable = false,
  bordered = false,
  padded = false,
  format = true,
  formatter = null,
  className = null,
  showLineNumbers = false,
  ...rest
}) => {
  if (typeof children !== "string" || !children.trim()) {
    return null;
  }
  const highlightableCode = formatter ? formatter(format, children) : children.trim();
  const [copied, setCopied] = (0, import_react.useState)(false);
  const onClick = (0, import_react.useCallback)(
    (e) => {
      e.preventDefault();
      copyToClipboard(highlightableCode).then(() => {
        setCopied(true);
        globalWindow.setTimeout(() => setCopied(false), 1500);
      }).catch(logger.error);
    },
    [highlightableCode]
  );
  const renderer = wrapRenderer(rest.renderer, showLineNumbers);
  return /* @__PURE__ */ import_react.default.createElement(
    Wrapper,
    {
      bordered,
      padded,
      showLineNumbers,
      className
    },
    /* @__PURE__ */ import_react.default.createElement(Scroller2, null, /* @__PURE__ */ import_react.default.createElement(
      prism_light_default,
      {
        padded: padded || bordered,
        language,
        showLineNumbers,
        showInlineLineNumbers: showLineNumbers,
        useInlineStyles: false,
        PreTag: Pre,
        CodeTag: Code,
        lineNumberContainerStyle: {},
        ...rest,
        renderer
      },
      highlightableCode
    )),
    copyable ? /* @__PURE__ */ import_react.default.createElement(ActionBar, { actionItems: [{ title: copied ? "Copied" : "Copy", onClick }] }) : null
  );
};
var syntaxhighlighter_default = SyntaxHighlighter2;

export {
  ActionBar,
  ScrollArea,
  createCopyToClipboardFunction,
  SyntaxHighlighter2,
  syntaxhighlighter_default
};
