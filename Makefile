develop:
	@component install --dev

test:
	@component test-build
	@component karma-run
