import warn from './utils/warn'

const Snippets = {
  tags({ id }) {
    if (!id) warn('CarrotQuest Id is required')

    const script = `
      !function(){function t(t,e){return function(){window.carrotquestasync.push(t,arguments)}}
        if("undefined"==typeof carrotquest){var e=document.createElement("script")
        e.type="text/javascript",e.async=!0,e.src="//cdn.carrotquest.io/api.min.js",document.getElementsByTagName("head")[0].appendChild(e),
        window.carrotquest={},window.carrotquestasync=[],carrotquest.settings={};
        for(var n=["connect","track","identify","auth","oth","onReady","addCallback","removeCallback","trackMessageInteraction"],a=0;a<n.length;a++)carrotquest[n[a]]=t(n[a])}
      }(),carrotquest.connect("${id}");`

    return {
      script,
    }
  },
}

module.exports = Snippets
