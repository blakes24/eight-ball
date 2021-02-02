function choice(items) {
	const rand = Math.floor(Math.random() * items.length);
	return items[rand];
}

export { choice };
