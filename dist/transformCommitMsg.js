"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.gitMojiToCC=exports.addCCPrefix=exports.addGitmoji=void 0;var _extendGitmoji=require("./extendGitmoji.js"),addGitmoji=function(){}// will be used for git-cz, commitlint, changelog, usw
// tbd: replace body
;exports.addGitmoji=addGitmoji;var addCCPrefix=function(){};exports.addCCPrefix=addCCPrefix;var gitMojiToCC=function(a){var b,c,d=a.name,e=a.emoji,f=_extendGitmoji.mappedConfig[d];return null==f?e:(b=f.cc_prefix,b=f.cc_prefix,null==b)?e:(c="".concat(b,"(").concat(e,"):"),c)};exports.gitMojiToCC=gitMojiToCC;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc2Zvcm1Db21taXRNc2cuanMiXSwibmFtZXMiOlsiYWRkR2l0bW9qaSIsImFkZENDUHJlZml4IiwiZ2l0TW9qaVRvQ0MiLCJwcmVmaXgiLCJ0aXRsZVByZWZpeCIsIm5hbWUiLCJlbW9qaSIsImVtb2ppRXh0ZW5kZWQiLCJtYXBwZWRDb25maWciLCJjY19wcmVmaXgiXSwibWFwcGluZ3MiOiJ1TEFFYUEsVUFBVSxDQUFHLFVBQU0sQ0FFL0IsQ0FERztBQUdKOytCQUNPLEdBQU1DLENBQUFBLFdBQVcsQ0FBRyxVQUFzQixDQUVoRCxDQUZNLEMsZ0NBSUEsR0FBTUMsQ0FBQUEsV0FBVyxDQUFHLFdBQW1DLElBRXREQyxDQUFBQSxDQUZzRCxDQUU5Q0MsQ0FGOEMsQ0FBakNDLENBQWlDLEdBQWpDQSxJQUFpQyxDQUEzQkMsQ0FBMkIsR0FBM0JBLEtBQTJCLENBQ3REQyxDQUFhLENBQUdDLDRCQUFhSCxDQUFiLENBRHNDLE9BSXJDLEtBQWpCLEVBQUFFLENBSnNELENBSy9DRCxDQUwrQyxFQVExREgsQ0FBTSxDQUFHSSxDQUFhLENBQUNFLFNBUm1DLENBYTFETixDQUFNLENBQUdJLENBQWEsQ0FBQ0UsU0FibUMsQ0FlNUMsSUFBVixFQUFBTixDQWZzRCxFQWdCL0NHLENBaEIrQyxFQW1CMURGLENBQVcsV0FBTUQsQ0FBTixhQUFnQkcsQ0FBaEIsTUFuQitDLENBcUJuREYsQ0FyQm1ELENBc0I3RCxDQXRCTSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttYXBwZWRDb25maWd9IGZyb20gJy4vZXh0ZW5kR2l0bW9qaS5qcydcblxuZXhwb3J0IGNvbnN0IGFkZEdpdG1vamkgPSAoKSA9PiB7XG4gICAgLy8gd2lsbCBiZSB1c2VkIGZvciBnaXQtY3osIGNvbW1pdGxpbnQsIGNoYW5nZWxvZywgdXN3XG59XG5cbi8vIHRiZDogcmVwbGFjZSBib2R5XG5leHBvcnQgY29uc3QgYWRkQ0NQcmVmaXggPSAoY29tbWl0TXNnLCBlbW9qaSkgPT4ge1xuXG59XG5cbmV4cG9ydCBjb25zdCBnaXRNb2ppVG9DQyA9ICh7bmFtZSwgZW1vaml9LCBleHRlbmRlZENvbmZpZykgPT4ge1xuICAgIGxldCBlbW9qaUV4dGVuZGVkID0gbWFwcGVkQ29uZmlnW25hbWVdLFxuICAgICAgICBwcmVmaXgsIHRpdGxlUHJlZml4XG5cbiAgICBpZiAoZW1vamlFeHRlbmRlZCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBlbW9qaVxuICAgIH1cblxuICAgIHByZWZpeCA9IGVtb2ppRXh0ZW5kZWQuY2NfcHJlZml4XG5cbiAgICAvLyBUQkQ6IHNjb3BlID0gZW1vamlFeHRlbmRlZC5jY19wcmVmaXhcbiAgICAvLyBwcmVmaXgoc2NvcGUpOiBlbW9qaVxuXG4gICAgcHJlZml4ID0gZW1vamlFeHRlbmRlZC5jY19wcmVmaXhcblxuICAgIGlmIChwcmVmaXggPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZW1vamlcbiAgICB9XG5cbiAgICB0aXRsZVByZWZpeCA9IGAke3ByZWZpeH0oJHtlbW9qaX0pOmBcblxuICAgIHJldHVybiB0aXRsZVByZWZpeFxufVxuIl19