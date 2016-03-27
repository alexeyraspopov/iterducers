function* map(iter, morphism) {
	for (var a of iter)
		yield morphism(a);
}

function* filter(iter, predicate) {
	for (var a of iter)
		if (predicate(a))
			yield a;
}

function reduce(iter, reducer, acc) {
	for (var a of iter)
		acc = reducer(acc, a);

	return acc;
}
