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

window.onload = () => {
    const allTabs = document.getElementsByClassName('tab');
    if (!allTabs) {
        console.warn('no tabs found')
    } else {
        selectTab(allTabs[0].id)
    }
}