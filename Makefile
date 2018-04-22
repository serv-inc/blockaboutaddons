NAME=blockaboutaddons

zip: clean lint
	cd addon; zip ../${NAME}.zip *

lint:
	jshint addon/*.js
	python -m json.tool addon/manifest.json > /dev/null
	tidy -eq addon/blockpage.html

clean:
	rm ${NAME}.zip
