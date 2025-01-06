export function getSelectedNode(parent: any) {
	for (const child of parent.children) {
		if (child.getAttribute('aria-selected') === 'true') {
			return child
		}
	}
	return null
}
