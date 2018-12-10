const getPreviousKey = (currentKey, allNodes) => allNodes.length < 2 ? currentKey : allNodes[currentKey].previous;
const getNextKey = (currentKey, allNodes) => allNodes.length < 2 ? currentKey : allNodes[currentKey].next;

const modifyNodes = (currentKey, allNodes, offset, mode, newKey = null, newValue = newKey) => {
	if (!['insert', 'delete', 'replace'].includes(mode)) {
		return;
	}

	if (allNodes.length > 0) {
		if (offset !== 0) {
			const moveFunction = offset > 0 ? getNextKey : getPreviousKey;
			const absoluteOffset = Math.abs(offset);
			for (let i = 0 ; i < absoluteOffset ; i++) {
				currentKey = moveFunction(currentKey, allNodes);
			}
		}
	}

	if (mode === 'insert')
		insertNode(newKey, newValue, allNodes, currentKey);
	else if (mode === 'delete')
		return deleteNode(currentKey, allNodes);
	else if (mode === 'replace')
		console.log('replace');
};

const insertNode = (keyToInsert, valueToInsert, allNodes, keyBeforeInsert) => {
	const keyAfterInsert = getNextKey(keyBeforeInsert, allNodes);
	allNodes[keyToInsert] = { value: valueToInsert, next: keyAfterInsert, previous: keyBeforeInsert };
	allNodes[keyBeforeInsert].next = keyToInsert;
	allNodes[keyAfterInsert].previous = keyToInsert;
};

const deleteNode = (keyToDelete, allNodes) => {
	const keyBeforeDelete = getPreviousKey(keyToDelete, allNodes);
	const keyAfterDelete = getNextKey(keyToDelete, allNodes);

	delete allNodes[keyToDelete];

	allNodes[keyBeforeDelete].next = keyAfterDelete;
	allNodes[keyAfterDelete].previous = keyBeforeDelete;

	return { deletedKey: keyToDelete, keyAfterDelete, keyBeforeDelete };
};

module.exports = {
	modifyNodes
};