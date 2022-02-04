function replaceText(selector: string, text: string) {
	const element = document.getElementById(selector)
	if (element) element.innerText = text
}

window.addEventListener('DOMContentLoaded', () => {
	for (const depedency of ['chrome', 'node', 'electron']) {
		const depedencyVersion = process.versions[depedency]
		if (depedencyVersion)
			replaceText(`${depedency}-version`, depedencyVersion)
	}
})
