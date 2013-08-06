all:
	tsc src/*.ts
	tsc test/*.ts

clean:
	rm -f src/*.js test/*.js
