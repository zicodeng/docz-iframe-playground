(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./test/MyComponent.css":function(e,t,n){e.exports={container:"MyComponent_container__3PeWJ"}},"./test/MyComponent.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),i=n("./node_modules/@mdx-js/tag/dist/index.js"),a=n("./node_modules/docz/dist/index.m.js"),c=n("./test/MyComponent.css"),u=n.n(c),s=function(e){var t=e.text;return r.a.createElement("div",{className:u.a.container},r.a.createElement("h2",null,t),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa reprehenderit porro fuga, quas aliquid quia. Labore nostrum autem temporibus odio corporis, tenetur accusamus rem velit voluptatem eligendi assumenda quaerat illo?"),r.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto obcaecati, reprehenderit sit rerum vel accusantium necessitatibus. Iure, fuga dolorum et cumque dicta nulla ducimus est numquam praesentium, dolorem debitis esse? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat impedit ea, architecto ullam inventore aperiam neque earum alias error excepturi illo dolorum asperiores perspiciatis reiciendis ipsa aliquid nobis molestiae facere!"),r.a.createElement("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod consectetur repudiandae accusantium dolor atque fuga odio, animi, natus asperiores sapiente sint. Suscipit consectetur eveniet reprehenderit non ipsa quia, voluptatum quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vitae, itaque laudantium et aliquid voluptates obcaecati quis repellat nulla quia, officiis ut, iusto ab molestiae quae? Fugiat obcaecati laborum assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis debitis cum ipsam ducimus nobis nihil consectetur? Ea, dolor assumenda! Nulla voluptatem quod hic eum consequatur, exercitationem cum error obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sapiente incidunt perspiciatis quasi ex amet a aliquam dolorem laborum asperiores provident nulla, repudiandae eos sint dignissimos maiores exercitationem consectetur nesciunt."))},m=s;s.__docgenInfo={description:"",methods:[],displayName:"MyComponent",props:{text:{type:{name:"string"},required:!1,description:""}}};var l=n("./node_modules/react-dom/index.js"),A=n.n(l);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){g(e,t,n[t])})}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(n=y(this,(e=w(t)).call.apply(e,[this].concat(i)))).ref=r.a.createRef(),n.state={container:null,height:0},n.copyStyles=function(e){Array.from(document.getElementsByTagName("link")).forEach(function(t){"stylesheet"===t.rel&&e.contentDocument.head.appendChild(t.cloneNode(!0))}),Array.from(document.head.getElementsByTagName("style")).forEach(function(t){e.contentDocument.head.appendChild(t.cloneNode(!0))})},n.updateHeight=function(e){var t=Array.from(e.contentDocument.body.childNodes).reduce(function(e,t){return e+t.offsetHeight},0);n.setState({height:t})},n.handleLoad=function(){var e=n.ref.current;e&&e.contentDocument&&e.contentDocument.body&&(n.setState({container:e.contentDocument.body}),n.copyStyles(e),n.updateHeight(e))},n}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.style,o=this.state,i=o.container,a=o.height,c=this.ref.current;return r.a.createElement("iframe",{sandbox:"allow-same-origin",ref:this.ref,srcDoc:"<!DOCTYPE html>",style:d({height:a,width:"100%",border:"none"},n)},i&&c&&c.contentDocument&&A.a.createPortal(t,i))}},{key:"componentDidMount",value:function(){var e=this.ref.current;e&&e.addEventListener("load",this.handleLoad)}}])&&f(n.prototype,o),i&&f(n,i),t}(),C=b;function E(e){return(E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function D(e,t){return!t||"object"!==E(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}b.__docgenInfo={description:"",methods:[{name:"copyStyles",docblock:"Because <iframe> serves content in an isolated browsing context (document environment),\nStyles in parent browsing context will not be available to <iframe> content,\nwe need to manually copy styles from parent browsing context to <iframe> browsing context",modifiers:[],params:[{name:"iFrameNode"}],returns:null,description:"Because <iframe> serves content in an isolated browsing context (document environment),\nStyles in parent browsing context will not be available to <iframe> content,\nwe need to manually copy styles from parent browsing context to <iframe> browsing context"},{name:"updateHeight",docblock:null,modifiers:[],params:[{name:"iFrameNode",type:null}],returns:null},{name:"handleLoad",docblock:null,modifiers:[],params:[],returns:null}],displayName:"IFramePlayground"},n.d(t,"default",function(){return S});var S=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=D(this,Q(t).call(this,e))).layout=null,n}var n,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=B(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:t},r.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"mycomponent-demo"}},"MyComponent Demo"),r.a.createElement(a.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDCEQAOlAQXYAlGAENyFsEKLsA5ANv2XAbl6ojp8ysPAgARAHkAWXZHSmc3YIBadFjvX19yKBs4OHYASQAxARsiGAAFTIBPAHMhAFcMdmxaDBzrOwIcAGFY01R9dmBfdnZ3MHZuIPaccncbWmswAAoASi92SUl2RghHYpgxEZgwIfY4AjmYcYGT4d1ztBgBRHZUWqgoRXXNu5sHgXYAO4QAh4NCA0HkPDsEGXWpwR7sO79OB4ShvdDsABGl3cGEeMHQN3YeBgECqhGeAAZPhtOLsSsTSeTRKhhvIfKgTpIAFTcm7c9gAIRg5BscMu23p-1Oj1Y8ER1GaFjBNlZEDglEytAxmKEALgaCqCr0WAsi2S5FqJRojVQrAgQlQ1oIy0U_PYAGUCBVYDkwcYbLiLLrKPrDcbaKbAdAoC8RFjLjZWL9MpjYNDKFsdkUSgckTQ3azhgKAZc-gSM-wiKrajZ3hUFcYG2cffKYs4A0GsXqDagjUiowRM5Kc9KQ2G-xGmvzJCcqE2va2chMIIU9gA5SiYcYHQZF4a07pNrZQNAAawOMFgzrgRN0Z3Yp9QZ-X7AAggIihUcO3zZRLc6OBVDABAAKLXvocCChUAAqNhVOueyLC4T5ni4yyrESqFwD-ZigXYeCLKhO7XPuwx0uwRHnjg7ixtw9GuC2vokiB6GkeRHGcGuJSbpg0yKvoIT_la-j4LY6A4DYxjGHQ6CdKCUDoFRz7TFA1AwLxMCLAQAi1DAGEcpx7DyES8iYZyZGHpQx6MEx0pXjAN53tQD52a-H5fj-Th_gBokkjYEnAWBEE0FBsHwYhJTIXZ6HmRxbm4QI-GQosdkkXuRmrqOmn8XoNBCb5NBiQFknSbJ8nQEpdmqepmnabp-lxeRZmGcZHInLUxjoBcAASTKEFcWUblulzcLuzmoA-kKVbiVweTY36_kNPEjblSoFSJRWYlu37TYpmlwE1twuRYJJkgNEx7eguI0QStTkFpRLDIsxjuKwABqdafFdywka9MAfXW7AANSIgpEmUGAYDwgQfXnQQhZGdSRJHdCoI4TDXoXIsGWcWdzKI81TXsmkRZ4Kq6CwAAMpQAVXCs6UTQ-y0aSNVwguqt1gNMtSfvorXDDslFPVx2VswAZOLIsszl-ahMJzrsJL0vcazfFyxtgHbegFQo-xnEcxjIFY7QOMi8dNC_H0Tyi8N6sCflCuidrFSExxLUi4b_ELt6vqLDLI2o8MXudd1tBw8y_uq5pqMmUWJMWcMuKYAIDO4xbD7AGDM10J8aXyOz6M4K91lwALxqZxGVuPJ8-MDQXExe2cFzl_eyrR2zjdF6MPN8zQ5fuAQvOsosIsjns5unBT21YHwIB1mpAIJHAewJGYZJoPwk-jNwwBe6McdGcMcACOQBW7y4jAAIThJ0MEAJqlKBxLEFAYguIfR92bv6dH3XCOT2GECdAIJnguAAIyUkpAAUhcG7I-20BApzAagdScDAHsBwFguy8D3afw4mISewAfh_CVlLMimUO7bmVhQziAd7Z5XloVCwNCj7kTaPYcIERpizFoKUMw5woCLCurib6ipq4CGWPg8iUhsx7EIWRYmpNjomHUvlLgEQ0Q0DTkzduYttxd05j3S0fcCDlyFlHfR-l9YcXoTASS6B0CgTlDQKm6pmiPGQmpAKcC0ac3JhgamtN0CxxOHHOOvhsABAsJgMAYooAWAKKOcoC0ahaPQByBQyhsDFGMLAHAmgyA6AdgYRAKhVGBAiBUboqi-g2nbK4HAkhaBnEkFUmpvR9CpD8BUxJqsUnVDqA0BpLgmmqGwN0_wAjJj2GiE4VwsxPC-CmYELOmgsDGTmbEVwAABRyIgIDUEkFQdwLhSZt3YBaAAXouX0VxcbVgEFUNAYDKTsAAMzGCwOgosAZHGGjAQAFi-ewAAbF8n5wwwCKnyMUaAFQwH8A9GiU-lxujblKEIfgnwiDUEoHAAMD1IXREVB6CAVyYDPHAYCwsETUAXLfNJemWcRF0GMr9MawsizMDYKcX2MBd7XNufAeQCiOLEPBrNSW0IKgyUhtnRSs16ITBcGAeo9hDmoBcOwAA_Aq66dAGbPFZagT-UgZAKOWKTKJ0zYnxLNByg4o9uWMuMGKmRHCOhriqM6d1HFGDtJ6GoiwkYCBz03BYAAqr2I0SS9gDLSfUQkIB1h-pkXGkoCahnoDTf6wNtT-ihrntG8MGayiVETRgfgqax6SDLVm9JaapCepwN631JwpCustb4LJIAWkEDadUoNdSOjrKKXLQwvSZkOHmfEdokyp2YusjBWVbZZ0l2MAkb0Mk4DdOWVOtyWy4hNPzZ0oq5Bsh7vpSddgp7g3MuhE0dlJFnXDB5RwDIWQ4CRQFcABKJDraiqJIwPAAAmMQe8mjyCkGBptbqRY03cM4CAxg4BWkuZqMwpxgTsD2AjCuIpaBD3-AFFD6oIDkHDFeYEOB2CdDeAGEW7h_okjxAIHDAQhDRFqFUGwnwACOtYch1ggIJrg7AxM2Fo1TGwiCyz4p0uhsUtAiCe0cgECAmI4TsC3IchUAgNNwE-B44juHyCWhXkQbTSH2BylPBYVgmpOrnBU40U8wEMAQBFl-za3UJO1keHMTg7xKA6uA5IeDZFGCRaMohxynwUNoecMkNS_wDQWDwwR-wIFea4ZYMYcjlHJzUY6O-U-oJaD2EoCLSgmJRQijmBAT4zH3CsZTjh9LhxdLODs2ZizqoCAQHQ30B62RgSNa0zhPIvMYC4O47xjDqX0MgURFaQTlwWD2BsC8N4mRLn3SMNp-AFhXhEEE8Udgr0bDwH0ENogc2UtmEcpcmAmJgTqkaNkGAeq4vIdQ-hx7aXgSfEy_eQjOWSP5cK4aEWJXaMpIekF_wBIcO2BB-V4EhHMy7Yu2gFxQ53C4Zkuxi7fR1uNEDFabzp4siNE_Fh7AD1jDEYgMFtSi2zBKYJY8Q57gcjE4JRRiAjWcjuCF7JD7iWbDU9E7UcTqC3s5Fxb6Qb13oh2HxFfcLMWZE644r9zg_3kuYYEHnHDoOXLg9M6RgrBoitGjh-wAAirULcWWiO8yYzAYwtQWAUzV3YfrNA7sc5IwQcnaqFu6coCDnpTWXhzG01kYnvP4AixXgV_QlxeylY9HCSjBWLBg-y6ZgGdAIArZazANrPOTvUENyvfzwu5uOagM5xPzhztwCvuwA3iWAcm-wxlkoRfLcl9yzb6HxX7M4BFi79U52evjdm5wc45PMi-4GyHlbImxMYlb-3lpOm6vXdFINpvt5aHMavFqHb7xtuSc-JDSAlGPu1Hw0Ns4mZZNVk1Md4Xlw52327A-QPGwuLIRktW9WZ-rOqYnOzgPm1o3UPefeRuoeQ-uGI-7uEO3mUOduVGM-vesmT2hw4unmOQmAb2g2OQAEDeF26AB2VmOQCuH2fgCkIsxeHuAgeq-EnwgOuG2QvmNgPe64OOtmTmzOFwneruGIEIjQVOtCYO52xGnw2AjwlGLmmqz2tBjwQg_wUBp-jW0mT2f2SW6B6W3mWBnBEOeWZG-B0-NG7AiEQ8OQGeFeegnA9KXA9QFgAuBWlGIuIsXerO2AmBO-uGp4i-oez2cB3WAhKeT2_OQg9omANorw9-c2zGvuwuGAauMA-K2GNoLAVQfgY2uKSuvwiRjQWA6h42g26kzg1hxGIsfQcAlGPhs-UWEW7q5qbAlq7UqAd6I6xcQgxgK6O69yJwoazwS6Yxq6GMOkhotKAxNqgQdqbwFgQx_MPaSgfax2g6HSwa0w2Q46JSDAa0Ei-s_8zwoGUCXyrUVAqWzwAIFWMArUmIdgZ4la6ACQjxZgzw7gGSJwLABKlQzwYAsAWArUEJ2ASQDohGmqxqTmRAqArUImJRCQmORAcAxqWeAgrUjyzyqAzwAArJSCCpSK1H8iwH2DceSVCScIgsguwLcSChqKeDqJkOQGeK1JQHKAIBCaGM8MppQByHSjsiUH7jpqgFAM2DMDAGyhTJRNWFgAkMAiCOwFSrcfSb9LjBcaQr_B8dyd8b8Sbs8BUDfqGK1OEqTBKSjtttQLKacPKYqQ0IsCqWqVwBqc8AAJw-mgZfK6knD6nWw2JYifEml_E2xph6TWm-DimSnC7SlOltHuCukYjuk2CqnqlQjPAADsoKAAHIGfrCGQiIaRGdmqaU8ewDUAqaiWEvGbaYmQ6TKXKWmayEqZmdmV6bmewICoWTqaWQBuWUSEaV8VWVGc8GYKqMBHGaas2facme2fWbhm6R6TmZqR8qyVgEGUWGWf8BWcaZOWaZduePOfIL2oSmePBPYpoNQKcYwgwLjPwKgBPEgOwPwFQJgCvBgDPI8AkDkiYLANiicPwPyQaNQPwM8PwJSDgHBZSKBUWPwD-TMChvUZyB-fwG-NhsBZcEBXkhtt7mpBaRiHCOGIsgQKaT-dPJQDUQIEhcMPwNWJvFhSoHiBoLeCAITChd7rJHQJRmnh-b_PwJRdBZ-SAAAHrgKgo4CFk4CgqMXkT8AbpbrzHiX8DSUkk4B5k4CgZKVMWCCJDJCqZsXSWyXyWKUgCNmmq9q_noAzy5SQBVAFIaioCPlKjPn8AqZ5IXDQVfm8IwAJCUUJBSTGD8CXnyBRVAA",__position:0,__code:'<MyComponent text="Not Using IFramePlayground" />\n<IFramePlayground>\n  <MyComponent text="Using IFramePlayground" />\n</IFramePlayground>',__scope:{props:this?this.props:n,MyComponent:m,IFramePlayground:C}},r.a.createElement(m,{text:"Not Using IFramePlayground"}),r.a.createElement(C,null,r.a.createElement(m,{text:"Using IFramePlayground"}))),r.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"mycomponent-props"}},"MyComponent Props"),r.a.createElement(a.f,{of:m}))}}])&&O(n.prototype,o),c&&O(n,c),t}();S.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=test-my-component.6d18048570bfccd4f4e1.js.map