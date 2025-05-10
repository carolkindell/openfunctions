# Learnings (2025-05-10)

- Tried `openfunctions.json` for https://github.com/janwilmake/dorm and https://github.com/janwilmake/remote-sql-cursor
- Incase of `dorm`, when the src is 3200 tokens, openfunctions.json is 2600 tokens, openfunctions.yaml is 1600, and d.ts is 600 tokens. `.d.ts` is actually very information-dense and easy to read for LLMs since it should have only the public apis but not the implementation.
- even though many packages have `.d.ts`, the problem with `.d.ts` is that it's not always done in the same way and there are many locations where the IDE might resolve the `.d.ts` from, sometimes even separate package (@types/xxx) or any other `.d.ts` file somewhere in the repo.
- the `openfunctions` standard would stand out for explorability, the fact that it's language agnostic, the fact that it includes examples/docs by desgin, and it's very easy to work with since it's a static structured datafile. It may not be smaller, but it may become more information dense if we only provide the information that we actually need.
