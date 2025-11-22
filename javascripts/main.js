function selectTab(id) {
    const tabNodes = document.getElementsByClassName('tab')
    for (var i = 0; i < tabNodes.length; i++) {
        const t = tabNodes[i]
        if (t.id === id) {
            t.classList.add('selected-tab')
        } else {
            t.classList.remove('selected-tab')
        }
    }

    const tabNameMatches = id.match(/^tab-(.+)$/)
    if (!tabNameMatches) {
        console.error(`tab node id does not match expected format: ${id}`)
        return
    }
    const tabName = tabNameMatches[1]
    const selectedTabContentId = `tab-content-${tabName}`
    const tabContentNodes = document.getElementsByClassName('tab-content')
    for (var i = 0; i < tabContentNodes.length; i++) {
        const t = tabContentNodes[i]
        if (t.id === selectedTabContentId) {
            t.classList.add('selected-tab-content')
        } else {
            t.classList.remove('selected-tab-content')
        }
    }
}

const descriptions = [
    'Si quaeris paginam amoenam, circumspice',
    'Bits, bytes, and nibbles',
    'Lock-free since \'93',
    'Like AGI: painfully self-aware',
    'Software architecture in the Brutalist style',
    'Consolas? Are you fucking kidding me?'
]

function randomDescription() {
    var idx = Math.floor(Math.random() * descriptions.length)
    return descriptions[idx]
}

window.onload = () => {
    const allTabs = document.getElementsByClassName('tab');
    if (!allTabs) {
        console.warn('no tabs found')
    } else {
        selectTab(allTabs[0].id)
    }

    document.getElementById('project_tagline').innerText = randomDescription()
}